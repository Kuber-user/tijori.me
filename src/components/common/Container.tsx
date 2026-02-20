import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export default function Container({
  size = 'lg',
  className = '',
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1536px]'
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
