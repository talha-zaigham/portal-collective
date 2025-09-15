'use client'

import { useState } from 'react'

interface SubmissionData {
  id: string
  status: string
}

interface SubmissionInterfaceProps {
  inkblotId?: string
  onSubmit?: (data: SubmissionData) => void
}

export default function SubmissionInterface({ inkblotId = 'A', onSubmit }: SubmissionInterfaceProps) {
  const [formData, setFormData] = useState({
    userResponse: '',
    username: '',
    email: '',
    displayPref: 'username',
    consentGiven: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const maxChars = 300

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (field === 'userResponse') {
      setCharCount((value as string).length)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, inkblotId }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      const result = await response.json()
      
      if (onSubmit) {
        onSubmit(result)
      }
      
      // Reset form
      setFormData({
        userResponse: '',
        username: '',
        email: '',
        displayPref: 'username',
        consentGiven: false
      })
      setCharCount(0)
      
      // Show success message (you could add a toast notification here)
      alert('Thank you! Your submission has been received and will be reviewed.')
      
    } catch (error) {
      console.error('Submission error:', error)
      alert('Sorry, there was an error submitting your response. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getCharCounterClass = () => {
    if (charCount > maxChars * 0.9) return 'char-counter danger'
    if (charCount > maxChars * 0.7) return 'char-counter warning'
    return 'char-counter'
  }

  return (
    <section className="section-padding bg-card/50 backdrop-blur-sm">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-lg font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Share Your</span>
              <br />
              <span className="text-accent">Perception</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Describe what you see in this inkblot. Your words will become part of our collective art.
            </p>
          </div>

          <div className="grid-responsive-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Inkblot Display */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="inkblot-glow">
                <div className="w-full max-w-sm sm:max-w-md mx-auto aspect-square rounded-full bg-gradient-to-br from-card via-muted to-card flex items-center justify-center shadow-2xl">
                  <div className="w-4/5 h-4/5 bg-gradient-to-br from-muted/50 to-background rounded-full opacity-90 flex items-center justify-center relative overflow-hidden">
                    {/* Animated inkblot pattern */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent animate-pulse" />
                    <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-transparent to-accent/10 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute inset-12 rounded-full bg-gradient-to-br from-transparent to-accent/5 animate-pulse" style={{ animationDelay: '2s' }} />
                    
                    {/* Center content */}
                    <div className="relative z-10 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-lg sm:text-xl text-accent">◊</span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">INKBLOT {inkblotId}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="body-sm text-muted-foreground">
                  Take your time. There are no wrong answers.
                </p>
              </div>
            </div>

            {/* Submission Form */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="form-mobile">
                {/* Response Textarea */}
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="userResponse" className="block text-sm font-medium text-foreground">
                    What do you see? *
                  </label>
                  <div className="relative">
                    <textarea
                      id="userResponse"
                      value={formData.userResponse}
                      onChange={(e) => handleInputChange('userResponse', e.target.value)}
                      placeholder="Describe the shapes, patterns, or images that come to mind..."
                      className="input-luxury textarea-mobile"
                      maxLength={maxChars}
                      required
                    />
                    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
                      <span className={getCharCounterClass()}>
                        {charCount}/{maxChars}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Username */}
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="username" className="block text-sm font-medium text-foreground">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    placeholder="How should we credit you?"
                    className="input-luxury input-mobile"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="input-luxury input-mobile"
                  />
                </div>

                {/* Display Preference */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-sm font-medium text-foreground">
                    Display Preference
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="displayPref"
                        value="username"
                        checked={formData.displayPref === 'username'}
                        onChange={(e) => handleInputChange('displayPref', e.target.value)}
                        className="w-4 h-4 text-accent bg-card border-border focus:ring-accent"
                      />
                      <span className="body-sm text-muted-foreground">Show my username</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="displayPref"
                        value="anonymous"
                        checked={formData.displayPref === 'anonymous'}
                        onChange={(e) => handleInputChange('displayPref', e.target.value)}
                        className="w-4 h-4 text-accent bg-card border-border focus:ring-accent"
                      />
                      <span className="body-sm text-muted-foreground">Keep me anonymous</span>
                    </label>
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentGiven}
                      onChange={(e) => handleInputChange('consentGiven', e.target.checked)}
                      className="w-4 h-4 text-accent bg-card border-border focus:ring-accent mt-0.5 flex-shrink-0"
                      required
                    />
                    <span className="body-sm text-muted-foreground leading-relaxed">
                      I consent to my response being used in the collective art project and understand that it may be displayed publicly. *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.userResponse.trim() || !formData.consentGiven}
                    className="btn-luxury btn-mobile-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Submit to Collective'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
