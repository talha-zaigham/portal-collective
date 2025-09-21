'use client'

import CosmicHeader from '@/components/CosmicHeader'

export default function TermsPage() {
  return (
    <div className="bg-background">
      <CosmicHeader />
      
      <main className="pt-24 section-padding">
        <div className="container-sm">
          <div className="text-center mb-12">
            <h1 className="heading-lg text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="body-md text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">1. Acceptance of Terms</h2>
              <p className="body-md text-foreground mb-4">
                By accessing and using Portal Collective Ink ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">2. Intellectual Property Protection</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  <strong className="text-accent">CRITICAL NOTICE:</strong> Portal Collective Ink represents a unique, proprietary concept and business model that is protected by intellectual property laws. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>The interactive inkblot art marketplace concept</li>
                  <li>The collective consciousness art creation methodology</li>
                  <li>The cosmic-themed user experience design</li>
                  <li>The anonymous participation and voting system</li>
                  <li>The curator selection and rarity scoring algorithms</li>
                  <li>The limited edition artwork business model</li>
                  <li>The portal hands visual effects and cosmic animations</li>
                </ul>
                <p className="body-md text-foreground">
                  <strong className="text-red-400">PROHIBITED ACTIVITIES:</strong> You are strictly prohibited from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Replicating, copying, or recreating any aspect of this concept</li>
                  <li>Creating derivative works based on this business model</li>
                  <li>Using similar interactive art marketplace concepts</li>
                  <li>Implementing comparable anonymous collective art systems</li>
                  <li>Developing competing inkblot-based art platforms</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">3. Legal Consequences</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  Violation of these intellectual property protections will result in immediate legal action, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Cease and desist orders</li>
                  <li>Injunctive relief to prevent further infringement</li>
                  <li>Monetary damages including lost profits and statutory damages</li>
                  <li>Attorney fees and court costs</li>
                  <li>Potential criminal charges for willful copyright infringement</li>
                </ul>
                <p className="body-md text-foreground">
                  <strong className="text-accent">Damages:</strong> Minimum statutory damages of $750 per work infringed, up to $150,000 per work for willful infringement, plus actual damages and profits.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">4. User Submissions</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  By submitting content to Portal Collective Ink, you grant us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Exclusive rights to use your submissions for artwork creation</li>
                  <li>Right to display, modify, and incorporate submissions into limited edition artworks</li>
                  <li>Right to commercialize resulting artworks without additional compensation</li>
                  <li>Right to use submissions for marketing and promotional purposes</li>
                </ul>
                <p className="body-md text-foreground">
                  You retain no rights to submissions once made. All resulting artworks become the exclusive property of Portal Collective Ink.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">5. Service Availability</h2>
              <p className="body-md text-foreground">
                We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We are not liable for any damages resulting from service interruptions or modifications.
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">6. Limitation of Liability</h2>
              <p className="body-md text-foreground">
                Portal Collective Ink shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">7. Governing Law</h2>
              <p className="body-md text-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the state of [Your State], without regard to conflict of law provisions. Any legal action shall be brought in the federal or state courts located in [Your Jurisdiction].
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">8. Contact Information</h2>
              <p className="body-md text-foreground">
                For questions regarding these Terms and Conditions, please contact us through the collector inquiry form or at [your-email@domain.com].
              </p>
            </section>

            <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
              <p className="body-md text-red-200 text-center">
                <strong>WARNING:</strong> By using this service, you acknowledge that you have read, understood, and agree to be bound by these terms. Any violation will result in immediate legal action.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
