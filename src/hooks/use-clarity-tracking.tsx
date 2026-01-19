/**
 * React Hooks for Microsoft Clarity Tracking
 *
 * This module provides React hooks for automatic session tracking,
 * engagement monitoring, and user behavior analytics.
 */

import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  isClarityAvailable,
  trackPageView,
  trackBlogPostView as trackBlogPostViewCore,
  trackCaseStudyView as trackCaseStudyViewCore,
  trackUTMParameters,
  getTrafficSource,
  setTag,
  recordVisitedPage,
  recordSessionStart,
  recordInteraction,
  updateMaxScrollDepth,
  updateEngagementTags,
  getPageCategory,
  initializeUserTracking,
  getUserLoyaltyLevel,
} from '@/lib/clarity';

// ============================================================================
// Main Tracking Hook
// ============================================================================

/**
 * Main Clarity tracking hook - tracks page views, UTM parameters, and engagement
 *
 * Add this hook to your App component to enable automatic tracking:
 *
 * @example
 * function App() {
 *   useClarityTracking();
 *   return <Router>...</Router>;
 * }
 */
export const useClarityTracking = () => {
  const location = useLocation();
  const hasInitialized = useRef(false);

  // Initialize session on mount
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Wait for Clarity to load
    const initInterval = setInterval(() => {
      if (isClarityAvailable()) {
        clearInterval(initInterval);
        initializeSession();
      }
    }, 100);

    // Cleanup after 10 seconds if Clarity doesn't load
    const timeout = setTimeout(() => {
      clearInterval(initInterval);
    }, 10000);

    return () => {
      clearInterval(initInterval);
      clearTimeout(timeout);
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!isClarityAvailable()) return;

    const pathname = location.pathname;
    const category = getPageCategory(pathname);

    // Track page view
    trackPageView(pathname);

    // Record visited page
    recordVisitedPage(category);

    // Update engagement tags
    updateEngagementTags();
  }, [location.pathname]);

  // Track scroll depth with milestone tracking
  useEffect(() => {
    if (!isClarityAvailable()) return;

    const milestonesReached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      updateMaxScrollDepth(scrollPercent);

      // Update engagement tags at key milestones (only once per milestone)
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !milestonesReached.has(milestone)) {
          milestonesReached.add(milestone);
          updateEngagementTags();
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track interactions (clicks) - update engagement tags periodically, not on every click
  useEffect(() => {
    if (!isClarityAvailable()) return;

    let clickCount = 0;
    const ENGAGEMENT_UPDATE_THRESHOLD = 3; // Update engagement every 3 clicks

    const handleClick = () => {
      recordInteraction();
      clickCount++;

      // Only update engagement tags every N clicks to reduce overhead
      if (clickCount >= ENGAGEMENT_UPDATE_THRESHOLD) {
        updateEngagementTags();
        clickCount = 0;
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

/**
 * Initialize Clarity session with UTM parameters and traffic source
 */
const initializeSession = () => {
  // Initialize user identification and visit tracking
  const userMetadata = initializeUserTracking();

  // Record session start time
  recordSessionStart();

  // Track UTM parameters
  trackUTMParameters();

  // Track traffic source
  const source = getTrafficSource();
  setTag('traffic_source', source);

  // Track user loyalty level
  const loyaltyLevel = getUserLoyaltyLevel();
  setTag('user_loyalty', loyaltyLevel);

  // Initial engagement update
  updateEngagementTags();
};

// ============================================================================
// Blog Post Tracking Hook
// ============================================================================

/**
 * Track blog post views with automatic engagement monitoring
 *
 * @param slug - Blog post slug
 * @param title - Blog post title
 *
 * @example
 * function BlogPost() {
 *   const { slug } = useParams();
 *   const post = blogPosts.find(p => p.slug === slug);
 *
 *   useBlogPostTracking(post?.slug || '', post?.title || '');
 *
 *   return <article>...</article>;
 * }
 */
export const useBlogPostTracking = (slug: string, title: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!slug || !title || hasTracked.current) return;

    // Wait for Clarity to be available
    const trackInterval = setInterval(() => {
      if (isClarityAvailable()) {
        clearInterval(trackInterval);
        trackBlogPostViewCore(slug, title);
        hasTracked.current = true;
      }
    }, 100);

    // Cleanup after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(trackInterval);
    }, 5000);

    return () => {
      clearInterval(trackInterval);
      clearTimeout(timeout);
    };
  }, [slug, title]);
};

// ============================================================================
// Case Study Tracking Hook
// ============================================================================

/**
 * Track case study views with automatic engagement monitoring
 *
 * @param studyId - Case study ID
 * @param title - Case study title
 *
 * @example
 * function CaseStudyCard({ study }) {
 *   useCaseStudyTracking(study.id, study.title);
 *   return <div>...</div>;
 * }
 */
export const useCaseStudyTracking = (studyId: string, title: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!studyId || !title || hasTracked.current) return;

    // Wait for Clarity to be available
    const trackInterval = setInterval(() => {
      if (isClarityAvailable()) {
        clearInterval(trackInterval);
        trackCaseStudyViewCore(studyId, title);
        hasTracked.current = true;
      }
    }, 100);

    // Cleanup after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(trackInterval);
    }, 5000);

    return () => {
      clearInterval(trackInterval);
      clearTimeout(timeout);
    };
  }, [studyId, title]);
};

// ============================================================================
// Standalone Tracking Functions
// ============================================================================

/**
 * Track case study view (non-hook version for onClick handlers)
 *
 * @param studyId - Case study ID
 * @param title - Case study title
 *
 * @example
 * <button onClick={() => trackCaseStudyView('ai-scribe', 'AI Scribe Platform')}>
 *   View Case Study
 * </button>
 */
export const trackCaseStudyView = (studyId: string, title: string): void => {
  trackCaseStudyViewCore(studyId, title);
};

/**
 * Track blog post view (non-hook version)
 *
 * @param slug - Blog post slug
 * @param title - Blog post title
 */
export const trackBlogPostView = (slug: string, title: string): void => {
  trackBlogPostViewCore(slug, title);
};

// ============================================================================
// Scroll Depth Tracking Hook
// ============================================================================

/**
 * Enhanced scroll depth tracking with milestone callbacks
 *
 * @param onMilestone - Optional callback for scroll milestones (25%, 50%, 75%, 100%)
 *
 * @example
 * function ArticlePage() {
 *   useScrollDepthTracking((depth) => {
 *     console.log(`User scrolled to ${depth}%`);
 *   });
 *   return <article>...</article>;
 * }
 */
export const useScrollDepthTracking = (
  onMilestone?: (depth: number) => void
) => {
  const milestonesReached = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.floor((scrollTop / docHeight) * 100) : 0;

      // Update max scroll depth
      updateMaxScrollDepth(scrollPercent);

      // Check for milestones
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !milestonesReached.current.has(milestone)) {
          milestonesReached.current.add(milestone);

          // Call callback if provided
          if (onMilestone) {
            onMilestone(milestone);
          }

          // Update engagement tags
          updateEngagementTags();
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onMilestone]);
};

// ============================================================================
// Form Tracking Hook
// ============================================================================

/**
 * Track form interactions (focus, blur, submit)
 *
 * @param formName - Name/identifier for the form
 *
 * @example
 * function ContactForm() {
 *   const formRef = useFormTracking('contact_form');
 *
 *   return (
 *     <form ref={formRef} onSubmit={handleSubmit}>
 *       ...
 *     </form>
 *   );
 * }
 */
export const useFormTracking = (formName: string) => {
  const formRef = useRef<HTMLFormElement>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleFocus = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        setTag(`${formName}_opened`, true);
        recordInteraction();
        updateEngagementTags();
      }
    };

    const handleInput = () => {
      setTag(`${formName}_filled`, true);
      recordInteraction();
    };

    const handleSubmit = () => {
      setTag(`${formName}_submitted`, true);
      recordInteraction();
      updateEngagementTags();
    };

    form.addEventListener('focus', handleFocus, true);
    form.addEventListener('input', handleInput, { once: true });
    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('focus', handleFocus, true);
      form.removeEventListener('input', handleInput);
      form.removeEventListener('submit', handleSubmit);
    };
  }, [formName]);

  return formRef;
};

// ============================================================================
// External Link Tracking Hook
// ============================================================================

/**
 * Track external link clicks automatically
 *
 * @example
 * function Footer() {
 *   useExternalLinkTracking();
 *
 *   return (
 *     <footer>
 *       <a href="https://linkedin.com/in/jenrumery">LinkedIn</a>
 *     </footer>
 *   );
 * }
 */
export const useExternalLinkTracking = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Check if external link
      const isExternal =
        href.startsWith('http') &&
        !href.includes(window.location.hostname);

      if (isExternal) {
        const context = link.getAttribute('data-context') || 'unknown';
        setTag('external_link_clicked', href);
        setTag('link_context', context);
        recordInteraction();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

// ============================================================================
// Time on Page Tracking Hook
// ============================================================================

/**
 * Track time spent on current page
 *
 * @param onInterval - Optional callback called every interval (default: 30s)
 * @param intervalSeconds - Interval in seconds (default: 30)
 *
 * @example
 * function ArticlePage() {
 *   useTimeOnPageTracking((seconds) => {
 *     console.log(`User has been on page for ${seconds}s`);
 *   }, 30);
 *
 *   return <article>...</article>;
 * }
 */
export const useTimeOnPageTracking = (
  onInterval?: (seconds: number) => void,
  intervalSeconds: number = 30
) => {
  const startTime = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);

      // Update engagement tags
      updateEngagementTags();

      // Call callback if provided
      if (onInterval) {
        onInterval(timeOnPage);
      }
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [onInterval, intervalSeconds]);
};

// ============================================================================
// Visibility Tracking Hook
// ============================================================================

/**
 * Track page visibility changes (tab focus/blur)
 *
 * @example
 * function App() {
 *   useVisibilityTracking();
 *   return <div>...</div>;
 * }
 */
export const useVisibilityTracking = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === 'visible';
      setTag('page_visible', isVisible);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
};

// ============================================================================
// Custom Event Tracking
// ============================================================================

/**
 * Create a custom event tracker
 *
 * @param eventName - Event name to track
 * @returns Callback function to trigger the event
 *
 * @example
 * function VideoPlayer() {
 *   const trackVideoPlay = useEventTracking('video_played');
 *   const trackVideoPause = useEventTracking('video_paused');
 *
 *   return (
 *     <video
 *       onPlay={() => trackVideoPlay({ video_id: 'intro' })}
 *       onPause={() => trackVideoPause({ video_id: 'intro' })}
 *     />
 *   );
 * }
 */
export const useEventTracking = (eventName: string) => {
  return useCallback(
    (metadata?: Record<string, string | number | boolean>) => {
      setTag(eventName, true);

      if (metadata) {
        Object.entries(metadata).forEach(([key, value]) => {
          setTag(`${eventName}_${key}`, value);
        });
      }

      recordInteraction();
      updateEngagementTags();
    },
    [eventName]
  );
};
