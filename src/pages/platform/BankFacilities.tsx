import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import SchemaMarkup, { createProductSchema, createBreadcrumbSchema } from '../../components/seo/SchemaMarkup';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import ProblemSolutionBlock from '../../components/platform/ProblemSolutionBlock';
import FeatureGrid from '../../components/platform/FeatureGrid';
import TechnicalSpecs from '../../components/platform/TechnicalSpecs';

export default function BankFacilities() {
  const { t, i18n } = useTranslation('platform');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('bankFacilities.features.facilityOverview.title'),
      description: t('bankFacilities.features.facilityOverview.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('bankFacilities.features.utilizationTracking.title'),
      description: t('bankFacilities.features.utilizationTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('bankFacilities.features.covenantMonitoring.title'),
      description: t('bankFacilities.features.covenantMonitoring.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('bankFacilities.features.feeTracking.title'),
      description: t('bankFacilities.features.feeTracking.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('bankFacilities.features.renewalManagement.title'),
      description: t('bankFacilities.features.renewalManagement.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('bankFacilities.features.bankRelationshipScoring.title'),
      description: t('bankFacilities.features.bankRelationshipScoring.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  const technicalSpecs = [
    {
      category: t('bankFacilities.technicalSpecs.facilityTypes.title'),
      items: [
        { label: t('bankFacilities.technicalSpecs.facilityTypes.items.creditLines.label'), value: t('bankFacilities.technicalSpecs.facilityTypes.items.creditLines.value') },
        { label: t('bankFacilities.technicalSpecs.facilityTypes.items.termFacilities.label'), value: t('bankFacilities.technicalSpecs.facilityTypes.items.termFacilities.value') },
        { label: t('bankFacilities.technicalSpecs.facilityTypes.items.workingCapital.label'), value: t('bankFacilities.technicalSpecs.facilityTypes.items.workingCapital.value') },
        { label: t('bankFacilities.technicalSpecs.facilityTypes.items.specialized.label'), value: t('bankFacilities.technicalSpecs.facilityTypes.items.specialized.value') }
      ]
    },
    {
      category: t('bankFacilities.technicalSpecs.covenantTypes.title'),
      items: [
        { label: t('bankFacilities.technicalSpecs.covenantTypes.items.financialRatios.label'), value: t('bankFacilities.technicalSpecs.covenantTypes.items.financialRatios.value') },
        { label: t('bankFacilities.technicalSpecs.covenantTypes.items.liquidityMetrics.label'), value: t('bankFacilities.technicalSpecs.covenantTypes.items.liquidityMetrics.value') },
        { label: t('bankFacilities.technicalSpecs.covenantTypes.items.balanceSheet.label'), value: t('bankFacilities.technicalSpecs.covenantTypes.items.balanceSheet.value') },
        { label: t('bankFacilities.technicalSpecs.covenantTypes.items.cashFlow.label'), value: t('bankFacilities.technicalSpecs.covenantTypes.items.cashFlow.value') }
      ]
    },
    {
      category: t('bankFacilities.technicalSpecs.reportingIntegration.title'),
      items: [
        { label: t('bankFacilities.technicalSpecs.reportingIntegration.items.bankConnectivity.label'), value: t('bankFacilities.technicalSpecs.reportingIntegration.items.bankConnectivity.value') },
        { label: t('bankFacilities.technicalSpecs.reportingIntegration.items.erpIntegration.label'), value: t('bankFacilities.technicalSpecs.reportingIntegration.items.erpIntegration.value') },
        { label: t('bankFacilities.technicalSpecs.reportingIntegration.items.complianceReports.label'), value: t('bankFacilities.technicalSpecs.reportingIntegration.items.complianceReports.value') },
        { label: t('bankFacilities.technicalSpecs.reportingIntegration.items.auditTrail.label'), value: t('bankFacilities.technicalSpecs.reportingIntegration.items.auditTrail.value') }
      ]
    }
  ];

  const productSchema = createProductSchema(
    'TiJori Bank Facilities Management',
    'Track and manage bank credit facilities, utilization rates, and covenant compliance'
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Platform', item: '/platform' },
    { name: 'Bank Facilities Management' }
  ]);

  return (
    <>
      <SEOHead
        title={t('bankFacilities.seo.title')}
        description={t('bankFacilities.seo.description')}
        keywords={t('bankFacilities.seo.keywords', { returnObjects: true }) as string[]}
      />
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('bankFacilities.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('bankFacilities.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('bankFacilities.hero.description')}
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
          title: t('bankFacilities.problem.title'),
          description: t('bankFacilities.problem.description'),
          painPoints: t('bankFacilities.problem.painPoints', { returnObjects: true }) as string[]
        }}
        solution={{
          title: t('bankFacilities.solution.title'),
          description: t('bankFacilities.solution.description'),
          benefits: t('bankFacilities.solution.benefits', { returnObjects: true }) as string[]
        }}
      />

      {/* Features */}
      <div id="features">
        <FeatureGrid
          features={features}
          title={t('bankFacilities.featuresSection.title')}
          description={t('bankFacilities.featuresSection.description')}
        />
      </div>

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('bankFacilities.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('bankFacilities.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: t('bankFacilities.roi.metrics.facilityCosts.value'), label: t('bankFacilities.roi.metrics.facilityCosts.label'), sublabel: t('bankFacilities.roi.metrics.facilityCosts.sublabel') },
              { metric: t('bankFacilities.roi.metrics.covenantBreaches.value'), label: t('bankFacilities.roi.metrics.covenantBreaches.label'), sublabel: t('bankFacilities.roi.metrics.covenantBreaches.sublabel') },
              { metric: t('bankFacilities.roi.metrics.facilityVisibility.value'), label: t('bankFacilities.roi.metrics.facilityVisibility.label'), sublabel: t('bankFacilities.roi.metrics.facilityVisibility.sublabel') }
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

      {/* Use Cases Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('bankFacilities.useCases.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('bankFacilities.useCases.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('bankFacilities.useCases.items.liquidityOptimization.title'),
                description: t('bankFacilities.useCases.items.liquidityOptimization.description'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: t('bankFacilities.useCases.items.covenantCompliance.title'),
                description: t('bankFacilities.useCases.items.covenantCompliance.description'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: t('bankFacilities.useCases.items.bankNegotiations.title'),
                description: t('bankFacilities.useCases.items.bankNegotiations.description'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: t('bankFacilities.useCases.items.boardReporting.title'),
                description: t('bankFacilities.useCases.items.boardReporting.description'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((useCase) => (
              <div key={useCase.title} className="bg-white p-8 rounded-xl">
                <div className="inline-flex p-3 rounded-lg bg-primary-50 text-primary-600 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
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
            <h2 className="text-white mb-4">{t('bankFacilities.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('bankFacilities.cta.description')}
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
