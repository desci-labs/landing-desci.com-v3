import { NextResponse } from "next/server";
import { getIndexedCount } from "@/lib/indexed-count";

// This route reads a live (private) database, so it must run on the Node.js
// runtime and never be statically optimized.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const result = await getIndexedCount();
  const ttl = Number(process.env.INDEXED_COUNT_TTL_SECONDS || 20);

  return NextResponse.json(result, {
    headers: {
      // Allow a CDN to serve a slightly-stale value while revalidating, so the
      // origin DB is hit at most a few times per minute under heavy traffic.
      "Cache-Control": `public, max-age=0, s-maxage=${ttl}, stale-while-revalidate=${ttl * 3}`,
    },
  });
}
