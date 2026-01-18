# Microsoft Clarity Implementation Guide

Complete guide for implementing Microsoft Clarity custom tracking on your React portfolio site.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Testing & Verification](#testing--verification)
- [Troubleshooting](#troubleshooting)
- [Advanced Features](#advanced-features)

---

## Overview

This implementation provides advanced Microsoft Clarity tracking with:

✅ **Automatic page view tracking** with custom categorization
✅ **UTM parameter tracking** from LinkedIn/social media posts
✅ **Engagement level calculation** (low/medium/high)
✅ **User type classification** (blog_reader, case_study_viewer, etc.)
✅ **Scroll depth monitoring** with milestone tracking
✅ **Form interaction tracking** (contact forms)
✅ **External link click tracking**
✅ **Session metrics** (time on site, pages viewed, interactions)

---

## Prerequisites

Before starting, ensure you have:

- [ ] Microsoft Clarity account ([signup here](https://clarity.microsoft.com/))
- [ ] Clarity Project ID from your dashboard
- [ ] Clarity API Token (optional, for data export)
- [ ] React 18+ with TypeScript
- [ ] React Router v6+

---

## Installation Steps

### Step 1: Add Files to Repository

The following files should already be in your repository:

```
src/
  lib/
    clarity.ts              # Core utility functions
  hooks/
    use-clarity-tracking.tsx # React hooks
CLARITY_IMPLEMENTATION_GUIDE.md  # This file
CLARITY_QUICK_REFERENCE.md       # Quick reference
```

### Step 2: Create Environment Variables

Create a `.env.local` file in your project root:

```bash
# .env.local

# Existing Web3Forms key (keep this)
VITE_WEB3FORMS_ACCESS_KEY=your-existing-key

# Microsoft Clarity Project ID (required)
VITE_CLARITY_PROJECT_ID=uubt9mzh1r

# Clarity API Token (optional - for data export)
VITE_CLARITY_API_TOKEN=your-api-token-here
```

**Finding your Clarity Project ID:**
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com/)
2. Select your project
3. Click **Settings** > **Setup**
4. Copy the **Project ID** (e.g., `uubt9mzh1r`)

**Obtaining an API Token (optional):**
1. In Clarity dashboard, go to **Settings** > **API**
2. Click **Generate Token**
3. Select scopes: `Data.Export`
4. Copy the token (starts with `eyJhbGciOiJ...`)

### Step 3: Verify `.gitignore`

Ensure `.env.local` is excluded from git:

```bash
# .gitignore
*.local
```

Your `.gitignore` should already have this pattern (matches `*.local` files).

### Step 4: Install Clarity Tracking Script

Add the Clarity script to your `index.html` in the `<head>` section:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... other meta tags ... -->

    <!-- Microsoft Clarity -->
    <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
    </script>
    <!-- End Microsoft Clarity -->
  </head>
  <!-- ... -->
</html>
```

**Replace `"YOUR_PROJECT_ID"`** with your actual Clarity Project ID (e.g., `"uubt9mzh1r"`).

---

## Configuration

### Basic Setup (App.tsx)

Add the main tracking hook to your App component:

```tsx
// src/App.tsx
import { useClarityTracking } from './hooks/use-clarity-tracking';

function App() {
  // Add this line at the top of your component
  useClarityTracking();

  return (
    <Router>
      {/* Your routes */}
    </Router>
  );
}
```

This single line enables:
- ✅ Automatic page view tracking
- ✅ UTM parameter capture
- ✅ Traffic source classification
- ✅ Scroll depth monitoring
- ✅ Click interaction tracking
- ✅ Engagement level calculation

### Blog Post Tracking

Add blog-specific tracking to your `BlogPost.tsx`:

```tsx
// src/pages/BlogPost.tsx
import { useBlogPostTracking } from '../hooks/use-clarity-tracking';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  // Add this line
  useBlogPostTracking(post?.slug || '', post?.title || '');

  return (
    <article>
      {/* Your blog post content */}
    </article>
  );
}
```

This tracks:
- Blog post slug and title
- Reading time (via scroll depth)
- Content engagement
- Session upgrade for important visitors

### Case Study Tracking

Add case study tracking to your `CaseStudies.tsx`:

```tsx
// src/pages/CaseStudies.tsx
import { trackCaseStudyView } from '../hooks/use-clarity-tracking';

function CaseStudies() {
  return (
    <div>
      {caseStudies.map(study => (
        <Card
          key={study.id}
          onClick={() => trackCaseStudyView(study.id, study.title)}
        >
          {/* Case study content */}
        </Card>
      ))}
    </div>
  );
}
```

### Form Tracking

Track contact form interactions:

```tsx
// src/pages/Contact.tsx
import { useFormTracking } from '../hooks/use-clarity-tracking';

function ContactForm() {
  const formRef = useFormTracking('contact_form');

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="email" />
      <button type="submit">Send</button>
    </form>
  );
}
```

This automatically tracks:
- Form opened (first focus)
- Form filled (first input)
- Form submitted

---

## Usage Examples

### Example 1: Track Custom Events

```tsx
import { useEventTracking } from '../hooks/use-clarity-tracking';

function VideoPlayer() {
  const trackVideoPlay = useEventTracking('video_played');

  return (
    <video onPlay={() => trackVideoPlay({ video_id: 'intro' })}>
      {/* video content */}
    </video>
  );
}
```

### Example 2: Track Scroll Milestones

```tsx
import { useScrollDepthTracking } from '../hooks/use-clarity-tracking';

function ArticlePage() {
  useScrollDepthTracking((depth) => {
    if (depth === 100) {
      console.log('User read entire article!');
    }
  });

  return <article>{/* content */}</article>;
}
```

### Example 3: Track External Links

```tsx
import { useExternalLinkTracking } from '../hooks/use-clarity-tracking';

function Footer() {
  useExternalLinkTracking();

  return (
    <footer>
      <a href="https://linkedin.com/in/jenrumery" data-context="social_media">
        LinkedIn
      </a>
    </footer>
  );
}
```

Add `data-context` attribute to provide context for link clicks.

### Example 4: Manual Tag Setting

```tsx
import { setTag, setMultipleTags } from '../lib/clarity';

// Single tag
setTag('page_category', 'pricing');

// Multiple tags at once
setMultipleTags({
  user_tier: 'premium',
  feature_enabled: true,
  ab_test_variant: 'variant_b',
});
```

---

## Testing & Verification

### 1. Local Development Testing

When running your app locally (`npm run dev`), you should see console logs:

```
[Clarity] Initializing session...
[Clarity] Session initialized with traffic source: direct
[Clarity] Tagged session: page_category=home
[Clarity] UTM parameters tracked: { utm_source: 'linkedin', utm_campaign: 'portfolio_launch' }
[Clarity] Page view tracked: /blog/ai-scribe -> blog_post
[Clarity] Engagement tags updated: { engagementLevel: 'medium', userType: 'blog_reader', metrics: {...} }
```

### 2. Verify in Clarity Dashboard

After deploying, check your Clarity dashboard:

1. **Recordings Tab**
   - Watch user sessions
   - Look for custom tags in session filters

2. **Heatmaps Tab**
   - View click heatmaps
   - View scroll depth heatmaps

3. **Session Filters**
   - Filter by `page_category`
   - Filter by `engagement_level`
   - Filter by `user_type`
   - Filter by `utm_source`

### 3. Custom Tag Verification

In the Clarity dashboard:

1. Go to **Settings** > **Setup** > **Custom Tags**
2. You should see tags like:
   - `page_category`
   - `engagement_level`
   - `user_type`
   - `utm_source`
   - `utm_campaign`
   - `blog_slug`
   - `case_study_id`
   - `traffic_source`

### 4. Test UTM Parameters

Visit your site with UTM parameters:

```
https://yoursite.com/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio_launch
```

Then check the Clarity dashboard to confirm the tags were captured.

---

## Troubleshooting

### Issue: Console shows "Clarity not available"

**Cause:** Clarity script hasn't loaded yet.

**Solution:**
- Check your `index.html` has the Clarity script
- Verify your Project ID is correct
- Check browser console for script errors
- Ensure adblockers aren't blocking Clarity

### Issue: No tags appearing in Clarity dashboard

**Cause:** Tags might not be set correctly.

**Solution:**
- Wait 5-10 minutes for Clarity to process data
- Check console logs in development mode
- Verify `isClarityAvailable()` returns `true`
- Test on a live deployed site (not localhost)

### Issue: UTM parameters not tracking

**Cause:** URL doesn't have UTM parameters.

**Solution:**
- Test with a URL that includes UTM params
- Verify `trackUTMParameters()` is called
- Check sessionStorage for `clarity_visited_pages`

### Issue: TypeScript errors

**Cause:** Missing type definitions.

**Solution:**
- Ensure `src/lib/clarity.ts` declares `window.clarity`
- Rebuild TypeScript: `npm run build`
- Restart your dev server

### Issue: Engagement level always "low"

**Cause:** Not enough interactions or time on site.

**Solution:**
- Spend more time on the page (60+ seconds)
- Scroll through content (50%+ depth)
- Click on multiple elements
- Visit multiple pages (3+)

---

## Advanced Features

### Custom Engagement Scoring

Modify the engagement calculation in `src/lib/clarity.ts`:

```typescript
export const calculateEngagementLevel = (metrics: SessionMetrics): EngagementLevel => {
  let score = 0;

  // Customize these thresholds for your site
  if (metrics.pagesViewed >= 5) score += 3;
  else if (metrics.pagesViewed >= 3) score += 2;
  else if (metrics.pagesViewed >= 2) score += 1;

  // Adjust time thresholds
  if (metrics.timeOnSite >= 300) score += 3; // 5+ minutes
  else if (metrics.timeOnSite >= 120) score += 2; // 2+ minutes
  else if (metrics.timeOnSite >= 60) score += 1; // 1+ minute

  // ... rest of scoring logic
};
```

### Session Upgrade for VIP Visitors

Upgrade sessions for high-intent visitors:

```typescript
import { upgradeSession } from '../lib/clarity';

function PricingPage() {
  useEffect(() => {
    // Mark pricing page visits as important
    upgradeSession('pricing_page_view');
  }, []);

  return <div>{/* pricing content */}</div>;
}
```

Upgraded sessions are prioritized in Clarity's recording queue.

### User Identification

If you have authenticated users, identify them:

```typescript
import { identifyUser } from '../lib/clarity';

function App() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Hash the email or use a user ID
      const userId = hashEmail(user.email);
      identifyUser(userId, undefined, undefined, user.name);
    }
  }, [user]);
}
```

**⚠️ Privacy Warning:** Never send PII (personally identifiable information) to Clarity without user consent.

### Exporting Data via API

Use the Clarity API to export session data:

```typescript
const API_TOKEN = import.meta.env.VITE_CLARITY_API_TOKEN;
const PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

async function exportSessions() {
  const response = await fetch(
    `https://www.clarity.ms/api/v1/projects/${PROJECT_ID}/sessions`,
    {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  return data;
}
```

---

## Best Practices

### 1. Tag Naming Conventions

- Use **snake_case** for tag keys: `page_category`, `user_type`
- Keep keys under 32 characters
- Use descriptive names: `engagement_level` not `el`

### 2. Data Privacy

- ✅ **DO:** Hash user emails before sending to Clarity
- ✅ **DO:** Use anonymized IDs for user identification
- ❌ **DON'T:** Send passwords, credit cards, or sensitive data
- ❌ **DON'T:** Track users without consent (check GDPR requirements)

### 3. Performance

- Use `{ passive: true }` for scroll listeners (already implemented)
- Debounce frequent events (e.g., scroll tracking)
- Don't call `setTag()` too frequently (max ~100 times per session)

### 4. Development vs Production

- Console logs only show in development (`import.meta.env.DEV`)
- Test on production to verify Clarity recording works
- Use incognito mode to avoid ad blockers during testing

---

## Next Steps

1. ✅ Complete the installation steps
2. ✅ Test in development mode
3. ✅ Deploy to production
4. ✅ Verify tags in Clarity dashboard
5. ✅ Set up custom dashboard filters
6. ✅ Create alerts for important events

## Resources

- [Microsoft Clarity Documentation](https://docs.microsoft.com/en-us/clarity/)
- [Clarity API Reference](https://docs.microsoft.com/en-us/clarity/setup-and-installation/clarity-api)
- [Custom Tags Guide](https://docs.microsoft.com/en-us/clarity/setup-and-installation/custom-tags)
- [CLARITY_QUICK_REFERENCE.md](./CLARITY_QUICK_REFERENCE.md) - Quick reference for common tasks

---

**Questions or Issues?**

Check the [Troubleshooting](#troubleshooting) section or review your Clarity dashboard settings.
