'use client'

import Link from 'next/link'
import { useState } from 'react'
import { trackCollectorInquiry } from '@/lib/analytics'
import CosmicBackground from '@/components/CosmicBackground'

export default function CollectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/collector-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Track collector inquiry analytics
        trackCollectorInquiry(formData.budget)
        
        setMessage(result.message)
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: '',
          budget: '',
          message: ''
        })
      } else {
        setMessage(result.error || 'Error submitting inquiry. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setMessage('Error submitting inquiry. Please try again or contact us directly.')
    }

    setIsSubmitting(false)
  }

  return (
    <CosmicBackground intensity="medium" className="pt-20">
      <main className="section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="heading-xl font-bold mb-6 sm:mb-8">
                <span className="text-foreground">Collect</span>
                <br />
                <span className="text-accent">Cosmic Art</span>
              </h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Acquire unique pieces born from collective consciousness. Each artwork is a limited edition, 
                signed and numbered, representing the intersection of cosmic phenomena and human perception.
              </p>
            </div>

            <div className="grid-responsive-2 gap-8 lg:gap-12 xl:gap-16">
              {/* Collection Information */}
              <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
                {/* Investment Value */}
                <section>
                  <h3 className="heading-sm font-bold text-foreground mb-4 sm:mb-6">Investment Value</h3>
                  <div className="bg-card border border-border rounded-lg card-mobile space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="body-sm text-muted-foreground">Starting Price Range</span>
                      <span className="text-accent font-semibold">$1,000 - $10,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="body-sm text-muted-foreground">Edition Size</span>
                      <span className="text-foreground font-semibold">Limited to 25 pieces</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="body-sm text-muted-foreground">Authentication</span>
                      <span className="text-foreground font-semibold">Certificate of Authenticity</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="body-sm text-muted-foreground">Provenance</span>
                      <span className="text-foreground font-semibold">Full Documentation</span>
                    </div>
                  </div>
                </section>

                {/* Collector Benefits */}
                <section>
                  <h3 className="heading-sm font-bold text-foreground mb-4 sm:mb-6">Collector Benefits</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                        <span className="text-accent text-xs sm:text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground body-md">Exclusive Access</h4>
                        <p className="body-sm text-muted-foreground">First access to new releases and private viewings</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                        <span className="text-accent text-xs sm:text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground body-md">White-Glove Service</h4>
                        <p className="body-sm text-muted-foreground">Personal consultation and premium delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                        <span className="text-accent text-xs sm:text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground body-md">Investment Documentation</h4>
                        <p className="body-sm text-muted-foreground">Complete provenance and market analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                        <span className="text-accent text-xs sm:text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground body-md">Collector Network</h4>
                        <p className="body-sm text-muted-foreground">Access to exclusive collector events and community</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section>
                  <h3 className="heading-sm font-bold text-foreground mb-4 sm:mb-6">Acquisition Process</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm flex-shrink-0">1</div>
                      <span className="text-foreground body-md">Submit your collector inquiry</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm flex-shrink-0">2</div>
                      <span className="text-foreground body-md">Personal consultation with the artist</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm flex-shrink-0">3</div>
                      <span className="text-foreground body-md">Secure payment and authentication</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm flex-shrink-0">4</div>
                      <span className="text-foreground body-md">Premium delivery and installation</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Contact Form */}
              <div className="order-1 lg:order-2">
                <h3 className="heading-sm font-bold text-foreground mb-4 sm:mb-6">Collector Inquiry</h3>
                <form onSubmit={handleSubmit} className="form-mobile">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="input-luxury input-mobile"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="input-luxury input-mobile"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company/Institution
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="input-luxury input-mobile"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="input-luxury input-mobile"
                    >
                      <option value="">Select an option</option>
                      <option value="individual">Individual Collector</option>
                      <option value="corporate">Corporate Collection</option>
                      <option value="museum">Museum Acquisition</option>
                      <option value="gallery">Gallery Representation</option>
                      <option value="investment">Investment Portfolio</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="input-luxury input-mobile"
                    >
                      <option value="">Select budget range</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k+">$25,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      placeholder="Tell us about your collection, specific interests, or any questions you have..."
                      className="input-luxury textarea-mobile"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="btn-luxury btn-mobile-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Submit Collector Inquiry'
                    )}
                  </button>
                </form>

                {message && (
                  <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg ${
                    message.includes('Thank you') 
                      ? 'bg-green-900/20 text-green-400 border border-green-800' 
                      : 'bg-red-900/20 text-red-400 border border-red-800'
                  }`}>
                    <p className="body-sm">{message}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 sm:mt-20 text-center bg-card border border-border rounded-lg card-mobile">
              <h3 className="heading-sm font-bold text-foreground mb-4 sm:mb-6">Direct Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-semibold text-accent mb-2 body-md">Email</h4>
                  <p className="body-sm text-muted-foreground">collect@portalcollective.ink</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 body-md">Phone</h4>
                  <p className="body-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 body-md">Response Time</h4>
                  <p className="body-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </CosmicBackground>
  )
}

