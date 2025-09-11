import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Zap, 
  Settings, 
  Shield, 
  MapPin, 
  Building2,
  Battery,
  Clock
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Trackers & PV Tables',
    description: 'Advanced solar tracking systems and mounting solutions for optimal energy generation',
    features: ['Single-axis tracking', 'Fixed-tilt systems', 'Foundation engineering']
  },
  {
    icon: Zap,
    title: 'Module Installation',
    description: 'Precision installation of photovoltaic modules with robotic assistance',
    features: ['Robot installation', 'Quality assurance', 'Performance optimization']
  },
  {
    icon: Settings,
    title: 'Earthing & Alignment',
    description: 'Professional electrical grounding and precise system alignment services',
    features: ['Safety compliance', 'Technical precision', 'System integration']
  },
  {
    icon: Building2,
    title: 'Ground-Mounted Systems',
    description: 'Large-scale utility installations with comprehensive project management',
    features: ['Utility-scale projects', 'Desert installations', 'Grid integration']
  },
  {
    icon: Shield,
    title: 'Rooftop Solutions',
    description: 'Commercial and industrial rooftop solar installations',
    features: ['Load assessment', 'Structural integration', 'Commercial scale']
  },
  {
    icon: Battery,
    title: 'Storage & Generation',
    description: 'Energy storage systems and backup power generation solutions',
    features: ['Battery systems', 'Temporary power', 'Long-term leasing']
  }
];

const sectors = [
  { name: 'Utility-Scale', color: 'bg-primary' },
  { name: 'Commercial', color: 'bg-secondary' },
  { name: 'Industrial', color: 'bg-accent' },
  { name: 'Infrastructure', color: 'bg-muted' }
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} data-section="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive EPC Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From engineering and procurement to construction and commissioning, 
            we deliver end-to-end solar energy solutions with technical excellence.
          </p>
        </div>

        {/* Sectors We Serve */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {sectors.map((sector) => (
            <Badge 
              key={sector.name} 
              variant="secondary" 
              className="text-sm px-4 py-2"
              data-testid={`badge-sector-${sector.name.toLowerCase()}`}
            >
              {sector.name}
            </Badge>
          ))}
        </div>

        {/* Services Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`group hover-elevate cursor-pointer border-card-border transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-service-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => console.log(`Service clicked: ${service.title}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                    <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Construction Methodology */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Our Construction Methodology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'Site Assessment',
              'Engineering Design', 
              'Procurement',
              'Construction',
              'Commissioning'
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-foreground">{step}</span>
                {index < 4 && (
                  <div className="hidden md:block w-full h-px bg-border mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}