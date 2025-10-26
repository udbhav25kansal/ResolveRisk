/**
 * Modal Component
 * Following DESIGN_GUIDE.md specifications
 */

'use client';

import React from 'react';
import { Button } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'medium' | 'large';
}

export function Modal({ isOpen, onClose, title, children, size = 'medium' }: ModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    medium: 'max-w-2xl',
    large: 'max-w-[95vw]'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative rounded-3xl shadow-2xl ${sizeClasses[size]} w-full ${size === 'large' ? 'h-[95vh]' : 'max-h-[95vh]'} overflow-hidden flex flex-col`} style={{ backgroundColor: 'var(--primary-bubble)' }}>
        {/* Header */}
        {title && (
          <div className={`rounded-t-3xl flex-shrink-0 ${size === 'large' ? 'px-6 py-4' : 'px-8 py-6'}`} style={{ backgroundColor: 'var(--primary-bubble)', borderBottom: '2px solid rgba(42, 46, 48, 0.1)' }}>
            <h2 className={`font-bold ${size === 'large' ? 'text-2xl' : 'text-3xl'}`} style={{ color: 'var(--primary-bubble-text)' }}>{title}</h2>
            <button
              onClick={onClose}
              className={`absolute hover:opacity-70 transition-opacity text-2xl ${size === 'large' ? 'top-4 right-6' : 'top-6 right-8'}`}
              style={{ color: 'var(--primary-bubble-text)' }}
            >
              ×
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 overflow-y-auto ${size === 'large' ? 'p-0' : 'p-8'} ${!title ? 'rounded-t-3xl' : ''}`} style={{ color: 'var(--primary-bubble-text)' }}>{children}</div>
      </div>
    </div>
  );
}
