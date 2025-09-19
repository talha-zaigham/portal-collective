'use client'

import Link from 'next/link'
import Image from 'next/image'
import CosmicBackground from '@/components/CosmicBackground'

// Mock data for completed artworks
const artworks = [
  {
    id: 1,
    title: "Cosmic Collision I",
    description: "Inspired by response: 'I see two galaxies merging in a cosmic dance'",
    image: "/inkblots/inkblot-a.svg",
    price: "$2,500",
    status: "Available",
    inspiredBy: "Anonymous",
    year: "2024"
  },
  {
    id: 2,
    title: "Portal of Perception",
    description: "Inspired by response: 'A gateway to another dimension'",
    image: "/inkblots/inkblot-b.svg",
    price: "$3,200",
    status: "Sold",
    inspiredBy: "Sarah M.",
    year: "2024"
  },
  {
    id: 3,
    title: "Collective Memory",
    description: "Inspired by response: 'The shape of shared dreams'",
    image: "/inkblots/inkblot-c.svg",
    price: "$1,800",
    status: "Available",
    inspiredBy: "Anonymous",
    year: "2024"
  },
  {
    id: 4,
    title: "Inkblot Symphony",
    description: "Inspired by response: 'Music made visible'",
    image: "/inkblots/inkblot-a.svg",
    price: "$4,500",
    status: "Available",
    inspiredBy: "Marcus L.",
    year: "2024"
  },
  {
    id: 5,
    title: "Universal Language",
    description: "Inspired by response: 'The alphabet of the cosmos'",
    image: "/inkblots/inkblot-b.svg",
    price: "$2,800",
    status: "Reserved",
    inspiredBy: "Anonymous",
    year: "2024"
  },
  {
    id: 6,
    title: "Ethereal Echo",
    description: "Inspired by response: 'A whisper from the void'",
    image: "/inkblots/inkblot-c.svg",
    price: "$3,600",
    status: "Available",
    inspiredBy: "Elena K.",
    year: "2024"
  }
]

export default function GalleryPage() {
  return (
    <CosmicBackground intensity="medium">
      <main className="pt-20">
        <div className="container mx-auto px-6">
          {/* Gallery Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Collective</span>
              <br />
              <span className="text-accent">Artworks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each piece is born from your perceptions, transformed through cosmic interpretation, 
              and brought to life as collectible art. These are the tangible results of our collective consciousness.
            </p>
          </div>

          {/* Artworks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
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
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {artwork.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-accent">{artwork.price}</p>
                      <p className="text-xs text-muted-foreground">
                        Inspired by {artwork.inspiredBy} • {artwork.year}
                      </p>
                    </div>
                    
                    {artwork.status === 'Available' && (
                      <Link 
                        href="/collect" 
                        className="btn-luxury text-sm px-6 py-2"
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
          <div className="text-center bg-card border border-border rounded-lg p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Perception Could Be Next
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the collective consciousness. Submit your interpretation of our inkblots 
              and see your words transformed into tangible art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portal" className="btn-luxury">
                Enter Portal
              </Link>
              <Link href="/collect" className="btn-luxury-secondary">
                Contact Collector
              </Link>
            </div>
          </div>
        </div>
      </main>
    </CosmicBackground>
  )
}
