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
  style?: React.CSSProperties;
}

export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  style,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputStyles = `
    w-full
    border-2
    rounded-xl
    px-4
    py-3.5
    text-base
    transition-all
    duration-300
    focus:outline-none
    focus:ring-4
    disabled:opacity-60
    disabled:cursor-not-allowed
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const inputStyle = {
    backgroundColor: '#ffffff',
    borderColor: error ? 'var(--error-red)' : 'rgba(42, 46, 48, 0.2)',
    color: 'var(--primary-bubble-text)',
    ...style
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--primary-bubble-text)' }}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={inputStyles}
        style={inputStyle}
        {...props}
      />

      {error && (
        <p className="mt-2 text-sm" style={{ color: 'var(--error-red)' }}>
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="mt-2 text-sm" style={{ color: 'var(--primary-bubble-text)', opacity: 0.6 }}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
