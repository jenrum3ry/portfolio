export const ROUTES = {
  HOME: '/',
  CASE_STUDIES: '/case-studies',
  BLOG: '/blog',
  BLOG_POST: (slug: string) => `/blog/${slug}`,
  CONTACT: '/contact',
  ABOUT: '/about',
} as const;
