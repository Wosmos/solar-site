'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Menu, Sun, Moon, Home, Building2, Wrench, FolderOpen, Mail, Phone, MapPin, Award, Zap, Globe, ExternalLink } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Building2 },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  const companyStats = [
    { label: '2+ GW', description: 'Capacity Delivered', icon: Zap },
    { label: '10+', description: 'Major Projects', icon: Globe },
    { label: 'ISO 9001:2015', description: 'Certified', icon: Award },
  ]

  const quickActions = [
    { label: 'Request Quote', href: '/contact', primary: true },
    { label: 'View Portfolio', href: '/projects' },
    { label: 'Our Services', href: '/services' },
  ]

  const isActive = (href: string) => pathname === href

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" data-testid="link-home-logo">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Fazna Solar</span>
              <span className="text-xs text-muted-foreground leading-tight">Energy LLC</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href)
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Link href="/contact" className="hidden md:flex">
            <Button data-testid="button-contact-cta">
              Contact Us
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] sm:w-[420px] p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-blue-50 dark:from-primary/10 dark:to-blue-950">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xl">F</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Fazna Solar</h2>
                      <p className="text-sm text-muted-foreground">Energy LLC</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Leading INC contractor for utility-scale solar projects
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex-1 p-6 space-y-6">
                  <nav className="space-y-2">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Navigation
                    </h3>
                    {navigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          data-testid={`link-mobile-${item.name.toLowerCase().replace(' ', '-')}`}
                          className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary/5 group ${
                            isActive(item.href)
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )
                    })}
                  </nav>

                  {/* Company Stats */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Our Impact
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {companyStats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-bold text-sm">{stat.label}</div>
                              <div className="text-xs text-muted-foreground">{stat.description}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Quick Actions
                    </h3>
                    <div className="space-y-2">
                      {quickActions.map((action, index) => (
                        <Link key={index} href={action.href} onClick={() => setIsOpen(false)}>
                          <Button
                            variant={action.primary ? "default" : "outline"}
                            className="w-full justify-start"
                            data-testid={`button-mobile-${action.label.toLowerCase().replace(' ', '-')}`}
                          >
                            {action.label}
                            <ExternalLink className="ml-auto h-4 w-4" />
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t bg-muted/30">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>UAE • India • Middle East</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+971 XX XXX XXXX</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      <Award className="h-3 w-3 mr-1" />
                      ISO 9001:2015 Certified
                    </Badge>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}