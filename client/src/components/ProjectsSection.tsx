import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  MapPin, 
  Zap, 
  Calendar,
  Building2
} from 'lucide-react';
import sweiFohanImage from '@assets/generated_images/Sweihan_solar_project_ca6a3eb5.png';
import installationImage from '@assets/generated_images/Solar_installation_work_6905b6c3.png';

// todo: remove mock functionality - replace with real project data
const projects = [
  {
    id: 1,
    name: 'Sweihan Solar Project',
    location: 'Abu Dhabi, UAE',
    capacity: '1,177 MW',
    status: 'Completed',
    scope: 'EPC Construction - Zones 1&4, Zone 3B',
    description: 'One of the worlds largest single-site solar projects. Fazna Solar Energy provided comprehensive EPC services for multiple zones.',
    image: sweiFohanImage,
    features: ['Utility-scale installation', 'Desert conditions', 'Grid integration'],
    year: '2019-2022'
  },
  {
    id: 2,
    name: 'Al Dafra PV2 Project',
    location: 'Abu Dhabi, UAE',
    capacity: '2,000 MW',
    status: 'Completed',
    scope: 'EPC Construction Services',
    description: 'Record-breaking solar installation showcasing advanced EPC capabilities in challenging desert environments.',
    image: installationImage,
    features: ['Record capacity', 'Advanced tracking', 'High efficiency'],
    year: '2020-2023'
  },
  {
    id: 3,
    name: 'Saudi Sakkakah Project',
    location: 'Al Jouf, Saudi Arabia',
    capacity: '300 MW',
    status: 'Completed',
    scope: 'Module Installation & Alignment',
    description: 'Strategic expansion into Saudi Arabian renewable energy market with precision installation services.',
    image: sweiFohanImage,
    features: ['International expansion', 'Precision installation', 'Local partnerships'],
    year: '2021-2022'
  },
  {
    id: 4,
    name: 'DEWA VI Project',
    location: 'Dubai, UAE',
    capacity: '900 MW',
    status: 'Ongoing',
    scope: 'EPC Services - Phase Implementation',
    description: 'Contributing to Dubai\'s clean energy strategy with state-of-the-art solar technology and construction excellence.',
    image: installationImage,
    features: ['Smart city integration', 'Advanced technology', 'Phased delivery'],
    year: '2023-2024'
  },
  {
    id: 5,
    name: 'Oman PDO Amin',
    location: 'Oman',
    capacity: '100 MW',
    status: 'Completed',
    scope: 'Specialized EPC Services',
    description: 'Oil & gas sector renewable integration project demonstrating versatility in specialized applications.',
    image: sweiFohanImage,
    features: ['Oil & gas integration', 'Remote location', 'Specialized requirements'],
    year: '2022-2023'
  },
  {
    id: 6,
    name: 'Khazna Data Centre',
    location: 'Abu Dhabi, UAE',
    capacity: '50 MW',
    status: 'Completed',
    scope: 'Commercial Solar Installation',
    description: 'Data centre solar integration showcasing commercial and industrial installation expertise.',
    image: installationImage,
    features: ['Data centre integration', 'Commercial scale', 'High reliability'],
    year: '2023'
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-accent text-accent-foreground';
    case 'ongoing': return 'bg-secondary text-secondary-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, projectIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = sectionRef.current?.querySelectorAll('[data-index]');
    projects?.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Major Project References
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proven track record of delivering world-class solar installations across the Middle East and beyond.
            Each project showcases our commitment to engineering excellence and operational efficiency.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              data-index={index}
              className={`group hover-elevate cursor-pointer overflow-hidden border-card-border transition-all duration-700 hover:shadow-2xl ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`card-project-${project.id}`}
              onClick={() => console.log(`Project clicked: ${project.name}`)}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="font-semibold text-secondary text-lg">{project.capacity}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.scope}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  data-testid={`button-view-project-${project.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`View details clicked: ${project.name}`);
                  }}
                >
                  View Project Details
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            data-testid="button-view-all-projects"
            onClick={() => console.log('View all projects clicked')}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}