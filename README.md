# Space Portfolio

Welcome to my full stack Next.js 14 space portfolio.

## Deployment Instructions

This project is configured to be deployed as a static site. Follow these steps to deploy:

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Build the project:
   ```
   npm run build
   ```

2. The static files will be generated in the `out` directory.

### Deployment on Cloudflare Pages

This project is optimized for deployment on Cloudflare Pages. Use the following settings:

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `/out`

No environment variables are required for deployment.

### Other Deployment Options

You can also deploy this project to other platforms:

#### Vercel
- Connect your GitHub repository to Vercel
- Vercel will automatically detect Next.js and deploy correctly

#### Netlify
- Connect your GitHub repository to Netlify
- Set the build command to `npm run build`
- Set the publish directory to `out`

#### GitHub Pages
- Build the project locally
- Push the `out` directory to the `gh-pages` branch

## Troubleshooting

If you encounter any deployment issues:

1. Make sure you have the correct Node.js version (14+)
2. Ensure all dependencies are installed with `npm install`
3. Check that the build process completes successfully with `npm run build`
4. Verify that the `out` directory contains all necessary files

## License

MIT