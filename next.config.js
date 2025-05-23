/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static site export for Cloudflare Pages
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Skip type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip linting during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
