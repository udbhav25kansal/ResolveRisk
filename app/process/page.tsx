/**
 * Process Timeline Page
 * Vertical timeline showing all phases of the HR complaint resolution process
 * Following APP_ARCHITECTURE.md phases
 */

import Link from 'next/link';
import { Button, Card } from '@/components/ui';

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-secondary-cream">
      {/* Hero Section */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Your Complaint Resolution Journey
          </h1>
          <p className="text-lg text-primary-dark/80 italic">
            We'll guide you step-by-step through the entire process. Let's get started.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-dark/20" />

          {/* Phase 1: Notification & Response - MVP */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-dark border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">1</span>
            </div>

            {/* Content */}
            <div className="ml-20">
              <div className="inline-block bg-primary-dark text-primary-yellow px-3 py-1 rounded-full text-xs font-semibold mb-3">
                MVP - Available Now
              </div>

              <Card padding="large" rounded="large">
                <h2 className="text-2xl font-bold text-primary-dark mb-3">
                  Phase 1: Response Writing
                </h2>
                <p className="text-primary-dark/70 mb-4">
                  You've received a complaint from the BC Human Rights Tribunal.
                  We'll help you craft a comprehensive, professional response.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Upload Complaint</h3>
                      <p className="text-sm text-primary-dark/70">
                        Upload the PDF you received from the Tribunal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">AI Analysis</h3>
                      <p className="text-sm text-primary-dark/70">
                        Our AI identifies allegations, grounds, and key facts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✍️</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Guided Response</h3>
                      <p className="text-sm text-primary-dark/70">
                        Answer questions and get a professional response draft
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/process/phase1">
                  <Button size="large">Start Response Builder →</Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Phase 2: Resolution Attempts - Future */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">2</span>
            </div>

            {/* Content */}
            <div className="ml-20">
              <div className="inline-block bg-secondary-beige text-primary-dark px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Coming Soon
              </div>

              <Card padding="large" rounded="large" className="opacity-75">
                <h2 className="text-2xl font-bold text-primary-dark mb-3">
                  Phase 2: Resolution Attempts
                </h2>
                <p className="text-primary-dark/70 mb-4">
                  After submitting your response, you may have opportunities to resolve
                  the complaint directly with the employee or through mediation.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Direct Negotiation</h3>
                      <p className="text-sm text-primary-dark/70">
                        Tools to facilitate communication with the complainant
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Mediation Prep</h3>
                      <p className="text-sm text-primary-dark/70">
                        Guidance for preparing for formal mediation sessions
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="large" variant="secondary" className="opacity-50 cursor-not-allowed">
                  Available in Future Release
                </Button>
              </Card>
            </div>
          </div>

          {/* Phase 3: Settlement Offer - MVP */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-dark border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">3</span>
            </div>

            {/* Content */}
            <div className="ml-20">
              <div className="inline-block bg-primary-dark text-primary-yellow px-3 py-1 rounded-full text-xs font-semibold mb-3">
                MVP - Available Now
              </div>

              <Card padding="large" rounded="large">
                <h2 className="text-2xl font-bold text-primary-dark mb-3">
                  Phase 3: Settlement Offer
                </h2>
                <p className="text-primary-dark/70 mb-4">
                  If mediation doesn't succeed, create a strategic settlement offer
                  based on risk assessment and precedent data.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Risk Assessment</h3>
                      <p className="text-sm text-primary-dark/70">
                        Analyze the likelihood of success and potential outcomes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Settlement Calculator</h3>
                      <p className="text-sm text-primary-dark/70">
                        Calculate fair settlement ranges based on precedents
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Offer Builder</h3>
                      <p className="text-sm text-primary-dark/70">
                        Generate professional settlement offer documents
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/process/phase3">
                  <Button size="large">Start Settlement Wizard →</Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Phase 4: Disclosure & Hearing - Future */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">4</span>
            </div>

            {/* Content */}
            <div className="ml-20">
              <div className="inline-block bg-secondary-beige text-primary-dark px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Coming Soon
              </div>

              <Card padding="large" rounded="large" className="opacity-75">
                <h2 className="text-2xl font-bold text-primary-dark mb-3">
                  Phase 4: Disclosure & Hearing
                </h2>
                <p className="text-primary-dark/70 mb-4">
                  If settlement negotiations don't succeed, prepare for disclosure
                  and the formal hearing process.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📂</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Disclosure Prep</h3>
                      <p className="text-sm text-primary-dark/70">
                        Organize and prepare documents for disclosure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Hearing Support</h3>
                      <p className="text-sm text-primary-dark/70">
                        Tools to prepare for your tribunal hearing
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="large" variant="secondary" className="opacity-50 cursor-not-allowed">
                  Available in Future Release
                </Button>
              </Card>
            </div>
          </div>

          {/* End of Timeline */}
          <div className="relative">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-accent-warm border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">✓</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="bg-accent-warm/10">
                <h2 className="text-2xl font-bold text-primary-dark mb-3">
                  Resolution Achieved
                </h2>
                <p className="text-primary-dark/70">
                  Your complaint has been resolved through one of the paths above.
                  We're here to help you through every step of the journey.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-lg text-primary-dark/80 mb-6">
            Our team is here to support you through every phase of the process.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/resources">
              <Button variant="secondary" size="large">
                View Resources
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="large">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
