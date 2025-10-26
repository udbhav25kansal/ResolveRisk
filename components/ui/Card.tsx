/**
 * Card Component
 * Following DESIGN_GUIDE.md specifications
 *
 * Features:
 * - Rounded corners (24px default)
 * - Bubble background (#d4edf4)
 * - Subtle shadow
 * - Consistent padding
 */

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  padding?: 'small' | 'medium' | 'large';
  rounded?: 'medium' | 'large' | 'xlarge';
  style?: React.CSSProperties;
}

export function Card({
  children,
  className = '',
  padding = 'medium',
  rounded = 'large',
  style,
  ...rest
}: CardProps) {
  const paddingStyles = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const roundedStyles = {
    medium: 'rounded-2xl',  // 16px
    large: 'rounded-3xl',   // 24px
    xlarge: 'rounded-[28px]' // 28px
  };

  const combinedStyles = `
    shadow-md
    ${roundedStyles[rounded]}
    ${paddingStyles[padding]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const defaultStyle = {
    backgroundColor: 'var(--primary-bubble)',
    color: 'var(--primary-bubble-text)',
    ...style
  };

  return (
    <div className={combinedStyles} style={defaultStyle} {...rest}>
      {children}
    </div>
  );
}

export default Card;
