'use client'

import { useEffect } from 'react'

export default function ImageProtection() {
  useEffect(() => {
    // Disable right-click context menu globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection on images
    const handleSelectStart = (e: Event) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        return false
      }
    }

    // Disable common keyboard shortcuts for saving/viewing source
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'a') ||
        (e.ctrlKey && e.key === 'p')
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable print screen (basic protection)
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    // Disable image dragging on all images
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.draggable = false
      img.style.userSelect = 'none'
      img.style.webkitUserSelect = 'none'
      img.style.mozUserSelect = 'none'
      img.style.msUserSelect = 'none'
    })

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return null
}
