# Fazna Solar Energy LLC - Next.js Website

A high-performance corporate website built with Next.js 15, featuring optimal SEO and performance scores.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **SEO Optimized** with metadata API and structured data
- **Performance Optimized** with Next.js Image optimization
- **Accessibility Compliant** WCAG guidelines
- **Responsive Design** mobile-first approach
- **Dark/Light Theme** with system preference detection

## 📊 Performance Targets

- **Lighthouse Score**: 99+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **SEO Score**: 100/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **State Management**: TanStack Query
- **Theme**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── projects/       # Projects page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Dynamic sitemap
│   └── manifest.ts     # PWA manifest
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   └── ...            # Feature components
├── lib/               # Utility functions
└── hooks/             # Custom React hooks
```

## 🎨 Design System

- **Primary Color**: Professional Blue (#1e40af)
- **Secondary Color**: Solar Gold (#f59e0b)
- **Accent Color**: Sustainable Green (#059669)
- **Typography**: Inter font family
- **Components**: shadcn/ui with custom styling

## 📱 Responsive Breakpoints

- **Mobile**: 640px and below
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above
- **Large Desktop**: 1440px and above

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://fazna-solar.com
```

### Image Optimization

Add your images to `public/images/`:
- `solar-farm-hero.jpg` - Hero section background
- `og-image.jpg` - Open Graph image
- `favicon-192x192.png` - PWA icon
- `favicon-512x512.png` - PWA icon

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Static Export

```bash
npm run build
```

The static files will be in the `out` directory.

## 📈 SEO Features

- **Metadata API**: Dynamic meta tags per page
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter-specific metadata
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Dynamic XML sitemap
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Prevent duplicate content

## ♿ Accessibility Features

- **Skip Links**: Keyboard navigation
- **ARIA Labels**: Screen reader support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliance
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternatives

## 🎯 Performance Optimizations

- **Next.js Image**: Automatic optimization
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Optimized imports
- **Lazy Loading**: Components and images
- **Compression**: Gzip and Brotli
- **Caching**: Optimal cache headers

## 📞 Support

For technical support or questions about the website:

- **Email**: info@faznasolar.com
- **Phone**: +971 527822747 (Dubai)
- **Phone**: +91 7981505254 (India)

## 📄 License

© 2024 Fazna Solar Energy LLC. All rights reserved.