import SEOHead from '@/components/SEOHead';
import ProjectsSection from '@/components/ProjectsSection';

export default function Projects() {
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Solar Project Portfolio",
    "description": "Major solar project references showcasing Fazna Solar Energy's expertise in utility-scale installations",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Major Solar Projects",
      "itemListElement": [
        {
          "@type": "ConstructionProject",
          "name": "Sweihan Solar Project",
          "location": {
            "@type": "Place",
            "name": "Abu Dhabi, UAE"
          },
          "capacity": "1,177 MW",
          "description": "One of the world's largest single-site solar projects with comprehensive EPC services for multiple zones.",
          "contractor": {
            "@type": "Organization",
            "name": "Fazna Solar Energy LLC"
          }
        },
        {
          "@type": "ConstructionProject", 
          "name": "Al Dafra PV2 Project",
          "location": {
            "@type": "Place",
            "name": "Abu Dhabi, UAE"
          },
          "capacity": "2,000 MW",
          "description": "Record-breaking solar installation showcasing advanced EPC capabilities in challenging desert environments."
        },
        {
          "@type": "ConstructionProject",
          "name": "Saudi Sakkakah Project",
          "location": {
            "@type": "Place", 
            "name": "Al Jouf, Saudi Arabia"
          },
          "capacity": "300 MW",
          "description": "Strategic expansion into Saudi Arabian renewable energy market with precision installation services."
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Solar Project Portfolio - Sweihan, Al Dafra, DEWA VI | Fazna Solar Energy"
        description="Explore our major solar project references including Sweihan Solar Project (1,177 MW), Al Dafra PV2 (2,000 MW), Saudi Sakkakah (300 MW), and DEWA VI (900 MW). Proven expertise in utility-scale solar EPC across Middle East and India."
        canonical={`${window.location.origin}/projects`}
        structuredData={projectsStructuredData}
      />
      <div className="min-h-screen pt-16">
        <ProjectsSection />
      </div>
    </>
  );
}