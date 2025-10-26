/**
 * Button Component
 * Following DESIGN_GUIDE.md specifications
 *
 * Features:
 * - Pill-shaped (border-radius: 50px)
 * - Primary and Secondary variants
 * - Hover and active states
 * - Disabled state
 * - Sentence case text
 * - Min 44px height for accessibility
 */

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    rounded-full
    font-medium
    text-base
    transition-all
    duration-300
    ease-default
    cursor-pointer
    inline-block
    text-center
    min-h-[44px]
    disabled:opacity-60
    disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      bg-white
      text-primary-dark
      border-none
      shadow-button
      hover:shadow-button-hover
      hover:-translate-y-0.5
      active:translate-y-0
      active:shadow-button-active
      disabled:hover:translate-y-0
      disabled:hover:shadow-button
    `,
    secondary: `
      bg-transparent
      text-primary-dark
      border-2
      border-primary-dark
      hover:bg-primary-dark
      hover:text-white
      active:bg-primary-dark
      disabled:hover:bg-transparent
      disabled:hover:text-primary-dark
    `
  };

  const sizeStyles = {
    small: 'px-6 py-2',
    medium: 'px-8 py-3.5',
    large: 'px-10 py-4'
  };

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
