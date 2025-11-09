import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipToContent from '@/components/SkipToContent'
import BackToTop from '@/components/BackToTop'
import ContactSection from '@/components/ContactSection'
import RecaptchaTest from '@/components/RecaptchaTest'

export const metadata: Metadata = {
  title: 'Contact Us - Fazna Solar Energy LLC',
  description: 'Get in touch with Fazna Solar Energy LLC for your utility-scale solar project needs. Offices in Dubai and India.',
  openGraph: {
    title: 'Contact Us - Fazna Solar Energy LLC',
    description: 'Get in touch with Fazna Solar Energy LLC for your utility-scale solar project needs. Offices in Dubai and India.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* Temporary Test Panel - Remove after testing */}
        
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}