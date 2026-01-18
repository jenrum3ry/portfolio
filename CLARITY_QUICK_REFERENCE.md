# Microsoft Clarity Quick Reference

Fast reference guide for common Clarity tracking tasks.

## Quick Links

- 📖 [Full Implementation Guide](./CLARITY_IMPLEMENTATION_GUIDE.md)
- 🌐 [Clarity Dashboard](https://clarity.microsoft.com/)
- 📚 [Official Docs](https://docs.microsoft.com/en-us/clarity/)

---

## Import Statements

```tsx
// React Hooks
import {
  useClarityTracking,          // Main tracking hook
  useBlogPostTracking,          // Blog post tracking
  useCaseStudyTracking,         // Case study tracking
  useFormTracking,              // Form interaction tracking
  useScrollDepthTracking,       // Scroll depth tracking
  useEventTracking,             // Custom event tracking
  useExternalLinkTracking,      // External link tracking
  useTimeOnPageTracking,        // Time on page tracking
  useVisibilityTracking,        // Page visibility tracking
  trackCaseStudyView,           // Standalone case study tracker
  trackBlogPostView,            // Standalone blog post tracker
} from './hooks/use-clarity-tracking';

// Core Functions
import {
  setTag,                       // Set a single tag
  setMultipleTags,              // Set multiple tags
  identifyUser,                 // Identify user session
  upgradeSession,               // Upgrade session priority
  requestConsent,               // Request GDPR consent
  trackPageView,                // Track page view
  trackUTMParameters,           // Track UTM params
  getTrafficSource,             // Get traffic source
  getPageCategory,              // Get page category
  calculateEngagementLevel,     // Calculate engagement
  classifyUserType,             // Classify user type
  trackContactFormAction,       // Track contact form
  trackExternalLinkClick,       // Track external link
  getSessionMetrics,            // Get current metrics
  updateEngagementTags,         // Update engagement tags
} from './lib/clarity';
```

---

## Common Use Cases

### 1. Enable Tracking (Required)

Add to your `App.tsx`:

```tsx
import { useClarityTracking } from './hooks/use-clarity-tracking';

function App() {
  useClarityTracking(); // ← Add this line
  return <Router>{/* routes */}</Router>;
}
```

### 2. Track Blog Posts

```tsx
import { useBlogPostTracking } from '../hooks/use-clarity-tracking';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useBlogPostTracking(post?.slug || '', post?.title || '');

  return <article>{/* content */}</article>;
}
```

### 3. Track Case Studies

```tsx
import { trackCaseStudyView } from '../hooks/use-clarity-tracking';

// In onClick handler
<Card onClick={() => trackCaseStudyView(study.id, study.title)}>
  {/* card content */}
</Card>
```

### 4. Track Forms

```tsx
import { useFormTracking } from '../hooks/use-clarity-tracking';

function ContactForm() {
  const formRef = useFormTracking('contact_form');

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}
```

### 5. Track Custom Events

```tsx
import { useEventTracking } from '../hooks/use-clarity-tracking';

function Component() {
  const trackButtonClick = useEventTracking('cta_clicked');

  return (
    <button onClick={() => trackButtonClick({ button_id: 'pricing_cta' })}>
      Get Started
    </button>
  );
}
```

### 6. Track Scroll Depth

```tsx
import { useScrollDepthTracking } from '../hooks/use-clarity-tracking';

function ArticlePage() {
  useScrollDepthTracking((depth) => {
    console.log(`User scrolled to ${depth}%`);
  });

  return <article>{/* content */}</article>;
}
```

### 7. Track External Links

```tsx
import { useExternalLinkTracking } from '../hooks/use-clarity-tracking';

function Footer() {
  useExternalLinkTracking();

  return (
    <footer>
      <a href="https://linkedin.com/in/jenrumery" data-context="social">
        LinkedIn
      </a>
    </footer>
  );
}
```

### 8. Set Custom Tags

```tsx
import { setTag, setMultipleTags } from '../lib/clarity';

// Single tag
setTag('user_tier', 'premium');

// Multiple tags
setMultipleTags({
  ab_test_variant: 'variant_b',
  feature_enabled: true,
  user_segment: 'early_adopter',
});
```

### 9. Upgrade Important Sessions

```tsx
import { upgradeSession } from '../lib/clarity';

function PricingPage() {
  useEffect(() => {
    upgradeSession('pricing_page_view');
  }, []);

  return <div>{/* pricing content */}</div>;
}
```

### 10. Identify Users

```tsx
import { identifyUser } from '../lib/clarity';

function App() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      identifyUser(user.id, undefined, undefined, user.name);
    }
  }, [user]);
}
```

---

## Custom Tags Reference

### Automatic Tags (Set by Hooks)

| Tag | Type | Values | Description |
|-----|------|--------|-------------|
| `page_category` | string | `home`, `projects`, `blog_index`, `blog_post`, `contact`, `education`, `not_found` | Current page category |
| `engagement_level` | string | `low`, `medium`, `high` | User engagement level |
| `user_type` | string | `blog_reader`, `case_study_viewer`, `contact_intent`, `recruiter`, `explorer`, `returning_visitor` | User behavior classification |
| `traffic_source` | string | `linkedin`, `github`, `twitter`, `direct`, `search`, `referral`, `unknown` | Traffic source |
| `utm_source` | string | varies | UTM source parameter |
| `utm_medium` | string | varies | UTM medium parameter |
| `utm_campaign` | string | varies | UTM campaign parameter |
| `utm_term` | string | varies | UTM term parameter |
| `utm_content` | string | varies | UTM content parameter |
| `pages_viewed` | number | 1+ | Number of pages viewed in session |
| `time_on_site` | number | 0+ | Time on site in seconds |
| `max_scroll_depth` | number | 0-100 | Maximum scroll depth percentage |

### Content-Specific Tags

| Tag | Type | Description |
|-----|------|-------------|
| `blog_slug` | string | Blog post URL slug |
| `case_study_id` | string | Case study identifier |
| `content_type` | string | Content type (`blog`, `case_study`) |

### Interaction Tags

| Tag | Type | Description |
|-----|------|-------------|
| `contact_form_opened` | boolean | Contact form was focused |
| `contact_form_filled` | boolean | Contact form was filled |
| `contact_form_submitted` | boolean | Contact form was submitted |
| `external_link_clicked` | string | External URL clicked |
| `link_context` | string | Context of link click |
| `page_visible` | boolean | Page is currently visible (not background tab) |

---

## Engagement Scoring

### How Engagement Levels are Calculated

| Metric | Low | Medium | High |
|--------|-----|--------|------|
| **Pages Viewed** | 1 | 2-4 | 5+ |
| **Time on Site** | <30s | 30s-3m | 3m+ |
| **Scroll Depth** | <50% | 50-75% | 75%+ |
| **Interactions** | 0 | 1-2 | 3+ |

**Score Calculation:**
- Pages: 0-3 points
- Time: 0-3 points
- Scroll: 0-2 points
- Interactions: 0-2 points

**Total:** 10 points max
- **High:** 7-10 points
- **Medium:** 4-6 points
- **Low:** 0-3 points

### User Type Classification

| Type | Criteria |
|------|----------|
| `contact_intent` | Visited contact page |
| `blog_reader` | Viewed 2+ blog posts |
| `case_study_viewer` | Viewed projects page or case studies |
| `recruiter` | Viewed education/certifications page |
| `returning_visitor` | Viewed 3+ unique pages |
| `explorer` | Default (doesn't match other criteria) |

---

## Testing Checklist

### Development Testing

- [ ] Console shows `[Clarity] Initializing session...`
- [ ] Console shows `[Clarity] Tagged session: page_category=home`
- [ ] Console shows `[Clarity] UTM parameters tracked` (if UTM params present)
- [ ] Console shows `[Clarity] Engagement tags updated`
- [ ] No TypeScript errors
- [ ] No console errors

### Production Testing

- [ ] Visit site with UTM parameters
- [ ] Navigate to multiple pages
- [ ] Scroll through content
- [ ] Click on links and buttons
- [ ] Submit a form (if applicable)
- [ ] Check Clarity dashboard (wait 5-10 minutes for data)

### Clarity Dashboard Verification

- [ ] See recordings in **Recordings** tab
- [ ] Custom tags appear in session filters
- [ ] Heatmaps show click and scroll data
- [ ] Session count increasing
- [ ] No errors in Clarity setup page

---

## Environment Variables

```bash
# .env.local

# Required: Clarity Project ID
VITE_CLARITY_PROJECT_ID=uubt9mzh1r

# Optional: API Token for data export
VITE_CLARITY_API_TOKEN=eyJhbGci...

# Existing: Web3Forms key
VITE_WEB3FORMS_ACCESS_KEY=your-key
```

**Where to find:**
- **Project ID:** Clarity Dashboard → Settings → Setup
- **API Token:** Clarity Dashboard → Settings → API → Generate Token

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Clarity not available" in console | Check `index.html` has Clarity script with correct Project ID |
| No tags in dashboard | Wait 5-10 minutes, verify on production (not localhost) |
| TypeScript errors | Ensure `clarity.ts` declares `window.clarity` |
| UTM params not tracking | Test with URL containing UTM parameters |
| Engagement always "low" | Spend more time on site, scroll, click, visit multiple pages |

---

## File Structure

```
src/
├── lib/
│   └── clarity.ts                    # Core utilities
├── hooks/
│   └── use-clarity-tracking.tsx      # React hooks
└── App.tsx                           # Main app (add useClarityTracking here)

Root/
├── index.html                         # Clarity script tag
├── .env.local                         # Environment variables (create this)
├── CLARITY_IMPLEMENTATION_GUIDE.md    # Full guide
└── CLARITY_QUICK_REFERENCE.md         # This file
```

---

## API Quick Reference

### Core Functions

```tsx
// Set tags
setTag('key', 'value')
setMultipleTags({ key1: 'value1', key2: 'value2' })

// User identification
identifyUser(userId, sessionId?, pageId?, friendlyName?)

// Session priority
upgradeSession('reason')

// Consent (GDPR)
requestConsent()

// Page tracking
trackPageView(pathname)
trackBlogPostView(slug, title)
trackCaseStudyView(studyId, title)

// Form tracking
trackContactFormAction('opened' | 'filled' | 'submitted')

// Link tracking
trackExternalLinkClick(url, context?)

// UTM tracking
trackUTMParameters(utmParams?)

// Analytics
getTrafficSource(url?, referrer?)
getPageCategory(pathname)
calculateEngagementLevel(metrics)
classifyUserType(visitedPages)
getSessionMetrics()
updateEngagementTags()
```

### React Hooks

```tsx
// Main tracking (required)
useClarityTracking()

// Content tracking
useBlogPostTracking(slug, title)
useCaseStudyTracking(studyId, title)

// Interaction tracking
useFormTracking(formName) // Returns ref
useScrollDepthTracking(onMilestone?, intervalSeconds?)
useEventTracking(eventName) // Returns callback
useExternalLinkTracking()
useTimeOnPageTracking(onInterval?, intervalSeconds?)
useVisibilityTracking()
```

---

## Common Patterns

### Pattern 1: Track Button Click

```tsx
import { setTag, recordInteraction } from '../lib/clarity';

<button onClick={() => {
  setTag('cta_clicked', 'pricing_page');
  recordInteraction();
}}>
  Get Started
</button>
```

### Pattern 2: Track Modal Open

```tsx
import { setTag, upgradeSession } from '../lib/clarity';

const handleOpenModal = () => {
  setTag('modal_opened', 'demo_request');
  upgradeSession('demo_modal_open');
  setModalOpen(true);
};
```

### Pattern 3: Track Download

```tsx
import { setTag } from '../lib/clarity';

<a
  href="/resume.pdf"
  onClick={() => setTag('resume_downloaded', true)}
>
  Download Resume
</a>
```

### Pattern 4: Track Video Play

```tsx
import { useEventTracking } from '../hooks/use-clarity-tracking';

const trackVideoPlay = useEventTracking('video_played');

<video onPlay={() => trackVideoPlay({ video_id: 'intro' })} />
```

---

## Next Steps

1. ✅ Add `useClarityTracking()` to App.tsx
2. ✅ Test in development mode
3. ✅ Deploy to production
4. ✅ Verify in Clarity dashboard
5. 📊 Analyze user behavior data
6. 🎯 Optimize based on insights

---

**Need More Help?**

See the [Full Implementation Guide](./CLARITY_IMPLEMENTATION_GUIDE.md) for detailed instructions and troubleshooting.
