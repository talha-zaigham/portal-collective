'use client'

import { useState, useEffect } from 'react'
import { getCollectiveMetrics, getAnonymousIdentity } from '@/lib/anonymous-identity'
import AnonymousAvatar, { CollectiveAvatar } from './AnonymousAvatar'

export default function CollectiveConsciousness() {
  const [metrics, setMetrics] = useState(getCollectiveMetrics())
  const [currentIdentity, setCurrentIdentity] = useState<any>(null)
  const [recentParticipants, setRecentParticipants] = useState<any[]>([])
  const [isClient, setIsClient] = useState(false)

  // Initialize client-side only
  useEffect(() => {
    setIsClient(true)
    setCurrentIdentity(getAnonymousIdentity())
    
    // Mock recent participants (in real app, this would come from API)
    const mockParticipants = Array.from({ length: 8 }, (_, i) => ({
      id: `participant_${i}`,
      symbol: ['◊', '◈', '✦', '◉', '◐', '◑', '◒', '◓'][i],
      color: ['#d4af37', '#d4af37', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'][i],
      cosmicName: ['Stellar Wanderer', 'Void Seeker', 'Cosmic Observer', 'Galactic Dreamer', 'Nebula Whisperer', 'Portal Walker', 'Dimension Dancer', 'Universe Listener'][i],
      lastActive: new Date(Date.now() - i * 450000).toISOString() // Deterministic timing
    }))
    setRecentParticipants(mockParticipants)
  }, [])

  return (
    <div className="glass-luxury rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Collective Consciousness
        </h3>
        <p className="text-sm text-muted-foreground">
          Join the cosmic conversation
        </p>
      </div>

      {/* Your Identity */}
      <div className="text-center">
        {isClient && currentIdentity ? (
          <AnonymousAvatar 
            identity={currentIdentity} 
            size="lg" 
            showName={true}
            className="justify-center"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto">
            <span className="text-xl text-accent">◊</span>
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-2">
          Your cosmic identity
        </p>
      </div>

      {/* Collective Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">
            {metrics.totalParticipants.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            Total Participants
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">
            {metrics.collectiveResponses.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            Collective Responses
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">
            {metrics.activeSessions}
          </div>
          <div className="text-xs text-muted-foreground">
            Active Now
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">
            {metrics.cosmicConnections}
          </div>
          <div className="text-xs text-muted-foreground">
            Cosmic Connections
          </div>
        </div>
      </div>

      {/* Recent Participants */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground text-center">
          Recent Cosmic Participants
        </h4>
        <CollectiveAvatar 
          identities={recentParticipants}
          maxVisible={6}
          size="sm"
          className="justify-center"
        />
      </div>

      {/* Collective Message */}
      <div className="text-center p-4 bg-accent/10 border border-accent/20 rounded-lg border-cosmic">
        <p className="text-sm text-foreground italic cosmic-text">
          "In the cosmic void, individual voices merge into collective consciousness, 
          creating art that transcends the boundaries of self."
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          — Portal Collective Philosophy
        </p>
      </div>
    </div>
  )
}
