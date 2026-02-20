import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export default function Section({
  background = 'white',
  padding = 'lg',
  className = '',
  children,
  ...props
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'text-white',
    gradient: 'text-white'
  };

  const inlineStyles: Record<string, React.CSSProperties> = {
    dark: { backgroundImage: 'linear-gradient(135deg, #2C2358 0%, #16122C 100%)' },
    gradient: { backgroundImage: 'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)' },
  };

  const paddingStyles = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32'
  };

  return (
    <section
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
      style={inlineStyles[background] || {}}
      {...props}
    >
      {children}
    </section>
  );
}
