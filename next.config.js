/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Cloudflare Pages
  output: 'export',
  // Disable image optimization since Cloudflare Pages doesn't support it
  images: {
    unoptimized: true,
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
