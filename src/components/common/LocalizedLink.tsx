import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

/**
 * A language-aware Link component that automatically prepends the current language
 * prefix to internal links.
 *
 * Usage:
 *   <LocalizedLink to="/platform/cash-management">Cash Management</LocalizedLink>
 *
 * If current language is 'ar', this will link to "/ar/platform/cash-management"
 * If current language is 'en', this will link to "/en/platform/cash-management"
 */
export default function LocalizedLink({ to, children, ...props }: LocalizedLinkProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  // Don't modify external links or anchor links
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('#')) {
    return <Link to={to} {...props}>{children}</Link>;
  }

  // Ensure path starts with /
  const normalizedPath = to.startsWith('/') ? to : `/${to}`;

  // Check if path already has a language prefix
  const pathParts = normalizedPath.split('/').filter(Boolean);
  if (pathParts[0] === 'en' || pathParts[0] === 'ar') {
    // Already has language prefix, use as-is
    return <Link to={to} {...props}>{children}</Link>;
  }

  // Add language prefix
  const localizedPath = `/${currentLang}${normalizedPath}`;

  return <Link to={localizedPath} {...props}>{children}</Link>;
}

/**
 * Hook to get the localized version of a path
 */
export function useLocalizedPath() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (path: string): string => {
    // Don't modify external links or anchor links
    if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
      return path;
    }

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Check if path already has a language prefix
    const pathParts = normalizedPath.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'ar') {
      return path;
    }

    return `/${currentLang}${normalizedPath}`;
  };
}
