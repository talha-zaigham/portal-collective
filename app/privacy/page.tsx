'use client'

import CosmicHeader from '@/components/CosmicHeader'

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <CosmicHeader />
      
      <main className="pt-24 section-padding">
        <div className="container-sm">
          <div className="text-center mb-12">
            <h1 className="heading-lg text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="body-md text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Email addresses (for collector inquiries)</li>
                  <li>Names and contact information (when provided)</li>
                  <li>Budget ranges and collection preferences</li>
                  <li>IP addresses and device information</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">Artistic Submissions</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Inkblot interpretations and responses</li>
                  <li>Anonymous participation data</li>
                  <li>Voting patterns and preferences</li>
                  <li>Curator selection data</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Create limited edition artworks from collective submissions</li>
                  <li>Process collector inquiries and artwork sales</li>
                  <li>Improve the cosmic art experience and platform functionality</li>
                  <li>Analyze user engagement and artistic patterns</li>
                  <li>Communicate about new artworks and exclusive opportunities</li>
                  <li>Protect intellectual property and prevent unauthorized use</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">3. Data Protection and Security</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure database storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Anonymous participation options</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">4. Anonymous Participation</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  Portal Collective Ink encourages anonymous participation to focus on collective consciousness rather than individual identity. When you choose anonymous participation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Your submissions are not linked to personal information</li>
                  <li>Only your artistic interpretation is stored</li>
                  <li>No tracking of individual user behavior</li>
                  <li>Focus on collective artistic expression</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">5. Information Sharing</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in these circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our intellectual property rights</li>
                  <li>With trusted service providers (under strict confidentiality)</li>
                  <li>In case of business transfer or acquisition</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">6. Cookies and Tracking</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website performance and usage</li>
                  <li>Provide personalized cosmic experiences</li>
                  <li>Prevent fraud and unauthorized access</li>
                </ul>
                <p className="body-md text-foreground">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">7. Your Rights</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Data portability (where applicable)</li>
                </ul>
                <p className="body-md text-foreground">
                  Note: Anonymous submissions cannot be retrieved or deleted as they are not linked to personal identifiers.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">8. Data Retention</h2>
              <div className="space-y-4">
                <p className="body-md text-foreground">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Provide the cosmic art experience</li>
                  <li>Create and sell limited edition artworks</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect intellectual property rights</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">9. International Users</h2>
              <p className="body-md text-foreground">
                If you are accessing Portal Collective Ink from outside the United States, please note that your information may be transferred to, stored, and processed in the United States where our servers are located.
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">10. Changes to This Policy</h2>
              <p className="body-md text-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="heading-sm text-accent mb-4">11. Contact Us</h2>
              <p className="body-md text-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us through the collector inquiry form or at [your-email@domain.com].
              </p>
            </section>

            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg">
              <p className="body-md text-accent text-center">
                <strong>Your privacy is important to us.</strong> We are committed to protecting your information while creating beautiful cosmic art experiences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
