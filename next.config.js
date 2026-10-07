/** @type {import('next').NextConfig} */
// Configured for Cloudflare Pages — static export, no server-only features.
const nextConfig = {
  output: "export",
  images: {
    // Cloudflare Pages serves these as plain static assets — disable the
    // built-in optimizer so URLs are stable and no /_next/image route is needed.
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  // Ensures relative asset paths so the site works from any base URL.
  // Leave assetPrefix empty for Cloudflare Pages root deploys.
};

module.exports = nextConfig;
