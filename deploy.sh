#!/bin/bash

# Install dependencies using Yarn
echo "Installing dependencies..."
yarn install --immutable

# Build the project
echo "Building project..."
yarn build

# Output success message
echo "Build completed successfully! The static files are in the 'out' directory."
echo "You can deploy these files to any static hosting service like Vercel, Netlify, or GitHub Pages."