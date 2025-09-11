import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Zap, 
  Award, 
  Globe, 
  Users, 
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Shield
} from 'lucide-react';

const achievements = [
  {
    icon: Zap,
    value: '2+ GW',
    label: 'Total Capacity Installed',
    color: 'text-secondary'
  },
  {
    icon: Globe,
    value: '5+',
    label: 'Countries Served',
    color: 'text-primary'
  },
  {
    icon: Users,
    value: '100+',
    label: 'Team Members',
    color: 'text-accent'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Major Projects',
    color: 'text-secondary'
  }
];

const certifications = [
  'ISO 9001:2015 Quality Management',
  'ISO 14001:2015 Environmental Management',
  'ISO 45001:2019 Health & Safety Management'
];

const keyProjects = [
  'Sweihan Solar Project - 1.18 GW',
  'Al Dafra PV2 - 2 GW',
  'DEWA VI Solar Park',
  'Sakkakah Solar Complex'
];

export default function CTASection() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleProjectsClick = () => {
    window.location.href = '/projects';
  };

  const handleServicesClick = () => {
    window.location.href = '/services';
  };

  return (
    <section data-section="cta" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Ready to Start Your Project?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Power Your Future with
            <span className="text-primary"> Solar Excellence</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Join leading organizations who trust Fazna Solar Energy for their renewable energy infrastructure. 
            From concept to commissioning, we deliver world-class EPC solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              data-testid="button-cta-contact"
              onClick={handleContactClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Your Project Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover-elevate shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="button-cta-projects"
              onClick={handleProjectsClick}
            >
              <Globe className="mr-2 h-5 w-5" />
              View Our Portfolio
            </Button>
            
            <Button 
              size="lg"
              variant="ghost"
              className="text-lg px-8 py-6 hover-elevate transition-all duration-300"
              data-testid="button-cta-services"
              onClick={handleServicesClick}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-card-border hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <achievement.icon className={`h-8 w-8 mx-auto mb-4 ${achievement.color}`} />
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${achievement.color}`}>
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground leading-tight">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Certifications & Standards */}
          <Card className="border-card-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  ISO Certified Excellence
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to quality, environmental responsibility, and safety is validated through internationally recognized certifications.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Showcase */}
          <Card className="border-card-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Landmark Projects
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Proven track record delivering some of the world's largest and most complex solar installations.
              </p>
              
              <div className="space-y-3">
                {keyProjects.map((project, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-card-border">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-foreground">Dubai Office</h4>
                <p className="text-muted-foreground text-sm">Middle East Operations</p>
              </div>
              
              <div className="space-y-2">
                <Badge variant="outline" className="text-sm">
                  Managing Director: Syed Ibrahim Asif
                </Badge>
                <p className="text-foreground font-medium">+971 527822747</p>
                <p className="text-muted-foreground text-sm">
                  Sunday - Thursday: 8:00 AM - 6:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-card-border">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-foreground">India Office</h4>
                <p className="text-muted-foreground text-sm">Technical Operations</p>
              </div>
              
              <div className="space-y-2">
                <Badge variant="outline" className="text-sm">
                  Technical Director: Chittibabu Lakkum
                </Badge>
                <p className="text-foreground font-medium">+91 7981505254</p>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discuss your renewable energy project? Our experts are standing by.
          </p>
          <Button 
            size="lg"
            className="text-lg px-10 py-6 bg-gradient-to-r from-accent to-green-600 hover:from-accent/90 hover:to-green-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-cta-final"
            onClick={handleContactClick}
          >
            Start Your Solar Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}