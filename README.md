# Portfolio Website - Jen Rumery

A modern, responsive portfolio website showcasing professional experience, case studies, and blog content for Jen Rumery, a Product Manager with 15+ years of experience in healthcare technology.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

This project is built with:
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript (strict mode enabled)
- **React** - UI library (v18.3.1) with code splitting
- **shadcn-ui** - High-quality UI components built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing with lazy loading
- **React Helmet Async** - Dynamic SEO meta tags
- **React Hook Form + Zod** - Form handling and validation
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer, Layout)
│   │   ├── ui/              # shadcn-ui components (48 components)
│   │   ├── ErrorBoundary.tsx # Error handling wrapper
│   │   ├── PageLoader.tsx   # Loading state component
│   │   ├── SEO.tsx          # SEO meta tags component
│   │   └── ScrollToTop.tsx  # Route change scroll handler
│   ├── data/
│   │   ├── blogPosts.ts     # Blog post data
│   │   └── caseStudies.ts   # Case study data
│   ├── types/               # TypeScript type definitions
│   │   ├── blog.ts          # BlogPost interface
│   │   ├── caseStudy.ts     # CaseStudy interface
│   │   └── index.ts         # Type exports
│   ├── hooks/               # Custom React hooks
│   │   ├── use-toast.ts     # Toast notifications
│   │   └── use-mobile.tsx   # Mobile detection
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── routes.ts        # Centralized route constants
│   ├── pages/               # Page components (lazy loaded)
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Blog.tsx         # Blog listing
│   │   ├── BlogPost.tsx     # Individual blog post
│   │   ├── CaseStudies.tsx  # Case studies showcase
│   │   ├── Contact.tsx      # Contact form
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app with routing & error boundary
│   └── main.tsx             # Entry point with HelmetProvider
├── public/                  # Static assets
└── .env.local               # Environment variables (gitignored)
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript implementation with strict mode
- **Component Library** - Extensive shadcn-ui component collection (48 components)
- **Code Splitting** - Route-level lazy loading for optimal performance
- **SEO Optimized** - Dynamic meta tags with react-helmet-async
- **Error Handling** - Error boundaries for graceful error recovery
- **Routing** - React Router with `/portfolio` base path
- **Dark Mode Support** - Theme switching with next-themes
- **Professional Portfolio** - Showcases work experience, case studies, and blog posts
- **Performance** - Optimized bundle sizes (main: 182KB, pages: 2-15KB each)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Design System

- **UI Components**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Custom fade-in animations with staggered delays
- **Typography**: Custom display and body fonts
- **Color Scheme**: Professional color palette with warm shadows

## 🧭 Routes

The application uses React Router with these routes (defined in `src/lib/routes.ts`):

- `/` - Home page (ROUTES.HOME)
- `/case-studies` - Case studies showcase (ROUTES.CASE_STUDIES)
- `/blog` - Blog listing (ROUTES.BLOG)
- `/blog/:slug` - Individual blog post (ROUTES.BLOG_POST)
- `/contact` - Contact form (ROUTES.CONTACT)
- `/about` - About page (ROUTES.ABOUT)
- `*` - 404 Not Found page

All routes are lazy-loaded for optimal performance.

## 💻 Development Guidelines

### Path Aliases
- `@/` is aliased to `src/` directory
- Use absolute imports: `import Layout from "@/components/layout/Layout"`

### Component Structure
- Page components → `src/pages/` (lazy-loaded)
- Layout components → `src/components/layout/`
- UI components → `src/components/ui/` (shadcn-ui)
- Custom components → `src/components/`
- Type definitions → `src/types/`
- Data files → `src/data/`

### Best Practices
- **TypeScript**: Strict mode enabled - all types required
- **Routing**: Always use `ROUTES` constants from `src/lib/routes.ts`
- **Navigation**: Use `<Link>` from React Router (never `<a>` tags)
- **SEO**: Add `<SEO>` component to all pages with unique metadata
- **Imports**: Use TypeScript types from `src/types/`
- **Styling**: Tailwind CSS utility classes (mobile-first)
- **Icons**: Lucide React icon library
- **Animations**: Subtle, professional fade-ins with staggered delays
- **Error Handling**: Pages wrapped in ErrorBoundary
- **Loading States**: Use Suspense with PageLoader fallback

### Environment Variables
Create a `.env.local` file (gitignored) with:
```bash
VITE_WEB3FORMS_ACCESS_KEY=your-api-key-here
```

## 📝 Data Management

- **Blog posts**: `src/data/blogPosts.ts` (BlogPost type from `src/types/blog.ts`)
- **Case studies**: `src/data/caseStudies.ts` (CaseStudy type from `src/types/caseStudy.ts`)
- **Static data only**: No backend/API (except Web3Forms for contact form)
- **Type safety**: All data uses centralized TypeScript interfaces

## 🌐 Deployment

This project is configured for deployment with a `/portfolio` base path (e.g., GitHub Pages).

The router has `basename="/portfolio"` configured for proper routing in deployed environments.

**Important**: Set the `VITE_WEB3FORMS_ACCESS_KEY` environment variable in your deployment platform for the contact form to work.

### Bundle Sizes (Production Build)
- Main bundle: 182KB
- Layout chunk: 30KB
- Blog data: 43KB (lazy-loaded)
- Individual pages: 2-15KB each (lazy-loaded)

## 📄 License

Private project - all rights reserved.

## 👤 About

This portfolio showcases the work of Jen Rumery, highlighting expertise in:
- UX Research & Teardown Methodology
- AI Product Development (0-to-1 building)
- OpenAPI Platform Management
- Cross-Functional Product Leadership

---

For more detailed technical documentation, see [CLAUDE.MD](./CLAUDE.MD).
