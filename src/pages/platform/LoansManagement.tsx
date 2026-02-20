import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup, { createProductSchema, createBreadcrumbSchema } from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import ProblemSolutionBlock from '../../components/platform/ProblemSolutionBlock';
import FeatureGrid from '../../components/platform/FeatureGrid';
import TechnicalSpecs from '../../components/platform/TechnicalSpecs';

export default function LoansManagement() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('loansManagement.features.loanLifecycle.title'),
      description: t('loansManagement.features.loanLifecycle.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: t('loansManagement.features.facilityTracking.title'),
      description: t('loansManagement.features.facilityTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('loansManagement.features.maturityAlerts.title'),
      description: t('loansManagement.features.maturityAlerts.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: t('loansManagement.features.covenantMonitoring.title'),
      description: t('loansManagement.features.covenantMonitoring.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('loansManagement.features.interestRateManagement.title'),
      description: t('loansManagement.features.interestRateManagement.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: t('loansManagement.features.repaymentScheduling.title'),
      description: t('loansManagement.features.repaymentScheduling.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('loansManagement.technicalSpecs.loanTypes.title'),
      items: [
        { label: t('loansManagement.technicalSpecs.loanTypes.items.supportedInstruments.label'), value: t('loansManagement.technicalSpecs.loanTypes.items.supportedInstruments.value') },
        { label: t('loansManagement.technicalSpecs.loanTypes.items.rateTypes.label'), value: t('loansManagement.technicalSpecs.loanTypes.items.rateTypes.value') },
        { label: t('loansManagement.technicalSpecs.loanTypes.items.multiCurrency.label'), value: t('loansManagement.technicalSpecs.loanTypes.items.multiCurrency.value') },
        { label: t('loansManagement.technicalSpecs.loanTypes.items.amortization.label'), value: t('loansManagement.technicalSpecs.loanTypes.items.amortization.value') }
      ]
    },
    {
      category: t('loansManagement.technicalSpecs.complianceReporting.title'),
      items: [
        { label: t('loansManagement.technicalSpecs.complianceReporting.items.covenantTypes.label'), value: t('loansManagement.technicalSpecs.complianceReporting.items.covenantTypes.value') },
        { label: t('loansManagement.technicalSpecs.complianceReporting.items.regulatoryReporting.label'), value: t('loansManagement.technicalSpecs.complianceReporting.items.regulatoryReporting.value') },
        { label: t('loansManagement.technicalSpecs.complianceReporting.items.auditTrail.label'), value: t('loansManagement.technicalSpecs.complianceReporting.items.auditTrail.value') },
        { label: t('loansManagement.technicalSpecs.complianceReporting.items.exportFormats.label'), value: t('loansManagement.technicalSpecs.complianceReporting.items.exportFormats.value') }
      ]
    },
    {
      category: t('loansManagement.technicalSpecs.integration.title'),
      items: [
        { label: t('loansManagement.technicalSpecs.integration.items.bankConnectivity.label'), value: t('loansManagement.technicalSpecs.integration.items.bankConnectivity.value') },
        { label: t('loansManagement.technicalSpecs.integration.items.erpSync.label'), value: t('loansManagement.technicalSpecs.integration.items.erpSync.value') },
        { label: t('loansManagement.technicalSpecs.integration.items.glPosting.label'), value: t('loansManagement.technicalSpecs.integration.items.glPosting.value') },
        { label: t('loansManagement.technicalSpecs.integration.items.dataUpdates.label'), value: t('loansManagement.technicalSpecs.integration.items.dataUpdates.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori Loans Management',
    'End-to-end loan lifecycle management from origination to maturity tracking'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Loans Management' }
  ]);

  return (
    <>
      <SEOHead
        title={t('loansManagement.seo.title')}
        description={t('loansManagement.seo.description')}
        keywords={t('loansManagement.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('loansManagement.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('loansManagement.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('loansManagement.hero.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button variant="secondary" size="lg" href="/company/contact">
                {tCommon('buttons.requestDemo')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#features"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {tCommon('buttons.exploreFeatures')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem → Solution */}
      <ProblemSolutionBlock
        problem={{
          title: t('loansManagement.problem.title'),
          description: t('loansManagement.problem.description'),
          painPoints: t('loansManagement.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('loansManagement.solution.title'),
          description: t('loansManagement.solution.description'),
          benefits: t('loansManagement.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('loansManagement.featuresSection.title')}
          description={t('loansManagement.featuresSection.description')}
        />
      </div>

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('loansManagement.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('loansManagement.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('loansManagement.roi.metrics.covenantCompliance.value'), label: t('loansManagement.roi.metrics.covenantCompliance.label'), sublabel: t('loansManagement.roi.metrics.covenantCompliance.sublabel') },
              { metric: t('loansManagement.roi.metrics.borrowingCosts.value'), label: t('loansManagement.roi.metrics.borrowingCosts.label'), sublabel: t('loansManagement.roi.metrics.borrowingCosts.sublabel') },
              { metric: t('loansManagement.roi.metrics.missedDeadlines.value'), label: t('loansManagement.roi.metrics.missedDeadlines.label'), sublabel: t('loansManagement.roi.metrics.missedDeadlines.sublabel') }
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl font-bold text-gradient mb-2 ltr-nums">{stat.metric}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Specs */}
      <TechnicalSpecs specs={technicalSpecs} />

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">{t('loansManagement.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('loansManagement.cta.description')}
            </p>
            <Button variant="secondary" size="lg" href="/company/contact">
              {tCommon('buttons.requestDemo')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
