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