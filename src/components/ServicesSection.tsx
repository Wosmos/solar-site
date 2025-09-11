'use client'
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Wrench, 
  Zap, 
  Settings, 
  Shield, 
  MapPin, 
  Building2,
  Battery,
  Clock,
  Cog,
  Target,
  Award,
  CheckCircle,
  Globe,
  Truck,
  Users,
  BarChart3,
  Monitor,
  Lightbulb,
  FileCheck,
  Headphones,
  TrendingUp,
  Layers,
  Network,
  Gauge,
  Sun,
  Cable,
  Cpu,
  Compass,
  Telescope
} from 'lucide-react';

// Core EPC Services
const coreServices = [
  {
    icon: Wrench,
    title: 'Solar Trackers & PV Tables',
    category: 'Mechanical Installation',
    description: 'Advanced single-axis tracking systems and mounting solutions engineered for maximum energy yield and structural integrity in harsh desert environments.',
    detailedDescription: 'Our tracker installation services include comprehensive foundation engineering, precise mechanical alignment, and advanced torque tube systems. We utilize specialized equipment including pile drivers, laser alignment systems, and robotic torque tools to ensure optimal installation quality.',
    capabilities: [
      'Single-axis tracking systems (up to 120m span)',
      'Fixed-tilt mounting structures',
      'Foundation engineering & piling',
      'Desert-hardened materials selection',
      'Wind load optimization',
      'Precision alignment systems'
    ],
    technicalSpecs: [
      'Installation capacity: 500+ MW annually',
      'Tracking accuracy: ±0.5° tolerance',
      'Foundation depth: Up to 3.5m',
      'Wind resistance: 150+ km/h design'
    ],
    benefits: [
      '15-25% increased energy yield vs fixed tilt',
      'Reduced LCOE through optimized performance',
      'Enhanced module cleaning efficiency',
      'Improved land utilization ratios'
    ]
  },
  {
    icon: Zap,
    title: 'Module Installation & Robot Systems',
    category: 'Photovoltaic Installation',
    description: 'Precision installation of photovoltaic modules utilizing advanced robotic systems and quality assurance protocols for utility-scale deployments.',
    detailedDescription: 'Our robotic module installation service combines German engineering precision with advanced automation to achieve installation rates of 1MW+ per day. We employ specialized robots for consistent mounting, automated testing systems, and comprehensive quality control protocols.',
    capabilities: [
      'Robotic module mounting systems',
      'Automated IV curve testing',
      'Real-time quality monitoring',
      'Weather-resistant installation protocols',
      'Module optimization & sorting',
      'Performance validation systems'
    ],
    technicalSpecs: [
      'Installation rate: 1000+ modules/day',
      'Module power range: 400W-700W',
      'Accuracy tolerance: ±2mm',
      'Quality score: >99.5% first-pass rate'
    ],
    benefits: [
      'Consistent installation quality',
      'Accelerated project timelines',
      'Reduced labor costs and safety risks',
      'Enhanced module performance optimization'
    ]
  },
  {
    icon: Settings,
    title: 'Earthing & Electrical Systems',
    category: 'Electrical Infrastructure',
    description: 'Comprehensive electrical grounding, alignment services, and power distribution systems ensuring safety compliance and optimal electrical performance.',
    detailedDescription: 'Our electrical systems service encompasses complete earthing networks, precision alignment of electrical components, and advanced power distribution solutions. We implement IEC and IEEE standards with specialized testing equipment and certified technicians.',
    capabilities: [
      'Comprehensive earthing network design',
      'Equipment grounding & bonding',
      'Lightning protection systems',
      'Electrical alignment & testing',
      'Power distribution infrastructure',
      'SCADA integration systems'
    ],
    technicalSpecs: [
      'Grounding resistance: <1Ω system-wide',
      'Alignment precision: ±0.1° tolerance',
      'Voltage levels: Up to 35kV',
      'Safety certification: IEC 62305 compliant'
    ],
    benefits: [
      'Enhanced electrical safety',
      'Optimized power generation efficiency',
      'Reduced electrical losses',
      'Improved system reliability & uptime'
    ]
  },
  {
    icon: Building2,
    title: 'Utility-Scale Ground Mounted',
    category: 'Large-Scale Infrastructure',
    description: 'End-to-end utility-scale solar installations with comprehensive project management, from 50MW to 1GW+ developments across desert and industrial environments.',
    detailedDescription: 'Our utility-scale service manages complete EPC delivery for large solar farms including site preparation, infrastructure development, grid integration, and commissioning. We leverage extensive experience from projects like Sweihan (1.18GW) and Al Dhafra (2GW).',
    capabilities: [
      'Site preparation & civil works',
      'Large-scale infrastructure development',
      'Grid integration & substations',
      'Desert installation expertise',
      'Multi-gigawatt project management',
      'Environmental compliance'
    ],
    technicalSpecs: [
      'Project scale: 50MW to 1GW+',
      'Installation rate: 200MW+ monthly',
      'Grid voltage: Up to 400kV',
      'Performance ratio: >85% annual'
    ],
    benefits: [
      'Proven track record on landmark projects',
      'Accelerated construction timelines',
      'Optimized LCOE through scale efficiency',
      'Comprehensive risk management'
    ]
  },
  {
    icon: Shield,
    title: 'Commercial & Industrial Rooftop',
    category: 'Distributed Solar',
    description: 'Commercial and industrial rooftop solar installations with structural analysis, load assessment, and seamless integration with existing building systems.',
    detailedDescription: 'Our C&I rooftop service provides complete structural engineering, advanced mounting systems, and building-integrated solutions. We specialize in complex industrial installations with crane access, membrane preservation, and minimal operational disruption.',
    capabilities: [
      'Structural load assessment',
      'Advanced mounting systems',
      'Membrane roof preservation',
      'Industrial facility integration',
      'Building code compliance',
      'Operational continuity planning'
    ],
    technicalSpecs: [
      'Roof load capacity: 15-45 kg/m²',
      'Installation range: 100kW to 50MW',
      'Roof penetration: Zero or minimal',
      'Wind certification: 200+ km/h'
    ],
    benefits: [
      'Reduced electricity costs (20-40%)',
      'Enhanced property value',
      'Minimal structural modifications',
      'Fast ROI achievement (3-5 years)'
    ]
  },
  {
    icon: Battery,
    title: 'Energy Storage & Power Solutions',
    category: 'Energy Storage',
    description: 'Advanced energy storage systems, temporary power generation, and long-term equipment leasing solutions for enhanced grid stability and operational flexibility.',
    detailedDescription: 'Our energy storage service integrates cutting-edge battery technologies with intelligent energy management systems. We provide temporary power solutions during construction phases and comprehensive leasing programs for long-term operational flexibility.',
    capabilities: [
      'Grid-scale battery storage (MW to GWh)',
      'Temporary power generation',
      'Energy management systems',
      'Grid stabilization services',
      'Long-term equipment leasing',
      'Hybrid renewable integration'
    ],
    technicalSpecs: [
      'Storage capacity: 1MWh to 1GWh+',
      'Response time: <100ms',
      'Round-trip efficiency: >95%',
      'System lifespan: 20+ years'
    ],
    benefits: [
      'Enhanced grid stability and reliability',
      'Peak shaving and demand management',
      'Increased renewable energy utilization',
      'Revenue optimization through energy arbitrage'
    ]
  }
];

// Premium Additional Services
const premiumServices = [
  {
    icon: Monitor,
    title: 'Operations & Maintenance',
    category: 'Asset Management',
    description: 'Comprehensive O&M services with predictive maintenance, remote monitoring, and performance optimization to maximize asset lifetime value.',
    features: [
      'Predictive maintenance algorithms',
      'Remote SCADA monitoring',
      'Performance optimization',
      'Component replacement programs'
    ]
  },
  {
    icon: Cog,
    title: 'Commissioning & Testing',
    category: 'Quality Assurance',
    description: 'Advanced commissioning protocols, comprehensive testing procedures, and performance validation for optimal system startup and long-term reliability.',
    features: [
      'Comprehensive testing protocols',
      'Performance validation',
      'Grid code compliance',
      'Warranty activation services'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Engineering Consulting',
    category: 'Technical Advisory',
    description: 'Expert engineering consulting for project optimization, feasibility studies, due diligence, and technical advisory services throughout project lifecycle.',
    features: [
      'Feasibility studies & site analysis',
      'Technical due diligence',
      'Design optimization',
      'Performance modeling'
    ]
  },
  {
    icon: Telescope,
    title: 'Site Assessment & Surveying',
    category: 'Project Development',
    description: 'Comprehensive site assessment including geotechnical analysis, environmental studies, solar irradiance measurement, and detailed surveying services.',
    features: [
      'Geotechnical soil analysis',
      'Solar irradiance monitoring',
      'Environmental impact assessment',
      'Topographical surveying'
    ]
  },
  {
    icon: Network,
    title: 'Grid Integration Services',
    category: 'Electrical Infrastructure',
    description: 'Complete grid integration solutions including substation design, transmission infrastructure, grid code compliance, and interconnection management.',
    features: [
      'Substation design & construction',
      'Transmission line installation',
      'Grid code compliance',
      'Interconnection studies'
    ]
  },
  {
    icon: Headphones,
    title: 'Project Management Office',
    category: 'Project Delivery',
    description: 'Dedicated PMO services with advanced project controls, risk management, stakeholder coordination, and integrated delivery methodologies.',
    features: [
      'Integrated project controls',
      'Risk management frameworks',
      'Stakeholder coordination',
      'Quality management systems'
    ]
  }
];

const sectors = [
  { name: 'Utility-Scale', description: '50MW to 1GW+ Projects', color: 'bg-primary' },
  { name: 'Commercial', description: 'C&I Solar Solutions', color: 'bg-secondary' },
  { name: 'Industrial', description: 'Manufacturing & Logistics', color: 'bg-accent' },
  { name: 'Infrastructure', description: 'Government & Public', color: 'bg-muted' },
  { name: 'Distributed', description: 'Rooftop & BIPV', color: 'bg-primary/80' },
  { name: 'Energy Storage', description: 'Grid-Scale BESS', color: 'bg-secondary/80' }
];

// Technical Capabilities & Certifications
const technicalCapabilities = [
  {
    category: 'Installation Capacity',
    metrics: [
      { label: 'Annual Installation', value: '2GW+', description: 'Proven delivery capacity' },
      { label: 'Project Scale', value: '50MW - 1GW+', description: 'Utility-scale expertise' },
      { label: 'Installation Rate', value: '200MW/month', description: 'Peak construction rate' },
      { label: 'Team Strength', value: '1000+', description: 'Skilled technicians' }
    ]
  },
  {
    category: 'Quality Standards',
    metrics: [
      { label: 'ISO Certification', value: 'ISO 9001:2015', description: 'Quality management' },
      { label: 'Safety Standard', value: 'ISO 45001', description: 'Occupational health' },
      { label: 'Environmental', value: 'ISO 14001', description: 'Environmental management' },
      { label: 'Quality Score', value: '>99.5%', description: 'First-pass installation rate' }
    ]
  },
  {
    category: 'Geographic Coverage',
    metrics: [
      { label: 'UAE Operations', value: 'Dubai HQ', description: 'Primary operations base' },
      { label: 'Regional Presence', value: 'GCC + India', description: 'Multi-country operations' },
      { label: 'Project Experience', value: '15+ Countries', description: 'Global project portfolio' },
      { label: 'Local Content', value: '40%+', description: 'Regional value addition' }
    ]
  }
];

// Major Project References
const projectHighlights = [
  {
    name: 'Sweihan Solar Park',
    capacity: '1.18GW',
    location: 'Abu Dhabi, UAE',
    role: 'EPC Contractor',
    achievement: 'World\'s largest single-site solar project',
    technology: 'Single-axis tracking, bifacial modules'
  },
  {
    name: 'Al Dhafra Solar',
    capacity: '2GW',
    location: 'Abu Dhabi, UAE', 
    role: 'Installation Contractor',
    achievement: 'Record-low LCOE achievement',
    technology: 'Advanced tracking systems'
  },
  {
    name: 'Sakkakah Solar',
    capacity: '300MW',
    location: 'Saudi Arabia',
    role: 'EPC Partner',
    achievement: 'Desert installation excellence',
    technology: 'Robust desert-grade design'
  },
  {
    name: 'DEWA Phase VI',
    capacity: '900MW',
    location: 'Dubai, UAE',
    role: 'Construction Partner',
    achievement: 'Complex logistics management',
    technology: 'Hybrid solar-storage integration'
  }
];

// Service Delivery Process
const deliveryProcess = [
  {
    phase: 'Site Assessment',
    duration: '2-4 weeks',
    description: 'Comprehensive site analysis and feasibility study',
    deliverables: ['Geotechnical analysis', 'Solar resource assessment', 'Environmental impact study', 'Grid connection study']
  },
  {
    phase: 'Engineering Design',
    duration: '6-12 weeks',
    description: 'Detailed engineering and system optimization',
    deliverables: ['Electrical design', 'Structural engineering', 'Equipment specifications', 'Construction methodology']
  },
  {
    phase: 'Procurement',
    duration: '8-16 weeks',
    description: 'Global sourcing and supply chain management',
    deliverables: ['Equipment procurement', 'Logistics planning', 'Quality assurance', 'Delivery scheduling']
  },
  {
    phase: 'Construction',
    duration: '12-36 months',
    description: 'Full-scale construction and installation',
    deliverables: ['Civil works', 'Electrical installation', 'Mechanical systems', 'Safety compliance']
  },
  {
    phase: 'Commissioning',
    duration: '4-8 weeks',
    description: 'System testing and performance validation',
    deliverables: ['Performance testing', 'Grid synchronization', 'Safety certification', 'Handover documentation']
  }
];

// Value Propositions by Client Segment
const valuePropositions = [
  {
    segment: 'Utility Developers',
    icon: Building2,
    benefits: [
      'Accelerated project delivery with proven 200MW+ monthly installation rates',
      'Risk mitigation through comprehensive EPC warranties and performance guarantees',
      'LCOE optimization via advanced technology integration and efficient execution',
      'Regulatory compliance and grid code adherence across multiple jurisdictions'
    ]
  },
  {
    segment: 'Independent Power Producers',
    icon: TrendingUp,
    benefits: [
      'Enhanced project bankability through track record on landmark projects',
      'Optimized technology selection for maximum energy yield and ROI',
      'Comprehensive O&M services ensuring long-term asset performance',
      'Flexible financing and equipment leasing options'
    ]
  },
  {
    segment: 'Commercial & Industrial',
    icon: Shield,
    benefits: [
      'Immediate electricity cost reduction of 20-40% post-installation',
      'Minimal operational disruption during installation process',
      'Enhanced corporate sustainability credentials and ESG compliance',
      'Customized solutions for complex industrial environments'
    ]
  },
  {
    segment: 'Government & Infrastructure',
    icon: Award,
    benefits: [
      'Contribution to national renewable energy targets and climate commitments',
      'Job creation and local content development opportunities',
      'Energy security enhancement through diversified generation portfolio',
      'Proven experience with government procurement processes'
    ]
  }
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [expandedService, setExpandedService] = useState<number | null>(null);
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
    <div ref={sectionRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 via-transparent to-transparent relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">EPC Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              World-Class Solar EPC Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Delivering record-breaking solar installations from 50MW to multi-gigawatt scale across the Middle East and India. 
              Our proven track record includes landmark projects like Sweihan (1.18GW) and Al Dhafra (2GW) with 
              zero safety incidents and industry-leading performance ratios.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-base px-6 py-2 font-medium">
                2GW+ Successfully Delivered
              </Badge>
              <Badge variant="secondary" className="text-base px-6 py-2 font-medium">
                ISO 9001:2015 Excellence
              </Badge>
              <Badge variant="secondary" className="text-base px-6 py-2 font-medium">
                Zero Lost-Time Incidents
              </Badge>
              <Badge variant="secondary" className="text-base px-6 py-2 font-medium">
                1000+ Expert Technicians
              </Badge>
            </div>
          </div>

          {/* Market Sectors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Markets We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sectors.map((sector) => (
                <Card key={sector.name} className="text-center p-4 hover-elevate">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{sector.name}</h4>
                    <p className="text-xs text-muted-foreground">{sector.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proven EPC Excellence Across Every Phase
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From advanced robotic installations to precision engineering, our comprehensive EPC services deliver 
              measurable results. <strong>Average performance ratio exceeding 85%</strong> with industry-leading 
              installation speeds and uncompromising safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card 
                key={index}
                data-index={index}
                className={`group hover-elevate cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-service-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{service.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {expandedService === index && (
                    <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.detailedDescription}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Cog className="h-4 w-4" />
                            Key Capabilities
                          </h4>
                          <ul className="space-y-2">
                            {service.capabilities.map((capability, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <BarChart3 className="h-4 w-4" />
                            Technical Specifications
                          </h4>
                          <ul className="space-y-2">
                            {service.technicalSpecs.map((spec, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <Target className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-4 w-full"
                    data-testid={`button-expand-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {expandedService === index ? 'Show Less' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Premium Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to maximize project value and long-term performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumServices.map((service, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <Badge variant="outline" className="text-xs">{service.category}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs">
                        <div className="h-1 w-1 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technical Capabilities & Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              World-class capabilities backed by international certifications and proven performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-center">{capability.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {capability.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="font-medium text-foreground mb-1">
                          {metric.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Landmark Project References
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven track record on world-class utility-scale solar installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectHighlights.map((project, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                      <p className="text-muted-foreground">{project.location}</p>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {project.capacity}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Role: {project.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{project.achievement}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-accent" />
                      <span className="text-sm">{project.technology}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Service Delivery Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Structured approach ensuring consistent quality and timely delivery across all projects
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {deliveryProcess.map((phase, index) => (
                <Card key={index} className="relative hover-elevate">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm lg:block hidden">
                    {index + 1}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <div className="text-center space-y-3">
                      <h3 className="font-bold text-foreground">{phase.phase}</h3>
                      <Badge variant="outline">{phase.duration}</Badge>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                      <div className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Value by Client Segment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions delivering maximum value for different client needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((segment, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <segment.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{segment.segment}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {segment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Solar Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Fazna Solar Energy for world-class EPC delivery and proven expertise across utility-scale solar installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/10 border-background/20 text-primary-foreground hover:bg-background/20"
              data-testid="button-contact-services"
            >
              <Users className="h-5 w-5 mr-2" />
              Contact Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 border-background/20 text-primary-foreground hover:bg-background/20"
              data-testid="button-project-discussion"
            >
              <FileCheck className="h-5 w-5 mr-2" />
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}