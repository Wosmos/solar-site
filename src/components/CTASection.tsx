'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Award, 
  Users, 
  Shield,
  FileCheck
} from 'lucide-react';

const achievements = [
  {
    icon: Zap,
    value: '2+ GW',
    label: 'Successfully Delivered',
    color: 'text-secondary'
  },
  {
    icon: Shield,
    value: '90%',
    label: 'Safety Compliance',
    color: 'text-accent'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Landmark Projects',
    color: 'text-secondary'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Expert Technicians',
    color: 'text-primary'
  }
];

export default function CTASection() {

  return (
    <section data-section="cta" className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">


        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
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
    {/* Call to Action */}
      <section className="rounded-md mt-6 mb-2 py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white ">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            Ready to Start Your Solar Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Fazna Solar Energy for world-class INC delivery and proven expertise across utility-scale solar installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/10 border-background/20 text-primary-foreground hover:bg-background/20"
              data-testid="button-contact-services"
              onClick={() => window.location.href = '/contact'}
            >
              <Users className="h-5 w-5 mr-2" />
              Contact Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 border-background/20 text-primary-foreground hover:bg-background/20"
              data-testid="button-project-discussion"
              onClick={() => window.location.href = '/projects'}
            >
              <FileCheck className="h-5 w-5 mr-2" />
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

        
      </div>
    </section>
  );
}