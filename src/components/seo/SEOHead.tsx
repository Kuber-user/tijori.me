import { useLocation } from 'react-router-dom';
import type { SEOMetadata } from '../../types';

interface SEOHeadProps extends SEOMetadata {
  children?: React.ReactNode;
}

// React 19 hoists <title>, <meta> and <link> rendered anywhere into <head>
export default function SEOHead({
  title,
  description,
  keywords = [],
  ogImage = '/assets/screenshots/Homepage.png',
  canonical,
  children
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const siteUrl = 'https://tijori.me';
  const fullTitle = /TiJori|تيجوري/.test(title) ? title : `${title} | TiJori`;
  const canonicalUrl = canonical || `${siteUrl}${pathname}`;
  const imageUrl = `${siteUrl}${encodeURI(ogImage)}`;

  // Path without the /en or /ar prefix, for hreflang alternates
  const basePath = pathname.replace(/^\/(en|ar)(?=\/|$)/, '');

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${basePath}`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar${basePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en${basePath}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="TiJori" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />

      {children}
    </>
  );
}
