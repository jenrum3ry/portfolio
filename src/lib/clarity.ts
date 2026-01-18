/**
 * Microsoft Clarity Tracking Utilities
 *
 * This module provides TypeScript utilities for Microsoft Clarity session tracking,
 * custom tagging, and user behavior analytics.
 *
 * @see https://docs.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
 */

// ============================================================================
// Type Definitions
// ============================================================================

/**
 * Clarity API interface available on the window object
 */
interface ClarityAPI {
  (command: 'set', key: string, value: string | number | boolean): void;
  (command: 'identify', userId: string, sessionId?: string, pageId?: string, friendlyName?: string): void;
  (command: 'consent'): void;
  (command: 'upgrade', reason: string): void;
  q?: Array<[string, ...any[]]>;
}

declare global {
  interface Window {
    clarity?: ClarityAPI;
  }
}

/**
 * Page categories for session tagging
 */
export type PageCategory =
  | 'home'
  | 'projects'
  | 'blog_index'
  | 'blog_post'
  | 'contact'
  | 'education'
  | 'not_found';

/**
 * User type classifications
 */
export type UserType =
  | 'blog_reader'
  | 'case_study_viewer'
  | 'contact_intent'
  | 'recruiter'
  | 'explorer'
  | 'returning_visitor';

/**
 * Engagement level indicators
 */
export type EngagementLevel = 'low' | 'medium' | 'high';

/**
 * Traffic source types
 */
export type TrafficSource =
  | 'linkedin'
  | 'github'
  | 'twitter'
  | 'direct'
  | 'search'
  | 'referral'
  | 'unknown';

/**
 * UTM parameters from URL
 */
export interface UTMParameters {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

/**
 * Session metrics for engagement calculation
 */
export interface SessionMetrics {
  pagesViewed: number;
  timeOnSite: number; // in seconds
  scrollDepth: number; // percentage
  interactions: number; // clicks, form submissions, etc.
}

// ============================================================================
// Core Clarity Functions
// ============================================================================

/**
 * Check if Microsoft Clarity is loaded and available
 */
export const isClarityAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.clarity === 'function';
};

/**
 * Set a custom tag in Clarity session
 *
 * @param key - Tag key (alphanumeric, max 32 chars)
 * @param value - Tag value (string, number, or boolean)
 *
 * @example
 * setTag('page_category', 'blog_post');
 * setTag('engagement_level', 'high');
 */
export const setTag = (key: string, value: string | number | boolean): void => {
  if (!isClarityAvailable()) {
    if (import.meta.env.DEV) {
      console.warn('[Clarity] Not available. Tag not set:', key, value);
    }
    return;
  }

  try {
    window.clarity!('set', key, value);

    if (import.meta.env.DEV) {
      console.log(`[Clarity] Tagged session: ${key}=${value}`);
    }
  } catch (error) {
    console.error('[Clarity] Error setting tag:', error);
  }
};

/**
 * Set multiple tags at once
 *
 * @param tags - Object with key-value pairs
 *
 * @example
 * setMultipleTags({
 *   page_category: 'blog_post',
 *   engagement_level: 'high',
 *   user_type: 'blog_reader'
 * });
 */
export const setMultipleTags = (tags: Record<string, string | number | boolean>): void => {
  Object.entries(tags).forEach(([key, value]) => {
    setTag(key, value);
  });
};

/**
 * Identify a user session with a custom ID
 *
 * @param userId - Unique user identifier (hashed email, user ID, etc.)
 * @param sessionId - Optional session identifier
 * @param pageId - Optional page identifier
 * @param friendlyName - Optional friendly name for the user
 *
 * @example
 * identifyUser('user_12345', undefined, undefined, 'Jane Doe');
 */
export const identifyUser = (
  userId: string,
  sessionId?: string,
  pageId?: string,
  friendlyName?: string
): void => {
  if (!isClarityAvailable()) {
    if (import.meta.env.DEV) {
      console.warn('[Clarity] Not available. User not identified:', userId);
    }
    return;
  }

  try {
    window.clarity!('identify', userId, sessionId, pageId, friendlyName);

    if (import.meta.env.DEV) {
      console.log(`[Clarity] Identified user: ${userId}`);
    }
  } catch (error) {
    console.error('[Clarity] Error identifying user:', error);
  }
};

/**
 * Mark a session as requiring consent (GDPR compliance)
 */
export const requestConsent = (): void => {
  if (!isClarityAvailable()) {
    return;
  }

  try {
    window.clarity!('consent');

    if (import.meta.env.DEV) {
      console.log('[Clarity] Consent requested');
    }
  } catch (error) {
    console.error('[Clarity] Error requesting consent:', error);
  }
};

/**
 * Upgrade session priority (for important user journeys)
 *
 * @param reason - Reason for upgrading the session
 *
 * @example
 * upgradeSession('form_submission');
 */
export const upgradeSession = (reason: string): void => {
  if (!isClarityAvailable()) {
    return;
  }

  try {
    window.clarity!('upgrade', reason);

    if (import.meta.env.DEV) {
      console.log(`[Clarity] Session upgraded: ${reason}`);
    }
  } catch (error) {
    console.error('[Clarity] Error upgrading session:', error);
  }
};

// ============================================================================
// URL & UTM Parameter Handling
// ============================================================================

/**
 * Extract UTM parameters from URL
 *
 * @param url - URL string or Location object
 * @returns UTM parameters object
 */
export const getUTMParameters = (url: string | Location = window.location): UTMParameters => {
  const searchParams = typeof url === 'string'
    ? new URLSearchParams(new URL(url).search)
    : new URLSearchParams(url.search);

  return {
    source: searchParams.get('utm_source') || undefined,
    medium: searchParams.get('utm_medium') || undefined,
    campaign: searchParams.get('utm_campaign') || undefined,
    term: searchParams.get('utm_term') || undefined,
    content: searchParams.get('utm_content') || undefined,
  };
};

/**
 * Track UTM parameters as Clarity tags
 *
 * @param utmParams - UTM parameters to track
 */
export const trackUTMParameters = (utmParams: UTMParameters = getUTMParameters()): void => {
  const tags: Record<string, string> = {};

  if (utmParams.source) tags.utm_source = utmParams.source;
  if (utmParams.medium) tags.utm_medium = utmParams.medium;
  if (utmParams.campaign) tags.utm_campaign = utmParams.campaign;
  if (utmParams.term) tags.utm_term = utmParams.term;
  if (utmParams.content) tags.utm_content = utmParams.content;

  if (Object.keys(tags).length > 0) {
    setMultipleTags(tags);

    if (import.meta.env.DEV) {
      console.log('[Clarity] UTM parameters tracked:', tags);
    }
  }
};

/**
 * Determine traffic source from URL and referrer
 *
 * @param url - Current URL
 * @param referrer - Document referrer
 * @returns Traffic source classification
 */
export const getTrafficSource = (
  url: string | Location = window.location,
  referrer: string = document.referrer
): TrafficSource => {
  const utmSource = getUTMParameters(url).source?.toLowerCase();

  // Check UTM source first
  if (utmSource) {
    if (utmSource.includes('linkedin')) return 'linkedin';
    if (utmSource.includes('github')) return 'github';
    if (utmSource.includes('twitter') || utmSource.includes('x.com')) return 'twitter';
  }

  // Check referrer
  if (referrer) {
    const refLower = referrer.toLowerCase();
    if (refLower.includes('linkedin.com')) return 'linkedin';
    if (refLower.includes('github.com')) return 'github';
    if (refLower.includes('twitter.com') || refLower.includes('x.com')) return 'twitter';
    if (refLower.includes('google.com') || refLower.includes('bing.com')) return 'search';
    return 'referral';
  }

  // No referrer = direct traffic
  return 'direct';
};

// ============================================================================
// Page Category Detection
// ============================================================================

/**
 * Determine page category from pathname
 *
 * @param pathname - URL pathname
 * @returns Page category
 */
export const getPageCategory = (pathname: string): PageCategory => {
  // Normalize pathname (remove trailing slash, handle base path)
  const normalizedPath = pathname.replace(/\/portfolio\/?/, '/').replace(/\/$/, '') || '/';

  if (normalizedPath === '/') return 'home';
  if (normalizedPath === '/projects') return 'projects';
  if (normalizedPath === '/blog') return 'blog_index';
  if (normalizedPath.startsWith('/blog/')) return 'blog_post';
  if (normalizedPath === '/contact') return 'contact';
  if (normalizedPath === '/education-certifications') return 'education';

  return 'not_found';
};

// ============================================================================
// Engagement Tracking
// ============================================================================

/**
 * Calculate engagement level based on session metrics
 *
 * @param metrics - Session metrics
 * @returns Engagement level classification
 *
 * @example
 * calculateEngagementLevel({
 *   pagesViewed: 5,
 *   timeOnSite: 180,
 *   scrollDepth: 75,
 *   interactions: 3
 * }); // Returns 'high'
 */
export const calculateEngagementLevel = (metrics: SessionMetrics): EngagementLevel => {
  let score = 0;

  // Pages viewed (max 3 points)
  if (metrics.pagesViewed >= 5) score += 3;
  else if (metrics.pagesViewed >= 3) score += 2;
  else if (metrics.pagesViewed >= 2) score += 1;

  // Time on site (max 3 points)
  if (metrics.timeOnSite >= 180) score += 3; // 3+ minutes
  else if (metrics.timeOnSite >= 60) score += 2; // 1+ minute
  else if (metrics.timeOnSite >= 30) score += 1; // 30+ seconds

  // Scroll depth (max 2 points)
  if (metrics.scrollDepth >= 75) score += 2;
  else if (metrics.scrollDepth >= 50) score += 1;

  // Interactions (max 2 points)
  if (metrics.interactions >= 3) score += 2;
  else if (metrics.interactions >= 1) score += 1;

  // Total score out of 10
  if (score >= 7) return 'high';
  if (score >= 4) return 'medium';
  return 'low';
};

/**
 * Classify user type based on behavior
 *
 * @param visitedPages - Array of page categories visited
 * @returns User type classification
 */
export const classifyUserType = (visitedPages: PageCategory[]): UserType => {
  const pageSet = new Set(visitedPages);
  const blogPostCount = visitedPages.filter(p => p === 'blog_post').length;
  const projectCount = visitedPages.filter(p => p === 'projects').length;

  // Contact intent (visited contact page)
  if (pageSet.has('contact')) {
    return 'contact_intent';
  }

  // Blog reader (2+ blog posts)
  if (blogPostCount >= 2) {
    return 'blog_reader';
  }

  // Case study viewer (viewed projects)
  if (projectCount >= 1 || pageSet.has('projects')) {
    return 'case_study_viewer';
  }

  // Recruiter (viewed education/certifications)
  if (pageSet.has('education')) {
    return 'recruiter';
  }

  // Returning visitor (viewed 3+ unique pages)
  if (pageSet.size >= 3) {
    return 'returning_visitor';
  }

  // Default: explorer
  return 'explorer';
};

// ============================================================================
// Specific Event Tracking
// ============================================================================

/**
 * Track page view with category tagging
 *
 * @param pathname - Page pathname
 */
export const trackPageView = (pathname: string): void => {
  const category = getPageCategory(pathname);
  setTag('page_category', category);

  if (import.meta.env.DEV) {
    console.log(`[Clarity] Page view tracked: ${pathname} -> ${category}`);
  }
};

/**
 * Track blog post view
 *
 * @param slug - Blog post slug
 * @param title - Blog post title
 */
export const trackBlogPostView = (slug: string, title: string): void => {
  setMultipleTags({
    page_category: 'blog_post',
    blog_slug: slug,
    content_type: 'blog',
  });

  upgradeSession('blog_post_view');

  if (import.meta.env.DEV) {
    console.log(`[Clarity] Blog post viewed: ${title} (${slug})`);
  }
};

/**
 * Track case study view
 *
 * @param studyId - Case study ID
 * @param title - Case study title
 */
export const trackCaseStudyView = (studyId: string, title: string): void => {
  setMultipleTags({
    page_category: 'projects',
    case_study_id: studyId,
    content_type: 'case_study',
  });

  upgradeSession('case_study_view');

  if (import.meta.env.DEV) {
    console.log(`[Clarity] Case study viewed: ${title} (${studyId})`);
  }
};

/**
 * Track contact form interaction
 *
 * @param action - Form action (opened, filled, submitted)
 */
export const trackContactFormAction = (action: 'opened' | 'filled' | 'submitted'): void => {
  setTag('contact_form_action', action);

  if (action === 'submitted') {
    upgradeSession('contact_form_submission');
  }

  if (import.meta.env.DEV) {
    console.log(`[Clarity] Contact form: ${action}`);
  }
};

/**
 * Track external link click
 *
 * @param url - External URL
 * @param context - Context of the link (e.g., 'case_study', 'social_media')
 */
export const trackExternalLinkClick = (url: string, context?: string): void => {
  setMultipleTags({
    external_link_clicked: url,
    ...(context && { link_context: context }),
  });

  if (import.meta.env.DEV) {
    console.log(`[Clarity] External link clicked: ${url} (${context || 'no context'})`);
  }
};

// ============================================================================
// Session Storage Helpers
// ============================================================================

const STORAGE_KEYS = {
  VISITED_PAGES: 'clarity_visited_pages',
  SESSION_START: 'clarity_session_start',
  INTERACTIONS: 'clarity_interactions',
  MAX_SCROLL: 'clarity_max_scroll',
} as const;

/**
 * Add visited page to session storage
 */
export const recordVisitedPage = (category: PageCategory): void => {
  try {
    const visited = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.VISITED_PAGES) || '[]') as PageCategory[];
    visited.push(category);
    sessionStorage.setItem(STORAGE_KEYS.VISITED_PAGES, JSON.stringify(visited));
  } catch (error) {
    console.error('[Clarity] Error recording visited page:', error);
  }
};

/**
 * Get all visited pages from session storage
 */
export const getVisitedPages = (): PageCategory[] => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEYS.VISITED_PAGES) || '[]');
  } catch (error) {
    return [];
  }
};

/**
 * Record session start time
 */
export const recordSessionStart = (): void => {
  if (!sessionStorage.getItem(STORAGE_KEYS.SESSION_START)) {
    sessionStorage.setItem(STORAGE_KEYS.SESSION_START, Date.now().toString());
  }
};

/**
 * Get session duration in seconds
 */
export const getSessionDuration = (): number => {
  const startTime = sessionStorage.getItem(STORAGE_KEYS.SESSION_START);
  if (!startTime) return 0;
  return Math.floor((Date.now() - parseInt(startTime, 10)) / 1000);
};

/**
 * Increment interaction count
 */
export const recordInteraction = (): void => {
  try {
    const count = parseInt(sessionStorage.getItem(STORAGE_KEYS.INTERACTIONS) || '0', 10);
    sessionStorage.setItem(STORAGE_KEYS.INTERACTIONS, (count + 1).toString());
  } catch (error) {
    console.error('[Clarity] Error recording interaction:', error);
  }
};

/**
 * Get interaction count
 */
export const getInteractionCount = (): number => {
  try {
    return parseInt(sessionStorage.getItem(STORAGE_KEYS.INTERACTIONS) || '0', 10);
  } catch (error) {
    return 0;
  }
};

/**
 * Update maximum scroll depth
 */
export const updateMaxScrollDepth = (depth: number): void => {
  try {
    const maxDepth = parseInt(sessionStorage.getItem(STORAGE_KEYS.MAX_SCROLL) || '0', 10);
    if (depth > maxDepth) {
      sessionStorage.setItem(STORAGE_KEYS.MAX_SCROLL, Math.floor(depth).toString());
    }
  } catch (error) {
    console.error('[Clarity] Error updating scroll depth:', error);
  }
};

/**
 * Get maximum scroll depth
 */
export const getMaxScrollDepth = (): number => {
  try {
    return parseInt(sessionStorage.getItem(STORAGE_KEYS.MAX_SCROLL) || '0', 10);
  } catch (error) {
    return 0;
  }
};

/**
 * Get current session metrics
 */
export const getSessionMetrics = (): SessionMetrics => {
  return {
    pagesViewed: getVisitedPages().length,
    timeOnSite: getSessionDuration(),
    scrollDepth: getMaxScrollDepth(),
    interactions: getInteractionCount(),
  };
};

/**
 * Update engagement tags based on current metrics
 */
export const updateEngagementTags = (): void => {
  const metrics = getSessionMetrics();
  const engagementLevel = calculateEngagementLevel(metrics);
  const visitedPages = getVisitedPages();
  const userType = classifyUserType(visitedPages);

  setMultipleTags({
    engagement_level: engagementLevel,
    user_type: userType,
    pages_viewed: metrics.pagesViewed,
    time_on_site: metrics.timeOnSite,
    max_scroll_depth: metrics.scrollDepth,
  });

  if (import.meta.env.DEV) {
    console.log('[Clarity] Engagement tags updated:', {
      engagementLevel,
      userType,
      metrics,
    });
  }
};
