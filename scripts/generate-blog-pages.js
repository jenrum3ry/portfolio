/**
 * Generate Static HTML for Blog Posts (Social Media Crawler Support)
 *
 * WHY THIS EXISTS:
 * Social media crawlers (LinkedIn, Facebook, Twitter) don't execute JavaScript.
 * Our React SPA generates meta tags dynamically, which crawlers never see.
 * This script pre-generates static HTML files with Open Graph meta tags
 * so crawlers can properly preview blog posts when shared on social media.
 *
 * WHEN TO UPDATE:
 * Add new blog posts to the blogPosts array below whenever you add a post
 * to src/data/blogPosts.ts. Only include: slug, title, excerpt, image, imageAlt
 *
 * HOW IT WORKS:
 * 1. Runs automatically before build (prebuild script in package.json)
 * 2. Creates public/blog/{slug}/index.html for each blog post
 * 3. HTML includes all meta tags + redirect script for browsers
 * 4. Vite copies these to dist/ during build
 * 5. Crawlers get meta tags, browsers get redirected to SPA
 *
 * TESTING:
 * After deployment, test with LinkedIn Post Inspector:
 * https://www.linkedin.com/post-inspector/
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ⚠️ IMPORTANT: Keep this in sync with src/data/blogPosts.ts
// Add new blog posts here whenever you add them to blogPosts.ts
const blogPosts = [
  {
    slug: "prioritization-beyond-rice",
    title: "The Art of Prioritization: Beyond the RICE Framework",
    excerpt: "Why scoring frameworks fail and what actually drives strategic prioritization in product management.",
    image: "/og-image.png",
    imageAlt: "Jen Rumery - AI Product Manager",
  },
  {
    slug: "being-wrong-faster",
    title: "The PM's Real Job: Being Wrong Faster",
    excerpt: "Beyond 'fail fast': Why the best product managers focus on being wrong faster, and how to build systems that expose bad assumptions before they become expensive mistakes.",
    image: "/portfolio/pm-strategy-illustration.png",
    imageAlt: "Abstract illustration representing product strategy and iteration",
  },
  {
    slug: "when-users-reject-your-product",
    title: "When Your Best Beta Tester Rejects Your Product (And Why That's Good)",
    excerpt: "What you can learn when beta testers walk away from your product idea and how to turn it into actionable insights.",
    image: "/beta-tester-walks-away.PNG",
    imageAlt: "Beta tester walking away from product prototype, representing discovery research insights",
  },
  {
    slug: "80-solution-time-to-first-value",
    title: "The 80% Solution: Time to First Value",
    excerpt: "How I learned that shipping an 80% solution to the majority beats waiting indefinitely for 100% perfection - and gave veterinarians their nights back.",
    image: "/portfolio/veterinarian-upgrade-service.jpg",
    imageAlt: "Doctor in scrubs working at computer in medical facility",
  },
  {
    slug: "continuous-user-research",
    title: "Continuous User Research Without Breaking the Bank",
    excerpt: "How to build a systematic user research practice with no budget, no researchers, and 45 minutes per session.",
    image: "/og-image.png",
    imageAlt: "Jen Rumery - AI Product Manager",
  },
];

const baseUrl = 'https://jenrum3ry.github.io/portfolio';

function generateBlogPageHTML(post) {
  const fullUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('/portfolio/')
    ? `${baseUrl}${post.image.replace('/portfolio', '')}`
    : `${baseUrl}${post.image}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | Jen Rumery</title>
  <meta name="description" content="${post.excerpt}">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${fullUrl}" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.excerpt}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:secure_url" content="${imageUrl}" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${post.imageAlt}" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Jen Rumery Portfolio" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${fullUrl}" />
  <meta property="twitter:title" content="${post.title}" />
  <meta property="twitter:description" content="${post.excerpt}" />
  <meta property="twitter:image" content="${imageUrl}" />
  <meta property="twitter:image:alt" content="${post.imageAlt}" />

  <!-- Canonical URL -->
  <link rel="canonical" href="${fullUrl}" />

  <!-- Redirect to SPA for browsers (GitHub Pages routing) -->
  <script>
    // Store the path and redirect to base URL for React Router to handle
    // This follows the same pattern as 404.html for GitHub Pages SPA routing
    sessionStorage.setItem('redirect', '/portfolio/blog/${post.slug}');
    window.location.replace('/portfolio/');
  </script>

  <!-- Fallback meta refresh for browsers without JavaScript -->
  <meta http-equiv="refresh" content="0;url=/portfolio/">
</head>
<body>
  <h1>${post.title}</h1>
  <p>${post.excerpt}</p>
  <p>Redirecting to <a href="${fullUrl}">${fullUrl}</a>...</p>
</body>
</html>`;
}

// Generate HTML files for each blog post
blogPosts.forEach(post => {
  const dirPath = join(__dirname, '..', 'public', 'blog', post.slug);
  const filePath = join(dirPath, 'index.html');

  // Create directory if it doesn't exist
  mkdirSync(dirPath, { recursive: true });

  // Generate and write HTML
  const html = generateBlogPageHTML(post);
  writeFileSync(filePath, html, 'utf-8');

  console.log(`✓ Generated ${filePath}`);
});

console.log(`\nSuccessfully generated ${blogPosts.length} blog post pages!`);
