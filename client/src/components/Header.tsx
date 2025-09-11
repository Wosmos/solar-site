import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export default function Header({ onThemeToggle, isDark = false }: HeaderProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            >
              <span
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={onThemeToggle}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            className="hidden md:flex"
            data-testid="button-contact-cta"
            onClick={() => console.log('Contact us clicked')}
          >
            Contact Us
          </Button>

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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <span
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                <Button
                  className="mt-6"
                  data-testid="button-mobile-contact-cta"
                  onClick={() => {
                    console.log('Contact us clicked');
                    setIsOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}