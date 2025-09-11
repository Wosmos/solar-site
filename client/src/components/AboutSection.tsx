import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';
import managingDirectorImage from '@assets/generated_images/Executive_headshot_portrait_9ee1d9a1.png';
import technicalDirectorImage from '@assets/generated_images/Technical_director_portrait_5fff9ddd.png';
import dubaiOfficeImage from '@assets/generated_images/Dubai_office_building_76cf6c18.png';

const values = [
  {
    icon: Users,
    title: 'Team Spirit',
    description: 'Collaborative excellence driving innovative solutions'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Unwavering commitment to quality and precision'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering technologies for sustainable future'
  },
  {
    icon: Zap,
    title: 'Adaptability',
    description: 'Flexible solutions for diverse market needs'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Ethical practices in all business operations'
  }
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System' },
  { name: 'ISO 45001:2019', description: 'Occupational Health & Safety Management' }
];

// todo: remove mock functionality - replace with real management data
const management = [
  {
    name: 'Syed Ibrahim Asif',
    title: 'Managing Director',
    location: 'Dubai, UAE',
    description: 'Professional with deep commitment to advancing conventional and renewable energy initiatives. Expertise in renewable energy development (offshore wind, onshore wind, solar PV) and project finance structuring, particularly within the dynamic markets of Asia, Middle East and Africa.',
    image: managingDirectorImage,
    contact: '+971 527822747'
  },
  {
    name: 'Chittibabu Lakkum',
    title: 'Technical Director',
    location: 'India Operations',
    description: 'Seasoned technical leader specializing in solar energy project development and construction management. Extensive experience in EPC operations, quality control, and innovative installation methodologies across utility-scale renewable energy projects.',
    image: technicalDirectorImage,
    contact: '+91 7981505254'
  }
];

export default function AboutSection() {
  return (
    <section data-section="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Fazna Solar</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Regional Leader in Renewable Energy
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2022 and headquartered in Dubai, Fazna Solar Energy LLC has rapidly established itself 
              as a premier EPC contractor in the renewable energy sector. We specialize in large-scale solar 
              installations across the Middle East and India, delivering world-class engineering solutions.
            </p>
            <p>
              As part of our commitment to excellence, we maintain rigorous quality standards through our 
              comprehensive ISO certifications, ensuring every project meets international benchmarks for 
              quality, environmental responsibility, and occupational safety.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To accelerate the global transition to sustainable energy by delivering exceptional EPC services 
              that combine technical excellence, innovation, and environmental responsibility. We empower our 
              clients to achieve their renewable energy goals through reliable, efficient, and cost-effective solutions.
            </p>
            
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={dubaiOfficeImage}
                alt="Fazna Solar Energy Dubai Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {management.map((member, index) => (
              <Card 
                key={index} 
                className="hover-elevate border-card-border"
                data-testid={`card-management-${member.name.toLowerCase().replace(' ', '-')}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-primary font-medium mb-2">{member.title}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <Globe className="h-3 w-3" />
                        {member.location}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {member.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        data-testid={`button-contact-${member.name.toLowerCase().replace(' ', '-')}`}
                        onClick={() => console.log(`Contact ${member.name} clicked`)}
                      >
                        Contact {member.title}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ISO Certifications */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Certifications</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            ISO Certified Excellence
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our commitment to quality, environmental responsibility, and safety is validated through 
            comprehensive ISO certifications, ensuring world-class standards in all our operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover-elevate cursor-pointer border-card-border"
                data-testid={`card-certification-${cert.name.replace(/[^a-z0-9]/g, '-').toLowerCase()}`}
                onClick={() => console.log(`Certification clicked: ${cert.name}`)}
              >
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parent Company Info */}
        <div className="mt-20 text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Part of Aye Totes Group
            </h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fazna Solar Energy LLC operates as a subsidiary of Aye Totes Pvt Ltd, India, 
              leveraging extensive experience and technical expertise in renewable energy development 
              across international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}