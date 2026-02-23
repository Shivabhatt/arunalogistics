#!/bin/bash

# Deployment script for GitHub Pages
set -e

echo "🚀 Starting deployment to GitHub Pages..."

# Navigate to project directory
cd "$(dirname "$0")"

# Build the Next.js app
echo "📦 Building Next.js application..."
npm run build

# Navigate to the out directory
cd out

# Initialize git if not already initialized
if [ ! -d .git ]; then
  git init
  git checkout -b gh-pages
else
  git checkout gh-pages 2>/dev/null || git checkout -b gh-pages
fi

# Add all files
git add -A

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Add remote if it doesn't exist
if ! git remote | grep -q origin; then
  git remote add origin git@github.com:Shivabhatt/arunalogistics.git
fi

# Push to gh-pages branch
echo "🔄 Pushing to gh-pages branch..."
git push -f origin gh-pages

cd ..

echo "✅ Deployment complete!"
echo "⚠️  Now go to: https://github.com/Shivabhatt/arunalogistics/settings/pages"
echo "    And set Source to: Deploy from branch 'gh-pages' / (root)"
