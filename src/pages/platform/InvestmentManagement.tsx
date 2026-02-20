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

export default function InvestmentManagement() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('investmentManagement.features.portfolioTracking.title'),
      description: t('investmentManagement.features.portfolioTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('investmentManagement.features.yieldOptimization.title'),
      description: t('investmentManagement.features.yieldOptimization.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: t('investmentManagement.features.maturityManagement.title'),
      description: t('investmentManagement.features.maturityManagement.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('investmentManagement.features.riskAssessment.title'),
      description: t('investmentManagement.features.riskAssessment.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('investmentManagement.features.performanceAnalytics.title'),
      description: t('investmentManagement.features.performanceAnalytics.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('investmentManagement.features.policyCompliance.title'),
      description: t('investmentManagement.features.policyCompliance.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('investmentManagement.technicalSpecs.investmentTypes.title'),
      items: [
        { label: t('investmentManagement.technicalSpecs.investmentTypes.items.instruments.label'), value: t('investmentManagement.technicalSpecs.investmentTypes.items.instruments.value') },
        { label: t('investmentManagement.technicalSpecs.investmentTypes.items.multiCurrency.label'), value: t('investmentManagement.technicalSpecs.investmentTypes.items.multiCurrency.value') },
        { label: t('investmentManagement.technicalSpecs.investmentTypes.items.pricingSources.label'), value: t('investmentManagement.technicalSpecs.investmentTypes.items.pricingSources.value') },
        { label: t('investmentManagement.technicalSpecs.investmentTypes.items.accountingStandards.label'), value: t('investmentManagement.technicalSpecs.investmentTypes.items.accountingStandards.value') }
      ]
    },
    {
      category: t('investmentManagement.technicalSpecs.riskCompliance.title'),
      items: [
        { label: t('investmentManagement.technicalSpecs.riskCompliance.items.counterpartyLimits.label'), value: t('investmentManagement.technicalSpecs.riskCompliance.items.counterpartyLimits.value') },
        { label: t('investmentManagement.technicalSpecs.riskCompliance.items.concentrationLimits.label'), value: t('investmentManagement.technicalSpecs.riskCompliance.items.concentrationLimits.value') },
        { label: t('investmentManagement.technicalSpecs.riskCompliance.items.policyEngine.label'), value: t('investmentManagement.technicalSpecs.riskCompliance.items.policyEngine.value') },
        { label: t('investmentManagement.technicalSpecs.riskCompliance.items.regulatory.label'), value: t('investmentManagement.technicalSpecs.riskCompliance.items.regulatory.value') }
      ]
    },
    {
      category: t('investmentManagement.technicalSpecs.reporting.title'),
      items: [
        { label: t('investmentManagement.technicalSpecs.reporting.items.performanceReports.label'), value: t('investmentManagement.technicalSpecs.reporting.items.performanceReports.value') },
        { label: t('investmentManagement.technicalSpecs.reporting.items.benchmarking.label'), value: t('investmentManagement.technicalSpecs.reporting.items.benchmarking.value') },
        { label: t('investmentManagement.technicalSpecs.reporting.items.auditTrail.label'), value: t('investmentManagement.technicalSpecs.reporting.items.auditTrail.value') },
        { label: t('investmentManagement.technicalSpecs.reporting.items.exportFormats.label'), value: t('investmentManagement.technicalSpecs.reporting.items.exportFormats.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori Investment Management',
    'Portfolio tracking, maturity management, and yield optimization across instruments'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Investment Management' }
  ]);

  return (
    <>
      <SEOHead
        title={t('investmentManagement.seo.title')}
        description={t('investmentManagement.seo.description')}
        keywords={t('investmentManagement.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('investmentManagement.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('investmentManagement.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('investmentManagement.hero.description')}
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
          title: t('investmentManagement.problem.title'),
          description: t('investmentManagement.problem.description'),
          painPoints: t('investmentManagement.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('investmentManagement.solution.title'),
          description: t('investmentManagement.solution.description'),
          benefits: t('investmentManagement.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('investmentManagement.featuresSection.title')}
          description={t('investmentManagement.featuresSection.description')}
        />
      </div>

      {/* Screenshot */}
      <ScreenshotShowcase
        title={t('investmentManagement.screenshots.title')}
        layout="single"
        images={[
          {
            src: '/assets/screenshots/Investments.png',
            alt: t('investmentManagement.screenshots.images.portfolio.alt'),
            caption: t('investmentManagement.screenshots.images.portfolio.caption')
          }
        ]}
      />

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('investmentManagement.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('investmentManagement.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('investmentManagement.roi.metrics.portfolioYield.value'), label: t('investmentManagement.roi.metrics.portfolioYield.label'), sublabel: t('investmentManagement.roi.metrics.portfolioYield.sublabel') },
              { metric: t('investmentManagement.roi.metrics.policyCompliance.value'), label: t('investmentManagement.roi.metrics.policyCompliance.label'), sublabel: t('investmentManagement.roi.metrics.policyCompliance.sublabel') },
              { metric: t('investmentManagement.roi.metrics.timeSaved.value'), label: t('investmentManagement.roi.metrics.timeSaved.label'), sublabel: t('investmentManagement.roi.metrics.timeSaved.sublabel') }
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
            <h2 className="text-white mb-4">{t('investmentManagement.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('investmentManagement.cta.description')}
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
