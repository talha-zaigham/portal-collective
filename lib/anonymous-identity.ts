// Anonymous Identity System for Portal Collective
// Creates collective consciousness through anonymous participation

export interface AnonymousIdentity {
  id: string
  symbol: string
  color: string
  cosmicName: string
  sessionId: string
}

// Cosmic symbols for anonymous identities
const COSMIC_SYMBOLS = [
  '◊', '◈', '✦', '◉', '◐', '◑', '◒', '◓', '◔', '◕',
  '◖', '◗', '◘', '◙', '◚', '◛', '◜', '◝', '◞', '◟',
  '◠', '◡', '◢', '◣', '◤', '◥', '◦', '◧', '◨', '◩'
]

// Cosmic color palette
const COSMIC_COLORS = [
  '#d4af37', '#4a9eff', '#8b5cf6', '#06b6d4', '#10b981',
  '#f59e0b', '#ef4444', '#ec4899', '#6366f1', '#84cc16'
]

// Cosmic names for anonymous participants
const COSMIC_NAMES = [
  'Stellar Wanderer', 'Void Seeker', 'Cosmic Observer', 'Galactic Dreamer',
  'Nebula Whisperer', 'Portal Walker', 'Dimension Dancer', 'Universe Listener',
  'Infinite Watcher', 'Ethereal Being', 'Cosmic Echo', 'Stellar Shadow',
  'Void Light', 'Galactic Memory', 'Nebula Thought', 'Portal Mind',
  'Dimension Soul', 'Universe Heart', 'Infinite Spirit', 'Ethereal Essence'
]

// Generate a deterministic anonymous identity based on session
export function generateAnonymousIdentity(sessionId?: string): AnonymousIdentity {
  const session = sessionId || generateSessionId()
  
  // Use session to deterministically select identity elements
  const symbolIndex = hashString(session) % COSMIC_SYMBOLS.length
  const colorIndex = hashString(session + 'color') % COSMIC_COLORS.length
  const nameIndex = hashString(session + 'name') % COSMIC_NAMES.length
  
  return {
    id: `anon_${session.slice(0, 8)}`,
    symbol: COSMIC_SYMBOLS[symbolIndex],
    color: COSMIC_COLORS[colorIndex],
    cosmicName: COSMIC_NAMES[nameIndex],
    sessionId: session
  }
}

// Generate a session ID for anonymous users
export function generateSessionId(): string {
  // Use a more deterministic approach to avoid hydration issues
  const timestamp = Date.now().toString(36)
  // Use a simple counter instead of Math.random() for consistency
  const counter = Math.floor(Date.now() / 1000) % 1000000
  return `${timestamp}_${counter.toString(36)}`
}

// Simple hash function for deterministic selection
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Get or create anonymous identity from localStorage
export function getAnonymousIdentity(): AnonymousIdentity {
  if (typeof window === 'undefined') {
    // On server, return a default identity to avoid hydration mismatch
    return {
      id: 'anon_default',
      symbol: '◊',
      color: '#d4af37',
      cosmicName: 'Cosmic Observer',
      sessionId: 'default_session'
    }
  }
  
  const stored = localStorage.getItem('portal_anonymous_identity')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      // If parsing fails, generate new identity
    }
  }
  
  const identity = generateAnonymousIdentity()
  localStorage.setItem('portal_anonymous_identity', JSON.stringify(identity))
  return identity
}

// Update anonymous identity (for when user wants to change)
export function updateAnonymousIdentity(): AnonymousIdentity {
  const newIdentity = generateAnonymousIdentity()
  if (typeof window !== 'undefined') {
    localStorage.setItem('portal_anonymous_identity', JSON.stringify(newIdentity))
  }
  return newIdentity
}

// Get display name for anonymous user
export function getAnonymousDisplayName(identity: AnonymousIdentity, showFullName: boolean = false): string {
  if (showFullName) {
    return `${identity.cosmicName} ${identity.symbol}`
  }
  return identity.cosmicName
}

// Get anonymous avatar component props
export function getAnonymousAvatarProps(identity: AnonymousIdentity) {
  return {
    symbol: identity.symbol,
    color: identity.color,
    name: identity.cosmicName
  }
}

// Collective consciousness metrics
export interface CollectiveMetrics {
  totalParticipants: number
  activeSessions: number
  collectiveResponses: number
  cosmicConnections: number
}

// Mock collective metrics (in real app, this would come from database)
export function getCollectiveMetrics(): CollectiveMetrics {
  return {
    totalParticipants: 1247,
    activeSessions: 23,
    collectiveResponses: 3849,
    cosmicConnections: 156
  }
}
