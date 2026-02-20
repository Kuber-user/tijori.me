import type { ButtonHTMLAttributes } from 'react';
import LocalizedLink from './LocalizedLink';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';

  const variantStyles = {
    primary: 'text-white hover:shadow-lg',
    secondary: 'bg-white text-primary-700 hover:bg-gray-50 shadow-md hover:shadow-lg',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const gradientStyle = variant === 'primary' ? { backgroundImage: 'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)' } : {};

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} style={gradientStyle} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <LocalizedLink to={href} className={classes} style={gradientStyle}>
        {children}
      </LocalizedLink>
    );
  }

  return (
    <button className={classes} style={gradientStyle} {...props}>
      {children}
    </button>
  );
}
