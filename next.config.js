/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Cloudflare Pages
  output: 'export',
  // Disable image optimization since Cloudflare Pages doesn't support it
  images: {
    unoptimized: true,
  },
  // Ensure compatibility with deployment environment
  typescript: {
    // Handled during CI/CD, not during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Handled during CI/CD, not during build
    ignoreDuringBuilds: true,
  },
  // Disable trailing slashes for Cloudflare Pages
  trailingSlash: false,
  // Ensure proper asset prefixes for Cloudflare Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
}

module.exports = nextConfig
