'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp, MessageCircle, X, ExternalLink, Phone, Mail, MapPin, Clock, Sun, Users, Award, HelpCircle,ChevronUp } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdvancedBackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [isLongPress, setIsLongPress] = useState(false)
  const clickTimer : any = useRef(null)
  const longPressTimer : any = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    if (isExpanded) return
    
    setClickCount(prev => prev + 1)
    
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
    }
    
    clickTimer.current = setTimeout(() => {
      if (clickCount === 0) {
        // Single click - scroll to top
        scrollToTop()
      }
      setClickCount(0)
    }, 300)
  }

  const handleDoubleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
    }
    setClickCount(0)
    toggleExpand()
  }

  const handleMouseDown = () => {
    longPressTimer.current = setTimeout(() => {
      setIsLongPress(true)
      toggleExpand()
    }, 500)
  }

  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }
    if (isLongPress) {
      setIsLongPress(false)
      return
    }
  }

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setIsLongPress(true)
      toggleExpand()
    }, 500)
  }

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }
    if (isLongPress) {
      setIsLongPress(false)
      return
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = `${(scrollProgress / 100) * circumference} ${circumference}`

  const quickAnswers = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We specialize in solar PV installations, wind projects, and project finance structuring across Asia, Middle East, and Africa.",
      icon: Sun
    },
    {
      id: 2,
      question: "How large is your team?",
      answer: "We have 37+ staff including project managers, construction managers, QC inspectors, HSE officers, and site engineers.",
      icon: Users
    },
    {
      id: 3,
      question: "What certifications do you hold?",
      answer: "We're certified with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2019 for quality, environmental, and safety management.",
      icon: Award
    },
    {
      id: 4,
      question: "How can I get a quote?",
      answer: "Contact us via phone or email, and we'll provide a customized quote for your renewable energy project within 24 hours.",
      icon: HelpCircle
    }
  ]

  const contactInfo = [
    // { 
    //   icon: Phone, 
    //   label: 'Office', 
    //   value: '+971 527822747',
    //   action: () => window.open('tel:+97152782274', '_self')
    // },
    // { 
    //   icon: Mail, 
    //   label: 'Email Us', 
    //   value: 'info@faznasolar.com',
    //   action: () => window.open('mailto:info@faznasolar.com', '_self')
    // },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Dubai Investment Park',
      action: () => window.open('https://maps.google.com/?q=Dubai+Investment+Park+First', '_blank')
    },
    { 
      icon: Clock, 
      label: 'Business Hours', 
      value: 'Sun-Thu: 8AM-6PM GST',
      action: null
    }
  ]

  return (
    <>
      {/* Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Main Widget */}
      <div
        className={`fixed bottom-8 right-8 z-[999] transition-all duration-500 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
        }`}
      >
        {/* Expanded Chat Panel */}
        <div
          className={`absolute bottom-16 right-0 bg-background border border-border rounded-2xl shadow-2xl transition-all duration-500 ease-out transform origin-bottom-right ${
            isExpanded
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
          }`}
          style={{
            width: '320px',
            maxHeight: '480px'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="rounded-full overflow-hidden bg-transparent flex items-center justify-center">
                <Image
                  src="/images/fazna-solar-logo.png"
                  alt="Fazna Solar Energy"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Fazna Solar Energy</h3>
                <p className="text-xs text-muted-foreground">Quick Help & Contact</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setIsExpanded(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Quick Answers */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                Quick Answers
              </h4>
              <div className="space-y-2">
                {quickAnswers.map((qa, index) => {
                  const Icon = qa.icon
                  return (
                    <details
                      key={qa.id}
                      className="group bg-muted/30 rounded-lg transition-all duration-200 hover:bg-muted/50"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <summary className="flex items-center gap-3 p-3 cursor-pointer list-none">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-foreground flex-1">{qa.question}</span>
                        <ChevronUp className="h-3 w-3 text-muted-foreground opacity-50 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-3 pb-3 pl-12">
                        <p className="text-xs text-muted-foreground leading-relaxed">{qa.answer}</p>
                      </div>
                    </details>
                  )
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                Contact Information
              </h4>
              <div className="space-y-2">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={info.label}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                        info.action ? 'hover:bg-muted/50 cursor-pointer' : 'hover:bg-muted/30'
                      }`}
                      style={{
                        animationDelay: `${(index + 4) * 50}ms`
                      }}
                      onClick={info.action || undefined}
                    >
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">{info.label}</p>
                        <p className="text-xs text-muted-foreground truncate">{info.value}</p>
                      </div>
                      {info.action && (
                        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-50 flex-shrink-0" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact CTA Section */}
            <div className="pt-2 border-t border-border">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8"
                  onClick={() => {
                    setIsExpanded(false)
                    window.open('tel:+971527822747', '_self')
                  }}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8"
                  onClick={() => {
                    setIsExpanded(false)
                    window.open('mailto:info@faznasolar.com', '_self')
                  }}
                >
                  <Mail className="h-3 w-3 mr-1" />
                  Email
                </Button>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl h-9"
                onClick={() => {
                  setIsExpanded(false)
                  const contactElement = document.querySelector('[data-section="contact"]')
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    router.push('/contact')
                  }
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                24-hour response time guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Main Button */}
        <div className="relative group">
          {/* Progress Circle */}
          <svg 
            className="absolute inset-0 w-14 h-14 transform -rotate-90 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 56 56"
          >
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-muted-foreground/20"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="text-primary transition-all duration-300 ease-out"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(var(--primary), 0.4))'
              }}
            />
          </svg>

          {/* Button */}
          <Button
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            size="icon"
            className={`relative shadow-xl hover:shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 w-14 transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
              isExpanded ? 'ring-4 ring-primary/20 bg-primary/90' : ''
            }`}
            data-testid="button-back-to-top"
            aria-label={`Back to top - ${Math.round(scrollProgress)}% scrolled. Double-click or long-press for options`}
          >
            <div className="relative">
              {isExpanded ? (
                <MessageCircle className="h-6 w-6 transition-all duration-300" />
              ) : (
                <ArrowUp className="h-6 w-6 transition-all duration-300 group-hover:-translate-y-1" />
              )}
              
              {/* Notification Dot */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>
          </Button>

          {/* Enhanced Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-foreground/90 backdrop-blur-sm text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none transform translate-y-1 group-hover:translate-y-0 shadow-lg">
            <div className="text-center">
              <div className="font-medium">Click: Scroll to top ({Math.round(scrollProgress)}%)</div>
              <div className="text-xs opacity-75 mt-1">Double-click or long-press for options</div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground/90" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}