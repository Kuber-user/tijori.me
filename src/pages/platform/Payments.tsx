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

export default function Payments() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('payments.features.multiBankPayments.title'),
      description: t('payments.features.multiBankPayments.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('payments.features.approvalWorkflows.title'),
      description: t('payments.features.approvalWorkflows.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('payments.features.paymentTemplates.title'),
      description: t('payments.features.paymentTemplates.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: t('payments.features.bulkPayments.title'),
      description: t('payments.features.bulkPayments.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: t('payments.features.paymentTracking.title'),
      description: t('payments.features.paymentTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t('payments.features.fraudPrevention.title'),
      description: t('payments.features.fraudPrevention.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('payments.technicalSpecs.paymentTypes.title'),
      items: [
        { label: t('payments.technicalSpecs.paymentTypes.items.domestic.label'), value: t('payments.technicalSpecs.paymentTypes.items.domestic.value') },
        { label: t('payments.technicalSpecs.paymentTypes.items.international.label'), value: t('payments.technicalSpecs.paymentTypes.items.international.value') },
        { label: t('payments.technicalSpecs.paymentTypes.items.bulk.label'), value: t('payments.technicalSpecs.paymentTypes.items.bulk.value') },
        { label: t('payments.technicalSpecs.paymentTypes.items.intercompany.label'), value: t('payments.technicalSpecs.paymentTypes.items.intercompany.value') }
      ]
    },
    {
      category: t('payments.technicalSpecs.connectivity.title'),
      items: [
        { label: t('payments.technicalSpecs.connectivity.items.bankChannels.label'), value: t('payments.technicalSpecs.connectivity.items.bankChannels.value') },
        { label: t('payments.technicalSpecs.connectivity.items.formats.label'), value: t('payments.technicalSpecs.connectivity.items.formats.value') },
        { label: t('payments.technicalSpecs.connectivity.items.integration.label'), value: t('payments.technicalSpecs.connectivity.items.integration.value') },
        { label: t('payments.technicalSpecs.connectivity.items.realtime.label'), value: t('payments.technicalSpecs.connectivity.items.realtime.value') }
      ]
    },
    {
      category: t('payments.technicalSpecs.security.title'),
      items: [
        { label: t('payments.technicalSpecs.security.items.authentication.label'), value: t('payments.technicalSpecs.security.items.authentication.value') },
        { label: t('payments.technicalSpecs.security.items.authorization.label'), value: t('payments.technicalSpecs.security.items.authorization.value') },
        { label: t('payments.technicalSpecs.security.items.validation.label'), value: t('payments.technicalSpecs.security.items.validation.value') },
        { label: t('payments.technicalSpecs.security.items.auditTrail.label'), value: t('payments.technicalSpecs.security.items.auditTrail.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori Payment Hub',
    'Global payment orchestration platform for multi-bank payment management'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Payment Hub' }
  ]);

  return (
    <>
      <SEOHead
        title={t('payments.seo.title')}
        description={t('payments.seo.description')}
        keywords={t('payments.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('payments.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('payments.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('payments.hero.description')}
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
          title: t('payments.problem.title'),
          description: t('payments.problem.description'),
          painPoints: t('payments.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('payments.solution.title'),
          description: t('payments.solution.description'),
          benefits: t('payments.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('payments.featuresSection.title')}
          description={t('payments.featuresSection.description')}
        />
      </div>

      {/* Screenshots */}
      <ScreenshotShowcase
        title="See Payment Hub in Action"
        layout="grid"
        images={[
          {
            src: '/assets/screenshots/Payments Transmission.png',
            alt: 'Payment transmission dashboard with multi-bank view',
            caption: 'Initiate and track payments across all your banks from one dashboard'
          },
          {
            src: '/assets/screenshots/Settlements.png',
            alt: 'Payment settlements and reconciliation screen',
            caption: 'Real-time settlement tracking and automated reconciliation'
          }
        ]}
      />

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('payments.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('payments.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('payments.roi.metrics.processingTime.value'), label: t('payments.roi.metrics.processingTime.label'), sublabel: t('payments.roi.metrics.processingTime.sublabel') },
              { metric: t('payments.roi.metrics.paymentErrors.value'), label: t('payments.roi.metrics.paymentErrors.label'), sublabel: t('payments.roi.metrics.paymentErrors.sublabel') },
              { metric: t('payments.roi.metrics.costSavings.value'), label: t('payments.roi.metrics.costSavings.label'), sublabel: t('payments.roi.metrics.costSavings.sublabel') }
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
            <h2 className="text-white mb-4">{t('payments.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('payments.cta.description')}
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
