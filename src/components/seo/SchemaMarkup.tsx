import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Predefined schemas for common use cases
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Synclane',
  applicationCategory: 'BusinessApplication',
  description: 'Treasury Management System for enterprises',
  operatingSystem: 'Web',
  publisher: {
    '@type': 'Organization',
    name: 'Synclane',
    logo: 'https://synclane.io/logo.png',
    url: 'https://synclane.io'
  }
};

export function createProductSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'Synclane'
    }
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; item?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.item && { item: `https://synclane.io${item.item}` })
    }))
  };
}
