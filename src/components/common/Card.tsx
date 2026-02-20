import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Card({
  hover = false,
  padding = 'md',
  className = '',
  children,
  ...props
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseStyles = 'bg-white rounded-lg shadow-md border border-gray-100';
  const hoverStyles = hover ? 'card-hover' : '';

  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
