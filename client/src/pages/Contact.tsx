import SEOHead from '@/components/SEOHead';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fazna Solar Energy LLC",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+971-527822747",
          "email": "info@faznasolar.com",
          "name": "Syed Ibrahim Asif",
          "jobTitle": "Managing Director",
          "areaServed": ["AE", "SA", "OM"],
          "availableLanguage": ["English", "Arabic"],
          "hoursAvailable": "Mo-Th 08:00-18:00"
        },
        {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "telephone": "+91-7981505254",
          "email": "cb@faznasolar.com", 
          "name": "Chittibabu Lakkum",
          "jobTitle": "Technical Director",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
          "hoursAvailable": "Mo-Fr 09:00-18:00"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Dubai Office",
          "streetAddress": "Plot No. 119-0, Dubai Investment Park First",
          "addressLocality": "Dubai", 
          "addressCountry": "AE"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Fazna Solar Energy - Get Your Solar Project Quote | Dubai & India"
        description="Contact Fazna Solar Energy for your solar EPC project requirements. Reach our Dubai office (+971 527822747) or India office (+91 7981505254). Get expert consultation for utility-scale solar installations across UAE, Saudi Arabia, Oman, and India."
        canonical={`${window.location.origin}/contact`}
        structuredData={contactStructuredData}
      />
      <div className="min-h-screen pt-16">
        <ContactSection />
      </div>
    </>
  );
}