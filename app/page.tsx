import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            PORTAL – <span className="text-yellow-400">Collective Ink</span>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6">
        <section className="py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Tagline */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 tracking-wide">
                Your words become art
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Discover contemporary masterpieces where language transforms into visual poetry. Curated for discerning
                collectors who appreciate the intersection of literature and fine art.
              </p>
            </div>

            {/* Hero Inkblot Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 flex items-center justify-center shadow-2xl">
                {/* Placeholder for inkblot - you'll replace this with actual image */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-800 to-black rounded-full opacity-80 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Inkblot Preview</p>
                </div>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full bg-yellow-400 opacity-10 blur-3xl -z-10"></div>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/portal">
                  <Button
                    size="lg"
                    className="px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
                  >
                    Enter Portal
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300"
                  >
                    View Collection
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Curated pieces from <span className="text-yellow-400 font-medium">$1,000 – $10,000</span>
              </p>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-center mb-16 tracking-wide">
              Where <span className="text-yellow-400">Words</span> Meet <span className="text-yellow-400">Canvas</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-medium">Curated Excellence</h4>
                <p className="text-gray-300 leading-relaxed">
                  Each piece is carefully selected for its artistic merit and investment potential.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-medium">Authentic Provenance</h4>
                <p className="text-gray-300 leading-relaxed">
                  Complete documentation and certification for every artwork in our collection.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-medium">Collector Services</h4>
                <p className="text-gray-300 leading-relaxed">
                  Personal consultation and white-glove delivery for serious collectors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <p className="text-gray-400">© 2024 PORTAL – Collective Ink. All rights reserved.</p>
            <p className="text-sm text-gray-400">
              Transforming contemporary art collection through digital innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}