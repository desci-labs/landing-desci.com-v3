"use client";

import React from "react";

const REEL_CELLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function smoothstep(t: number): number {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

/**
 * Continuous wheel position (0..10) for the digit at 10^place.
 *
 * - The ones wheel (place 0) rolls continuously, so the counter always looks
 *   alive as records stream in.
 * - Higher wheels stay crisply centered on their digit and only roll during the
 *   final 10% of the wheel below them — i.e. real mechanical-odometer behaviour,
 *   which keeps the big number readable while still feeling smooth.
 */
function wheelPosition(value: number, place: number): number {
  if (place === 0) {
    return value % 10;
  }
  const p10 = Math.pow(10, place);
  const digit = Math.floor(value / p10) % 10;
  const lowerFrac = (value % p10) / p10; // 0..1
  const nudge = lowerFrac <= 0.9 ? 0 : smoothstep((lowerFrac - 0.9) / 0.1);
  return digit + nudge;
}

interface Token {
  type: "digit" | "sep";
  place: number;
  sep?: string;
}

function buildTokens(
  value: number,
  minIntegerDigits: number,
  groupSize: number,
  separator: string,
): Token[] {
  const whole = Math.floor(Math.max(0, value));
  const digitCount = Math.max(String(whole).length, minIntegerDigits);
  const tokens: Token[] = [];
  for (let i = digitCount - 1; i >= 0; i--) {
    tokens.push({ type: "digit", place: i });
    // Insert a group separator after this digit (but not after the last one).
    if (i > 0 && groupSize > 0 && i % groupSize === 0) {
      tokens.push({ type: "sep", place: i, sep: separator });
    }
  }
  return tokens;
}

export interface OdometerProps {
  value: number;
  /** Minimum number of integer digits to render (stabilises width). */
  minIntegerDigits?: number;
  /** Digits per group between separators. 0 disables grouping. */
  groupSize?: number;
  separator?: string;
  className?: string;
  /** Disable rolling (used when the user prefers reduced motion). */
  reducedMotion?: boolean;
}

function Odometer({
  value,
  minIntegerDigits = 1,
  groupSize = 3,
  separator = ",",
  className,
  reducedMotion = false,
}: OdometerProps) {
  const safe = Number.isFinite(value) ? Math.max(0, value) : 0;
  const tokens = buildTokens(safe, minIntegerDigits, groupSize, separator);

  return (
    <span className={`odometer ${className ?? ""}`.trim()} aria-hidden="true">
      {tokens.map((token, idx) => {
        if (token.type === "sep") {
          return (
            <span key={`s-${idx}`} className="odometer__sep">
              {token.sep}
            </span>
          );
        }
        const pos = reducedMotion
          ? Math.floor(safe / Math.pow(10, token.place)) % 10
          : wheelPosition(safe, token.place);
        return (
          <span key={`d-${token.place}`} className="odometer__digit">
            <span
              className="odometer__reel"
              style={{ transform: `translateY(${-pos}em)` }}
            >
              {REEL_CELLS.map((c, i) => (
                <span key={i} className="odometer__cell">
                  {c}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export default React.memo(Odometer);
