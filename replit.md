# Fazna Solar Energy Corporate Website

## Overview

This is a modern corporate website for Fazna Solar Energy LLC, a premier EPC (Engineering, Procurement, and Construction) contractor specializing in utility-scale solar installations across the Middle East and India. The website serves as a digital showcase for the company's expertise, project portfolio, leadership team, and service capabilities. Built with React and TypeScript, it features a professional B2B design inspired by industry leaders like Tesla Energy and SunPower, emphasizing credibility and trust in the renewable energy sector.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **UI Components**: Radix UI primitives for accessibility and customization
- **State Management**: TanStack Query for server state management
- **Theme System**: Custom theme provider supporting light/dark modes with system preference detection

### Build System & Development
- **Build Tool**: Vite for fast development and optimized production builds
- **Development Server**: Express.js serving the frontend in development mode
- **TypeScript Configuration**: Strict mode enabled with path aliases for clean imports
- **Code Quality**: ESLint and TypeScript compiler checks for code consistency

### Design System
- **Component Library**: shadcn/ui with custom styling modifications
- **Color Palette**: Professional blue primary (220 85% 25%), solar gold secondary (45 95% 50%), sustainable green accent (120 40% 45%)
- **Typography**: Inter font family for clean, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: WCAG compliant with skip links, proper ARIA labels, and keyboard navigation

### Content Architecture
- **SEO Optimization**: React Helmet for dynamic meta tags and structured data
- **Image Management**: Static assets with optimized loading and proper alt attributes
- **Content Sections**: Modular components for hero, services, projects, about, and contact sections
- **Project Showcase**: Detailed project cards with specifications, images, and technical details

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: User management with extensible structure for future content management
- **Migrations**: Automated database schema versioning with Drizzle Kit
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud hosting

### Performance & Optimization
- **Code Splitting**: Vite's automatic code splitting for optimal bundle sizes
- **Image Optimization**: Proper image formats and lazy loading implementation
- **Caching Strategy**: Query client configuration with appropriate stale times
- **Bundle Analysis**: Source maps and build optimization for production

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with schema validation
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React applications

### UI & Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Type-safe styling variants system
- **clsx**: Conditional CSS class name utility

### Development Tools
- **vite**: Modern build tool with hot module replacement
- **typescript**: Static type checking and enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools

### Form & Validation
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation (via drizzle-zod)

### Additional Features
- **react-helmet-async**: Dynamic document head management for SEO
- **date-fns**: Modern date utility library
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command palette component for enhanced user experience

### Production Services
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Environment Configuration**: Separate development and production database connections
- **Hosting Ready**: Configured for deployment on cloud platforms with proper build scripts