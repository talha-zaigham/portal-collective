'use client'

import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function CosmicFooter() {
  return (
    <footer className="relative bg-card border-t border-accent/20 overflow-hidden z-40">
      {/* Subtle cosmic overlay - very faint gold shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3 opacity-50"></div>
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      {/* Subtle floating cosmic particles - low opacity */}
      <div className="absolute top-6 left-1/4 w-0.5 h-0.5 bg-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute top-12 right-1/3 w-1 h-1 bg-accent/15 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-8 left-2/3 w-0.5 h-0.5 bg-accent/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left: Brand Section */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center glow-luxury">
                <span className="text-lg text-black cosmic-pulse">◊</span>
              </div>
              <h3 className="text-lg font-bold text-foreground font-heading cosmic-text">Portal Collective</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Where cosmic consciousness meets contemporary art. Interactive inkblot interpretations become limited edition masterpieces.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-1 space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide font-heading cosmic-text">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 luxury-hover group">
                <span className="group-hover:animate-luxury-shimmer">◊ Home</span>
              </Link>
              <Link href="/portal" className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 luxury-hover group">
                <span className="group-hover:animate-luxury-shimmer">◈ Portal</span>
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 luxury-hover group">
                <span className="group-hover:animate-luxury-shimmer">✦ Gallery</span>
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 luxury-hover group">
                <span className="group-hover:animate-luxury-shimmer">◉ About</span>
              </Link>
              <Link href="/collect" className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 luxury-hover group">
                <span className="group-hover:animate-luxury-shimmer">◐ Collect</span>
              </Link>
            </nav>
          </div>

          {/* Right: Newsletter Signup */}
          <div className="flex-1 space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide font-heading cosmic-text">Cosmic Updates</h4>
            <div className="relative glass-luxury rounded-lg p-6 luxury-hover glow-luxury overflow-hidden">
              {/* Premium cosmic background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/8"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <form className="relative space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 flex items-center justify-center border border-accent/40 glow-luxury">
                    <span className="text-xs text-accent cosmic-pulse">◊</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground tracking-wide cosmic-text">Join the Collective</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 input-luxury text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-luxury text-sm px-6 py-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:animate-luxury-shimmer">Subscribe</span>
                  </button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Unsubscribe anytime. We respect your cosmic privacy.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-accent/20 mt-8 pt-6">
          {/* Cosmic line effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          
          <div className="flex flex-col space-y-3">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Portal Collective Ink. All rights reserved. Protected by intellectual property laws.
            </p>
            <p className="text-xs text-muted-foreground text-center cosmic-text">
              Cosmic Art • Limited Editions • Collective Consciousness
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
