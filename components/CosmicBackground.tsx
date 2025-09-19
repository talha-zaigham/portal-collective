'use client'

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
          particles: 15,
          particleSize: 'w-0.5 h-0.5',
          particleOpacity: 'bg-accent/20'
        }
      case 'heavy':
        return {
          gradient: 'from-transparent via-accent/8 to-transparent',
          particles: 50,
          particleSize: 'w-1 h-1',
          particleOpacity: 'bg-accent/50'
        }
      default: // medium
        return {
          gradient: 'from-transparent via-accent/5 to-transparent',
          particles: 30,
          particleSize: 'w-0.5 h-0.5',
          particleOpacity: 'bg-accent/40'
        }
    }
  }

  const config = getIntensityConfig()

  // Generate deterministic particle positions
  const generateParticles = (count: number) => {
    const particles = []
    for (let i = 0; i < count; i++) {
      particles.push({
        left: (i * 7 + 13) % 100,
        top: (i * 11 + 17) % 100,
        delay: (i * 0.3) % 4,
        duration: 8 + (i % 3),
        opacity: 0.3 + (i % 3) * 0.1
      })
    }
    return particles
  }

  const particles = generateParticles(config.particles)

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background via-card to-background relative overflow-hidden ${className}`}>
      {/* Cosmic Background Gradient */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} animate-pulse`} />
        {/* Additional cosmic layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-accent/2 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/1 to-transparent animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Cosmic Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute ${config.particleSize} ${config.particleOpacity} rounded-full animate-float`}
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

      {/* Cosmic Portal Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
