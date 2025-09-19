'use client'

import { useEffect, useRef, useState } from 'react'

interface PortalHandsEffectProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function PortalHandsEffect({ 
  title = "PORTAL",
  subtitle = "Collective Ink",
  className = ""
}: PortalHandsEffectProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('loadeddata', () => setIsLoaded(true))
      video.addEventListener('error', () => setIsLoaded(false))
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background Layer - Teal/Cyan */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: '#9ec9c8' }}
      />
      
      {/* Title Layer - Text that appears to be "grabbed" - Behind hands */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
        <div className="text-center space-y-6">
          <h1 
            className="text-7xl md:text-9xl font-bold tracking-tight leading-none"
            style={{
              color: '#000000',
              textShadow: '0 0 30px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.3), 0 0 90px rgba(0,0,0,0.2)',
              filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.6))',
              fontWeight: '900'
            }}
          >
            {title}
          </h1>
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
            style={{
              color: '#d4af37',
              textShadow: '0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4), 0 0 90px rgba(212, 175, 55, 0.2)',
              filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.6))',
              fontWeight: '900'
            }}
          >
            {subtitle}
          </h2>
        </div>
      </div>
      
      {/* Video Layer - Hands - In front of title */}
      <div className="absolute inset-0 w-full h-full z-20">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-90"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onError={(e) => {
            console.error('Video failed to load:', e);
            setIsLoaded(false);
          }}
          style={{
            filter: 'contrast(1.5) brightness(0.6) saturate(0.2) grayscale(0.3)',
            mixBlendMode: 'multiply'
          }}
        >
          <source src="/portal_hands_short.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay for depth and atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10 z-30" />
    </div>
  )
}
