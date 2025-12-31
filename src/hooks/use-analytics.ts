import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, initScrollDepthTracking } from '@/lib/analytics';

/**
 * Hook to track page views automatically on route changes
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname);
  }, [location]);
};

/**
 * Hook to enable scroll depth tracking for a page
 */
export const useScrollTracking = () => {
  useEffect(() => {
    const cleanup = initScrollDepthTracking();
    return cleanup;
  }, []);
};
