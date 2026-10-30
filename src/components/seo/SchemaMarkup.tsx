interface SchemaMarkupProps {
  schema: Record<string, any>;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

// Predefined schemas for common use cases
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TiJori',
  applicationCategory: 'BusinessApplication',
  description: 'Treasury Management System for enterprises',
  operatingSystem: 'Web',
  publisher: {
    '@type': 'Organization',
    name: 'TiJori',
    logo: 'https://tijori.me/favicon-tijori.png',
    url: 'https://tijori.me'
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
      name: 'TiJori'
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
      ...(item.item && { item: `https://tijori.me${item.item}` })
    }))
  };
}
