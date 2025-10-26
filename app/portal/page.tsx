/**
 * Home Page
 * Main landing page showing complaint management dashboard
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';

// Mock data for complaints - initially empty until user uploads a complaint in Timeline
const activeComplaints: any[] = [];

const resolvedComplaints: any[] = [];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--primary-background)' }}>
      {/* Header */}
      <section className="py-12 px-6" style={{ backgroundColor: 'var(--primary-background)' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bold mb-4" style={{
            fontSize: 'var(--text-title)',
            color: 'var(--primary-text)',
            fontWeight: 'var(--weight-bold)',
            fontFamily: 'var(--font-heading)'
          }}>
            Home
          </h1>
          <p className="italic" style={{
            fontSize: 'var(--text-subheading)',
            color: 'var(--primary-text)',
            fontWeight: 'var(--weight-bold)',
            fontFamily: 'var(--font-heading)'
          }}>
            Manage your HR complaints and resolutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* New Complaint Button */}
        <div className="mb-12">
          <Link href="/">
            <Button size="large" className="text-xl px-8 py-4">
              + New Complaint
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Complaints Column */}
          <div>
            <h2 className="font-bold mb-6" style={{
              fontSize: 'var(--text-subheading)',
              color: 'var(--primary-text)',
              fontWeight: 'var(--weight-bold)',
              fontFamily: 'var(--font-heading)'
            }}>
              Active Complaints ({activeComplaints.length})
            </h2>

            <div className="space-y-4">
              {activeComplaints.length > 0 ? (
                activeComplaints.map((complaint) => (
                  <Card key={complaint.id} padding="large" rounded="large" className="hover:shadow-xl transition-shadow" style={{
                    backgroundColor: 'var(--primary-bubble)',
                    color: 'var(--primary-bubble-text)'
                  }}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold mb-2" style={{
                          fontSize: 'var(--text-subheading)',
                          color: 'var(--primary-bubble-text)',
                          fontWeight: 'var(--weight-bold)',
                          fontFamily: 'var(--font-heading)'
                        }}>
                          Case #{complaint.id}
                        </h3>
                        <div className="space-y-1" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>
                          <p><span className="font-semibold">Complainant:</span> {complaint.complainant}</p>
                          <p><span className="font-semibold">Respondent:</span> {complaint.respondent}</p>
                          <p><span className="font-semibold">Date Received:</span> {complaint.dateReceived}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-accent-warm text-white font-semibold rounded-full" style={{ fontSize: 'var(--text-body)' }}>
                          {complaint.status}
                        </span>
                      </div>
                    </div>

                    <p className="mb-4" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>
                      <span className="font-semibold">Current Phase:</span> {complaint.currentPhase}
                    </p>

                    <div className="flex gap-3">
                      <Link href="/complaint-hub" className="flex-1">
                        <Button variant="secondary" size="medium" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Link href="/" className="flex-1">
                        <Button size="medium" className="w-full">
                          Continue Work
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))
              ) : (
                <Card padding="large" rounded="large" className="text-center" style={{
                  backgroundColor: 'var(--primary-bubble)',
                  color: 'var(--primary-bubble-text)'
                }}>
                  <p style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>No active complaints</p>
                </Card>
              )}
            </div>
          </div>

          {/* Resolved Complaints Column */}
          <div>
            <h2 className="font-bold mb-6" style={{
              fontSize: 'var(--text-subheading)',
              color: 'var(--primary-text)',
              fontWeight: 'var(--weight-bold)',
              fontFamily: 'var(--font-heading)'
            }}>
              Resolved Complaints ({resolvedComplaints.length})
            </h2>

            <div className="space-y-4">
              {resolvedComplaints.length > 0 ? (
                resolvedComplaints.map((complaint: any) => (
                  <Card key={complaint.id} padding="large" rounded="large" className="hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-dark mb-2">
                          Case #{complaint.id}
                        </h3>
                        <div className="text-sm text-primary-dark/70 space-y-1">
                          <p><span className="font-semibold">Complainant:</span> {complaint.complainant}</p>
                          <p><span className="font-semibold">Respondent:</span> {complaint.respondent}</p>
                          <p><span className="font-semibold">Resolved:</span> {complaint.resolvedDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                          Resolved
                        </span>
                      </div>
                    </div>

                    <Link href="/complaint-hub">
                      <Button variant="secondary" size="medium" className="w-full">
                        View Archive
                      </Button>
                    </Link>
                  </Card>
                ))
              ) : (
                <Card padding="large" rounded="large" className="text-center" style={{
                  backgroundColor: 'var(--primary-bubble)',
                  color: 'var(--primary-bubble-text)'
                }}>
                  <p style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>No resolved complaints</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-8 px-6 text-center" style={{ backgroundColor: 'var(--primary-background)' }}>
        <div className="max-w-6xl mx-auto">
          <Link href="/portal">
            <Button size="large">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6" style={{ backgroundColor: 'var(--primary-background)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold mb-6 text-center" style={{
            fontSize: 'var(--text-subheading)',
            color: 'var(--primary-text)',
            fontWeight: 'var(--weight-bold)',
            fontFamily: 'var(--font-heading)'
          }}>
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources">
              <Card padding="medium" rounded="large" className="text-center hover:shadow-xl transition-shadow cursor-pointer" style={{
                backgroundColor: 'var(--primary-bubble)',
                color: 'var(--primary-bubble-text)'
              }}>
                <h3 className="font-semibold" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>Resources</h3>
              </Card>
            </Link>
            <Link href="/complaint-hub">
              <Card padding="medium" rounded="large" className="text-center hover:shadow-xl transition-shadow cursor-pointer" style={{
                backgroundColor: 'var(--primary-bubble)',
                color: 'var(--primary-bubble-text)'
              }}>
                <h3 className="font-semibold" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>Complaint Hub</h3>
              </Card>
            </Link>
            <Link href="/contact">
              <Card padding="medium" rounded="large" className="text-center hover:shadow-xl transition-shadow cursor-pointer" style={{
                backgroundColor: 'var(--primary-bubble)',
                color: 'var(--primary-bubble-text)'
              }}>
                <h3 className="font-semibold" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)' }}>Contact Support</h3>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
