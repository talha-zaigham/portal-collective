'use client'

import { useRef, useEffect } from 'react'

interface ProtectedImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  watermarkText?: string
  showOverlay?: boolean
}

export default function ProtectedImage({ 
  src, 
  alt, 
  className = '', 
  style = {},
  watermarkText = 'PORTAL COLLECTIVE INK',
  showOverlay = false
}: ProtectedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  // Prevent right-click, drag, and other common download methods
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'a')
      ) {
        e.preventDefault()
        return false
      }
    }

    const element = imageRef.current
    if (element) {
      element.addEventListener('contextmenu', handleContextMenu)
      element.addEventListener('dragstart', handleDragStart)
      element.addEventListener('selectstart', handleSelectStart)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        element.removeEventListener('contextmenu', handleContextMenu)
        element.removeEventListener('dragstart', handleDragStart)
        element.removeEventListener('selectstart', handleSelectStart)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden select-none ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        ...style
      }}
    >
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain pointer-events-none"
        style={{
          filter: 'contrast(1.1) brightness(0.9)',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
        }}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />


      {/* Protection notice */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent pointer-events-auto" 
           onContextMenu={(e) => e.preventDefault()}
           onDragStart={(e) => e.preventDefault()}
           style={{ userSelect: 'none' }} />
    </div>
  )
}
