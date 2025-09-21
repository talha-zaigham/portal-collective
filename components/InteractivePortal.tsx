'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { trackVote } from '@/lib/analytics'
import { getAnonymousIdentity } from '@/lib/anonymous-identity'
import AnonymousAvatar from './AnonymousAvatar'
import CollectiveConsciousness from './CollectiveConsciousness'
import ProtectedImage from './ProtectedImage'

interface InkblotData {
  id: string
  image: string
  responses: Array<{
    id: string
    text: string
    votes: number
    isAnonymous: boolean
    timestamp: Date
  }>
}

export default function InteractivePortal() {
  const router = useRouter()
  const [currentInkblot, setCurrentInkblot] = useState(0)
  const [userResponse, setUserResponse] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResponses, setShowResponses] = useState(false)
  const [inkblots, setInkblots] = useState<InkblotData[]>([])
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [charCount, setCharCount] = useState(0)
  const [anonymousIdentity, setAnonymousIdentity] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  // Initialize client-side only to avoid hydration issues
  useEffect(() => {
    setIsClient(true)
    setAnonymousIdentity(getAnonymousIdentity())
  }, [])
  const maxChars = 300

  // Load real inkblot data and submissions
  useEffect(() => {
    const loadInkblotsAndSubmissions = async () => {
      const inkblotImages = [
        '/inkblots/inkblot-a.svg',
        '/inkblots/inkblot-b.svg', 
        '/inkblots/inkblot-c.svg'
      ]
      
      // Load submissions from API
      try {
        const response = await fetch('/api/votes')
        const data = await response.json()
        const submissions = data.submissions || []
        
        // Group submissions by inkblot
        const submissionsByInkblot = submissions.reduce((acc: any, sub: any) => {
          if (!acc[sub.inkblotId]) {
            acc[sub.inkblotId] = []
          }
          acc[sub.inkblotId].push({
            id: sub.id,
            text: sub.userResponse,
            votes: sub.votes || 0,
            isAnonymous: sub.displayPref === 'anonymous',
            timestamp: new Date(sub.createdAt)
          })
          return acc
        }, {})
        
        // Create inkblots with real submissions
        const inkblotIds = ['cosmic-portal', 'galactic-spiral', 'void-portal']
        const inkblotsData = inkblotIds.map((id, index) => ({
          id,
          image: inkblotImages[index],
          responses: submissionsByInkblot[id] || []
        }))
        
        setInkblots(inkblotsData)
      } catch (error) {
        console.error('Failed to load submissions:', error)
        // Fallback to empty inkblots
        const inkblotIds = ['cosmic-portal', 'galactic-spiral', 'void-portal']
        setInkblots(inkblotIds.map((id, index) => ({
          id,
          image: inkblotImages[index],
          responses: []
        })))
      }
    }
    
    loadInkblotsAndSubmissions()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userResponse.trim()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inkblotId: inkblots[currentInkblot]?.id || 'cosmic-collision',
          userResponse: userResponse.trim(),
          displayPref: isAnonymous ? 'anonymous' : 'username',
          consentGiven: true
        })
      })

      if (response.ok) {
        setUserResponse('')
        setCharCount(0)
        setShowResponses(true)
        
        // Refresh submissions from API
        const refreshResponse = await fetch('/api/votes')
        const refreshData = await refreshResponse.json()
        const submissions = refreshData.submissions || []
        
        // Update current inkblot with new submissions
        const currentInkblotId = inkblots[currentInkblot]?.id
        if (currentInkblotId) {
          const currentSubmissions = submissions
            .filter((sub: any) => sub.inkblotId === currentInkblotId)
            .map((sub: any) => ({
              id: sub.id,
              text: sub.userResponse,
              votes: sub.votes || 0,
              isAnonymous: sub.displayPref === 'anonymous',
              timestamp: new Date(sub.createdAt)
            }))
          
          setInkblots(prev => prev.map((inkblot, index) => 
            index === currentInkblot 
              ? { ...inkblot, responses: currentSubmissions }
              : inkblot
          ))
        }
        
        // Hide success message after delay
        setTimeout(() => {
          setShowResponses(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Submission error:', error)
    }

    setIsSubmitting(false)
  }

  const handleVote = async (responseId: string) => {
    try {
      const response = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId: responseId,
          voteType: 'upvote'
        })
      })

      if (response.ok) {
        // Track vote analytics
        trackVote(responseId)
        
        // Refresh submissions from API to get updated vote counts
        const refreshResponse = await fetch('/api/votes')
        const refreshData = await refreshResponse.json()
        const submissions = refreshData.submissions || []
        
        // Update all inkblots with fresh data
        const submissionsByInkblot = submissions.reduce((acc: any, sub: any) => {
          if (!acc[sub.inkblotId]) {
            acc[sub.inkblotId] = []
          }
          acc[sub.inkblotId].push({
            id: sub.id,
            text: sub.userResponse,
            votes: sub.votes || 0,
            isAnonymous: sub.displayPref === 'anonymous',
            timestamp: new Date(sub.createdAt)
          })
          return acc
        }, {})
        
        const inkblotIds = ['cosmic-portal', 'galactic-spiral', 'void-portal']
        const inkblotImages = [
          '/inkblots/inkblot-a.svg',
          '/inkblots/inkblot-b.svg', 
          '/inkblots/inkblot-c.svg'
        ]
        
        const updatedInkblots = inkblotIds.map((id, index) => ({
          id,
          image: inkblotImages[index],
          responses: submissionsByInkblot[id] || []
        }))
        
        setInkblots(updatedInkblots)
      }
    } catch (error) {
      console.error('Vote error:', error)
    }
  }

  return (
    <div className="relative">

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Cosmic</span>
              <br />
              <span className="text-accent">Consciousness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enter the void. Share your perception. Become part of the collective art.
            </p>
          </div>

          {/* Collective Consciousness Sidebar */}
          <div className="mb-12">
            <CollectiveConsciousness />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Inkblot Display */}
            <div className="space-y-8">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-card to-muted border border-border/50 shadow-2xl relative">
                  {inkblots[currentInkblot] && (
                    <ProtectedImage
                      src={inkblots[currentInkblot].image}
                      alt={`Cosmic Inkblot ${currentInkblot + 1}`}
                      className="w-full h-full"
                      watermarkText="PORTAL COLLECTIVE INK"
                      showOverlay={false}
                    />
                  )}
                  
                  {/* Cosmic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20 pointer-events-none" />
                  
                  {/* Inkblot Label - Subtle positioning to avoid conflicts */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <div className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/20 shadow-lg">
                      <span className="text-accent/80 font-medium text-xs tracking-wide">
                        {inkblots[currentInkblot]?.id.toUpperCase().replace('-', ' ') || `INKBLOT ${currentInkblot + 1}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inkblot Navigation */}
              <div className="flex justify-center space-x-4">
                {inkblots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentInkblot(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentInkblot
                        ? 'bg-accent scale-125'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              {/* Instructions */}
              <div className="text-center space-y-4">
                <p className="text-muted-foreground text-lg">
                  What do you see in this cosmic pattern?
                </p>
                <p className="text-sm text-muted-foreground/70">
                  There are no wrong answers. Your perception becomes part of the collective art.
                </p>
              </div>
            </div>

            {/* Submission Interface */}
            <div className="space-y-8">
              {!showResponses ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Response Input */}
                  <div className="space-y-4">
                    <label className="block text-lg font-medium text-foreground">
                      Your Perception
                    </label>
                    <div className="relative">
                      <textarea
                        value={userResponse}
                        onChange={(e) => {
                          setUserResponse(e.target.value)
                          setCharCount(e.target.value.length)
                        }}
                        placeholder="Describe what emerges from the cosmic void..."
                        className="w-full h-32 bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-200"
                        maxLength={maxChars}
                        required
                      />
                      <div className="absolute bottom-3 right-3">
                        <span className={`text-xs ${
                          charCount > maxChars * 0.9 ? 'text-red-400' :
                          charCount > maxChars * 0.7 ? 'text-yellow-400' :
                          'text-muted-foreground'
                        }`}>
                          {charCount}/{maxChars}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Anonymous Toggle */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-4 h-4 text-accent bg-card border-border focus:ring-accent"
                    />
                    <label htmlFor="anonymous" className="text-sm text-muted-foreground">
                      Share anonymously (recommended for pure collective consciousness)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !userResponse.trim()}
                    className="w-full bg-gradient-to-r from-accent to-accent/80 text-black font-semibold py-4 px-8 rounded-lg hover:from-accent/90 hover:to-accent/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Channeling to Collective...</span>
                      </div>
                    ) : (
                      'Submit to Collective Consciousness'
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-accent">◊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Perception Received
                  </h3>
                  <p className="text-muted-foreground">
                    Your vision has been channeled into the collective consciousness.
                  </p>
                </div>
              )}

              {/* Community Responses */}
              {inkblots[currentInkblot]?.responses && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Collective Perceptions
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {inkblots[currentInkblot].responses
                      .sort((a, b) => b.votes - a.votes)
                      .map((response, index) => {
                        // Generate a deterministic identity for each response
                        const symbols = ['◊', '◈', '✦', '◉', '◐', '◑']
                        const colors = ['#d4af37', '#4a9eff', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
                        const responseIdentity = {
                          id: response.id,
                          symbol: symbols[index % symbols.length],
                          color: colors[index % colors.length],
                          cosmicName: response.isAnonymous ? 'Anonymous' : 'Collective Member',
                          sessionId: response.id
                        }
                        
                        return (
                          <div
                            key={response.id}
                            className="bg-card border border-border rounded-lg p-4 hover:border-accent/30 transition-colors duration-200"
                          >
                            <div className="flex items-start space-x-3">
                              <AnonymousAvatar 
                                identity={responseIdentity} 
                                size="sm" 
                                showName={false}
                              />
                              <div className="flex-1">
                                <p className="text-foreground mb-2">{response.text}</p>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                  <span>
                                    {responseIdentity.cosmicName} • {response.votes} votes
                                  </span>
                                  <button
                                    onClick={() => handleVote(response.id)}
                                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                                  >
                                    ↑ Vote
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
