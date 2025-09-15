'use client'

import Link from 'next/link'
import Image from 'next/image'

// Mock data for completed artworks
const artworks = [
  {
    id: 1,
    title: "Cosmic Collision I",
    description: "Inspired by response: 'I see two galaxies merging in a cosmic dance'",
    image: "/abstract-inkblot-art-luxury-contemporary.jpg",
    price: "$2,500",
    status: "Available",
    inspiredBy: "Anonymous",
    year: "2024"
  },
  {
    id: 2,
    title: "Portal of Perception",
    description: "Inspired by response: 'A gateway to another dimension'",
    image: "/abstract-inkblot-art-luxury-contemporary.jpg",
    price: "$3,200",
    status: "Sold",
    inspiredBy: "Sarah M.",
    year: "2024"
  },
  {
    id: 3,
    title: "Collective Memory",
    description: "Inspired by response: 'The shape of shared dreams'",
    image: "/abstract-inkblot-art-luxury-contemporary.jpg",
    price: "$1,800",
    status: "Available",
    inspiredBy: "Anonymous",
    year: "2024"
  },
  {
    id: 4,
    title: "Inkblot Symphony",
    description: "Inspired by response: 'Music made visible'",
    image: "/abstract-inkblot-art-luxury-contemporary.jpg",
    price: "$4,500",
    status: "Available",
    inspiredBy: "Marcus L.",
    year: "2024"
  },
  {
    id: 5,
    title: "Universal Language",
    description: "Inspired by response: 'The alphabet of the cosmos'",
    image: "/abstract-inkblot-art-luxury-contemporary.jpg",
    price: "$2,800",
    status: "Reserved",
    inspiredBy: "Anonymous",
    year: "2024"
  },
  {
    id: 6,
    title: "Ethereal Echo",
    description: "Inspired by response: 'A whisper from the void'",
    image: "/abstract-inkblot-art-luxury-contemporary.jpg",
    price: "$3,600",
    status: "Available",
    inspiredBy: "Elena K.",
    year: "2024"
  }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm">
        <div className="container py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="cosmic-symbol">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
                PORTAL
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/portal" className="nav-link text-xs sm:text-sm font-medium tracking-wide uppercase">
                Portal
              </Link>
              <Link href="/gallery" className="nav-link text-xs sm:text-sm font-medium tracking-wide uppercase">
                Gallery
              </Link>
              <Link href="/about" className="nav-link text-xs sm:text-sm font-medium tracking-wide uppercase">
                About
              </Link>
              <Link href="/collect" className="nav-link text-xs sm:text-sm font-medium tracking-wide uppercase">
                Collect
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="section-padding">
        <div className="container">
          {/* Gallery Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-lg font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Collective</span>
              <br />
              <span className="text-accent">Artworks</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Each piece is born from your perceptions, transformed through cosmic interpretation, 
              and brought to life as collectible art. These are the tangible results of our collective consciousness.
            </p>
          </div>

          {/* Artworks Grid */}
          <div className="grid-responsive gap-6 sm:gap-8 mb-12 sm:mb-16">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                {/* Artwork Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${
                      artwork.status === 'Available' 
                        ? 'bg-green-900/80 text-green-400 border border-green-800'
                        : artwork.status === 'Sold'
                        ? 'bg-red-900/80 text-red-400 border border-red-800'
                        : 'bg-yellow-900/80 text-yellow-400 border border-yellow-800'
                    }`}>
                      {artwork.status}
                    </span>
                  </div>
                </div>

                {/* Artwork Info */}
                <div className="card-mobile space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="heading-sm font-semibold text-foreground mb-2">
                      {artwork.title}
                    </h3>
                    <p className="body-sm text-muted-foreground leading-relaxed">
                      {artwork.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-border space-y-3 sm:space-y-0">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-accent">{artwork.price}</p>
                      <p className="body-sm text-muted-foreground">
                        Inspired by {artwork.inspiredBy} • {artwork.year}
                      </p>
                    </div>
                    
                    {artwork.status === 'Available' && (
                      <Link 
                        href="/collect" 
                        className="btn-luxury btn-mobile text-sm"
                      >
                        Inquire
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card border border-border rounded-lg card-mobile">
            <h3 className="heading-sm font-bold text-foreground mb-3 sm:mb-4">
              Your Perception Could Be Next
            </h3>
            <p className="body-md text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join the collective consciousness. Submit your interpretation of our inkblots 
              and see your words transformed into tangible art.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/portal" className="btn-luxury btn-mobile">
                Enter Portal
              </Link>
              <Link href="/collect" className="btn-luxury-secondary btn-mobile">
                Contact Collector
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
