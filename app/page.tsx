import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import SubmissionInterface from "@/components/SubmissionInterface"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <SubmissionInterface />
        
        {/* Featured Section */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wide">
                Where <span className="text-accent">Words</span> Meet <span className="text-accent">Canvas</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center border border-border">
                    <div className="w-10 h-10 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Curated Excellence</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Each piece is carefully selected for its artistic merit and investment potential.
                  </p>
                </div>

                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center border border-border">
                    <div className="w-10 h-10 bg-foreground rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Authentic Provenance</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete documentation and certification for every artwork in our collection.
                  </p>
                </div>

                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center border border-border">
                    <div className="w-10 h-10 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Collector Services</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Personal consultation and white-glove delivery for serious collectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">© 2024 PORTAL – Collective Ink. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">
              Transforming contemporary art collection through digital innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}