import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: Record<string, any>;
}

export default function SEOHead({
  title = "Fazna Solar Energy - Leading EPC Contractor for Solar Projects | UAE & India",
  description = "Fazna Solar Energy LLC is a premier EPC contractor specializing in large-scale solar installations. Serving clients across UAE and India with proven expertise in utility-scale renewable energy projects including Sweihan, Al Dafra, and DEWA VI.",
  canonical = window.location.href,
  ogType = 'website',
  ogImage = `${window.location.origin}/favicon.ico`,
  structuredData
}: SEOHeadProps) {
  
  // Enhanced structured data for better SEO and local business visibility
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Fazna Solar Energy LLC",
    "url": window.location.origin,
    "logo": `${window.location.origin}/favicon.ico`,
    "description": description,
    "foundingDate": "2022",
    "industry": "Solar Energy EPC Contracting",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 500,
      "maxValue": 1500
    },
    "serviceArea": ["United Arab Emirates", "India", "Middle East"],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country", 
        "name": "India"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-527822747",
        "contactType": "sales",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"],
        "hoursAvailable": "Mo-Fr 08:00-18:00"
      },
      {
        "@type": "ContactPoint", 
        "telephone": "+91-7981505254",
        "contactType": "technical support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": "Mo-Fr 08:00-18:00"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 119-0, Dubai Investment Park First",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE",
        "name": "Dubai Office"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "India",
        "addressCountry": "IN",
        "name": "India Operations"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "25",
      "bestRating": "5"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "ISO 9001:2015 Quality Management"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "ISO 14001:2015 Environmental Management"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "ISO 45001:2018 Health & Safety Management"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/fazna-solar-energy"
    ],
    "knowsAbout": ["Solar Energy", "EPC Services", "Renewable Energy", "Utility Scale Solar", "Solar Installation", "Desert Solar Projects", "Bifacial Solar Technology", "Grid Integration"],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar EPC Construction",
          "description": "Complete EPC services for utility-scale solar installations including engineering, procurement, and construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Solar Module Installation",
          "description": "Professional solar module installation and commissioning services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Project Management",
          "description": "End-to-end project management for large-scale renewable energy installations"
        }
      }
    ],
    "award": [
      "Best Large-Scale Solar Project - Middle East Solar Awards 2023",
      "Engineering Excellence Award - UAE",
      "Global Solar Project of the Year 2024"
    ]
  };

  const schemaData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content="solar energy, EPC contractor, renewable energy, UAE solar, India solar, utility scale solar, Sweihan project, Al Dafra, DEWA, solar installation, photovoltaic, solar panels, clean energy" />
      <meta name="author" content="Fazna Solar Energy LLC" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fazna Solar Energy" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Performance and Accessibility Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Preconnect to optimize font loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Additional SEO and accessibility */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}