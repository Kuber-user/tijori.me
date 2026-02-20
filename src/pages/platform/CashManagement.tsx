import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup, { createProductSchema, createBreadcrumbSchema } from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import ProblemSolutionBlock from '../../components/platform/ProblemSolutionBlock';
import FeatureGrid from '../../components/platform/FeatureGrid';
import ScreenshotShowcase from '../../components/platform/ScreenshotShowcase';
import TechnicalSpecs from '../../components/platform/TechnicalSpecs';
import { openSupademo } from '../../utils/supademo';

export default function CashManagement() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('cashManagement.features.multiBankAggregation.title'),
      description: t('cashManagement.features.multiBankAggregation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('cashManagement.features.cashPositioning.title'),
      description: t('cashManagement.features.cashPositioning.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('cashManagement.features.varianceAnalysis.title'),
      description: t('cashManagement.features.varianceAnalysis.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('cashManagement.features.liquidityOptimization.title'),
      description: t('cashManagement.features.liquidityOptimization.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: t('cashManagement.features.cashPooling.title'),
      description: t('cashManagement.features.cashPooling.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: t('cashManagement.features.automatedReconciliation.title'),
      description: t('cashManagement.features.automatedReconciliation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('cashManagement.technicalSpecs.integrations.title'),
      items: [
        { label: t('cashManagement.technicalSpecs.integrations.items.supportedBanks.label'), value: t('cashManagement.technicalSpecs.integrations.items.supportedBanks.value') },
        { label: t('cashManagement.technicalSpecs.integrations.items.connectionMethods.label'), value: t('cashManagement.technicalSpecs.integrations.items.connectionMethods.value') },
        { label: t('cashManagement.technicalSpecs.integrations.items.statementFormats.label'), value: t('cashManagement.technicalSpecs.integrations.items.statementFormats.value') },
        { label: t('cashManagement.technicalSpecs.integrations.items.updateFrequency.label'), value: t('cashManagement.technicalSpecs.integrations.items.updateFrequency.value') }
      ]
    },
    {
      category: t('cashManagement.technicalSpecs.dataSecurity.title'),
      items: [
        { label: t('cashManagement.technicalSpecs.dataSecurity.items.dataEncryption.label'), value: t('cashManagement.technicalSpecs.dataSecurity.items.dataEncryption.value') },
        { label: t('cashManagement.technicalSpecs.dataSecurity.items.accessControl.label'), value: t('cashManagement.technicalSpecs.dataSecurity.items.accessControl.value') },
        { label: t('cashManagement.technicalSpecs.dataSecurity.items.auditTrail.label'), value: t('cashManagement.technicalSpecs.dataSecurity.items.auditTrail.value') },
        { label: t('cashManagement.technicalSpecs.dataSecurity.items.dataResidency.label'), value: t('cashManagement.technicalSpecs.dataSecurity.items.dataResidency.value') }
      ]
    },
    {
      category: t('cashManagement.technicalSpecs.reporting.title'),
      items: [
        { label: t('cashManagement.technicalSpecs.reporting.items.standardReports.label'), value: t('cashManagement.technicalSpecs.reporting.items.standardReports.value') },
        { label: t('cashManagement.technicalSpecs.reporting.items.customReports.label'), value: t('cashManagement.technicalSpecs.reporting.items.customReports.value') },
        { label: t('cashManagement.technicalSpecs.reporting.items.exportFormats.label'), value: t('cashManagement.technicalSpecs.reporting.items.exportFormats.value') },
        { label: t('cashManagement.technicalSpecs.reporting.items.scheduling.label'), value: t('cashManagement.technicalSpecs.reporting.items.scheduling.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'Synclane Cash Management',
    'Real-time cash visibility and liquidity management across all bank accounts'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Cash Management' }
  ]);

  return (
    <>
      <SEOHead
        title={t('cashManagement.seo.title')}
        description={t('cashManagement.seo.description')}
        keywords={t('cashManagement.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('cashManagement.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('cashManagement.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('cashManagement.hero.description')}
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
          title: t('cashManagement.problem.title'),
          description: t('cashManagement.problem.description'),
          painPoints: t('cashManagement.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('cashManagement.solution.title'),
          description: t('cashManagement.solution.description'),
          benefits: t('cashManagement.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('cashManagement.featuresSection.title')}
          description={t('cashManagement.featuresSection.description')}
        />
      </div>

      {/* Screenshots */}
      <ScreenshotShowcase
        title={t('cashManagement.screenshots.title')}
        layout="grid"
        buttonText={tCommon('buttons.explorePlatform')}
        onButtonClick={() => openSupademo(i18n.language)}
        images={[
          {
            src: '/assets/screenshots/Bank Balances.png',
            alt: t('cashManagement.screenshots.images.bankBalances.alt'),
            caption: t('cashManagement.screenshots.images.bankBalances.caption')
          },
          {
            src: '/assets/screenshots/Investments.png',
            alt: t('cashManagement.screenshots.images.investments.alt'),
            caption: t('cashManagement.screenshots.images.investments.caption')
          }
        ]}
      />

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('cashManagement.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('cashManagement.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('cashManagement.roi.metrics.idleCash.value'), label: t('cashManagement.roi.metrics.idleCash.label'), sublabel: t('cashManagement.roi.metrics.idleCash.sublabel') },
              { metric: t('cashManagement.roi.metrics.timeSaved.value'), label: t('cashManagement.roi.metrics.timeSaved.label'), sublabel: t('cashManagement.roi.metrics.timeSaved.sublabel') },
              { metric: t('cashManagement.roi.metrics.reconciliation.value'), label: t('cashManagement.roi.metrics.reconciliation.label'), sublabel: t('cashManagement.roi.metrics.reconciliation.sublabel') }
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
            <h2 className="text-white mb-4">{t('cashManagement.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('cashManagement.cta.description')}
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
