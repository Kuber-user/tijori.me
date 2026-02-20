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

export default function AIForecasting() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('aiForecasting.features.mlModels.title'),
      description: t('aiForecasting.features.mlModels.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('aiForecasting.features.scenarioPlanning.title'),
      description: t('aiForecasting.features.scenarioPlanning.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('aiForecasting.features.varianceAnalysis.title'),
      description: t('aiForecasting.features.varianceAnalysis.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('aiForecasting.features.arApIntelligence.title'),
      description: t('aiForecasting.features.arApIntelligence.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t('aiForecasting.features.rollingForecasts.title'),
      description: t('aiForecasting.features.rollingForecasts.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: t('aiForecasting.features.configurableParams.title'),
      description: t('aiForecasting.features.configurableParams.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('aiForecasting.technicalSpecs.forecastingModels.title'),
      items: [
        { label: t('aiForecasting.technicalSpecs.forecastingModels.items.algorithms.label'), value: t('aiForecasting.technicalSpecs.forecastingModels.items.algorithms.value') },
        { label: t('aiForecasting.technicalSpecs.forecastingModels.items.trainingData.label'), value: t('aiForecasting.technicalSpecs.forecastingModels.items.trainingData.value') },
        { label: t('aiForecasting.technicalSpecs.forecastingModels.items.accuracyRate.label'), value: t('aiForecasting.technicalSpecs.forecastingModels.items.accuracyRate.value') },
        { label: t('aiForecasting.technicalSpecs.forecastingModels.items.horizons.label'), value: t('aiForecasting.technicalSpecs.forecastingModels.items.horizons.value') }
      ]
    },
    {
      category: t('aiForecasting.technicalSpecs.dataSources.title'),
      items: [
        { label: t('aiForecasting.technicalSpecs.dataSources.items.bankData.label'), value: t('aiForecasting.technicalSpecs.dataSources.items.bankData.value') },
        { label: t('aiForecasting.technicalSpecs.dataSources.items.erpData.label'), value: t('aiForecasting.technicalSpecs.dataSources.items.erpData.value') },
        { label: t('aiForecasting.technicalSpecs.dataSources.items.externalFactors.label'), value: t('aiForecasting.technicalSpecs.dataSources.items.externalFactors.value') },
        { label: t('aiForecasting.technicalSpecs.dataSources.items.updateFrequency.label'), value: t('aiForecasting.technicalSpecs.dataSources.items.updateFrequency.value') }
      ]
    },
    {
      category: t('aiForecasting.technicalSpecs.outputsReporting.title'),
      items: [
        { label: t('aiForecasting.technicalSpecs.outputsReporting.items.forecastViews.label'), value: t('aiForecasting.technicalSpecs.outputsReporting.items.forecastViews.value') },
        { label: t('aiForecasting.technicalSpecs.outputsReporting.items.varianceReports.label'), value: t('aiForecasting.technicalSpecs.outputsReporting.items.varianceReports.value') },
        { label: t('aiForecasting.technicalSpecs.outputsReporting.items.scenarioExport.label'), value: t('aiForecasting.technicalSpecs.outputsReporting.items.scenarioExport.value') },
        { label: t('aiForecasting.technicalSpecs.outputsReporting.items.alerts.label'), value: t('aiForecasting.technicalSpecs.outputsReporting.items.alerts.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori AI Cash Forecasting',
    'ML-powered cash flow forecasting with 95%+ accuracy for proactive liquidity planning'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'AI Cash Forecasting' }
  ]);

  return (
    <>
      <SEOHead
        title={t('aiForecasting.seo.title')}
        description={t('aiForecasting.seo.description')}
        keywords={t('aiForecasting.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('aiForecasting.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('aiForecasting.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('aiForecasting.hero.description')}
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
                {t('aiForecasting.hero.seeHowItWorks')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem → Solution */}
      <ProblemSolutionBlock
        problem={{
          title: t('aiForecasting.problem.title'),
          description: t('aiForecasting.problem.description'),
          painPoints: t('aiForecasting.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('aiForecasting.solution.title'),
          description: t('aiForecasting.solution.description'),
          benefits: t('aiForecasting.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('aiForecasting.featuresSection.title')}
          description={t('aiForecasting.featuresSection.description')}
        />
      </div>

      {/* Screenshots */}
      <ScreenshotShowcase
        title={t('aiForecasting.screenshots.title')}
        layout="grid"
        images={[
          {
            src: '/assets/screenshots/Forecast.png',
            alt: t('aiForecasting.screenshots.images.forecast.alt'),
            caption: t('aiForecasting.screenshots.images.forecast.caption')
          },
          {
            src: '/assets/screenshots/Forecast Parameters.png',
            alt: t('aiForecasting.screenshots.images.parameters.alt'),
            caption: t('aiForecasting.screenshots.images.parameters.caption')
          }
        ]}
      />

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('aiForecasting.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('aiForecasting.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('aiForecasting.roi.metrics.accuracy.value'), label: t('aiForecasting.roi.metrics.accuracy.label'), sublabel: t('aiForecasting.roi.metrics.accuracy.sublabel') },
              { metric: t('aiForecasting.roi.metrics.cashBuffer.value'), label: t('aiForecasting.roi.metrics.cashBuffer.label'), sublabel: t('aiForecasting.roi.metrics.cashBuffer.sublabel') },
              { metric: t('aiForecasting.roi.metrics.timeSaved.value'), label: t('aiForecasting.roi.metrics.timeSaved.label'), sublabel: t('aiForecasting.roi.metrics.timeSaved.sublabel') }
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

      {/* How It Works */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('aiForecasting.howItWorks.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('aiForecasting.howItWorks.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', key: 'dataIngestion' },
              { step: '2', key: 'patternRecognition' },
              { step: '3', key: 'modelTraining' },
              { step: '4', key: 'continuousLearning' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl mb-2">{t(`aiForecasting.howItWorks.steps.${item.key}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`aiForecasting.howItWorks.steps.${item.key}.description`)}</p>
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
            <h2 className="text-white mb-4">{t('aiForecasting.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('aiForecasting.cta.description')}
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
