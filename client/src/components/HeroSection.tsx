import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Globe, Award } from 'lucide-react';
import solarFarmImage from '@assets/generated_images/Large_scale_solar_farm_89a08086.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={solarFarmImage}
          alt="Large-scale solar installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="outline" className="bg-background/10 backdrop-blur border-white/20 text-white">
              <Zap className="w-3 h-3 mr-1" />
              2+ GW Installed
            </Badge>
            <Badge variant="outline" className="bg-background/10 backdrop-blur border-white/20 text-white">
              <Globe className="w-3 h-3 mr-1" />
              UAE & India Operations
            </Badge>
            <Badge variant="outline" className="bg-background/10 backdrop-blur border-white/20 text-white">
              <Award className="w-3 h-3 mr-1" />
              ISO Certified
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Leading EPC Contractor for
            <span className="text-secondary"> Solar Energy</span> Projects
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Engineering excellence in utility-scale solar installations across the Middle East and India. 
            Delivering world-class renewable energy infrastructure with proven expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              data-testid="button-view-projects"
              onClick={() => console.log('View projects clicked')}
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-background/10 backdrop-blur border-white/20 text-white hover:bg-background/20"
              data-testid="button-request-proposal"
              onClick={() => console.log('Request proposal clicked')}
            >
              Request a Proposal
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center" data-testid="stat-projects">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10+</div>
              <div className="text-white/80 text-lg">Major Projects Completed</div>
            </div>
            <div className="text-center" data-testid="stat-capacity">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">2+ GW</div>
              <div className="text-white/80 text-lg">Total Capacity Installed</div>
            </div>
            <div className="text-center" data-testid="stat-countries">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5+</div>
              <div className="text-white/80 text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}