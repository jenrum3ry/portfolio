# Microsoft Clarity Tracking Guide

## Overview

Your portfolio site now has comprehensive user tracking via Microsoft Clarity. This guide explains all the data being collected and how to analyze it in the Clarity dashboard.

---

## 📊 Available Tracking Tags

### User Identification

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `visitor_id` | string | Unique persistent user ID | `user_lq8k3m_abc123xyz` |
| `visit_count` | number | Number of times user has visited | `1`, `5`, `23` |
| `is_returning_visitor` | boolean | Whether this is a repeat visitor | `true`, `false` |
| `user_loyalty` | string | Loyalty classification | `new`, `casual`, `regular`, `loyal` |

### Traffic & Referral

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `traffic_source` | string | Where user came from | `linkedin`, `github`, `twitter`, `search`, `direct`, `referral` |
| `has_referrer` | boolean | Whether user came from another site | `true`, `false` |
| `ref_platform` | string | Specific referring platform (auto-detected) | `linkedin`, `github`, `reddit`, `hackernews`, `google`, `medium`, `devto` |
| `ref_domain` | string | Referring domain name | `linkedin.com`, `github.com` |
| `utm_source` | string | UTM source parameter (if present) | `linkedin`, `newsletter` |
| `utm_medium` | string | UTM medium parameter | `social`, `email` |
| `utm_campaign` | string | UTM campaign parameter | `product_launch` |
| `utm_term` | string | UTM term parameter | `product_manager` |
| `utm_content` | string | UTM content parameter | `banner_ad` |

### Device & Browser

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `device_type` | string | Device category | `mobile`, `tablet`, `desktop` |
| `browser` | string | Browser name | `Chrome`, `Firefox`, `Safari`, `Edge` |
| `os` | string | Operating system | `Windows`, `macOS`, `iOS`, `Android`, `Linux` |
| `screen_resolution` | string | Screen dimensions | `1920x1080`, `375x812` |
| `timezone` | string | User's timezone | `America/New_York`, `Europe/London` |

### Timing & Patterns

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `time_of_day` | string | When user visited | `morning`, `afternoon`, `evening`, `night` |
| `day_of_week` | string | Weekday vs weekend | `weekday`, `weekend` |
| `day_name` | string | Specific day | `monday`, `tuesday`, `saturday` |
| `visit_hour` | number | Hour of visit (0-23) | `9`, `14`, `21` |

### Page Behavior

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `page_category` | string | Type of page | `home`, `projects`, `blog_index`, `blog_post`, `contact`, `education` |
| `landing_page` | string | First page visited in session | `home`, `blog_post`, `projects` |
| `blog_slug` | string | Blog post identifier (on blog pages) | `prioritization-beyond-rice` |
| `case_study_id` | string | Project identifier (on project pages) | `ai-scribe`, `video-visits` |
| `content_type` | string | Type of content | `blog`, `case_study` |

### Engagement Metrics

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `engagement_level` | string | Overall engagement score | `low`, `medium`, `high` |
| `user_type` | string | Behavioral classification | `blog_reader`, `case_study_viewer`, `contact_intent`, `recruiter`, `explorer`, `returning_visitor` |
| `pages_viewed` | number | Pages viewed in session | `1`, `3`, `7` |
| `time_on_site` | number | Seconds on site | `45`, `180`, `420` |
| `max_scroll_depth` | number | Deepest scroll percentage | `25`, `75`, `100` |

### Interaction Events

| Tag | Type | Description | Example Values |
|-----|------|-------------|----------------|
| `contact_form_action` | string | Form interaction | `opened`, `filled`, `submitted` |
| `external_link_clicked` | string | URL of clicked external link | `https://example.com` |
| `link_context` | string | Context of external link | `case_study`, `social_media` |

---

## 🎯 How to Use This Data in Clarity

### 1. **Finding Your Most Engaged Users**

**Filter:**
```
engagement_level = high
user_loyalty = loyal
```

**What to look for:**
- Watch session recordings to see what keeps them engaged
- Identify common paths through your site
- See which content resonates most

---

### 2. **Analyzing Returning Visitors**

**Filter:**
```
is_returning_visitor = true
visit_count >= 3
```

**What to look for:**
- What do they look at on repeat visits?
- Are they checking for new content?
- Do they eventually contact you?

---

### 3. **Understanding Traffic Sources**

**LinkedIn Traffic:**
```
traffic_source = linkedin
OR ref_platform = linkedin
```

**GitHub Traffic:**
```
traffic_source = github
OR ref_platform = github
```

**Search Engine Traffic:**
```
traffic_source = search
OR ref_platform = google
OR ref_platform = bing
```

**What to analyze:**
- Which sources bring the most engaged users?
- Which sources lead to contact form submissions?
- Conversion rates by traffic source

---

### 4. **Mobile vs Desktop Analysis**

**Mobile Users:**
```
device_type = mobile
```

**Desktop Users:**
```
device_type = desktop
```

**Compare:**
- Engagement levels (mobile vs desktop)
- Scroll depths
- Pages viewed
- Time on site
- Conversion rates

---

### 5. **Finding Potential Leads**

**High Intent Users:**
```
user_type = contact_intent
OR contact_form_action = filled
OR (engagement_level = high AND visit_count >= 2)
```

**Recruiters:**
```
user_type = recruiter
OR landing_page = education
```

---

### 6. **Content Performance**

**Most Popular Blog Posts:**
```
page_category = blog_post
engagement_level = high
```

**Project Interest:**
```
page_category = projects
OR content_type = case_study
```

---

### 7. **Time-Based Patterns**

**Weekend Traffic:**
```
day_of_week = weekend
```

**Evening Visits:**
```
time_of_day = evening
OR time_of_day = night
```

**Business Hours:**
```
day_of_week = weekday
time_of_day = morning
OR time_of_day = afternoon
```

**Analyze:**
- When do you get the most engaged traffic?
- Do weekday vs weekend visitors behave differently?
- Best times to publish new content

---

### 8. **Geographic & Browser Insights**

**By Timezone:**
```
timezone = America/New_York
```

**By Browser:**
```
browser = Safari
os = macOS
```

**Use for:**
- Browser compatibility testing
- Understanding your audience location
- Optimizing for specific platforms

---

### 9. **User Journey Analysis**

**Blog Readers Who Visit Projects:**
```
user_type = blog_reader
pages_viewed >= 3
```

**Users Who Contact You:**
```
contact_form_action = submitted
```

**What to track:**
- What path do users take before contacting?
- Which content leads to the most engagement?
- Average pages viewed before conversion

---

### 10. **Loyalty Funnel**

**New Visitors:**
```
user_loyalty = new
```

**Casual Visitors (2-4 visits):**
```
user_loyalty = casual
```

**Regular Visitors (5-9 visits):**
```
user_loyalty = regular
```

**Loyal Visitors (10+ visits):**
```
user_loyalty = loyal
```

**Analyze:**
- What percentage become returning visitors?
- What content brings people back?
- How long until someone becomes "loyal"?

---

## 📈 Key Metrics to Track

### Engagement Quality

1. **Average scroll depth by traffic source**
   - Shows which sources bring engaged users

2. **Pages viewed by device type**
   - Optimize for your most common devices

3. **Time on site for returning vs new visitors**
   - Understand repeat visitor engagement

### Conversion Insights

1. **Path to contact form submission**
   - Filter: `contact_form_action = submitted`
   - Watch the full session to see their journey

2. **Most common landing pages for converters**
   - Tag: `landing_page` + `contact_form_action = submitted`

3. **Average visits before contact**
   - Compare `visit_count` for users who submit contact form

### Audience Understanding

1. **Top referring platforms**
   - Tag: `ref_platform`
   - Focus your marketing efforts

2. **Device/OS breakdown**
   - Tags: `device_type`, `os`, `browser`
   - Ensure site works well on popular platforms

3. **Geographic distribution**
   - Tag: `timezone`
   - Understand where your audience is

### Content Performance

1. **Most viewed blog posts**
   - Tag: `blog_slug` + high `engagement_level`

2. **Case studies that drive engagement**
   - Tag: `case_study_id` + high `max_scroll_depth`

3. **Content that leads to return visits**
   - `is_returning_visitor = true` + their landing page on first visit

---

## 🔍 Advanced Filtering Examples

### Find Your Ideal Visitor Profile

```
engagement_level = high
AND user_type = case_study_viewer
AND visit_count >= 2
AND traffic_source = linkedin
```

This finds highly engaged users from LinkedIn who viewed your projects and returned.

### Identify Bouncing Users

```
pages_viewed = 1
AND time_on_site < 30
AND max_scroll_depth < 25
```

Watch these sessions to understand why they leave quickly.

### Find Decision-Makers

```
day_of_week = weekday
AND time_of_day = afternoon
AND device_type = desktop
AND (page_category = education OR user_type = recruiter)
```

Likely professionals reviewing your background during work hours.

---

## 🎓 Understanding User Types

The system auto-classifies visitors into types:

- **`contact_intent`**: Visited the contact page (high intent!)
- **`blog_reader`**: Viewed 2+ blog posts (interested in your thinking)
- **`case_study_viewer`**: Checked your project work (evaluating skills)
- **`recruiter`**: Looked at education/certifications (hiring intent)
- **`explorer`**: Browsing around (getting to know you)
- **`returning_visitor`**: Viewed 3+ unique pages across sessions

---

## 🛠️ Tips for Analysis

1. **Start with high-value users**
   - Filter for `contact_form_action = submitted` first
   - Work backwards to understand their journey

2. **Look for patterns**
   - Do successful conversions share common traits?
   - Similar traffic sources? Device types? Time of day?

3. **Identify drop-off points**
   - Where do users with high engagement stop?
   - What pages have high exit rates?

4. **A/B test understanding**
   - Compare behavior before/after content changes
   - Use date ranges to track improvements

5. **Watch actual recordings**
   - Numbers tell you what, recordings tell you why
   - Focus on high-engagement or conversion sessions

---

## 🚨 Privacy Note

All tracking is anonymous and privacy-friendly:
- No personally identifiable information (PII) is collected
- User IDs are randomly generated, not based on email/name
- All data stays within Microsoft Clarity
- No tracking code is visible in browser console (silent operation)

---

## 📞 Next Steps

1. **Log into Microsoft Clarity Dashboard**
2. **Go to your project's Recordings or Heatmaps section**
3. **Use the filter panel to apply any tags above**
4. **Watch sessions and identify patterns**
5. **Export data for deeper analysis**

The tracking is fully automated and requires no maintenance. All data appears in your Clarity dashboard immediately.
