import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { QueryProvider } from '@/components/QueryProvider'
import RecaptchaProvider from '@/components/RecaptchaProvider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Fazna Solar Energy LLC - Premier INC Solar Contractor',
    template: '%s | Fazna Solar Energy LLC'
  },
  description: 'Leading INC contractor specializing in utility-scale solar installations across the Middle East and India. Expert engineering, procurement, and construction services for renewable energy projects.',
  keywords: ['solar energy', 'INC contractor', 'utility-scale solar', 'renewable energy', 'Middle East', 'India', 'solar installation'],
  authors: [{ name: 'Fazna Solar Energy LLC' }],
  creator: 'Fazna Solar Energy LLC',
  publisher: 'Fazna Solar Energy LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/fazna-solar-logo.png',
    shortcut: '/images/fazna-solar-logo.png',
    apple: '/images/fazna-solar-logo.png',
  },
  metadataBase: new URL('https://faznasolar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faznasolar.com',
    siteName: 'Fazna Solar Energy LLC',
    title: 'Fazna Solar Energy LLC - Premier INC Solar Contractor',
    description: 'Leading INC contractor specializing in utility-scale solar installations across the Middle East and India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fazna Solar Energy LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fazna Solar Energy LLC - Premier INC Solar Contractor',
    description: 'Leading INC contractor specializing in utility-scale solar installations across the Middle East and India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <RecaptchaProvider>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                {children}
                <Toaster />
              </TooltipProvider>
            </ThemeProvider>
          </QueryProvider>
        </RecaptchaProvider>
      </body>
    </html>
  )
}