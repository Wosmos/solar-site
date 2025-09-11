import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Globe, Award, ChevronDown } from 'lucide-react';
import solarFarmImage from '@assets/generated_images/Large_scale_solar_farm_89a08086.png';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
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
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
            <span className="text-secondary bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent"> Solar Energy</span> Projects
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Engineering excellence in utility-scale solar installations across the Middle East and India. 
            Delivering world-class renewable energy infrastructure with proven expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              data-testid="button-view-projects"
              onClick={() => {
                const projectsSection = document.querySelector('[data-section="projects"]');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/projects';
                }
              }}
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-background/10 backdrop-blur border-white/20 text-white hover:bg-background/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="button-request-proposal"
              onClick={() => {
                const contactSection = document.querySelector('[data-section="contact"]');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
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

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}>
          <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </div>
    </section>
  );
}