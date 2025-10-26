/**
 * Complaint Hub Page
 * Central location for all complaint information and documents
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';

export default function ComplaintHub() {
  // Mock data - will be replaced with actual data from API
  const hasComplaint = true; // Change to true when user uploads
  const isPhase1Complete = false;
  const isPhase2Complete = false;

  return (
    <div className="min-h-screen bg-secondary-cream">
      {/* Hero Section */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Your Complaint Resolution Journey
          </h1>
          <p className="text-lg text-primary-dark/80 italic">
            Track your progress through the resolution process
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {hasComplaint ? (
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-dark/20" />

            {/* Phase 1: I. Parties and Representation */}
            <div className="relative mb-8">
              <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                isPhase1Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
              }`}>
                {isPhase1Complete ? (
                  <span className="text-green-500 text-xl font-bold">✓</span>
                ) : (
                  <span className="text-primary-dark text-sm font-bold">1</span>
                )}
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    I. Parties and Representation
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 2: Prepare Response */}
            <div className="relative mb-8">
              <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                isPhase2Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
              }`}>
                {isPhase2Complete ? (
                  <span className="text-green-500 text-xl font-bold">✓</span>
                ) : (
                  <span className="text-primary-dark text-sm font-bold">2</span>
                )}
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className={isPhase1Complete ? '' : 'opacity-60'}>
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Prepare Response
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 3: Mediation Preparation */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-primary-dark text-sm font-bold">3</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Mediation Preparation
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 4: Settlement Offer Writing */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-dark border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">4</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Settlement Offer Writing
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 5: Deliver Offer */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-primary-dark text-sm font-bold">5</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Deliver Settlement Offer
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 6: Settlement Rejected */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-accent-warm border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">6</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="border-2 border-accent-warm opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">
                    Settlement Rejected
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-2 border-secondary-beige rounded-xl p-4">
                      <h3 className="font-semibold text-primary-dark">Application to Dismiss</h3>
                    </div>

                    <div className="border-2 border-secondary-beige rounded-xl p-4">
                      <h3 className="font-semibold text-primary-dark">Proceed to Disclosure</h3>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Phase 7: Disclosure Preparation */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-primary-dark text-sm font-bold">7</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Disclosure Preparation
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 8: Disclosure Submission */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-primary-dark text-sm font-bold">8</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Disclosure Submission
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 9: Hearing Preparation */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-primary-dark text-sm font-bold">9</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Hearing Preparation
                  </h2>
                </Card>
              </div>
            </div>

            {/* Phase 10: The Hearing */}
            <div className="relative mb-8">
              <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-primary-dark text-sm font-bold">10</span>
              </div>

              <div className="ml-20">
                <Card padding="large" rounded="large" className="opacity-60">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    The Hearing
                  </h2>
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
                  <h2 className="text-2xl font-bold text-primary-dark">
                    Resolution Achieved
                  </h2>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          // Empty State
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-8xl mb-8">📋</div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              No Complaint Yet
            </h2>
            <p className="text-lg text-primary-dark/70 mb-8">
              Upload your notice letter to get started with the resolution process.
            </p>
            <Link href="/">
              <Button size="large">Upload Notice Letter</Button>
            </Link>
          </div>
        )}
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
          <div className="flex gap-4 justify-center flex-wrap">
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
