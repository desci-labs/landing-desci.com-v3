# landing-desci.com

The desci.com marketing site.

- **Root** — the current site, built with [Astro](https://astro.build/).
- **[`packages/web`](./packages/web)** — a Next.js (App Router) recreation of the
  same site, adding a **live, real-time counter of indexed research records**
  that smoothly scrolls upward (sourced from the indexing database via a
  serverless API route, with graceful estimate fallback).

This is an npm workspace. `npm install` at the root installs both.

```bash
npm run dev --workspace=@desci/web   # run the Next.js site
```

To deploy the Next.js site on Vercel, create a project for this repo and set
**Root Directory = `packages/web`** (it does not disturb any existing root
deployment). See [`packages/web/README.md`](./packages/web/README.md) for full
details and environment configuration.
