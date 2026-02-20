import type { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export default function Badge({
  variant = 'primary',
  size = 'sm',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-cyan/10 text-secondary-cyan',
    success: 'bg-green-100 text-green-700',
    info: 'bg-blue-100 text-blue-700',
    warning: 'bg-yellow-100 text-yellow-700'
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
