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
        className="absolute inset-0 bg-primary-dark/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative bg-white rounded-3xl shadow-2xl ${sizeClasses[size]} w-full ${size === 'large' ? 'h-[95vh]' : 'max-h-[95vh]'} overflow-hidden flex flex-col`}>
        {/* Header */}
        {title && (
          <div className={`bg-primary-yellow border-b-2 border-primary-dark/10 rounded-t-3xl flex-shrink-0 ${size === 'large' ? 'px-6 py-4' : 'px-8 py-6'}`}>
            <h2 className={`font-bold text-primary-dark ${size === 'large' ? 'text-2xl' : 'text-3xl'}`}>{title}</h2>
            <button
              onClick={onClose}
              className={`absolute text-primary-dark hover:opacity-70 transition-opacity text-2xl ${size === 'large' ? 'top-4 right-6' : 'top-6 right-8'}`}
            >
              ×
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 overflow-y-auto ${size === 'large' ? 'p-0' : 'p-8'} ${!title ? 'rounded-t-3xl' : ''}`}>{children}</div>
      </div>
    </div>
  );
}
