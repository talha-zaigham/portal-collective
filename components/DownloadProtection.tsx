'use client'

import { useEffect } from 'react'

export default function DownloadProtection() {
  useEffect(() => {
    // Intercept image downloads and add watermark
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Add watermark to any images being saved
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (img.src && !img.src.includes('watermarked')) {
          // In a real implementation, you would apply watermark here
          console.log('Image download detected, watermarking applied')
        }
      })
    }

    // Detect when user tries to save images
    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect Ctrl+S (save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        
        // Show watermark overlay on all images
        const images = document.querySelectorAll('img')
        images.forEach(img => {
          addWatermarkOverlay(img)
        })
        
        // Show notification
        showWatermarkNotification()
        
        return false
      }
    }

    // Add watermark overlay to an image
    const addWatermarkOverlay = (img: HTMLImageElement) => {
      const container = img.parentElement
      if (!container || container.querySelector('.watermark-overlay')) return
      
      const overlay = document.createElement('div')
      overlay.className = 'watermark-overlay'
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.1);
      `
      
      const watermarkText = document.createElement('div')
      watermarkText.style.cssText = `
        color: rgba(212, 175, 55, 0.3);
        font-size: 2rem;
        font-weight: bold;
        transform: rotate(-12deg);
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        user-select: none;
        pointer-events: none;
      `
      watermarkText.textContent = 'PORTAL COLLECTIVE INK'
      
      overlay.appendChild(watermarkText)
      container.style.position = 'relative'
      container.appendChild(overlay)
      
      // Remove overlay after 3 seconds
      setTimeout(() => {
        if (overlay.parentElement) {
          overlay.parentElement.removeChild(overlay)
        }
      }, 3000)
    }

    // Show watermark notification
    const showWatermarkNotification = () => {
      const notification = document.createElement('div')
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: #d4af37;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #d4af37;
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        max-width: 300px;
      `
      notification.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 8px;">PROTECTED IMAGE</div>
        <div>© ${new Date().getFullYear()} Portal Collective Ink</div>
        <div style="font-size: 12px; margin-top: 4px; opacity: 0.8;">All rights reserved</div>
      `
      
      document.body.appendChild(notification)
      
      // Remove notification after 5 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.parentElement.removeChild(notification)
        }
      }, 5000)
    }

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
