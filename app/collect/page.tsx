'use client'

import Link from 'next/link'
import { useState } from 'react'

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
      // Simulate API call - you can replace this with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000))
      setMessage('Thank you for your interest! We will contact you within 24 hours to discuss your collection needs.')
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      setMessage('Error submitting inquiry. Please try again or contact us directly.')
    }

    setIsSubmitting(false)
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
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-foreground">Collect</span>
                <br />
                <span className="text-accent">Cosmic Art</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Acquire unique pieces born from collective consciousness. Each artwork is a limited edition, 
                signed and numbered, representing the intersection of cosmic phenomena and human perception.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Collection Information */}
              <div className="space-y-12">
                {/* Investment Value */}
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Investment Value</h3>
                  <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Starting Price Range</span>
                      <span className="text-accent font-semibold">$1,000 - $10,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Edition Size</span>
                      <span className="text-foreground font-semibold">Limited to 25 pieces</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Authentication</span>
                      <span className="text-foreground font-semibold">Certificate of Authenticity</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Provenance</span>
                      <span className="text-foreground font-semibold">Full Documentation</span>
                    </div>
                  </div>
                </section>

                {/* Collector Benefits */}
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Collector Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Exclusive Access</h4>
                        <p className="text-muted-foreground text-sm">First access to new releases and private viewings</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">White-Glove Service</h4>
                        <p className="text-muted-foreground text-sm">Personal consultation and premium delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Investment Documentation</h4>
                        <p className="text-muted-foreground text-sm">Complete provenance and market analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Collector Network</h4>
                        <p className="text-muted-foreground text-sm">Access to exclusive collector events and community</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Acquisition Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
                      <span className="text-foreground">Submit your collector inquiry</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
                      <span className="text-foreground">Personal consultation with the artist</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-sm">3</div>
                      <span className="text-foreground">Secure payment and authentication</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-sm">4</div>
                      <span className="text-foreground">Premium delivery and installation</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Collector Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="input-luxury w-full"
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
                        className="input-luxury w-full"
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
                      className="input-luxury w-full"
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
                      className="input-luxury w-full"
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
                      className="input-luxury w-full"
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
                      className="input-luxury w-full resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="btn-luxury w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Submit Collector Inquiry'
                    )}
                  </button>
                </form>

                {message && (
                  <div className={`mt-6 p-4 rounded-lg ${
                    message.includes('Thank you') 
                      ? 'bg-green-900/20 text-green-400 border border-green-800' 
                      : 'bg-red-900/20 text-red-400 border border-red-800'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-20 text-center bg-card border border-border rounded-lg p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Direct Contact</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Email</h4>
                  <p className="text-muted-foreground">collect@portalcollective.ink</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

