import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipToContent from '@/components/SkipToContent'
import BackToTop from '@/components/BackToTop'
import ServicesSection from '@/components/ServicesSection'

export const metadata: Metadata = {
  title: 'Services - Fazna Solar Energy LLC',
  description: 'Comprehensive EPC services for utility-scale solar projects including engineering, procurement, construction, and maintenance.',
  openGraph: {
    title: 'Services - Fazna Solar Energy LLC',
    description: 'Comprehensive EPC services for utility-scale solar projects including engineering, procurement, construction, and maintenance.',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <ServicesSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}