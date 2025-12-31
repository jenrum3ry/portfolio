/**
 * Analytics utility for tracking page views and custom events
 * Supports Microsoft Clarity and custom event tracking
 */

// Event types for custom tracking
export enum AnalyticsEvent {
  // Page views
  PAGE_VIEW = 'page_view',

  // Navigation
  NAV_CLICK = 'nav_click',

  // Project interactions
  PROJECT_VIEW = 'project_view',
  PROJECT_CLICK = 'project_click',

  // Blog interactions
  BLOG_POST_VIEW = 'blog_post_view',
  BLOG_POST_CLICK = 'blog_post_click',

  // Contact interactions
  CONTACT_FORM_VIEW = 'contact_form_view',
  CONTACT_FORM_SUBMIT = 'contact_form_submit',

  // General interactions
  EXTERNAL_LINK_CLICK = 'external_link_click',
  SCROLL_DEPTH = 'scroll_depth',
}

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track a custom event
 */
export const trackEvent = (
  eventName: AnalyticsEvent | string,
  properties?: EventProperties
) => {
  try {
    // Microsoft Clarity custom event tracking
    if (typeof window !== 'undefined' && 'clarity' in window) {
      const clarity = (window as any).clarity;
      if (typeof clarity === 'function') {
        clarity('event', eventName, properties);
      }
    }

    // Log in development for debugging
    if (import.meta.env.DEV) {
      console.log('[Analytics]', eventName, properties);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track a page view
 */
export const trackPageView = (path: string, title?: string) => {
  trackEvent(AnalyticsEvent.PAGE_VIEW, {
    path,
    title: title || document.title,
    referrer: document.referrer,
  });
};

/**
 * Track navigation click
 */
export const trackNavigation = (destination: string) => {
  trackEvent(AnalyticsEvent.NAV_CLICK, {
    destination,
  });
};

/**
 * Track project/case study view
 */
export const trackProjectView = (projectName: string, projectId?: string) => {
  trackEvent(AnalyticsEvent.PROJECT_VIEW, {
    project_name: projectName,
    project_id: projectId,
  });
};

/**
 * Track project/case study click
 */
export const trackProjectClick = (projectName: string, projectId?: string) => {
  trackEvent(AnalyticsEvent.PROJECT_CLICK, {
    project_name: projectName,
    project_id: projectId,
  });
};

/**
 * Track blog post view
 */
export const trackBlogPostView = (postTitle: string, postSlug: string) => {
  trackEvent(AnalyticsEvent.BLOG_POST_VIEW, {
    post_title: postTitle,
    post_slug: postSlug,
  });
};

/**
 * Track blog post click from list
 */
export const trackBlogPostClick = (postTitle: string, postSlug: string) => {
  trackEvent(AnalyticsEvent.BLOG_POST_CLICK, {
    post_title: postTitle,
    post_slug: postSlug,
  });
};

/**
 * Track contact form interaction
 */
export const trackContactForm = (action: 'view' | 'submit') => {
  trackEvent(
    action === 'view'
      ? AnalyticsEvent.CONTACT_FORM_VIEW
      : AnalyticsEvent.CONTACT_FORM_SUBMIT
  );
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, label?: string) => {
  trackEvent(AnalyticsEvent.EXTERNAL_LINK_CLICK, {
    url,
    label,
  });
};

/**
 * Track scroll depth milestones
 */
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
  trackEvent(AnalyticsEvent.SCROLL_DEPTH, {
    depth_percentage: depth,
  });
};

/**
 * Initialize scroll depth tracking
 */
export const initScrollDepthTracking = () => {
  if (typeof window === 'undefined') return;

  const trackedDepths = new Set<number>();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = Math.round(
      ((scrollTop + windowHeight) / documentHeight) * 100
    );

    // Track at 25%, 50%, 75%, 100% milestones
    [25, 50, 75, 100].forEach((milestone) => {
      if (scrollPercentage >= milestone && !trackedDepths.has(milestone)) {
        trackedDepths.add(milestone);
        trackScrollDepth(milestone as 25 | 50 | 75 | 100);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
