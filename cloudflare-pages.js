// This file is used to configure Cloudflare Pages
// It's not required, but can be useful for reference

module.exports = {
  // Build settings
  build: {
    command: 'npx next build',
    directory: 'out',
  },
  // Environment variables
  env: {
    NODE_ENV: 'production',
  },
}