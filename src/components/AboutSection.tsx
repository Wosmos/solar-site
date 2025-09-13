'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card';

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
// Images will be added later - using placeholders for now

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

const management = [
  {
    name: 'Syed Ibrahim Asif',
    title: 'Managing Director',
    location: 'Dubai, UAE',
    description: 'Visionary leader with 20+ years expertise in renewable energy development across Asia, Middle East, and Africa. Successfully led the delivery of 1GW+ solar capacity including landmark projects like Sweihan and Aldhafra. Specialized in project finance structuring, strategic partnerships, and large-scale renewable energy development.',
    achievements: ['1GW+ Project Portfolio', 'Industry-Leading Safety Record', 'ISO Certified Operations'],
    image: '/images/Executive_headshot_portrait.png',
    contact: '+971 527822747'
  },
 {
    name: 'Chittibabu Lakkum',
    title: 'Technical Director',
    location: 'India Operations',
    description: 'Distinguished technical expert with 20+ years in utility-scale solar INC operations. Led technical delivery of multiple gigawatt-scale projects with industry-leading performance ratios. Specialized in advanced installation methodologies, quality control systems, and operational excellence across desert and challenging environments.',
    achievements: ['20+ Years Experience', '1GW+ Technical Delivery', 'Advanced Installation Systems'],
    image: '/images/Technical_director.png',
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
            Trusted Partner in Utility-Scale Solar Excellence
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="font-medium text-xl">
              Fazna Solar Energy LLC has rapidly emerged as the region&apos;s most trusted INC contractor, 
              delivering over 2GW of utility-scale solar capacity across landmark projects including Sweihan (1.18GW) 
              and Aldhafra (2GW) with Industry-Leading Safety Record and industry-leading performance ratios.
            </p>
            <p>
              <strong>Our Proven Excellence:</strong> Headquartered in Dubai with operations across the Middle East and India, 
              we&apos;ve completed 10+ major solar installations, maintaining rigorous ISO 9001:2015, ISO 14001:2015, and 
              ISO 45001:2019 certifications while consistently delivering projects on time, within budget, and exceeding 
              performance expectations.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              To be the Middle East&apos;s most trusted solar INC partner by delivering world-class engineering 
              solutions that exceed client expectations and accelerate the region&apos;s renewable energy transformation.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-foreground mb-3">Our Commitment to You</h4>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>On-time project delivery with zero compromise on quality</li>
                <li>Performance ratios exceeding 85% through proven engineering</li>
                <li>90%+ Safety Compliance through rigorous safety protocols</li>
                <li>Cost-effective solutions backed by comprehensive warranties</li>
              </ul>
            </div>
            
            {/* <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/Dubai_office_building_76cf6c18.png"
                alt="Fazna Solar Energy Office"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div> */}
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
          <div className="grid grid-cols-1 max-w-5xl mx-auto ">
            {management.map((member, index) => (
              <Card 
                key={index} 
                className="hover-elevate border-card-border mt-2"
                data-testid={`card-management-${member.name.toLowerCase().replace(' ', '-')}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
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
                        onClick={() => window.open(`tel:${member.contact}`, '_self')}
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
                onClick={() => window.open('#', '_self')}
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
        {/* <div className="mt-20 text-center">
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
        </div> */}
      </div>
    </section>
  );
}