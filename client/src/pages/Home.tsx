import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fazna Solar Energy LLC",
    "alternateName": "Fazna Solar",
    "url": "https://faznasolar.com",
    "logo": "https://faznasolar.com/logo.png",
    "description": "Leading EPC contractor specializing in utility-scale solar installations across the Middle East and India with 2+ GW installed capacity.",
    "foundingDate": "2022",
    "founders": [
      {
        "@type": "Person",
        "name": "Syed Ibrahim Asif",
        "jobTitle": "Managing Director"
      },
      {
        "@type": "Person", 
        "name": "Chittibabu Lakkum",
        "jobTitle": "Technical Director"
      }
    ],
    "numberOfEmployees": "100+",
    "industry": "Renewable Energy",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Aye Totes Pvt Ltd"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-527822747",
        "contactType": "sales",
        "areaServed": ["AE", "SA", "OM"],
        "availableLanguage": ["English", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7981505254", 
        "contactType": "technical support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 119-0, Dubai Investment Park First",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO 9001:2015 Quality Management System"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "ISO 14001:2015 Environmental Management System"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO 45001:2019 Occupational Health & Safety Management"
      }
    ],
    "knowsAbout": [
      "Solar Energy EPC Services",
      "Utility-Scale Solar Installation", 
      "Photovoltaic Systems",
      "Solar Panel Installation",
      "Renewable Energy Construction",
      "Solar Tracker Systems",
      "Desert Solar Projects"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Middle East and India"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar EPC Services",
          "description": "Complete Engineering, Procurement, and Construction services for utility-scale solar installations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Solar Tracker Installation",
          "description": "Advanced solar tracking systems for optimal energy generation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Module Installation", 
          "description": "Precision installation of photovoltaic modules with robotic assistance"
        }
      }
    ],
    "award": "Major project completions including Sweihan Solar Project, Al Dafra PV2, DEWA VI"
  };

  return (
    <>
      <SEOHead
        title="Fazna Solar Energy - Leading EPC Contractor for Solar Projects | UAE & India"
        description="Fazna Solar Energy LLC is a premier EPC contractor with 2+ GW installed capacity. Specializing in utility-scale solar installations across UAE, Saudi Arabia, Oman & India. ISO certified with proven track record in Sweihan, Al Dafra, DEWA VI projects."
        structuredData={homeStructuredData}
      />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <CTASection />
      </div>
    </>
  );
}