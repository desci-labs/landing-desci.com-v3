/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `pg` is a native-ish server dependency; keep it out of the bundler so the
  // /api/indexed-count route handler can `require` it at runtime.
  experimental: {
    serverComponentsExternalPackages: ["pg"],
  },
  // The marketing pages are fully static; only /api/indexed-count is dynamic.
  // We intentionally do NOT use `output: 'export'` because the live counter
  // needs a server-side route handler to reach the private DB.
};

export default nextConfig;
