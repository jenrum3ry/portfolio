# Portfolio Analytics Setup Guide

This portfolio includes a comprehensive analytics implementation using **Microsoft Clarity** - a completely free analytics solution from Microsoft.

## What's Tracked

Your portfolio now tracks:

### Page Analytics
- **Page views** - Every page visit is tracked with path and title
- **Navigation patterns** - See how users move through your portfolio
- **Scroll depth** - Track engagement at 25%, 50%, 75%, and 100% scroll milestones

### Project/Case Study Interactions
- **Project views** - When projects are displayed on the page
- **Project clicks** - When users click on project images
- **External link clicks** - When users click "View Live Site" buttons

### Blog Interactions
- **Blog post clicks** - When users click to read a post from the list
- **Blog post views** - When users view a complete blog post

### Contact Form
- **Form views** - When the contact page is loaded
- **Form submissions** - When users successfully submit the contact form
- **Contact link clicks** - Email and LinkedIn clicks

## Microsoft Clarity Features

With Microsoft Clarity, you get:

- **Session Recordings** - Watch how users interact with your portfolio
- **Heatmaps** - See where users click, scroll, and spend time
- **User Behavior Insights** - Understand user flows and drop-off points
- **Device & Location Data** - See what devices and locations users access from
- **Traffic Sources** - Understand how users find your portfolio
- **100% Free** - No limits, no paid tiers

## Setup Instructions

### 1. Create a Microsoft Clarity Account

1. Go to [https://clarity.microsoft.com/](https://clarity.microsoft.com/)
2. Sign in with a Microsoft account (or create one - it's free)
3. Click "Add new project"
4. Enter your project details:
   - **Name**: "Portfolio" (or any name you prefer)
   - **Website URL**: `https://jenrum3ry.github.io/portfolio/`
5. Click "Add new project"

### 2. Get Your Project ID

After creating the project, Clarity will show you a tracking code. You need the **Project ID** which looks like this:

```
YOUR_CLARITY_PROJECT_ID
```

It's usually a random string like `kx3m8j9abc`

### 3. Add Your Project ID to the Portfolio

1. Open `/home/user/portfolio/index.html`
2. Find this line (around line 42):

```javascript
})(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
```

3. Replace `YOUR_CLARITY_PROJECT_ID` with your actual Clarity Project ID:

```javascript
})(window, document, "clarity", "script", "kx3m8j9abc");
```

### 4. Deploy Your Changes

1. Build your portfolio:
   ```bash
   npm run build
   ```

2. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add Microsoft Clarity analytics"
   git push
   ```

3. Wait for your GitHub Pages deployment to complete (usually 1-2 minutes)

### 5. Verify Setup

1. Visit your portfolio: `https://jenrum3ry.github.io/portfolio/`
2. Navigate around, click on projects, read blog posts, etc.
3. Go back to [https://clarity.microsoft.com/](https://clarity.microsoft.com/)
4. Select your project
5. Within a few minutes, you should start seeing:
   - Active users
   - Page views
   - Session recordings
   - Heatmaps (after collecting some data)

## Using the Dashboard

### Key Metrics to Monitor

1. **Dashboard** - Overview of traffic, popular pages, and user behavior
2. **Recordings** - Watch actual user sessions to see how people interact
3. **Heatmaps** - Visual representation of clicks and scrolling
4. **Insights** - AI-powered suggestions for improving user experience

### Custom Events

Your portfolio tracks custom events that appear in Clarity:

- `page_view` - Every page navigation
- `project_view` - When projects are displayed
- `project_click` - Project image clicks
- `blog_post_click` - Blog post clicks from the list
- `blog_post_view` - Individual blog post views
- `contact_form_view` - Contact page visits
- `contact_form_submit` - Form submissions
- `external_link_click` - External link clicks
- `scroll_depth` - Scroll milestones (25%, 50%, 75%, 100%)

These events help you understand:
- Which projects get the most attention
- Which blog posts are most popular
- How many visitors are interested in contacting you
- How engaged users are with your content

## Privacy & Performance

- **Privacy-Friendly**: Clarity is GDPR compliant and doesn't use cookies for tracking
- **Lightweight**: Analytics code is minimal and won't slow down your portfolio
- **No Impact on SEO**: The tracking script is async and won't affect page load scores
- **Data Ownership**: You own all the data collected

## Troubleshooting

### Analytics Not Showing Up?

1. **Check Project ID**: Make sure you replaced `YOUR_CLARITY_PROJECT_ID` with your actual ID
2. **Clear Cache**: Try viewing your site in incognito/private mode
3. **Wait**: Clarity can take 5-10 minutes to start showing data
4. **Check Console**: Open browser DevTools > Console and look for any errors

### Testing in Development

When running `npm run dev`, analytics events are logged to the browser console instead of being sent to Clarity. This helps you verify tracking is working correctly.

Look for messages like:
```
[Analytics] page_view { path: "/", title: "...", referrer: "..." }
[Analytics] project_click { project_name: "...", project_id: "..." }
```

## Questions?

If you have questions about the analytics implementation or need help with setup, feel free to reach out!

## Summary

You now have a professional analytics setup that will help you:
- Understand who visits your portfolio
- See which projects and blog posts resonate most
- Track contact form engagement
- Identify areas for improvement
- Make data-driven decisions about your portfolio content

All of this is completely free and privacy-friendly!
