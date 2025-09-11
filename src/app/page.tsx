import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipToContent from '@/components/SkipToContent'
import BackToTop from '@/components/BackToTop'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Fazna Solar Energy LLC - Premier EPC Solar Contractor',
  description: 'Leading EPC contractor specializing in utility-scale solar installations across the Middle East and India. Expert engineering, procurement, and construction services for renewable energy projects.',
  openGraph: {
    title: 'Fazna Solar Energy LLC - Premier EPC Solar Contractor',
    description: 'Leading EPC contractor specializing in utility-scale solar installations across the Middle East and India.',
    url: 'https://fazna-solar.com',
    siteName: 'Fazna Solar Energy LLC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fazna Solar Energy LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fazna Solar Energy LLC - Premier EPC Solar Contractor',
    description: 'Leading EPC contractor specializing in utility-scale solar installations across the Middle East and India.',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}