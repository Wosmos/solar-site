'use client'

import Link from 'next/link'
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Shield,
  Linkedin,
  Twitter
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    'Solar INC Services',
    'Tracker Installation',
    'Module Installation',
    'Robot Installation',
    'Earthing & Alignment'
  ]

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 45001:2019'
  ]

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" data-testid="link-footer-home">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">F</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-tight text-card-foreground">Fazna Solar</span>
                  <span className="text-sm text-muted-foreground leading-tight">Energy LLC</span>
                </div>
              </div>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading INC contractor specializing in utility-scale solar installations across 
              the Middle East and India. Delivering world-class renewable energy solutions.
            </p>
            
            <div className="flex space-x-3">
              <div 
                className="h-8 w-8 bg-muted rounded-md flex items-center justify-center cursor-pointer hover-elevate"
                onClick={() => console.log('LinkedIn clicked')}
                data-testid="link-linkedin"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </div>
              <div 
                className="h-8 w-8 bg-muted rounded-md flex items-center justify-center cursor-pointer hover-elevate"
                onClick={() => console.log('Twitter clicked')}
                data-testid="link-twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-card-foreground mb-1">Dubai Office</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Plot No. 119-0, Dubai Investment Park First
                </p>
                <div className="space-y-1">
                  <div 
                    className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-primary"
                    onClick={() => console.log('Dubai phone clicked')}
                    data-testid="link-dubai-phone"
                  >
                    <Phone className="h-3 w-3" />
                    +971 527822747
                  </div>
                  <div 
                    className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-primary"
                    onClick={() => console.log('Dubai email clicked')}
                    data-testid="link-dubai-email"
                  >
                    <Mail className="h-3 w-3" />
                    info@faznasolar.com
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-card-foreground mb-1">India Office</p>
                <div className="space-y-1">
                  <div 
                    className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-primary"
                    onClick={() => console.log('India phone clicked')}
                    data-testid="link-india-phone"
                  >
                    <Phone className="h-3 w-3" />
                    +91 7981505254
                  </div>
                  <div 
                    className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-primary"
                    onClick={() => console.log('India email clicked')}
                    data-testid="link-india-email"
                  >
                    <Mail className="h-3 w-3" />
                    cb@faznasolar.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Fazna Solar Energy LLC. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Subsidiary of Aye Totes Pvt Ltd, India
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* ISO Certifications */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">ISO Certified:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className="text-xs text-muted-foreground cursor-pointer hover:text-primary"
                      onClick={() => console.log(`ISO certification clicked: ${cert}`)}
                      data-testid={`link-iso-${cert.replace(/[^a-z0-9]/g, '-').toLowerCase()}`}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-6 pt-6 border-t border-border">
            <Link 
              href="/privacy" 
              data-testid="link-privacy-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              data-testid="link-terms-of-service"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}