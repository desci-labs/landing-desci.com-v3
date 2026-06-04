# @desci/web

A Next.js (App Router) recreation of [desci.com](https://www.desci.com), rebuilt
from the existing Astro marketing site in this repo — **plus** a live, real-time
counter of the number of indexed research records that smoothly scrolls upward.

## What's here

```
packages/web
├─ app/
│  ├─ layout.tsx              # global <head>, fonts, ionicons, metadata
│  ├─ page.tsx                # home (/)
│  ├─ researchers/            # /researchers
│  ├─ journals/               # /journals
│  ├─ institutions/           # /institutions
│  ├─ contact/                # /contact
│  ├─ privacy/  terms/        # markdown legal pages
│  ├─ globals.css             # ported design tokens + odometer styles
│  └─ api/indexed-count/route.ts   # live count endpoint (Node runtime)
├─ components/                # React ports of every Astro section
│  ├─ LiveRecordCounter.tsx   # polls the API + interpolates between polls
│  └─ Odometer.tsx            # mechanical-style rolling digit reels
├─ lib/indexed-count.ts       # DB/ES query + rate logic (server only)
└─ content/                   # privacy.md / terms.md
```

All marketing pages are statically rendered. Only `/api/indexed-count` is
dynamic (it reads a private database), which is why this is a normal Next.js
deployment rather than a pure `output: 'export'` static export.

## The live "indexed records" counter

`LiveRecordCounter` polls `/api/indexed-count` every 15s and, between polls,
interpolates the value upward using the returned `ratePerSecond`, so the number
is *always* climbing smoothly (a real `requestAnimationFrame` animation, with an
odometer where the low digits roll continuously and higher digits snap — i.e.
it reads as a precise integer while still feeling alive). It respects
`prefers-reduced-motion`.

The API resolves the count from the first available source:

1. **Postgres** (preferred) — `SELECT COUNT(*) FROM openalex.works_batch`,
   matching the `ml-novelty-batch-openalex` indexing pipeline. Override the
   query with `INDEXED_COUNT_QUERY`.
2. **Elasticsearch** — sum of `_count` over the open + closed indices.
3. **Estimate** — `baseline + rate`, clearly flagged with `estimated: true`,
   so previews/local dev still animate when no DB is configured.

The endpoint measures the real growth `ratePerSecond` from successive live
samples (falling back to `INDEXED_RECORDS_PER_SECOND`) and caches results for
`INDEXED_COUNT_TTL_SECONDS` so the origin DB is hit at most a few times/minute.

See [`.env.example`](./.env.example) for all configuration. Copy it to
`.env.local` and fill in the DB credentials (the same secrets used by
`ml-novelty-batch-openalex`) to switch from estimate mode to live counts.

## Local development

```bash
# from the repo root (npm workspaces) …
npm install
npm run dev --workspace=@desci/web
# … or from this folder
cd packages/web && npm install && npm run dev
```

Then open http://localhost:3000.

## Deploying to Vercel

This package lives in a workspace, so point the Vercel project at it:

1. **Project → Settings → Build & Deployment → Root Directory = `packages/web`.**
   Vercel auto-detects Next.js; route handlers and previews work out of the box.
2. Add the environment variables from `.env.example` (at minimum the `PG_*`
   values) so the counter reads live data. With none set, it deploys fine and
   shows the estimate.
3. Every push to a branch then gets a working preview deployment.

> Tip: leave "Include source files outside of the Root Directory" enabled
> (default) so the npm workspace install resolves correctly.
