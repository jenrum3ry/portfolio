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
- **TypeScript** - Type-safe JavaScript
- **React** - UI library (v18.3.1)
- **shadcn-ui** - High-quality UI components built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Hook Form + Zod** - Form handling and validation
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── ui/              # shadcn-ui components
│   │   └── NavLink.tsx      # Custom navigation component
│   ├── data/
│   │   └── blogPosts.ts     # Blog post data
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Blog.tsx         # Blog listing
│   │   ├── BlogPost.tsx     # Individual blog post
│   │   ├── CaseStudies.tsx  # Case studies
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app with routing
│   └── main.tsx             # Entry point
└── public/                  # Static assets
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript implementation
- **Component Library** - Extensive shadcn-ui component collection
- **Routing** - React Router with `/portfolio` base path
- **Dark Mode Support** - Theme switching with next-themes
- **Professional Portfolio** - Showcases work experience, case studies, and blog posts
- **Verified Credentials** - MBA badges and professional certifications

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

The application uses React Router with these routes:

- `/` - Home page
- `/case-studies` - Case studies showcase
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/contact` - Contact page
- `/about` - About page
- `*` - 404 Not Found page

## 💻 Development Guidelines

### Path Aliases
- `@/` is aliased to `src/` directory
- Use absolute imports: `import Layout from "@/components/layout/Layout"`

### Component Structure
- Page components → `src/pages/`
- Layout components → `src/components/layout/`
- UI components → `src/components/ui/` (shadcn-ui)
- Custom components → `src/components/`

### Best Practices
- Follow existing component patterns
- Use TypeScript for type safety
- Maintain consistent spacing and layout patterns
- Use Lucide React icons
- Keep animations subtle and professional
- Ensure mobile responsiveness
- Use `<Link>` from React Router for navigation (never `<a>` tags)

## 📝 Data Management

- Blog posts are stored in `src/data/blogPosts.ts`
- Static data only (no backend/API)
- Case studies embedded in page components

## 🌐 Deployment

This project is configured for deployment with a `/portfolio` base path (e.g., GitHub Pages).

The router has `basename="/portfolio"` configured for proper routing in deployed environments.

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
