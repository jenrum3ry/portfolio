import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageLoader from "@/components/PageLoader";
import { ROUTES } from "@/lib/routes";
import { usePageTracking } from "@/hooks/use-analytics";

// Lazy load all pages for code splitting
const Index = lazy(() => import("@/pages/Index"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const EducationCertifications = lazy(() => import("@/pages/EducationCertifications"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Analytics wrapper component
function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  usePageTracking();
  return <>{children}</>;
}

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/portfolio">
        <AnalyticsProvider>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Index />} />
              <Route path={ROUTES.PROJECTS} element={<CaseStudies />} />
              <Route path={ROUTES.BLOG} element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
              <Route path={ROUTES.ABOUT} element={<Navigate to={ROUTES.HOME} replace />} />
              <Route path={ROUTES.EDUCATION_CERTIFICATIONS} element={<EducationCertifications />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnalyticsProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
