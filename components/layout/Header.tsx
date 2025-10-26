/**
 * Header Component
 * Following DESIGN_GUIDE.md specifications
 *
 * Features:
 * - Logo + site name
 * - Navigation
 * - Yellow background (matches body)
 * - Consistent padding
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui';

export interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
}

export function Header({ isAuthenticated = false, userName }: HeaderProps) {
  const pathname = usePathname();

  // Show complaint-specific tabs only when NOT on the portal (home) page
  const showComplaintTabs = pathname !== '/portal';
  return (
    <header className="py-4 px-6 md:px-12" style={{ backgroundColor: 'var(--primary-background)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/portal" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-bubble)' }}>
            <span className="text-xl font-bold" style={{ color: 'var(--primary-bubble-text)' }}>R</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide" style={{ color: 'var(--primary-text)' }}>
              RESOLVERISK™
            </h1>
            <p className="text-xs" style={{ color: 'var(--primary-text)', opacity: 0.7 }}>Human Rights Portal</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="text-primary-dark hover:opacity-70 transition-opacity font-medium"
              >
                Dashboard
              </Link>
              <span className="text-primary-dark">
                Hi, {userName || 'User'}
              </span>
              <Button variant="secondary" size="small">
                Logout
              </Button>
            </>
          ) : (
            <>
              {showComplaintTabs ? (
                <>
                  <Link
                    href="/portal"
                    className="hover:opacity-70 transition-opacity font-medium"
                    style={{ color: 'var(--primary-text)' }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="hover:opacity-70 transition-opacity font-medium"
                    style={{ color: 'var(--primary-text)' }}
                  >
                    Timeline
                  </Link>
                  <Link
                    href="/complaint-summary"
                    className="hover:opacity-70 transition-opacity font-medium"
                    style={{ color: 'var(--primary-text)' }}
                  >
                    Complaint Hub
                  </Link>
                  <Link
                    href="/complaint-hub"
                    className="hover:opacity-70 transition-opacity font-medium"
                    style={{ color: 'var(--primary-text)' }}
                  >
                    Complaint Summary
                  </Link>
                </>
              ) : null}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
