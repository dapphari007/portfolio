#!/bin/bash

# Install dependencies using npm
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Output success message
echo "Build completed successfully!"