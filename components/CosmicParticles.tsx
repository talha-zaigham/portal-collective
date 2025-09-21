'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

interface CosmicParticlesProps {
  intensity?: 'light' | 'medium' | 'heavy'
  className?: string
}

export default function CosmicParticles({ intensity = 'medium', className = '' }: CosmicParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const particleCount = intensity === 'light' ? 15 : intensity === 'medium' ? 25 : 40
    
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4
    }))
    
    setParticles(newParticles)
  }, [intensity])

  if (!isClient) return null

  return (
    <div className={`cosmic-particles ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cosmic-particle gpu-accelerated"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}
