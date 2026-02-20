import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup, { createProductSchema, createBreadcrumbSchema } from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import ProblemSolutionBlock from '../../components/platform/ProblemSolutionBlock';
import FeatureGrid from '../../components/platform/FeatureGrid';
import TechnicalSpecs from '../../components/platform/TechnicalSpecs';

export default function LGLCManagement() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('lgLc.features.lifecycleTracking.title'),
      description: t('lgLc.features.lifecycleTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: t('lgLc.features.expiryAlerts.title'),
      description: t('lgLc.features.expiryAlerts.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: t('lgLc.features.renewalManagement.title'),
      description: t('lgLc.features.renewalManagement.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('lgLc.features.feeTracking.title'),
      description: t('lgLc.features.feeTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('lgLc.features.exposureReporting.title'),
      description: t('lgLc.features.exposureReporting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: t('lgLc.features.documentManagement.title'),
      description: t('lgLc.features.documentManagement.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('lgLc.technicalSpecs.instrumentTypes.title'),
      items: [
        { label: t('lgLc.technicalSpecs.instrumentTypes.items.lg.label'), value: t('lgLc.technicalSpecs.instrumentTypes.items.lg.value') },
        { label: t('lgLc.technicalSpecs.instrumentTypes.items.lc.label'), value: t('lgLc.technicalSpecs.instrumentTypes.items.lc.value') },
        { label: t('lgLc.technicalSpecs.instrumentTypes.items.sblc.label'), value: t('lgLc.technicalSpecs.instrumentTypes.items.sblc.value') },
        { label: t('lgLc.technicalSpecs.instrumentTypes.items.bankGuarantees.label'), value: t('lgLc.technicalSpecs.instrumentTypes.items.bankGuarantees.value') }
      ]
    },
    {
      category: t('lgLc.technicalSpecs.tracking.title'),
      items: [
        { label: t('lgLc.technicalSpecs.tracking.items.lifecycle.label'), value: t('lgLc.technicalSpecs.tracking.items.lifecycle.value') },
        { label: t('lgLc.technicalSpecs.tracking.items.amendments.label'), value: t('lgLc.technicalSpecs.tracking.items.amendments.value') },
        { label: t('lgLc.technicalSpecs.tracking.items.documents.label'), value: t('lgLc.technicalSpecs.tracking.items.documents.value') },
        { label: t('lgLc.technicalSpecs.tracking.items.beneficiaries.label'), value: t('lgLc.technicalSpecs.tracking.items.beneficiaries.value') }
      ]
    },
    {
      category: t('lgLc.technicalSpecs.reporting.title'),
      items: [
        { label: t('lgLc.technicalSpecs.reporting.items.exposure.label'), value: t('lgLc.technicalSpecs.reporting.items.exposure.value') },
        { label: t('lgLc.technicalSpecs.reporting.items.aging.label'), value: t('lgLc.technicalSpecs.reporting.items.aging.value') },
        { label: t('lgLc.technicalSpecs.reporting.items.costs.label'), value: t('lgLc.technicalSpecs.reporting.items.costs.value') },
        { label: t('lgLc.technicalSpecs.reporting.items.audit.label'), value: t('lgLc.technicalSpecs.reporting.items.audit.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori LG/LC Management',
    'Letter of Guarantee and Letter of Credit lifecycle management and tracking'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'LG/LC Management' }
  ]);

  return (
    <>
      <SEOHead
        title={t('lgLc.seo.title')}
        description={t('lgLc.seo.description')}
        keywords={t('lgLc.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('lgLc.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('lgLc.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('lgLc.hero.description')}
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
          title: t('lgLc.problem.title'),
          description: t('lgLc.problem.description'),
          painPoints: t('lgLc.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('lgLc.solution.title'),
          description: t('lgLc.solution.description'),
          benefits: t('lgLc.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('lgLc.featuresSection.title')}
          description={t('lgLc.featuresSection.description')}
        />
      </div>

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('lgLc.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('lgLc.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('lgLc.roi.metrics.visibility.value'), label: t('lgLc.roi.metrics.visibility.label'), sublabel: t('lgLc.roi.metrics.visibility.sublabel') },
              { metric: t('lgLc.roi.metrics.missedExpiries.value'), label: t('lgLc.roi.metrics.missedExpiries.label'), sublabel: t('lgLc.roi.metrics.missedExpiries.sublabel') },
              { metric: t('lgLc.roi.metrics.processingTime.value'), label: t('lgLc.roi.metrics.processingTime.label'), sublabel: t('lgLc.roi.metrics.processingTime.sublabel') }
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
            <h2 className="text-white mb-4">{t('lgLc.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('lgLc.cta.description')}
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
