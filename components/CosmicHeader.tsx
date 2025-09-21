'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CosmicHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

  const navItems = [
    { href: '/', label: 'Home', symbol: '◊' },
    { href: '/portal', label: 'Portal', symbol: '◈' },
    { href: '/gallery', label: 'Gallery', symbol: '✦' },
    { href: '/about', label: 'About', symbol: '◉' },
    { href: '/collect', label: 'Collect', symbol: '◐' }
  ]

  const legalItems = [
    { href: '/terms', label: 'Terms', symbol: '⚖' },
    { href: '/privacy', label: 'Privacy', symbol: '🔒' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-all duration-500 group-hover:scale-110">
                <span className="text-xl text-accent group-hover:text-white transition-colors duration-500">◊</span>
              </div>
              <h1 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                PORTAL
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative transition-all duration-300 ${
                  activeLink === item.href ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.symbol}
                  </span>
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {item.label}
                  </span>
                </div>
                
                {/* Active indicator */}
                {activeLink === item.href && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
                
                {/* Hover effect */}
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            
            {/* Legal Links */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-border/30">
              {legalItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative transition-all duration-300 ${
                    activeLink === item.href ? 'text-accent' : 'text-muted-foreground hover:text-accent'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                      {item.symbol}
                    </span>
                    <span className="text-xs font-medium tracking-wide uppercase">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeLink === item.href && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
            <span className="text-accent">◊</span>
          </button>
        </div>
      </div>
    </header>
  )
}

