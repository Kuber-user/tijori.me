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

export default function RiskFX() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('riskFx.features.exposureTracking.title'),
      description: t('riskFx.features.exposureTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('riskFx.features.hedgingStrategies.title'),
      description: t('riskFx.features.hedgingStrategies.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: t('riskFx.features.riskAnalytics.title'),
      description: t('riskFx.features.riskAnalytics.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: t('riskFx.features.hedgeAccounting.title'),
      description: t('riskFx.features.hedgeAccounting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('riskFx.features.marketRates.title'),
      description: t('riskFx.features.marketRates.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: t('riskFx.features.regulatoryReporting.title'),
      description: t('riskFx.features.regulatoryReporting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('riskFx.technicalSpecs.instruments.title'),
      items: [
        { label: t('riskFx.technicalSpecs.instruments.items.spotForwards.label'), value: t('riskFx.technicalSpecs.instruments.items.spotForwards.value') },
        { label: t('riskFx.technicalSpecs.instruments.items.options.label'), value: t('riskFx.technicalSpecs.instruments.items.options.value') },
        { label: t('riskFx.technicalSpecs.instruments.items.swaps.label'), value: t('riskFx.technicalSpecs.instruments.items.swaps.value') },
        { label: t('riskFx.technicalSpecs.instruments.items.ndf.label'), value: t('riskFx.technicalSpecs.instruments.items.ndf.value') }
      ]
    },
    {
      category: t('riskFx.technicalSpecs.riskMetrics.title'),
      items: [
        { label: t('riskFx.technicalSpecs.riskMetrics.items.var.label'), value: t('riskFx.technicalSpecs.riskMetrics.items.var.value') },
        { label: t('riskFx.technicalSpecs.riskMetrics.items.sensitivity.label'), value: t('riskFx.technicalSpecs.riskMetrics.items.sensitivity.value') },
        { label: t('riskFx.technicalSpecs.riskMetrics.items.stressTesting.label'), value: t('riskFx.technicalSpecs.riskMetrics.items.stressTesting.value') },
        { label: t('riskFx.technicalSpecs.riskMetrics.items.backtesting.label'), value: t('riskFx.technicalSpecs.riskMetrics.items.backtesting.value') }
      ]
    },
    {
      category: t('riskFx.technicalSpecs.compliance.title'),
      items: [
        { label: t('riskFx.technicalSpecs.compliance.items.hedgeAccounting.label'), value: t('riskFx.technicalSpecs.compliance.items.hedgeAccounting.value') },
        { label: t('riskFx.technicalSpecs.compliance.items.regulatory.label'), value: t('riskFx.technicalSpecs.compliance.items.regulatory.value') },
        { label: t('riskFx.technicalSpecs.compliance.items.auditTrail.label'), value: t('riskFx.technicalSpecs.compliance.items.auditTrail.value') },
        { label: t('riskFx.technicalSpecs.compliance.items.reporting.label'), value: t('riskFx.technicalSpecs.compliance.items.reporting.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori Risk & FX Management',
    'Currency exposure tracking and FX risk management for treasury teams'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Risk & FX Management' }
  ]);

  return (
    <>
      <SEOHead
        title={t('riskFx.seo.title')}
        description={t('riskFx.seo.description')}
        keywords={t('riskFx.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('riskFx.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('riskFx.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('riskFx.hero.description')}
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
          title: t('riskFx.problem.title'),
          description: t('riskFx.problem.description'),
          painPoints: t('riskFx.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('riskFx.solution.title'),
          description: t('riskFx.solution.description'),
          benefits: t('riskFx.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('riskFx.featuresSection.title')}
          description={t('riskFx.featuresSection.description')}
        />
      </div>

      {/* Screenshot */}
      <ScreenshotShowcase
        title={t('riskFx.screenshots.title')}
        layout="single"
        images={[
          {
            src: '/assets/screenshots/Exposure.png',
            alt: t('riskFx.screenshots.images.exposure.alt'),
            caption: t('riskFx.screenshots.images.exposure.caption')
          }
        ]}
      />

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('riskFx.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('riskFx.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('riskFx.roi.metrics.fxCosts.value'), label: t('riskFx.roi.metrics.fxCosts.label'), sublabel: t('riskFx.roi.metrics.fxCosts.sublabel') },
              { metric: t('riskFx.roi.metrics.exposureVisibility.value'), label: t('riskFx.roi.metrics.exposureVisibility.label'), sublabel: t('riskFx.roi.metrics.exposureVisibility.sublabel') },
              { metric: t('riskFx.roi.metrics.hedgeEffectiveness.value'), label: t('riskFx.roi.metrics.hedgeEffectiveness.label'), sublabel: t('riskFx.roi.metrics.hedgeEffectiveness.sublabel') }
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

      {/* Workflow Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('riskFx.workflow.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('riskFx.workflow.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '1', key: 'identify' },
              { step: '2', key: 'analyze' },
              { step: '3', key: 'hedge' },
              { step: '4', key: 'document' },
              { step: '5', key: 'report' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full text-xl font-bold mb-3 ltr-nums">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{t(`riskFx.workflow.steps.${item.key}.title`)}</h4>
                <p className="text-gray-600 text-sm">{t(`riskFx.workflow.steps.${item.key}.description`)}</p>
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
            <h2 className="text-white mb-4">{t('riskFx.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('riskFx.cta.description')}
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
