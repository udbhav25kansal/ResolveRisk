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
    <footer className="bg-primary-yellow border-t-2 border-primary-dark/10 py-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h3 className="font-semibold text-primary-dark mb-3">About ResolveRisk™</h3>
            <p className="text-sm text-primary-dark/70 leading-relaxed">
              AI-powered platform helping BC employers resolve human rights complaints
              efficiently and fairly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-dark mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-primary-dark/70 hover:text-primary-dark transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-primary-dark/70 hover:text-primary-dark transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://www.bchrt.bc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-dark/70 hover:text-primary-dark transition-colors"
                >
                  BC Human Rights Tribunal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary-dark mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-dark/70 hover:text-primary-dark transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-dark/70 hover:text-primary-dark transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t-2 border-primary-dark/10 pt-6">
          <p className="text-xs text-primary-dark/60 mb-2">
            © {currentYear} ResolveRisk™. All rights reserved.
          </p>
          <p className="text-xs text-primary-dark/60 italic">
            Disclaimer: ResolveRisk™ provides guidance tools and is not a law firm.
            We do not provide legal advice. For complex cases, consult with a qualified lawyer.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
