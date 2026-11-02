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
    // Same deep indigo as the homepage hero, with a soft brand-blue glow
    dark: { backgroundImage: 'radial-gradient(ellipse at 85% 0%, rgba(94,120,240,0.18), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(48,205,231,0.08), transparent 50%), linear-gradient(170deg, #0f0d1f 0%, #1a1540 35%, #13102a 65%, #0f0d1f 100%)' },
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
