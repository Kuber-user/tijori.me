import type { NavItem } from '../types';

// Navigation items with translation keys
// Labels are now i18n keys that will be resolved in the Navigation component
export const navigation: NavItem[] = [
  {
    label: 'platform.title',
    children: [
      { label: 'platform.items.cashManagement', path: '/platform/cash-management' },
      { label: 'platform.items.aiForecasting', path: '/platform/ai-forecasting' },
      { label: 'platform.items.loans', path: '/platform/loans' },
      { label: 'platform.items.investments', path: '/platform/investments' },
      { label: 'platform.items.bankFacilities', path: '/platform/bank-facilities' },
      { label: 'platform.items.riskFx', path: '/platform/risk-fx-management' },
      { label: 'platform.items.payments', path: '/platform/payments' },
      { label: 'platform.items.lgLc', path: '/platform/lg-lc' },
      { label: 'platform.items.connectivity', path: '/platform/connectivity' },
    ]
  },
  {
    label: 'solutions.title',
    children: [
      { label: 'solutions.items.cfo', path: '/solutions/cfo' },
      { label: 'solutions.items.treasurer', path: '/solutions/treasurer' },
      { label: 'solutions.items.controller', path: '/solutions/controller' },
      { label: 'solutions.items.construction', path: '/solutions/construction' },
      { label: 'solutions.items.semiGovernment', path: '/solutions/semi-government' },
      { label: 'solutions.items.oilGas', path: '/solutions/oil-gas' },
      { label: 'solutions.items.fmcg', path: '/solutions/fmcg' },
      { label: 'solutions.items.ecommerce', path: '/solutions/ecommerce' },
      { label: 'solutions.items.manufacturing', path: '/solutions/manufacturing' },
    ]
  },
  {
    label: 'company.title',
    children: [
      { label: 'company.items.about', path: '/company/about' },
      { label: 'company.items.contact', path: '/company/contact' },
    ]
  },
  { label: 'pricing', path: '/pricing' },
];
