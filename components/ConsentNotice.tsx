'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsentNotice() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has already consented or dismissed
    const hasConsented = localStorage.getItem('portal-consent')
    const hasDismissed = localStorage.getItem('portal-consent-dismissed')
    
    if (!hasConsented && !hasDismissed) {
      // Show after a short delay to let page load
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('portal-consent', 'true')
    setIsVisible(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('portal-consent-dismissed', 'true')
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-card/95 backdrop-blur-md border border-border/30 rounded-lg p-4 shadow-2xl cosmic-glow">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-accent cosmic-pulse">◊</span>
            <h4 className="text-sm font-semibold text-foreground">Welcome to Portal Collective</h4>
          </div>
          
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-accent hover:underline">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            . Join the cosmic art consciousness.
          </p>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleAccept}
              className="btn-luxury text-xs px-4 py-2 flex-1"
            >
              Accept
            </button>
            <button
              onClick={handleDismiss}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 px-2"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
