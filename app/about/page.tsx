'use client'

import Link from 'next/link'

export default function AboutPage() {
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
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-foreground">Portal</span>
                <br />
                <span className="text-accent">Collective Ink</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Where your perceptions become collectible art through cosmic interpretation
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-16">
              {/* The Concept */}
              <section>
                <h3 className="text-3xl font-bold text-foreground mb-8">The Concept</h3>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Portal Collective Ink is an interactive art project that transforms individual perceptions 
                    into tangible artworks. Inspired by the Rorschach technique, but purely artistic in nature, 
                    this project explores the collective unconscious through abstract inkblot interpretations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Each inkblot serves as a cosmic canvas where your words become the raw material for new art. 
                    The most compelling, surprising, or emotionally resonant responses are selected and transformed 
                    into limited-edition artworks that capture the essence of collective human perception.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This is not clinical assessment—it's artistic collaboration between the universe, 
                    the artist, and the collective consciousness of all who participate.
                  </p>
                </div>
              </section>

              {/* The Artist */}
              <section>
                <h3 className="text-3xl font-bold text-foreground mb-8">The Artist</h3>
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-semibold text-accent mb-4">Cosmic Origins</h4>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Born during a galactic collision captured by NASA, the artist's work explores the 
                        intersection of cosmic phenomena and human consciousness. Each piece channels the 
                        universe's creative energy through uncontrolled, spontaneous mark-making techniques.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        The art creates itself—sometimes the universe speaks through the medium, 
                        creating cosmic pictures that require complete thinking to understand.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-accent/20 to-transparent rounded-full flex items-center justify-center">
                        <span className="text-6xl text-accent">◊</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Process */}
              <section>
                <h3 className="text-3xl font-bold text-foreground mb-8">The Process</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl text-accent">1</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Perceive</h4>
                    <p className="text-muted-foreground">
                      View the inkblot and describe what you see. There are no wrong answers—only 
                      unique perspectives that contribute to the collective understanding.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl text-accent">2</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Transform</h4>
                    <p className="text-muted-foreground">
                      Selected responses become the foundation for new artworks. The artist channels 
                      your words through cosmic interpretation, creating tangible expressions of collective consciousness.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl text-accent">3</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Collect</h4>
                    <p className="text-muted-foreground">
                      Each artwork is a limited edition, signed and numbered. Collectors acquire not 
                      just art, but a piece of the collective human experience made manifest.
                    </p>
                  </div>
                </div>
              </section>

              {/* Philosophy */}
              <section>
                <h3 className="text-3xl font-bold text-foreground mb-8">Philosophy</h3>
                <div className="bg-card border border-border rounded-lg p-8">
                  <blockquote className="text-2xl font-light text-foreground italic mb-6 text-center">
                    "Art is a collective act. Everything affects us and we combine the pieces in our artworks. 
                    All though mine is pretty not controlled version of making art, it creates itself sometimes... 
                    mostly all the art that is created by itself is from the universe."
                  </blockquote>
                  <p className="text-muted-foreground text-center">
                    — Portal Collective Ink
                  </p>
                </div>
              </section>

              {/* Call to Action */}
              <section className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-8">Join the Collective</h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Your perception matters. Your words have power. Your consciousness contributes to 
                  the cosmic art that emerges from our collective experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/portal" className="btn-luxury">
                    Enter Portal
                  </Link>
                  <Link href="/gallery" className="btn-luxury-secondary">
                    View Artworks
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
