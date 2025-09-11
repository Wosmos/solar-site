import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipToContent from '@/components/SkipToContent'
import BackToTop from '@/components/BackToTop'
import AboutSection from '@/components/AboutSection'

export const metadata: Metadata = {
  title: 'About Us - Fazna Solar Energy LLC',
  description: 'Learn about Fazna Solar Energy LLC, a leading INC contractor with expertise in utility-scale solar installations across the Middle East and India.',
  openGraph: {
    title: 'About Us - Fazna Solar Energy LLC',
    description: 'Learn about Fazna Solar Energy LLC, a leading INC contractor with expertise in utility-scale solar installations.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <AboutSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}