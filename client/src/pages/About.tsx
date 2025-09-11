import SEOHead from '@/components/SEOHead';
import AboutSection from '@/components/AboutSection';

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fazna Solar Energy LLC",
      "description": "Founded in 2022 and headquartered in Dubai, Fazna Solar Energy LLC has rapidly established itself as a premier EPC contractor in the renewable energy sector.",
      "foundingDate": "2022",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      "employees": [
        {
          "@type": "Person",
          "name": "Syed Ibrahim Asif",
          "jobTitle": "Managing Director",
          "worksFor": "Fazna Solar Energy LLC",
          "expertise": "Renewable energy development, project finance structuring, offshore wind, onshore wind, solar PV"
        },
        {
          "@type": "Person",
          "name": "Chittibabu Lakkum", 
          "jobTitle": "Technical Director",
          "worksFor": "Fazna Solar Energy LLC",
          "expertise": "Solar energy project development, construction management, EPC operations, quality control"
        }
      ],
      "hasCredential": [
        { "@type": "Certification", "name": "ISO 9001:2015" },
        { "@type": "Certification", "name": "ISO 14001:2015" },
        { "@type": "Certification", "name": "ISO 45001:2019" }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="About Fazna Solar Energy - Leadership Team & Company History | Solar EPC"
        description="Learn about Fazna Solar Energy LLC's leadership team, company mission, and ISO certifications. Founded in 2022 in Dubai, we're a leading EPC contractor with proven expertise in utility-scale solar installations across UAE, Saudi Arabia, and India."
        canonical={`${window.location.origin}/about`}
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen pt-16">
        <AboutSection />
      </div>
    </>
  );
}