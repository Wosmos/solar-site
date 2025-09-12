'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    // Call once to set initial state
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Calculate the stroke-dasharray for the progress circle
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = `${(scrollProgress / 100) * circumference} ${circumference}`

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Progress Circle Background */}
        <svg 
          className="absolute inset-0 w-12 h-12 transform -rotate-90 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 40 40"
        >
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-muted-foreground/20"
          />
          {/* Progress circle */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="text-primary transition-all duration-300 ease-out"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(var(--primary), 0.3))'
            }}
          />
        </svg>

        {/* Button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="relative shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 w-12 transition-all duration-300 ease-out hover:scale-105 active:scale-95 "
          data-testid="button-back-to-top"
          aria-label={`Back to top - ${Math.round(scrollProgress)}% scrolled`}
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </Button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Back to top ({Math.round(scrollProgress)}%)
        </div>
      </div>
    </div>
  )
}