import SEOHead from '@/components/SEOHead';
import ServicesSection from '@/components/ServicesSection';

export default function Services() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar EPC Services",
    "provider": {
      "@type": "Organization",
      "name": "Fazna Solar Energy LLC"
    },
    "serviceType": "Engineering, Procurement, and Construction (EPC)",
    "description": "Comprehensive EPC solutions for utility-scale solar installations including trackers, modules, PV tables, robot installation, earthing & alignment services.",
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Oman" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar EPC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Trackers & PV Tables",
            "description": "Advanced solar tracking systems and mounting solutions for optimal energy generation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Module Installation",
            "description": "Precision installation of photovoltaic modules with robotic assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Earthing & Alignment",
            "description": "Professional electrical grounding and precise system alignment services"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Solar EPC Services - Trackers, Modules, Installation | Fazna Solar Energy"
        description="Comprehensive solar EPC services including tracker installation, module installation, robot installation, earthing & alignment. Serving utility-scale, commercial, and industrial solar projects across UAE, Saudi Arabia, Oman, and India."
        canonical={`${window.location.origin}/services`}
        structuredData={servicesStructuredData}
      />
      <div className="min-h-screen pt-16">
        <ServicesSection />
      </div>
    </>
  );
}