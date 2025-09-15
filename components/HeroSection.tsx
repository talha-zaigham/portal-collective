'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      {/* Floating particles effect - reduced on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: 10, top: 20, delay: 0, duration: 6 },
          { left: 25, top: 80, delay: 1, duration: 5 },
          { left: 40, top: 15, delay: 2, duration: 7 },
          { left: 60, top: 70, delay: 0.5, duration: 6.5 },
          { left: 80, top: 30, delay: 3, duration: 5.5 },
          { left: 15, top: 60, delay: 1.5, duration: 6.8 },
          { left: 35, top: 45, delay: 2.5, duration: 5.2 },
          { left: 55, top: 85, delay: 0.8, duration: 7.2 },
          { left: 75, top: 10, delay: 3.5, duration: 6.3 },
          { left: 90, top: 55, delay: 1.2, duration: 5.8 },
          { left: 5, top: 75, delay: 2.8, duration: 6.1 },
          { left: 30, top: 35, delay: 0.3, duration: 7.5 },
          { left: 50, top: 90, delay: 4, duration: 5.7 },
          { left: 70, top: 25, delay: 1.8, duration: 6.4 },
          { left: 85, top: 65, delay: 2.2, duration: 5.9 },
          { left: 20, top: 50, delay: 3.2, duration: 6.7 },
          { left: 45, top: 5, delay: 0.7, duration: 7.1 },
          { left: 65, top: 40, delay: 1.7, duration: 5.4 },
          { left: 95, top: 80, delay: 2.9, duration: 6.6 },
          { left: 12, top: 95, delay: 3.8, duration: 5.3 }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/20 sm:bg-accent/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Main Inkblot Display */}
          <div className="relative">
            <div className="inkblot-glow">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-card via-muted to-card flex items-center justify-center shadow-2xl animate-glow">
                {/* Placeholder for actual inkblot image */}
                <div className="w-4/5 h-4/5 bg-gradient-to-br from-muted/50 to-background rounded-full opacity-90 flex items-center justify-center relative overflow-hidden">
                  {/* Animated inkblot pattern */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent animate-pulse" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-transparent to-accent/10 animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-transparent to-accent/5 animate-pulse" style={{ animationDelay: '2s' }} />
                  
                  {/* Center content */}
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl md:text-2xl text-accent">◊</span>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">INKBLOT A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="heading-xl font-bold tracking-tight leading-none">
                <span className="text-foreground">PORTAL</span>
                <br />
                <span className="text-accent">Collective Ink</span>
              </h1>
              
              <p className="body-lg text-muted-foreground font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4">
                Where your perceptions become collectible art
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <Link href="/portal">
                <button className="btn-luxury btn-mobile-lg tracking-wider">
                  Enter Portal
                </button>
              </Link>
            </div>
          </div>

          {/* Subtle scroll indicator - hidden on mobile */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
