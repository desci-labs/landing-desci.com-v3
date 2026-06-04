"use client";

import React from "react";
import Odometer from "./Odometer";

interface CountPayload {
  count: number;
  ratePerSecond: number;
  asOf: string;
  source: "postgres" | "elasticsearch" | "estimate";
  estimated: boolean;
}

interface LiveRecordCounterProps {
  endpoint?: string;
  /** How often to re-poll the live count (ms). */
  pollIntervalMs?: number;
  className?: string;
}

// Exponential-smoothing time constant: how quickly the display catches up to a
// freshly-polled value. Smaller = snappier, larger = smoother.
const TAU_SECONDS = 0.7;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

export default function LiveRecordCounter({
  endpoint = "/api/indexed-count",
  pollIntervalMs = 15000,
  className,
}: LiveRecordCounterProps) {
  const reducedMotion = usePrefersReducedMotion();

  const dataRef = React.useRef<CountPayload | null>(null);
  const displayRef = React.useRef<number>(0);
  const lastFrameRef = React.useRef<number>(0);
  const startedRef = React.useRef<boolean>(false);

  const [display, setDisplay] = React.useState<number>(0);
  const [ready, setReady] = React.useState(false);
  const [meta, setMeta] = React.useState<{
    estimated: boolean;
    rate: number;
  }>({ estimated: true, rate: 0 });

  // The continuously-updated interpolation target.
  const desired = React.useCallback((now: number): number => {
    const d = dataRef.current;
    if (!d) return displayRef.current;
    const asOfMs = Date.parse(d.asOf);
    const elapsedSec = Number.isFinite(asOfMs)
      ? Math.max(0, (now - asOfMs) / 1000)
      : 0;
    return d.count + d.ratePerSecond * elapsedSec;
  }, []);

  // --- polling ---
  React.useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch(endpoint, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const payload = (await res.json()) as CountPayload;
        if (cancelled) return;
        dataRef.current = payload;
        setMeta({ estimated: payload.estimated, rate: payload.ratePerSecond });
        if (!startedRef.current) {
          // Start exactly at the first real value, then interpolate upward.
          displayRef.current = payload.count;
          startedRef.current = true;
          setReady(true);
        }
      } catch {
        // Keep interpolating from the last known value on transient failures.
      }
    }

    poll();
    const id = window.setInterval(poll, pollIntervalMs);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [endpoint, pollIntervalMs]);

  // --- animation loop ---
  React.useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      const last = lastFrameRef.current || now;
      const dt = Math.min(0.25, (now - last) / 1000); // clamp long gaps
      lastFrameRef.current = now;

      // Never let the number run backward.
      const target = Math.max(displayRef.current, desired(now));

      if (reducedMotion) {
        displayRef.current = target;
      } else {
        const alpha = 1 - Math.exp(-dt / TAU_SECONDS);
        displayRef.current += (target - displayRef.current) * alpha;
        // Guarantee forward motion so the reel always "scrolls" even when the
        // smoothing term is vanishingly small near the target.
        const minStep = (dataRef.current?.ratePerSecond ?? 0) * dt;
        if (minStep > 0 && target - displayRef.current > 0) {
          displayRef.current = Math.min(target, displayRef.current + minStep);
        }
      }

      setDisplay(displayRef.current);
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [desired, reducedMotion]);

  const rounded = Math.floor(display);
  const exact = rounded.toLocaleString("en-US");

  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="live-dot" aria-hidden="true" />
        <span className="text-xs uppercase tracking-widest text-dark-11 font-medium">
          {meta.estimated ? "Live estimate" : "Live from the index"}
        </span>
      </div>

      <div
        className="text-dark-12 font-extrabold tracking-tight text-5xl sm:text-7xl lg:text-8xl font-display flex justify-center"
        role="img"
        aria-label={`${exact} research records indexed`}
      >
        {ready ? (
          <Odometer
            value={display}
            minIntegerDigits={9}
            reducedMotion={reducedMotion}
          />
        ) : (
          <span className="odometer opacity-40">000,000,000</span>
        )}
      </div>

      {/* Exact value for screen readers and copy/paste. */}
      <span className="sr-only">{exact} records indexed</span>
    </div>
  );
}
