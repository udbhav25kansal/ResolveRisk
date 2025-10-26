/**
 * Input Component
 * Following DESIGN_GUIDE.md specifications
 *
 * Features:
 * - White background
 * - 2px border
 * - Rounded (12px)
 * - Focus state with outline
 * - Error state
 * - Label support
 */

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputStyles = `
    w-full
    bg-white
    border-2
    ${error ? 'border-error-red' : 'border-secondary-beige'}
    rounded-xl
    px-4
    py-3.5
    text-base
    text-primary-dark
    transition-all
    duration-300
    focus:border-primary-dark
    focus:outline-none
    focus:ring-4
    focus:ring-primary-dark/10
    disabled:opacity-60
    disabled:cursor-not-allowed
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-primary-dark mb-2"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={inputStyles}
        {...props}
      />

      {error && (
        <p className="mt-2 text-sm text-error-red">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
