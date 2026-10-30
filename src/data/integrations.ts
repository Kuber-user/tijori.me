import type { Integration } from '../types';

export const integrations: Integration[] = [
  // ERPs - Oracle, SAP and Microsoft Dynamics, plus any ERP via API or SFTP
  {
    id: 'oracle-fusion',
    name: 'Oracle Fusion Cloud',
    category: 'ERP',
    logo: '/assets/logos/oracle.svg',
    description: 'Native integration with Oracle Fusion ERP for treasury reconciliation, GL sync, and automated cash positioning across all modules',
    features: ['GL data sync', 'Cash Management module', 'Payment processing', 'Journal entry automation'],
    slug: 'oracle-fusion'
  },
  {
    id: 'oracle-ebs',
    name: 'Oracle E-Business Suite',
    category: 'ERP',
    logo: '/assets/logos/oracle.svg',
    description: 'Comprehensive integration with Oracle EBS for cash management, payables, receivables, and treasury operations',
    features: ['Oracle Cash Management', 'AP/AR integration', 'Multi-org support', 'Custom field mapping'],
    slug: 'oracle-ebs'
  },
  {
    id: 'sap-s4hana',
    name: 'SAP S/4HANA',
    category: 'ERP',
    logo: '/assets/logos/sap.svg',
    description: 'Real-time integration with SAP S/4HANA for treasury and cash operations with in-memory processing capabilities',
    features: ['SAP FI/CO integration', 'Treasury module sync', 'Multi-entity support', 'Real-time data flow'],
    slug: 'sap-s4hana'
  },
  {
    id: 'sap-ecc',
    name: 'SAP ECC',
    category: 'ERP',
    logo: '/assets/logos/sap.svg',
    description: 'Legacy SAP ECC integration for organizations managing treasury operations during S/4HANA transition',
    features: ['SAP Treasury module', 'GL data sync', 'Bank reconciliation', 'Payment processing'],
    slug: 'sap-ecc'
  },
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics 365',
    category: 'ERP',
    logo: '/assets/logos/dynamics.svg',
    description: 'Native Microsoft Dynamics 365 Finance integration for unified treasury operations',
    features: ['D365 Finance sync', 'Bank reconciliation', 'Cash flow forecasting', 'Multi-currency support'],
    slug: 'microsoft-dynamics'
  },
  {
    id: 'any-erp',
    name: 'Any ERP via API or SFTP',
    category: 'ERP',
    description: 'TiJori is ERP-agnostic: we connect to any ERP through APIs or SFTP file exchange',
    features: ['API integration', 'SFTP file exchange', 'GL and payment data sync'],
    slug: 'any-erp'
  },

  // Connectivity - SWIFT and Open Banking
  {
    id: 'swift',
    name: 'SWIFT Network',
    category: 'Bank',
    description: 'SWIFT connectivity through our partner’s SWIFTNet BIC to 30+ banks across the UAE, KSA, Turkey, Egypt and Pakistan',
    features: ['MT940 statements', 'MT942 intraday', 'MT101 payments'],
    slug: 'swift-network'
  },
  {
    id: 'bwatech',
    name: 'BWA Tech Open Banking',
    category: 'Bank',
    description: 'Open banking in KSA through our partner BWA Tech, covering most Saudi banks, so companies can transmit payments without manual file uploads',
    features: ['Payment transmission', 'Covers most KSA banks', 'No manual file uploads'],
    slug: 'bwa-tech'
  },

  // KSA direct B2B integrations
  {
    id: 'snb',
    name: 'Saudi National Bank (SNB)',
    category: 'Bank',
    description: 'Direct B2B integration with Saudi National Bank (Al Ahli), going live soon',
    setupTime: 'Going live soon',
    features: ['Direct B2B integration'],
    slug: 'saudi-national-bank'
  },
  {
    id: 'albilad',
    name: 'Bank Albilad',
    category: 'Bank',
    description: 'Direct B2B integration with Bank Albilad, going live soon',
    setupTime: 'Going live soon',
    features: ['Direct B2B integration'],
    slug: 'bank-albilad'
  },

  // Banks connected via SWIFT
  {
    id: 'fab',
    name: 'First Abu Dhabi Bank (FAB)',
    category: 'Bank',
    description: 'UAE · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'fab'
  },
  {
    id: 'enbd',
    name: 'Emirates NBD',
    category: 'Bank',
    description: 'UAE · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'enbd'
  },
  {
    id: 'adcb',
    name: 'Abu Dhabi Commercial Bank (ADCB)',
    category: 'Bank',
    description: 'UAE · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'adcb'
  },
  {
    id: 'adib',
    name: 'Abu Dhabi Islamic Bank (ADIB)',
    category: 'Bank',
    description: 'UAE · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'adib'
  },
  {
    id: 'mashreq',
    name: 'Mashreq Bank',
    category: 'Bank',
    description: 'UAE · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'mashreq'
  },
  {
    id: 'alinma',
    name: 'Alinma Bank',
    category: 'Bank',
    description: 'KSA · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'alinma'
  },
  {
    id: 'qnb',
    name: 'QNB',
    category: 'Bank',
    description: 'Qatar · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'qnb'
  },
  {
    id: 'nbk',
    name: 'National Bank of Kuwait (NBK)',
    category: 'Bank',
    description: 'Kuwait · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'nbk'
  },
  {
    id: 'abk',
    name: 'Al Ahli Bank of Kuwait (ABK)',
    category: 'Bank',
    description: 'Kuwait · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'abk'
  },
  {
    id: 'aub',
    name: 'Ahli United Bank (AUB)',
    category: 'Bank',
    description: 'Bahrain · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'aub'
  },
  {
    id: 'bank-abc',
    name: 'Bank ABC',
    category: 'Bank',
    description: 'Bahrain · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'bank-abc'
  },
  {
    id: 'cib',
    name: 'Commercial International Bank (CIB)',
    category: 'Bank',
    description: 'Egypt · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'cib'
  },
  {
    id: 'banque-misr',
    name: 'Banque Misr',
    category: 'Bank',
    description: 'Egypt · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'banque-misr'
  },
  {
    id: 'aaib',
    name: 'Arab African International Bank (AAIB)',
    category: 'Bank',
    description: 'Egypt · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'aaib'
  },
  {
    id: 'attijariwafa',
    name: 'Attijariwafa Bank',
    category: 'Bank',
    description: 'Morocco · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'attijariwafa'
  },
  {
    id: 'akbank',
    name: 'Akbank',
    category: 'Bank',
    description: 'Turkey · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'akbank'
  },
  {
    id: 'garanti',
    name: 'Garanti BBVA',
    category: 'Bank',
    description: 'Turkey · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'garanti'
  },
  {
    id: 'teb',
    name: 'TEB',
    category: 'Bank',
    description: 'Turkey · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'teb'
  },
  {
    id: 'ziraat',
    name: 'Ziraat Bankası',
    category: 'Bank',
    description: 'Turkey · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'ziraat'
  },
  {
    id: 'vakifbank',
    name: 'VakıfBank',
    category: 'Bank',
    description: 'Turkey · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'vakifbank'
  },
  {
    id: 'halkbank',
    name: 'Halkbank',
    category: 'Bank',
    description: 'Turkey · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'halkbank'
  },
  {
    id: 'hbl',
    name: 'Habib Bank Limited (HBL)',
    category: 'Bank',
    description: 'Pakistan · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'hbl'
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    category: 'Bank',
    description: 'India · Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'kotak'
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'hsbc'
  },
  {
    id: 'citi',
    name: 'Citi',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'citi'
  },
  {
    id: 'scb',
    name: 'Standard Chartered',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'scb'
  },
  {
    id: 'bnp',
    name: 'BNP Paribas',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'bnp'
  },
  {
    id: 'julius-baer',
    name: 'Julius Baer',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'julius-baer'
  },
  {
    id: 'safra-sarasin',
    name: 'J. Safra Sarasin',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'safra-sarasin'
  },
  {
    id: 'bank-of-baroda',
    name: 'Bank of Baroda',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'bank-of-baroda'
  },
  {
    id: 'santander',
    name: 'Santander',
    category: 'Bank',
    description: 'Connected via SWIFT. Statements and balances flow into TiJori automatically',
    features: ['SWIFT MT940 statements', 'Balance reporting'],
    slug: 'santander'
  },
];
