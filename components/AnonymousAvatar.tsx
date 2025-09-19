'use client'

import { AnonymousIdentity } from '@/lib/anonymous-identity'

interface AnonymousAvatarProps {
  identity: AnonymousIdentity
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
  className?: string
}

export default function AnonymousAvatar({ 
  identity, 
  size = 'md', 
  showName = false,
  className = '' 
}: AnonymousAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl'
  }

  const nameSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Avatar Circle */}
      <div 
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-105`}
        style={{
          backgroundColor: `${identity.color}20`,
          borderColor: identity.color,
          color: identity.color
        }}
      >
        <span className="font-medium">{identity.symbol}</span>
      </div>
      
      {/* Name */}
      {showName && (
        <div className="flex flex-col">
          <span className={`font-medium text-foreground ${nameSizeClasses[size]}`}>
            {identity.cosmicName}
          </span>
          <span className="text-xs text-muted-foreground">
            Anonymous Participant
          </span>
        </div>
      )}
    </div>
  )
}

// Collective Avatar - shows multiple anonymous participants
interface CollectiveAvatarProps {
  identities: AnonymousIdentity[]
  maxVisible?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CollectiveAvatar({ 
  identities, 
  maxVisible = 5, 
  size = 'sm',
  className = '' 
}: CollectiveAvatarProps) {
  const visibleIdentities = identities.slice(0, maxVisible)
  const remainingCount = Math.max(0, identities.length - maxVisible)

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base'
  }

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {visibleIdentities.map((identity, index) => (
        <div
          key={identity.id}
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110`}
          style={{
            backgroundColor: `${identity.color}20`,
            borderColor: identity.color,
            color: identity.color,
            zIndex: maxVisible - index
          }}
          title={identity.cosmicName}
        >
          <span className="font-medium">{identity.symbol}</span>
        </div>
      ))}
      
      {remainingCount > 0 && (
        <div 
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center border border-muted-foreground/30 bg-muted/50 text-muted-foreground`}
          title={`${remainingCount} more participants`}
        >
          <span className="font-medium text-xs">+{remainingCount}</span>
        </div>
      )}
    </div>
  )
}
