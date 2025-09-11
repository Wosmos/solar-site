import { useEffect } from 'react';

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
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'solar energy, EPC contractor, renewable energy, UAE solar, India solar, utility scale solar, Sweihan project, Al Dafra, DEWA, solar installation, photovoltaic, solar panels, clean energy');
    updateMetaTag('author', 'Fazna Solar Energy LLC');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'en');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Fazna Solar Energy', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    updateMetaTag('theme-color', '#1e40af'); // Primary brand color
    updateMetaTag('msapplication-TileColor', '#1e40af');

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Default organization structured data if none provided
    if (!structuredData) {
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

      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(defaultStructuredData);
    }

    // Cleanup function
    return () => {
      // Could implement cleanup if needed
    };
  }, [title, description, canonical, ogType, ogImage, structuredData]);

  return null; // This component doesn't render anything
}