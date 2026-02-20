import type { Feature } from '../types';

// Platform features with translation keys
// Title and description are now i18n keys that will be resolved in the PlatformOverview component
export const platformFeatures: Feature[] = [
  {
    id: 'cash-management',
    title: 'features.cashManagement.title',
    description: 'features.cashManagement.description',
    icon: 'Wallet',
    page: '/platform/cash-management'
  },
  {
    id: 'ai-forecasting',
    title: 'features.aiForecasting.title',
    description: 'features.aiForecasting.description',
    icon: 'TrendingUp',
    page: '/platform/ai-forecasting'
  },
  {
    id: 'loans',
    title: 'features.loans.title',
    description: 'features.loans.description',
    icon: 'Banknote',
    page: '/platform/loans'
  },
  {
    id: 'investments',
    title: 'features.investments.title',
    description: 'features.investments.description',
    icon: 'BarChart',
    page: '/platform/investments'
  },
  {
    id: 'bank-facilities',
    title: 'features.bankFacilities.title',
    description: 'features.bankFacilities.description',
    icon: 'Building',
    page: '/platform/bank-facilities'
  },
  {
    id: 'lg-lc',
    title: 'features.lgLc.title',
    description: 'features.lgLc.description',
    icon: 'FileText',
    page: '/platform/lg-lc'
  },
  {
    id: 'risk-fx',
    title: 'features.riskFx.title',
    description: 'features.riskFx.description',
    icon: 'Shield',
    page: '/platform/risk-fx-management'
  },
  {
    id: 'payments',
    title: 'features.payments.title',
    description: 'features.payments.description',
    icon: 'Send',
    page: '/platform/payments'
  },
  {
    id: 'connectivity',
    title: 'features.connectivity.title',
    description: 'features.connectivity.description',
    icon: 'Network',
    page: '/platform/connectivity'
  },
];
