'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PortalPage() {
  const [response, setResponse] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [displayPref, setDisplayPref] = useState('anonymous')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [charCount, setCharCount] = useState(0)
  const maxChars = 300

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inkblotId: 'A',
          userResponse: response,
          username: username || null,
          email: email || null,
          displayPref,
          consentGiven: true
        })
      })

      if (res.ok) {
        setMessage('Thank you! Your response has been submitted and will be reviewed.')
        setResponse('')
        setUsername('')
        setEmail('')
        setCharCount(0)
      } else {
        setMessage('Error submitting response. Please try again.')
      }
    } catch (error) {
      setMessage('Error submitting response. Please try again.')
    }

    setIsSubmitting(false)
  }

  const getCharCounterClass = () => {
    if (charCount > maxChars * 0.9) return 'text-red-400'
    if (charCount > maxChars * 0.7) return 'text-yellow-400'
    return 'text-muted-foreground'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="cosmic-symbol">
              <h1 className="text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
                PORTAL
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/portal" className="nav-link text-sm font-medium tracking-wide uppercase">
                Portal
              </Link>
              <Link href="/gallery" className="nav-link text-sm font-medium tracking-wide uppercase">
                Gallery
              </Link>
              <Link href="/about" className="nav-link text-sm font-medium tracking-wide uppercase">
                About
              </Link>
              <Link href="/collect" className="nav-link text-sm font-medium tracking-wide uppercase">
                Collect
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Share Your</span>
                <br />
                <span className="text-accent">Perception</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Describe what you see in this inkblot. Your words will become part of our collective art.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Inkblot Display */}
              <div className="space-y-8">
                <div className="inkblot-glow">
                  <div className="w-full max-w-md mx-auto aspect-square rounded-full bg-gradient-to-br from-card via-muted to-card flex items-center justify-center shadow-2xl">
                    <div className="w-4/5 h-4/5 bg-gradient-to-br from-muted/50 to-background rounded-full opacity-90 flex items-center justify-center relative overflow-hidden">
                      {/* Animated inkblot pattern */}
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent animate-pulse" />
                      <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-transparent to-accent/10 animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="absolute inset-12 rounded-full bg-gradient-to-br from-transparent to-accent/5 animate-pulse" style={{ animationDelay: '2s' }} />
                      
                      {/* Center content */}
                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-xl text-accent">◊</span>
                        </div>
                        <p className="text-muted-foreground text-sm font-medium tracking-wide">INKBLOT A</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Take your time. There are no wrong answers.
                  </p>
                </div>
              </div>

              {/* Submission Form */}
              <div className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Response Textarea */}
                  <div className="space-y-3">
                    <label htmlFor="userResponse" className="block text-sm font-medium text-foreground">
                      What do you see? *
                    </label>
                    <div className="relative">
                      <textarea
                        id="userResponse"
                        value={response}
                        onChange={(e) => {
                          setResponse(e.target.value)
                          setCharCount(e.target.value.length)
                        }}
                        placeholder="Describe the shapes, patterns, or images that come to mind..."
                        className="input-luxury w-full h-32 resize-none"
                        maxLength={maxChars}
                        required
                      />
                      <div className="absolute bottom-3 right-3">
                        <span className={`text-xs ${getCharCounterClass()}`}>
                          {charCount}/{maxChars}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Username */}
                  <div className="space-y-3">
                    <label htmlFor="username" className="block text-sm font-medium text-foreground">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="How should we credit you?"
                      className="input-luxury w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="input-luxury w-full"
                    />
                  </div>

                  {/* Display Preference */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-foreground">
                      Display Preference
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="displayPref"
                          value="anonymous"
                          checked={displayPref === 'anonymous'}
                          onChange={(e) => setDisplayPref(e.target.value)}
                          className="w-4 h-4 text-accent bg-card border-border focus:ring-accent"
                        />
                        <span className="text-sm text-muted-foreground">Show anonymously</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="displayPref"
                          value="username"
                          checked={displayPref === 'username'}
                          onChange={(e) => setDisplayPref(e.target.value)}
                          className="w-4 h-4 text-accent bg-card border-border focus:ring-accent"
                        />
                        <span className="text-sm text-muted-foreground">Show my username</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || !response.trim()}
                      className="btn-luxury w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit to Collective'
                      )}
                    </button>
                  </div>
                </form>

                {message && (
                  <div className={`text-center p-4 rounded-lg ${
                    message.includes('Thank you') 
                      ? 'bg-green-900/20 text-green-400 border border-green-800' 
                      : 'bg-red-900/20 text-red-400 border border-red-800'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

