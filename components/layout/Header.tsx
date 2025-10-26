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
import { Button } from '../ui';

export interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
}

export function Header({ isAuthenticated = false, userName }: HeaderProps) {
  return (
    <header className="bg-primary-yellow py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center">
            <span className="text-primary-yellow text-xl font-bold">R</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-primary-dark tracking-wide">
              RESOLVERISK™
            </h1>
            <p className="text-xs text-primary-dark/70">Human Rights Portal</p>
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
              <Link
                href="/"
                className="text-primary-dark hover:opacity-70 transition-opacity font-medium"
              >
                Home
              </Link>
              <Link
                href="/complaint-hub"
                className="text-primary-dark hover:opacity-70 transition-opacity font-medium"
              >
                Complaint Hub
              </Link>
              <Link
                href="/complaint-hub"
                className="rounded-full font-medium text-base transition-all duration-300 ease-default cursor-pointer inline-block text-center min-h-[44px] bg-white text-primary-dark border-none shadow-button hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-button-active px-6 py-2"
              >
                Complaint Summary
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
