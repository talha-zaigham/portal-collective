'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline'
  className?: string
  title?: string
  description?: string
}

export default function NewsletterSignup({ 
  variant = 'default',
  className = '',
  title = "Join the Cosmic Consciousness",
  description = "Get exclusive updates on new artworks, collector insights, and cosmic art philosophy."
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [subscriberType, setSubscriberType] = useState('general')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          subscriberType,
          source: 'website',
          timestamp: new Date().toISOString()
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('Welcome to the cosmic consciousness! Check your email for confirmation.')
        setEmail('')
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setMessage('Connection error. Please try again.')
    }

    setIsSubmitting(false)
  }

  if (variant === 'compact') {
    return (
      <div className={`relative glass-luxury rounded-lg p-4 overflow-hidden luxury-hover ${className}`}>
        {/* Enhanced premium cosmic background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <form onSubmit={handleSubmit} className="relative space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 flex items-center justify-center border border-accent/40 glow-luxury">
              <span className="text-xs text-accent cosmic-pulse">◊</span>
            </div>
            <span className="text-sm font-semibold text-foreground tracking-wide cosmic-text">Cosmic Updates</span>
          </div>
          <div className="flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 input-luxury text-sm"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative overflow-hidden btn-luxury text-sm px-4 py-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 border border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Joining...</span>
                </div>
              ) : (
                'Join'
              )}
            </button>
          </div>
          {message && (
            <div className={`text-xs p-2 rounded-lg border ${
              message.includes('Welcome') 
                ? 'bg-accent/10 border-accent/30 text-accent' 
                : 'bg-red-900/20 border-red-500/30 text-red-400'
            }`}>
              {message}
            </div>
          )}
        </form>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`relative ${className}`}>
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Join the cosmic consciousness"
            className="flex-1 input-luxury"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative overflow-hidden btn-luxury btn-luxury-responsive disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border border-black/30 border-t-black rounded-full animate-spin" />
                <span>Joining...</span>
              </div>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        {message && (
          <div className={`text-sm mt-3 p-3 rounded-lg border ${
            message.includes('Welcome') 
              ? 'bg-accent/10 border-accent/30 text-accent' 
              : 'bg-red-900/20 border-red-500/30 text-red-400'
          }`}>
            {message}
          </div>
        )}
      </div>
    )
  }

  // Enhanced Default variant
  return (
    <div className={`relative glass-luxury rounded-lg p-8 space-y-6 overflow-hidden luxury-hover ${className}`}>
      {/* Enhanced premium cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative text-center space-y-3">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 flex items-center justify-center border border-accent/40 glow-luxury cosmic-float">
            <span className="text-xl text-accent cosmic-pulse">◊</span>
          </div>
          <h3 className="text-xl font-bold text-foreground tracking-wide cosmic-text">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-5">
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full input-luxury"
            required
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="subscriberType"
                  value="general"
                  checked={subscriberType === 'general'}
                  onChange={(e) => setSubscriberType(e.target.value)}
                  className="w-4 h-4 text-accent bg-background/50 border-accent/30 focus:ring-accent/50 focus:ring-2"
                />
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-200"></div>
              </div>
              <span className="text-sm text-foreground font-medium">General Updates</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="subscriberType"
                  value="collector"
                  checked={subscriberType === 'collector'}
                  onChange={(e) => setSubscriberType(e.target.value)}
                  className="w-4 h-4 text-accent bg-background/50 border-accent/30 focus:ring-accent/50 focus:ring-2"
                />
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-200"></div>
              </div>
              <span className="text-sm text-foreground font-medium">Collector Exclusive</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !email.trim()}
          className="relative overflow-hidden w-full btn-luxury btn-luxury-responsive disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              <span>Joining Cosmic Consciousness...</span>
            </div>
          ) : (
            'Join the Collective'
          )}
        </button>

        {message && (
          <div className={`text-center p-4 rounded-lg border ${
            message.includes('Welcome') 
              ? 'bg-accent/10 border-accent/30 text-accent' 
              : 'bg-red-900/20 border-red-500/30 text-red-400'
          }`}>
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}
      </form>

      <div className="relative text-center">
        <p className="text-xs text-muted-foreground">
          Unsubscribe anytime. We respect your cosmic privacy.
        </p>
      </div>
    </div>
  )
}
