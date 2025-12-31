# Portfolio Project - Jen Rumery

## Project Overview
This is a personal portfolio website for Jen Rumery, a Product Manager with 15+ years of experience in healthcare technology. The portfolio showcases work experience, projects, blog posts, and professional credentials.

## Tech Stack
- **Build Tool**: Vite (v5.4.19)
- **Framework**: React 18.3.1 with TypeScript 5.8.3
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.30.1
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes (dark mode support)
- **Animations**: tailwindcss-animate

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer, Layout)
│   │   ├── ui/              # shadcn-ui components
│   │   └── NavLink.tsx      # Custom navigation link component
│   ├── data/
│   │   └── blogPosts.ts     # Blog post data
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   ├── pages/               # Page components (route handlers)
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Blog.tsx         # Blog listing
│   │   ├── BlogPost.tsx     # Individual blog post
│   │   ├── CaseStudies.tsx  # Projects showcase
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
└── [config files]           # Various config files
```

## Routes
The application uses React Router with a `/portfolio` base path:
- `/` - Home page (Index.tsx)
- `/projects` - Projects showcase
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/contact` - Contact page
- `/about` - About page
- `*` - 404 Not Found page

## Key Features

### Home Page (Index.tsx)
- Hero section with professional introduction
- Stats section (experience, user studies, 0-to-1 builder)
- "What I Do" section highlighting systematic user research approach
- Education & Credentials section with MBA badges and certifications
- Featured work preview with 4 key projects
- CTA section

### Design System
- Uses shadcn-ui components for consistent UI
- Custom color scheme with primary/secondary colors
- Typography: Display font for headings, body font for text
- Custom animations: `animate-fade-in` with staggered delays
- Warm shadow effect: `shadow-warm`
- Responsive design: mobile-first approach

### Styling Conventions
- Tailwind CSS utility classes
- Component variants using `class-variance-authority`
- `cn()` utility from `lib/utils.ts` for conditional classes
- Custom theme configuration in `tailwind.config.ts`

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Important Notes

### Path Aliases
- `@/` is aliased to `src/` directory
- Use absolute imports: `import Layout from "@/components/layout/Layout"`

### Component Structure
- Page components in `src/pages/`
- Layout components in `src/components/layout/`
- Reusable UI components in `src/components/ui/` (shadcn-ui)
- Custom components in `src/components/`

### Data Management
- Blog posts are stored in `src/data/blogPosts.ts`
- No backend/API - static data only
- Projects and credentials are embedded in page components

### Routing
- Router has `basename="/portfolio"` for GitHub Pages deployment
- Use React Router `<Link>` components for navigation
- Never use `<a>` tags for internal navigation
- **GitHub Pages SPA Fix**: The deploy workflow copies `index.html` to `404.html` after build
  - This enables direct navigation to client-side routes (e.g., `/portfolio/blog`)
  - Without this, GitHub Pages returns 404 for non-root routes

### Best Practices
- Follow existing component patterns
- Use TypeScript for type safety
- Maintain consistent spacing and layout patterns
- Use Lucide React icons (imported as needed)
- Keep animations subtle and professional
- Ensure mobile responsiveness

## Credentials & Badges
The portfolio displays verified credentials:
- MBA badges from UW-Madison (via Badgr API)
- Advanced Certified Scrum Product Owner (A-CSPO) from Scrum Alliance
- All badges link to verification pages

## Contact Information
The contact page provides ways to reach Jen Rumery for professional opportunities.

## Key Areas of Work Featured
- UX Teardown Methodology (systematic user research)
- AI Product Development (0-to-1 building)
- OpenAPI Platform Management (integrations, developer experience)
- Cross-Functional Product Leadership (distributed teams, execution)

## Future Enhancement Considerations
- Blog content is currently stored in TypeScript files - consider CMS integration
- Projects could be expanded with dedicated detail pages
- Contact form could be integrated with a backend service
- Analytics integration for tracking visitor engagement
