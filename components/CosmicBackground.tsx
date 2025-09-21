'use client'

import CosmicParticles from './CosmicParticles'

interface CosmicBackgroundProps {
  children: React.ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
}

export default function CosmicBackground({ 
  children, 
  className = '', 
  intensity = 'medium' 
}: CosmicBackgroundProps) {
  const getIntensityConfig = () => {
    switch (intensity) {
      case 'light':
        return {
          gradient: 'from-transparent via-accent/3 to-transparent',
          glowIntensity: 'accent/5',
          cosmicLayers: 2
        }
      case 'heavy':
        return {
          gradient: 'from-transparent via-accent/8 to-transparent',
          glowIntensity: 'accent/8',
          cosmicLayers: 4
        }
      default: // medium
        return {
          gradient: 'from-transparent via-accent/5 to-transparent',
          glowIntensity: 'accent/6',
          cosmicLayers: 3
        }
    }
  }

  const config = getIntensityConfig()

  return (
    <div className={`bg-gradient-to-br from-background via-card to-background relative overflow-hidden ${className}`}>
      {/* Enhanced Cosmic Background Gradient */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} animate-pulse`} />
        {/* Layered cosmic gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-accent/2 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/1 to-transparent animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-success/1 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Enhanced Cosmic Particle System */}
      <CosmicParticles intensity={intensity} />

      {/* Enhanced Cosmic Portal Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${config.glowIntensity} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-${config.glowIntensity} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '3s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-${config.glowIntensity} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '2s' }} />
        
        {/* Additional cosmic glow layers for heavy intensity */}
        {intensity === 'heavy' && (
          <>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-88 h-88 bg-success/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
          </>
        )}
      </div>

      {/* Cosmic Drift Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-cosmic-drift" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-success/15 to-transparent animate-cosmic-drift" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-cosmic-drift" style={{ animationDelay: '6s' }} />
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-success/20 to-transparent animate-cosmic-drift" style={{ animationDelay: '9s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  )
}
