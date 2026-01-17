# Build Scripts

This directory contains build-time scripts that enhance the portfolio website.

## generate-blog-pages.js

Generates static HTML files for each blog post to enable social media crawler compatibility.

### Why This Exists

**Problem**: Social media crawlers (LinkedIn Post Inspector, Facebook, Twitter) don't execute JavaScript. When they try to crawl blog post URLs like `/portfolio/blog/when-users-reject-your-product`, they encounter issues:

1. The portfolio is a React Single Page Application (SPA) that generates meta tags dynamically via `react-helmet-async`
2. Crawlers don't run JavaScript, so they never see the Open Graph meta tags
3. Result: No preview images, broken social media sharing, 404 errors in LinkedIn Post Inspector

**Solution**: Generate static HTML files with pre-rendered meta tags that crawlers can read without JavaScript.

### How It Works

```
Social Media Crawler:
  ↓
Requests: /portfolio/blog/when-users-reject-your-product
  ↓
Gets: public/blog/when-users-reject-your-product/index.html
  ↓
Reads static HTML with all meta tags (no JavaScript needed)
  ↓
✓ Preview works perfectly with image, title, description

Real User in Browser:
  ↓
Requests: /portfolio/blog/when-users-reject-your-product
  ↓
Gets same static HTML
  ↓
JavaScript redirect runs seamlessly
  ↓
✓ User sees full SPA experience
```

### When to Update

**IMPORTANT**: Update this script whenever you add a new blog post!

#### Steps to Add a New Blog Post

1. **Add blog post data** to `src/data/blogPosts.ts`
   ```typescript
   {
     id: 6,
     slug: "new-blog-post-slug",
     title: "Your New Blog Post Title",
     excerpt: "Brief description for social media",
     image: "/image-name.png",
     imageAlt: "Description of the image",
     // ... other fields
   }
   ```

2. **Update the blogPosts array** in `scripts/generate-blog-pages.js`
   ```javascript
   const blogPosts = [
     // ... existing posts
     {
       slug: "new-blog-post-slug",
       title: "Your New Blog Post Title",
       excerpt: "Brief description for social media",
       image: "/image-name.png",
       imageAlt: "Description of the image",
     },
   ];
   ```

3. **Build the project** - The prebuild script runs automatically:
   ```bash
   npm run build
   ```

4. **Verify the output**:
   ```bash
   ls -la dist/blog/new-blog-post-slug/
   # Should see: index.html
   ```

### Generated HTML Structure

Each generated HTML file includes:

- **Complete Open Graph meta tags** for LinkedIn/Facebook
- **Twitter Card meta tags** for Twitter
- **Canonical URL** for SEO
- **JavaScript redirect** for browsers (seamless UX)
- **Meta refresh fallback** for browsers without JavaScript
- **Basic content** for accessibility and SEO

### Meta Tags Included

The script generates all required meta tags:

```html
<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="article" />
<meta property="og:url" content="[full URL]" />
<meta property="og:title" content="[blog post title]" />
<meta property="og:description" content="[excerpt]" />
<meta property="og:image" content="[full image URL]" />
<meta property="og:image:secure_url" content="[full image URL]" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="[image description]" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Jen Rumery Portfolio" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="[full URL]" />
<meta property="twitter:title" content="[blog post title]" />
<meta property="twitter:description" content="[excerpt]" />
<meta property="twitter:image" content="[full image URL]" />
<meta property="twitter:image:alt" content="[image description]" />
```

### Testing

After deploying, test your blog posts with these tools:

1. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
   - Paste your blog post URL
   - Verify image, title, and description appear correctly

2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
   - Check Open Graph tags are parsed correctly

3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Ensure Twitter previews work

### Image Path Handling

The script handles two image path formats:

1. **Absolute paths starting with `/portfolio/`**:
   - Example: `/portfolio/pm-strategy-illustration.png`
   - Converted to: `https://jenrum3ry.github.io/portfolio/pm-strategy-illustration.png`

2. **Absolute paths without `/portfolio/`**:
   - Example: `/beta-tester-walks-away.PNG`
   - Converted to: `https://jenrum3ry.github.io/portfolio/beta-tester-walks-away.PNG`

### Troubleshooting

**Problem**: LinkedIn Post Inspector shows 404 error
- **Check**: Is the blog post slug in the `generate-blog-pages.js` array?
- **Check**: Did you run `npm run build`?
- **Check**: Is the file present in `dist/blog/[slug]/index.html`?

**Problem**: Social media preview shows wrong image
- **Check**: Is the image path correct in the blogPosts array?
- **Check**: Does the image exist in the `public/` directory?
- **Check**: Is the image publicly accessible after deployment?

**Problem**: Preview works but clicking link goes to 404
- **Check**: Is the GitHub Pages SPA routing configured? (404.html in public/)
- **Check**: Is the redirect handler in index.html?

### Build Integration

The script runs automatically before every build via the `prebuild` npm script:

```json
{
  "scripts": {
    "prebuild": "node scripts/generate-blog-pages.js",
    "build": "vite build"
  }
}
```

When you run `npm run build`, it:
1. Runs `generate-blog-pages.js` (prebuild)
2. Generates static HTML files in `public/blog/`
3. Runs Vite build
4. Copies everything from `public/` to `dist/`

### Maintenance

Keep the blogPosts array in sync with `src/data/blogPosts.ts`. You only need to include these fields:

```javascript
{
  slug: string,      // Must match blogPosts.ts
  title: string,     // For meta tags
  excerpt: string,   // For meta description
  image: string,     // Path to image (must exist in public/)
  imageAlt: string,  // Alt text for accessibility
}
```

### Related Files

- `src/components/SEO.tsx` - Dynamic meta tags for the SPA
- `src/data/blogPosts.ts` - Source of truth for blog post data
- `public/404.html` - GitHub Pages SPA routing fallback
- `index.html` - SPA redirect handler for browsers
- `public/.nojekyll` - Prevents Jekyll processing on GitHub Pages
