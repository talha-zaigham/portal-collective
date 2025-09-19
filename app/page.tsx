import HeroSection from "@/components/HeroSection"
import CosmicBackground from "@/components/CosmicBackground"

export default function HomePage() {
  return (
    <CosmicBackground intensity="light">
      <main>
        <HeroSection />
        
        {/* Featured Section */}
        <section className="section-padding border-t border-border/50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h3 className="heading-md font-bold text-center mb-12 sm:mb-16 tracking-wide">
                Where <span className="text-accent">Words</span> Meet <span className="text-accent">Canvas</span>
              </h3>

              <div className="grid-responsive gap-8 sm:gap-12">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-card/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="heading-sm font-semibold text-foreground">Curated Excellence</h4>
                  <p className="body-md text-muted-foreground leading-relaxed px-4">
                    Each piece is carefully selected for its artistic merit and investment potential.
                  </p>
                </div>

                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-card/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-foreground rounded-full"></div>
                  </div>
                  <h4 className="heading-sm font-semibold text-foreground">Authentic Provenance</h4>
                  <p className="body-md text-muted-foreground leading-relaxed px-4">
                    Complete documentation and certification for every artwork in our collection.
                  </p>
                </div>

                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-card/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="heading-sm font-semibold text-foreground">Collector Services</h4>
                  <p className="body-md text-muted-foreground leading-relaxed px-4">
                    Personal consultation and white-glove delivery for serious collectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold tracking-wide">
                Ready to <span className="text-accent">Explore</span> the <span className="text-accent">Cosmic Void</span>?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Step through the portal and discover what the collective consciousness sees in the infinite patterns of cosmic ink.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a 
                  href="/portal" 
                  className="px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Enter Portal
                </a>
                <a 
                  href="/gallery" 
                  className="px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Interpretations Preview */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wide">
                Recent <span className="text-accent">Cosmic Visions</span> from the Collective
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-sm text-accent">◊</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Anonymous</span>
                  </div>
                  <p className="text-foreground italic leading-relaxed">
                    "Two galaxies merging in eternal dance, their cosmic embrace creating new stars..."
                  </p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-sm text-accent">✦</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Anonymous</span>
                  </div>
                  <p className="text-foreground italic leading-relaxed">
                    "The birth of consciousness itself, emerging from the void like a cosmic flower..."
                  </p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-sm text-accent">◈</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Anonymous</span>
                  </div>
                  <p className="text-foreground italic leading-relaxed">
                    "A portal to another dimension, where time flows backwards and dreams become reality..."
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="/portal" 
                  className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
                >
                  See more interpretations →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12 sm:mt-16 lg:mt-20">
        <div className="container py-8 sm:py-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="body-sm text-muted-foreground">© 2024 PORTAL – Collective Ink. All rights reserved.</p>
            <p className="body-sm text-muted-foreground px-4">
              Transforming contemporary art collection through digital innovation.
            </p>
          </div>
        </div>
      </footer>
    </CosmicBackground>
  )
}