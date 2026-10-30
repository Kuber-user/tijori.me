import { Helmet } from 'react-helmet-async';
import type { SEOMetadata } from '../../types';

interface SEOHeadProps extends SEOMetadata {
  children?: React.ReactNode;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  ogImage = '/assets/og-image.jpg',
  canonical,
  children
}: SEOHeadProps) {
  const siteUrl = 'https://tijori.me';
  const fullTitle = title.includes('TiJori') ? title : `${title} | TiJori`;
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="TiJori" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {children}
    </Helmet>
  );
}
