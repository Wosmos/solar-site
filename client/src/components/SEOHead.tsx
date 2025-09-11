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
  
  // Default organization structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fazna Solar Energy LLC",
    "url": "https://faznasolar.com",
    "logo": `${window.location.origin}/favicon.ico`,
    "description": description,
    "foundingDate": "2022",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-527822747",
        "contactType": "sales",
        "areaServed": "AE",
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
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 119-0, Dubai Investment Park First",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/fazna-solar-energy"
    ],
    "knowsAbout": ["Solar Energy", "EPC Services", "Renewable Energy", "Utility Scale Solar", "Solar Installation"],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Solar EPC Services",
        "description": "Engineering, Procurement, and Construction services for utility-scale solar installations"
      }
    }
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
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}