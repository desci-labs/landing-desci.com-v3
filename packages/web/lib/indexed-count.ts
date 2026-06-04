/**
 * Server-side resolver for the live "indexed records" count.
 *
 * Source priority:
 *   1. Postgres  — exact COUNT(*) from the indexing DB (ml-novelty-batch-openalex).
 *   2. Elasticsearch — sum of the open + closed index doc counts.
 *   3. Estimate  — baseline + growth rate (used when no DB is configured).
 *
 * The result also carries a `ratePerSecond` so the client can smoothly
 * interpolate the number upward between polls. The rate is measured from two
 * successive live samples when possible, otherwise it falls back to the
 * configured INDEXED_RECORDS_PER_SECOND.
 */

export type CountSource = "postgres" | "elasticsearch" | "estimate";

export interface IndexedCountResult {
  /** The precise count at `asOf` (or the estimated count in estimate mode). */
  count: number;
  /** Records added per second, used for client-side interpolation. */
  ratePerSecond: number;
  /** ISO timestamp the `count` is accurate as of. */
  asOf: string;
  /** Where the number came from. */
  source: CountSource;
  /** True when the number is a modelled estimate rather than a live DB read. */
  estimated: boolean;
}

interface Sample {
  count: number;
  at: number; // epoch ms
}

// Module-level cache survives across requests in a warm server instance.
const cache: {
  last?: Sample; // most recent live (DB) sample, for rate measurement
  cached?: { result: IndexedCountResult; expires: number };
  inFlight?: Promise<IndexedCountResult>;
} = {};

function num(name: string, fallback: number): number {
  const raw = process.env[name];
  if (raw == null || raw === "") return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function configuredRate(): number {
  return num("INDEXED_RECORDS_PER_SECOND", 4.2);
}

/** Measure rate from the previous live sample; fall back to the configured rate. */
function deriveRate(prev: Sample | undefined, current: Sample): number {
  if (prev && current.at > prev.at && current.count >= prev.count) {
    const perSec = (current.count - prev.count) / ((current.at - prev.at) / 1000);
    // Only trust a measured rate that is positive and not absurd.
    if (perSec > 0 && perSec < 1_000_000) return perSec;
  }
  return configuredRate();
}

async function queryPostgres(): Promise<number | null> {
  if (!process.env.PG_HOST) return null;

  // Lazy-load so the dependency is never bundled into client code.
  const { Client } = await import("pg");

  const sslEnv = (process.env.PG_SSL || "").toLowerCase();
  const ssl =
    sslEnv === "true" || sslEnv === "require" || sslEnv === "1"
      ? { rejectUnauthorized: false }
      : undefined;

  const client = new Client({
    host: process.env.PG_HOST,
    port: num("PG_PORT", 5432),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl,
    connectionTimeoutMillis: 8000,
    statement_timeout: 8000,
  });

  const query =
    process.env.INDEXED_COUNT_QUERY ||
    "SELECT COUNT(*)::bigint AS count FROM openalex.works_batch";

  try {
    await client.connect();
    const res = await client.query(query);
    const row = res.rows?.[0] ?? {};
    const value = row.count ?? row.count_big ?? Object.values(row)[0];
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  } finally {
    await client.end().catch(() => undefined);
  }
}

async function queryElasticsearch(): Promise<number | null> {
  const base = process.env.ES_URL;
  if (!base) return null;

  const indices = [process.env.ES_OPEN_INDEX, process.env.ES_CLOSED_INDEX]
    .filter((v): v is string => Boolean(v && v.trim()))
    .flatMap((v) => v.split(",").map((s) => s.trim()).filter(Boolean));

  if (indices.length === 0) return null;

  const headers: Record<string, string> = { "content-type": "application/json" };
  if (process.env.ES_USERNAME) {
    const token = Buffer.from(
      `${process.env.ES_USERNAME}:${process.env.ES_PASSWORD ?? ""}`,
    ).toString("base64");
    headers.authorization = `Basic ${token}`;
  }

  let total = 0;
  for (const index of indices) {
    const url = `${base.replace(/\/$/, "")}/${encodeURIComponent(index)}/_count`;
    const res = await fetch(url, {
      headers,
      // Never cache at the fetch layer; we manage caching ourselves.
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Elasticsearch _count failed for ${index}: ${res.status}`);
    }
    const body = (await res.json()) as { count?: number };
    total += Number(body.count ?? 0);
  }
  return Number.isFinite(total) ? total : null;
}

function estimate(now: number): IndexedCountResult {
  const baseline = num("INDEXED_COUNT_BASELINE", 248_000_000);
  const baselineAtIso =
    process.env.INDEXED_COUNT_BASELINE_AT || "2026-06-01T00:00:00Z";
  const baselineAt = Date.parse(baselineAtIso);
  const rate = configuredRate();
  const elapsedSec = Number.isFinite(baselineAt)
    ? Math.max(0, (now - baselineAt) / 1000)
    : 0;
  const count = Math.floor(baseline + rate * elapsedSec);
  return {
    count,
    ratePerSecond: rate,
    // Report "asOf = now" so the client interpolates forward from here.
    asOf: new Date(now).toISOString(),
    source: "estimate",
    estimated: true,
  };
}

async function resolve(): Promise<IndexedCountResult> {
  const now = Date.now();

  // Try live sources, but degrade gracefully to the estimate on any failure.
  try {
    const pg = await queryPostgres();
    if (pg != null) {
      const sample: Sample = { count: pg, at: now };
      const rate = deriveRate(cache.last, sample);
      cache.last = sample;
      return {
        count: pg,
        ratePerSecond: rate,
        asOf: new Date(now).toISOString(),
        source: "postgres",
        estimated: false,
      };
    }
  } catch (err) {
    console.error("[indexed-count] postgres error:", err);
  }

  try {
    const es = await queryElasticsearch();
    if (es != null) {
      const sample: Sample = { count: es, at: now };
      const rate = deriveRate(cache.last, sample);
      cache.last = sample;
      return {
        count: es,
        ratePerSecond: rate,
        asOf: new Date(now).toISOString(),
        source: "elasticsearch",
        estimated: false,
      };
    }
  } catch (err) {
    console.error("[indexed-count] elasticsearch error:", err);
  }

  return estimate(now);
}

/** Cached entry point used by the route handler. */
export async function getIndexedCount(): Promise<IndexedCountResult> {
  const ttlMs = num("INDEXED_COUNT_TTL_SECONDS", 20) * 1000;
  const now = Date.now();

  if (cache.cached && cache.cached.expires > now) {
    return cache.cached.result;
  }
  // Collapse concurrent requests onto a single DB read.
  if (!cache.inFlight) {
    cache.inFlight = resolve()
      .then((result) => {
        cache.cached = { result, expires: Date.now() + ttlMs };
        return result;
      })
      .finally(() => {
        cache.inFlight = undefined;
      });
  }
  return cache.inFlight;
}
