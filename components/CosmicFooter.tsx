'use client'

import Link from 'next/link'

export default function CosmicFooter() {
  return (
    <footer className="relative bg-card border-t border-border/30 overflow-hidden">
      {/* Cosmic aura effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      {/* Floating cosmic particles */}
      <div className="absolute top-4 left-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-1/3 w-0.5 h-0.5 bg-accent/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-12 left-2/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center border border-accent/30 cosmic-glow">
                <span className="text-lg text-accent cosmic-pulse">◊</span>
              </div>
              <h3 className="text-lg font-bold text-foreground cosmic-text">PORTAL COLLECTIVE</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Where cosmic consciousness meets contemporary art. Interactive inkblot interpretations become limited edition masterpieces.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide cosmic-text">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                ◊ Home
              </Link>
              <Link href="/portal" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                ◈ Portal
              </Link>
              <Link href="/gallery" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                ✦ Gallery
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                ◉ About
              </Link>
              <Link href="/collect" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                ◐ Collect
              </Link>
            </nav>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide cosmic-text">Legal & Contact</h4>
            <nav className="space-y-2">
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                ⚖ Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                🔒 Privacy Policy
              </Link>
              <Link href="/collect" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                📧 Collector Inquiries
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-border/20 mt-8 pt-8">
          {/* Cosmic line effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Portal Collective Ink. All rights reserved. Protected by intellectual property laws.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground cosmic-text">
                Cosmic Art • Limited Editions • Collective Consciousness
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
