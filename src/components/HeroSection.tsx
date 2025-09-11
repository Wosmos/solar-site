"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Globe,
  Award,
  ChevronDown,
  Play,
  Shield,
  Target,
  TrendingUp,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const heroSlides = [
    {
      title: "Trusted EPC Partner for",
      highlight: "Utility-Scale Solar",
      subtitle: "Excellence",
      description:
        "From record-breaking gigawatt installations to cutting-edge renewable infrastructure, we deliver engineering excellence that powers the future of clean energy.",
      stats: { value: "2+ GW", label: "Successfully Delivered" },
    },
    {
      title: "Engineering Tomorrow's",
      highlight: "Clean Energy",
      subtitle: "Infrastructure",
      description:
        "Leading the renewable revolution with innovative solar solutions across the Middle East and India. Zero safety incidents, maximum efficiency.",
      stats: { value: "10+", label: "Major Projects Completed" },
    },
    {
      title: "Powering Nations with",
      highlight: "Solar Innovation",
      subtitle: "& Excellence",
      description:
        "ISO 9001:2015 certified excellence in every project. From Sweihan Solar to Al Dhafra PV2, we set industry benchmarks.",
      stats: { value: "0", label: "Lost Time Incidents" },
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      clearInterval(slideInterval);
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${
              mousePosition.y * 10
            }px) scale(1.05)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
        </div>

        {/* Animated solar panel pattern */}
        <div
          className="absolute inset-0 opacity-15 transition-all duration-500"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Crect width='15' height='15'/%3E%3Crect x='25' width='15' height='15'/%3E%3Crect x='50' width='15' height='15'/%3E%3Crect y='25' width='15' height='15'/%3E%3Crect x='25' y='25' width='15' height='15'/%3E%3Crect x='50' y='25' width='15' height='15'/%3E%3Crect y='50' width='15' height='15'/%3E%3Crect x='25' y='50' width='15' height='15'/%3E%3Crect x='50' y='50' width='15' height='15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translate(${mousePosition.x * -5}px, ${
              mousePosition.y * -5
            }px)`,
          }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`max-w-6xl mx-auto space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Enhanced Badges with Animation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge
              variant="outline"
              className="bg-black/30 backdrop-blur-xl border-white/40 text-white text-sm px-6 py-3 font-semibold shadow-2xl hover:bg-black/40 hover:scale-105 transition-all duration-300 group"
              data-testid="badge-capacity"
            >
              <Zap
                className="w-4 h-4 mr-2 group-hover:text-yellow-400 transition-colors"
                aria-hidden="true"
              />
              2+ GW Successfully Delivered
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/30 backdrop-blur-xl border-white/40 text-white text-sm px-6 py-3 font-semibold shadow-2xl hover:bg-black/40 hover:scale-105 transition-all duration-300 group"
              data-testid="badge-projects"
            >
              <Globe
                className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors"
                aria-hidden="true"
              />
              10+ Major Projects Completed
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/30 backdrop-blur-xl border-white/40 text-white text-sm px-6 py-3 font-semibold shadow-2xl hover:bg-black/40 hover:scale-105 transition-all duration-300 group"
              data-testid="badge-certification"
            >
              <Award
                className="w-4 h-4 mr-2 group-hover:text-green-400 transition-colors"
                aria-hidden="true"
              />
              ISO 9001:2015 Certified
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/30 backdrop-blur-xl border-white/40 text-white text-sm px-6 py-3 font-semibold shadow-2xl hover:bg-black/40 hover:scale-105 transition-all duration-300 group"
              data-testid="badge-safety"
            >
              <Shield
                className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors"
                aria-hidden="true"
              />
              Zero Safety Incidents
            </Badge>
          </div>

          {/* Dynamic Hero Title */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
              <span className="block transition-all duration-700 ease-in-out">
                {currentHero.title}
              </span>
              <span className="block bg-gradient-to-r from-secondary via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                {currentHero.highlight}
              </span>
              <span className="block text-white/90">
                {currentHero.subtitle}
              </span>
            </h1>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-secondary scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium transition-all duration-700">
              {currentHero.description}
            </p>

            {/* Featured Stat */}
            <div className="inline-flex items-center space-x-4 bg-black/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">
                  {currentHero.stats.value}
                </div>
                <div className="text-sm text-white/80">
                  {currentHero.stats.label}
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold text-white">
                      Sweihan Solar
                    </div>
                    <div className="text-sm text-white/70">1.18 GW • UAE</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  <div>
                    <div className="font-semibold text-white">
                      Al Dhafra PV2
                    </div>
                    <div className="text-sm text-white/70">2 GW • UAE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              size="lg"
              className="text-lg px-12 py-6 bg-gradient-to-r from-primary via-blue-600 to-blue-700 hover:from-primary/90 hover:via-blue-600/90 hover:to-blue-700/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group font-semibold border-0 relative overflow-hidden"
              data-testid="button-view-projects"
              onClick={() => {
                const projectsSection = document.querySelector(
                  '[data-section="projects"]'
                );
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/projects";
                }
              }}
            >
              <span className="relative z-10 flex items-center">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-6 bg-black/20 backdrop-blur-xl border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/70 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold group relative overflow-hidden"
              data-testid="button-request-proposal"
              onClick={() => (window.location.href = "/contact")}
              aria-label="Contact us to discuss your solar project partnership"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Your Project
              </span>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 py-6 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium group"
              data-testid="button-learn-more"
              onClick={() => {
                const aboutSection = document.querySelector(
                  '[data-section="about"]'
                );
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/about";
                }
              }}
            >
              Learn More
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            <div className="text-center group" data-testid="stat-capacity">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Zap className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  2+ GW
                </div>
                <div className="text-white/85 text-sm lg:text-base font-medium">
                  Total Capacity Delivered
                </div>
              </div>
            </div>
            <div className="text-center group" data-testid="stat-projects">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Globe className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  10+
                </div>
                <div className="text-white/85 text-sm lg:text-base font-medium">
                  Major Projects Completed
                </div>
              </div>
            </div>
            <div className="text-center group" data-testid="stat-safety">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  0
                </div>
                <div className="text-white/85 text-sm lg:text-base font-medium">
                  Lost Time Incidents
                </div>
              </div>
            </div>
            <div className="text-center group" data-testid="stat-experience">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Users className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  3+
                </div>
                <div className="text-white/85 text-sm lg:text-base font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-80">
            <div className="flex items-center space-x-2 text-white/70">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Established 2021</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <Target className="h-4 w-4" />
              <span className="text-sm">100% Project Success Rate</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <Award className="h-4 w-4" />
              <span className="text-sm">Industry Leading Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          className="flex flex-col items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          aria-label="Scroll down to explore more content"
          data-testid="button-scroll-indicator"
        >
          <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
            Discover More
          </span>
          <div className="flex flex-col space-y-1">
            <ChevronDown
              className="h-5 w-5 text-white/60 group-hover:text-white animate-bounce"
              aria-hidden="true"
            />
            <ChevronDown
              className="h-4 w-4 text-white/40 group-hover:text-white/80 animate-bounce"
              style={{ animationDelay: "0.1s" }}
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
