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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="bg-background/10 backdrop-blur border-white/20 text-white text-sm px-4 py-2 font-medium">
              <Zap className="w-4 h-4 mr-2" />
              2+ GW Successfully Delivered
            </Badge>
            <Badge variant="outline" className="bg-background/10 backdrop-blur border-white/20 text-white text-sm px-4 py-2 font-medium">
              <Globe className="w-4 h-4 mr-2" />
              10+ Major Projects Completed
            </Badge>
            <Badge variant="outline" className="bg-background/10 backdrop-blur border-white/20 text-white text-sm px-4 py-2 font-medium">
              <Award className="w-4 h-4 mr-2" />
              ISO 9001:2015 Certified
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Trusted EPC Partner for 
            <span className="text-secondary bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent"> Utility-Scale Solar</span> Excellence
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
              From record-breaking gigawatt installations to cutting-edge renewable infrastructure, 
              we deliver engineering excellence that powers the future of clean energy.
            </p>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed">
              <strong>Proven Track Record:</strong> Successfully completed landmark projects including 
              Sweihan Solar (1.18 GW) and Al Dhafra PV2 (2 GW) with zero safety incidents and 
              industry-leading efficiency standards across the Middle East and India.
            </p>
          </div>

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
              Explore Our Success Stories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-background/10 backdrop-blur border-white/20 text-white hover:bg-background/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="button-request-proposal"
              onClick={() => window.location.href = '/contact'}
            >
              Partner With Us Today
            </Button>
          </div>

          {/* Key Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center" data-testid="stat-capacity">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">2+ GW</div>
              <div className="text-white/85 text-base lg:text-lg font-medium">Total Capacity Delivered</div>
            </div>
            <div className="text-center" data-testid="stat-projects">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">10+</div>
              <div className="text-white/85 text-base lg:text-lg font-medium">Major Projects Completed</div>
            </div>
            <div className="text-center" data-testid="stat-safety">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">0</div>
              <div className="text-white/85 text-base lg:text-lg font-medium">Lost Time Incidents</div>
            </div>
            <div className="text-center" data-testid="stat-experience">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">3+</div>
              <div className="text-white/85 text-base lg:text-lg font-medium">Years of Excellence</div>
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