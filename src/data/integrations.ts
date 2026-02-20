import type { Integration } from '../types';

export const integrations: Integration[] = [
  // ERPs - Focus on Oracle and SAP
  {
    id: 'oracle-fusion',
    name: 'Oracle Fusion Cloud',
    category: 'ERP',
    logo: '/assets/logos/oracle.svg',
    description: 'Native integration with Oracle Fusion ERP for treasury reconciliation, GL sync, and automated cash positioning across all modules',
    setupTime: '4-6 hours',
    features: ['GL data sync', 'Cash Management module', 'Payment processing', 'Journal entry automation'],
    slug: 'oracle-fusion'
  },
  {
    id: 'oracle-ebs',
    name: 'Oracle E-Business Suite',
    category: 'ERP',
    logo: '/assets/logos/oracle.svg',
    description: 'Comprehensive integration with Oracle EBS for cash management, payables, receivables, and treasury operations',
    setupTime: '4-6 hours',
    features: ['Oracle Cash Management', 'AP/AR integration', 'Multi-org support', 'Custom field mapping'],
    slug: 'oracle-ebs'
  },
  {
    id: 'sap-s4hana',
    name: 'SAP S/4HANA',
    category: 'ERP',
    logo: '/assets/logos/sap.svg',
    description: 'Real-time integration with SAP S/4HANA for treasury and cash operations with in-memory processing capabilities',
    setupTime: '4-6 hours',
    features: ['SAP FI/CO integration', 'Treasury module sync', 'Multi-entity support', 'Real-time data flow'],
    slug: 'sap-s4hana'
  },
  {
    id: 'sap-ecc',
    name: 'SAP ECC',
    category: 'ERP',
    logo: '/assets/logos/sap.svg',
    description: 'Legacy SAP ECC integration for organizations managing treasury operations during S/4HANA transition',
    setupTime: '4-6 hours',
    features: ['SAP Treasury module', 'GL data sync', 'Bank reconciliation', 'Payment processing'],
    slug: 'sap-ecc'
  },
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics 365',
    category: 'ERP',
    logo: '/assets/logos/dynamics.svg',
    description: 'Native Microsoft Dynamics 365 Finance integration for unified treasury operations',
    setupTime: '3-5 hours',
    features: ['D365 Finance sync', 'Bank reconciliation', 'Cash flow forecasting', 'Multi-currency support'],
    slug: 'microsoft-dynamics'
  },
  {
    id: 'netsuite',
    name: 'NetSuite',
    category: 'ERP',
    logo: '/assets/logos/netsuite.svg',
    description: 'Full bi-directional sync with NetSuite GL, AR, AP for automated cash forecasting and reconciliation',
    setupTime: '2-4 hours',
    features: ['GL sync', 'Auto-reconciliation', 'Invoice matching', 'Real-time data flow'],
    slug: 'netsuite'
  },

  // Connectivity - SWIFT and Open Banking
  {
    id: 'swift',
    name: 'SWIFT Network',
    category: 'Bank',
    logo: '/assets/logos/swift.svg',
    description: 'Direct SWIFT connectivity for MT940, MT942, MT101, and ISO 20022 messaging across all connected banks',
    setupTime: '2-3 days',
    features: ['MT940 statements', 'MT942 intraday', 'MT101 payments', 'ISO 20022 ready'],
    slug: 'swift-network'
  },
  {
    id: 'leantech',
    name: 'LEANtech Open Banking',
    category: 'Bank',
    logo: '/assets/logos/leantech.svg',
    description: 'Open banking aggregation for real-time bank feeds across Saudi and GCC banks without manual file uploads',
    setupTime: '1-2 days',
    features: ['Real-time balances', 'Transaction feeds', 'Payment initiation', 'Multi-bank aggregation'],
    slug: 'leantech'
  },

  // Saudi Banks
  {
    id: 'snb',
    name: 'Saudi National Bank (SNB)',
    category: 'Bank',
    logo: '/assets/logos/snb.svg',
    description: 'Direct connectivity to Saudi National Bank for real-time balance reporting and payment initiation',
    setupTime: '1-2 days',
    features: ['SWIFT MT940', 'Host-to-host', 'Payment files', 'Real-time balances'],
    slug: 'saudi-national-bank'
  },
  {
    id: 'alrajhi',
    name: 'Al Rajhi Bank',
    category: 'Bank',
    logo: '/assets/logos/alrajhi.svg',
    description: 'Automated data integration with Al Rajhi Bank for corporate treasury operations',
    setupTime: '1-2 days',
    features: ['SWIFT messaging', 'Corporate banking', 'Multi-currency', 'Payment processing'],
    slug: 'al-rajhi-bank'
  },
  {
    id: 'riyad',
    name: 'Riyad Bank',
    category: 'Bank',
    logo: '/assets/logos/riyad.svg',
    description: 'Secure integration with Riyad Bank for treasury management and cash positioning',
    setupTime: '1-2 days',
    features: ['Statement retrieval', 'Payment initiation', 'Balance reporting', 'Account aggregation'],
    slug: 'riyad-bank'
  },
  {
    id: 'sab',
    name: 'SAB',
    category: 'Bank',
    logo: '/assets/logos/sab.svg',
    description: 'Connect SAB (Saudi Awal Bank) for streamlined cash management and reporting',
    setupTime: '1-2 days',
    features: ['SWIFT connectivity', 'Cash pooling', 'Trade finance', 'Corporate banking'],
    slug: 'sab'
  },
  {
    id: 'bsf',
    name: 'Banque Saudi Fransi',
    category: 'Bank',
    logo: '/assets/logos/bsf.svg',
    description: 'Integration with Banque Saudi Fransi for treasury operations and liquidity management',
    setupTime: '1-2 days',
    features: ['Account reporting', 'Payment processing', 'Trade services', 'Cash management'],
    slug: 'banque-saudi-fransi'
  },
  {
    id: 'anb',
    name: 'Arab National Bank',
    category: 'Bank',
    logo: '/assets/logos/anb.svg',
    description: 'Automated connectivity to Arab National Bank for cash visibility and payment operations',
    setupTime: '1-2 days',
    features: ['SWIFT MT940', 'Payment files', 'Balance aggregation', 'Transaction history'],
    slug: 'arab-national-bank'
  },
  {
    id: 'alinma',
    name: 'Alinma Bank',
    category: 'Bank',
    logo: '/assets/logos/alinma.svg',
    description: 'Connect Alinma Bank for Sharia-compliant treasury management and cash operations',
    setupTime: '1-2 days',
    features: ['Statement feeds', 'Payment processing', 'Islamic banking', 'Cash positioning'],
    slug: 'alinma-bank'
  },
  {
    id: 'baj',
    name: 'Bank AlJazira',
    category: 'Bank',
    logo: '/assets/logos/baj.svg',
    description: 'Integration with Bank AlJazira for corporate banking and treasury connectivity',
    setupTime: '1-2 days',
    features: ['Account reporting', 'Payment initiation', 'Trade finance', 'Multi-account'],
    slug: 'bank-aljazira'
  },

  // Emirates Banks
  {
    id: 'enbd',
    name: 'Emirates NBD',
    category: 'Bank',
    logo: '/assets/logos/enbd.svg',
    description: 'Direct connectivity to Emirates NBD for UAE and regional treasury operations',
    setupTime: '1-2 days',
    features: ['SWIFT messaging', 'API integration', 'Multi-currency', 'Real-time balances'],
    slug: 'emirates-nbd'
  },
  {
    id: 'adcb',
    name: 'Abu Dhabi Commercial Bank (ADCB)',
    category: 'Bank',
    logo: '/assets/logos/adcb.svg',
    description: 'Automated integration with ADCB for cash management and payment processing',
    setupTime: '1-2 days',
    features: ['Account aggregation', 'Payment files', 'Balance reporting', 'Cash pooling'],
    slug: 'adcb'
  },
  {
    id: 'fab',
    name: 'First Abu Dhabi Bank (FAB)',
    category: 'Bank',
    logo: '/assets/logos/fab.svg',
    description: 'Connect FAB for comprehensive treasury management across UAE operations',
    setupTime: '1-2 days',
    features: ['SWIFT connectivity', 'Trade finance', 'Cash management', 'FX services'],
    slug: 'first-abu-dhabi-bank'
  },
  {
    id: 'mashreq',
    name: 'Mashreq Bank',
    category: 'Bank',
    logo: '/assets/logos/mashreq.svg',
    description: 'Integration with Mashreq Bank for regional cash visibility and payment operations',
    setupTime: '1-2 days',
    features: ['Statement retrieval', 'Payment initiation', 'Multi-currency', 'Corporate banking'],
    slug: 'mashreq-bank'
  },
  {
    id: 'dib',
    name: 'Dubai Islamic Bank',
    category: 'Bank',
    logo: '/assets/logos/dib.svg',
    description: 'Connect Dubai Islamic Bank for Sharia-compliant treasury operations',
    setupTime: '1-2 days',
    features: ['Islamic banking', 'Statement feeds', 'Payment processing', 'Balance reporting'],
    slug: 'dubai-islamic-bank'
  },
];
