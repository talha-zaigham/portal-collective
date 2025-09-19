'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PortalHandsEffect from './PortalHandsEffect'

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const cosmicPhrases = [
    "Where consciousness meets canvas",
    "The universe speaks through ink",
    "Collective dreams become art",
    "Anonymous voices create cosmic visions",
    "Art emerges from the void",
    "Perception shapes reality"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % cosmicPhrases.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Portal Hands Effect - Main Background */}
      <div className="absolute inset-0 w-full h-full">
        <PortalHandsEffect 
          title="PORTAL"
          subtitle="Collective Ink"
          className="w-full h-full"
        />
      </div>
      
      {/* Cosmic Consciousness Particles */}
      <div className="absolute inset-0 overflow-hidden z-20">
        {[
          { left: 10, top: 20, delay: 0, duration: 6, opacity: 0.3 },
          { left: 25, top: 80, delay: 1, duration: 5, opacity: 0.5 },
          { left: 40, top: 15, delay: 2, duration: 7, opacity: 0.4 },
          { left: 60, top: 70, delay: 0.5, duration: 6.5, opacity: 0.6 },
          { left: 80, top: 30, delay: 3, duration: 5.5, opacity: 0.3 },
          { left: 15, top: 60, delay: 1.5, duration: 6.8, opacity: 0.7 },
          { left: 35, top: 45, delay: 2.5, duration: 5.2, opacity: 0.4 },
          { left: 55, top: 85, delay: 0.8, duration: 7.2, opacity: 0.5 },
          { left: 75, top: 10, delay: 3.5, duration: 6.3, opacity: 0.6 },
          { left: 90, top: 55, delay: 1.2, duration: 5.8, opacity: 0.3 },
          { left: 5, top: 75, delay: 2.8, duration: 6.1, opacity: 0.8 },
          { left: 30, top: 35, delay: 0.3, duration: 7.5, opacity: 0.4 },
          { left: 50, top: 90, delay: 4, duration: 5.7, opacity: 0.5 },
          { left: 70, top: 25, delay: 1.8, duration: 6.4, opacity: 0.6 },
          { left: 85, top: 65, delay: 2.2, duration: 5.9, opacity: 0.3 },
          { left: 20, top: 50, delay: 3.2, duration: 6.7, opacity: 0.7 },
          { left: 45, top: 5, delay: 0.7, duration: 7.1, opacity: 0.4 },
          { left: 65, top: 40, delay: 1.7, duration: 5.4, opacity: 0.5 },
          { left: 95, top: 80, delay: 2.9, duration: 6.6, opacity: 0.6 },
          { left: 12, top: 95, delay: 3.8, duration: 5.3, opacity: 0.3 },
          { left: 38, top: 12, delay: 1.1, duration: 6.9, opacity: 0.8 },
          { left: 58, top: 88, delay: 2.3, duration: 5.6, opacity: 0.4 },
          { left: 78, top: 42, delay: 0.9, duration: 7.3, opacity: 0.5 },
          { left: 8, top: 68, delay: 3.1, duration: 6.2, opacity: 0.6 },
          { left: 28, top: 38, delay: 1.6, duration: 5.8, opacity: 0.3 },
          { left: 48, top: 72, delay: 2.7, duration: 6.5, opacity: 0.7 },
          { left: 68, top: 18, delay: 0.4, duration: 7.4, opacity: 0.4 },
          { left: 88, top: 52, delay: 3.6, duration: 5.9, opacity: 0.5 },
          { left: 18, top: 82, delay: 1.9, duration: 6.7, opacity: 0.6 },
          { left: 42, top: 28, delay: 2.4, duration: 5.3, opacity: 0.3 },
          { left: 62, top: 58, delay: 0.6, duration: 7.6, opacity: 0.8 },
          { left: 82, top: 8, delay: 3.3, duration: 6.1, opacity: 0.4 },
          { left: 2, top: 48, delay: 1.4, duration: 5.7, opacity: 0.5 },
          { left: 22, top: 78, delay: 2.6, duration: 6.8, opacity: 0.6 },
          { left: 52, top: 22, delay: 0.8, duration: 7.2, opacity: 0.3 },
          { left: 72, top: 62, delay: 3.4, duration: 5.4, opacity: 0.7 },
          { left: 92, top: 38, delay: 1.3, duration: 6.3, opacity: 0.4 },
          { left: 32, top: 92, delay: 2.1, duration: 5.9, opacity: 0.5 },
          { left: 52, top: 48, delay: 0.5, duration: 7.7, opacity: 0.6 },
          { left: 72, top: 12, delay: 3.7, duration: 6.4, opacity: 0.3 },
          { left: 92, top: 68, delay: 1.8, duration: 5.5, opacity: 0.8 },
          { left: 12, top: 32, delay: 2.5, duration: 6.9, opacity: 0.4 },
          { left: 32, top: 72, delay: 0.7, duration: 7.1, opacity: 0.5 },
          { left: 52, top: 8, delay: 3.9, duration: 6.6, opacity: 0.6 },
          { left: 72, top: 48, delay: 1.2, duration: 5.8, opacity: 0.3 },
          { left: 92, top: 88, delay: 2.8, duration: 6.2, opacity: 0.7 },
          { left: 8, top: 18, delay: 0.9, duration: 7.5, opacity: 0.4 },
          { left: 28, top: 58, delay: 3.5, duration: 6.7, opacity: 0.5 },
          { left: 48, top: 98, delay: 1.7, duration: 5.6, opacity: 0.6 },
          { left: 68, top: 28, delay: 2.3, duration: 6.8, opacity: 0.3 },
          { left: 88, top: 68, delay: 0.6, duration: 7.3, opacity: 0.8 }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      {/* Cosmic Consciousness Text */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 
              className={`text-6xl md:text-8xl font-bold tracking-tight leading-none transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                color: '#ffffff',
                textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.1)',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
                fontWeight: '100',
                letterSpacing: '0.05em'
              }}
            >
              {cosmicPhrases[currentPhrase]}
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Portal */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center space-y-6">
          {/* Cosmic Navigation */}
          <div className="flex space-x-8">
            <Link href="/portal" className="cosmic-nav-link group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-all duration-500 group-hover:scale-110">
                <span className="text-2xl text-accent group-hover:text-white transition-colors duration-500">◊</span>
              </div>
              <span className="text-xs text-white/70 mt-2 group-hover:text-white transition-colors duration-500">Portal</span>
            </Link>
            
            <Link href="/gallery" className="cosmic-nav-link group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-all duration-500 group-hover:scale-110">
                <span className="text-2xl text-accent group-hover:text-white transition-colors duration-500">✦</span>
              </div>
              <span className="text-xs text-white/70 mt-2 group-hover:text-white transition-colors duration-500">Gallery</span>
            </Link>
            
            <Link href="/about" className="cosmic-nav-link group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-all duration-500 group-hover:scale-110">
                <span className="text-2xl text-accent group-hover:text-white transition-colors duration-500">◈</span>
              </div>
              <span className="text-xs text-white/70 mt-2 group-hover:text-white transition-colors duration-500">About</span>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="w-8 h-12 border border-white/30 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
