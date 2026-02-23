# Deployment Fix for Routing Issues

## Problem
When deploying the Next.js static export to a custom domain, direct navigation to routes like `/about`, `/services`, etc., fails because the server doesn't know how to handle these routes.

## Solution
I've created configuration files for different hosting providers. Use the appropriate one based on your hosting setup:

### 1. **Apache Server** (cPanel, shared hosting)
The `public/.htaccess` file has been created and will be automatically included in your build.

**Steps:**
1. Rebuild your application:
   ```bash
   cd logistics-portfolio
   npm run build
   ```
2. Upload the contents of the `out` folder to your server
3. The `.htaccess` file will handle routing automatically

### 2. **Nginx Server** (VPS, Digital Ocean, AWS EC2)
Use the `nginx.conf` file provided in the root directory.

**Steps:**
1. Rebuild your application:
   ```bash
   npm run build
   ```
2. Copy the `out` folder contents to your web root (e.g., `/var/www/html`)
3. Update your Nginx configuration (usually at `/etc/nginx/sites-available/your-site`):
   - Either replace it with the provided `nginx.conf`
   - Or merge the location blocks into your existing config
4. Test configuration:
   ```bash
   sudo nginx -t
   ```
5. Reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```

### 3. **Netlify**
The `public/_redirects` file has been created and will be automatically included.

**Steps:**
1. Rebuild and deploy:
   ```bash
   npm run build
   ```
2. Deploy the `out` folder to Netlify
3. The `_redirects` file will handle routing automatically

### 4. **Vercel**
The `vercel.json` file has been created in the root directory.

**Steps:**
1. Push your code to your repository
2. Vercel will automatically use the `vercel.json` configuration
3. Or manually deploy:
   ```bash
   vercel --prod
   ```

### 5. **Other Platforms** (Cloudflare Pages, GitHub Pages, etc.)
These platforms usually support one of the above configurations. Check their documentation for:
- `_redirects` file support (Cloudflare Pages)
- Custom headers/rewrites configuration

## Rebuild Instructions

Before deploying, always rebuild:

```bash
cd logistics-portfolio
npm run build
```

This creates the `out` directory with your static files.

## Testing Locally

To test the build locally:

```bash
# Install a simple HTTP server
npm install -g serve

# Serve the out directory
npx serve out

# Or with single-page-app mode
npx serve out -s
```

Then visit:
- http://localhost:3000/
- http://localhost:3000/about/
- http://localhost:3000/services/

All routes should work correctly.

## Troubleshooting

If routes still don't work:

1. **Check browser console** for errors
2. **Verify build output** - ensure `out` folder contains subdirectories like `about/`, `services/`, etc.
3. **Check server logs** for 404 errors
4. **Verify file upload** - ensure all files from `out` folder are uploaded, including hidden files like `.htaccess`
5. **Clear browser cache** and try again
6. **Test with curl**:
   ```bash
   curl -I https://arunalogistics.stealthbit.in/about/
   ```

## Current Configuration

Your Next.js is configured with:
- `output: 'export'` - Static site generation
- `trailingSlash: true` - URLs end with `/` (e.g., `/about/`)
- `images: { unoptimized: true }` - No image optimization (required for static export)

This configuration creates:
- `/` → `out/index.html`
- `/about/` → `out/about/index.html`
- `/services/` → `out/services/index.html`
- etc.

## Need Help?

If you're still experiencing issues, please provide:
1. Your hosting provider name
2. Any error messages from browser console
3. Server type (Apache/Nginx/other)
