"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Large_scale_solar_farm_89a08086.png')",
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mini Heading (Pill Badge) */}
          <Badge
            variant="outline"
            className="bg-black/30 backdrop-blur-md border-white/40 text-white text-sm px-6 py-2 font-semibold hover:bg-black/40 hover:scale-105 transition-all duration-300 group rounded-full border-1 border-yellow-500"
          >
            <Zap className="w-4 h-4 mr-2 group-hover:text-yellow-400 transition-colors" />
            2+ GW Successfully Delivered
          </Badge>

          {/* Major Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Engineering Tomorrow’s
            <span className="mx-1 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent ">
              Clean Energy
            </span>
          </h1>

          {/* Descriptive Text */}
          <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Delivering utility-scale solar excellence across the Middle East and
            India with zero safety incidents and ISO-certified precision.
          </p>

          {/* Single CTA Button */}
          <div className="-pt-4">
            <Button
              size="lg"
              className="rounded-full text-lg px-6 py-3 bg-gradient-to-r from-primary via-blue-600/30 to-blue-700/40 hover:from-primary/90 hover:via-blue-600/90 hover:to-blue-700/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group font-semibold"
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
              <span className="flex items-center">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 rotate-90 text-white/60" />
      </div>
    </section>
  );
}
