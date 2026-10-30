export interface Integration {
  id: string;
  name: string;
  category: 'ERP' | 'Bank' | 'Accounting';
  logo?: string;
  description: string;
  setupTime?: string;
  features: string[];
  slug: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  page: string;
}

export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
