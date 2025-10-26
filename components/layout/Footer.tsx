/**
 * Footer Component
 * Following DESIGN_GUIDE.md specifications
 *
 * Features:
 * - Simple and clean
 * - Yellow background
 * - Links to important pages
 * - Legal disclaimers
 */

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 mt-auto" style={{ backgroundColor: 'var(--primary-background)', borderTop: '2px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-text)' }}>About ResolveRisk™</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--primary-text)', opacity: 0.7 }}>
              AI-powered platform helping BC employers resolve human rights complaints
              efficiently and fairly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-text)' }}>Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'var(--primary-text)', opacity: 0.7 }}
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'var(--primary-text)', opacity: 0.7 }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://www.bchrt.bc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'var(--primary-text)', opacity: 0.7 }}
                >
                  BC Human Rights Tribunal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-text)' }}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'var(--primary-text)', opacity: 0.7 }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'var(--primary-text)', opacity: 0.7 }}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6" style={{ borderTop: '2px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-xs mb-2" style={{ color: 'var(--primary-text)', opacity: 0.6 }}>
            © {currentYear} ResolveRisk™. All rights reserved.
          </p>
          <p className="text-xs italic" style={{ color: 'var(--primary-text)', opacity: 0.6 }}>
            Disclaimer: ResolveRisk™ provides guidance tools and is not a law firm.
            We do not provide legal advice. For complex cases, consult with a qualified lawyer.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
