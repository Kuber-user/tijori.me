import { useTranslation } from 'react-i18next';
import SEOHead from '../../../components/seo/SEOHead';
import Container from '../../../components/common/Container';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import IndustryShowcase from '../../../components/solutions/IndustryShowcase';

export default function FMCG() {
  const { t, i18n } = useTranslation('solutions');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const solutions = [
    {
      title: t('industries.fmcg.solutions.items.workingCapital.title'),
      description: t('industries.fmcg.solutions.items.workingCapital.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: t('industries.fmcg.solutions.items.collections.title'),
      description: t('industries.fmcg.solutions.items.collections.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t('industries.fmcg.solutions.items.supplierPayments.title'),
      description: t('industries.fmcg.solutions.items.supplierPayments.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: t('industries.fmcg.solutions.items.seasonalForecasting.title'),
      description: t('industries.fmcg.solutions.items.seasonalForecasting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const challenges = [
    {
      title: t('industries.fmcg.challenges.items.workingCapital.title'),
      description: t('industries.fmcg.challenges.items.workingCapital.description')
    },
    {
      title: t('industries.fmcg.challenges.items.collections.title'),
      description: t('industries.fmcg.challenges.items.collections.description')
    },
    {
      title: t('industries.fmcg.challenges.items.seasonalDemand.title'),
      description: t('industries.fmcg.challenges.items.seasonalDemand.description')
    }
  ];

  return (
    <>
      <SEOHead
        title={t('industries.fmcg.seo.title')}
        description={t('industries.fmcg.seo.description')}
        keywords={t('industries.fmcg.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('industries.fmcg.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('industries.fmcg.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('industries.fmcg.hero.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button variant="secondary" size="lg" href="/company/contact">
                {tCommon('buttons.requestDemo')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#solutions"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {tCommon('buttons.exploreCapabilities')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenges */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('industries.fmcg.challenges.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.fmcg.challenges.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions */}
      <Section background="gray" padding="lg" id="solutions">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('industries.fmcg.solutions.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.fmcg.solutions.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(94, 120, 240, 0.1)', color: '#3657EC' }}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industry Showcase */}
      <IndustryShowcase
        title={t('industries.fmcg.industryShowcase.title')}
        subtitle={t('industries.fmcg.industryShowcase.subtitle')}
        layout="split"
        images={[
          {
            src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1920&q=80",
            alt: "Modern warehouse logistics and distribution"
          },
          {
            src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80",
            alt: "Retail shelves stocked with consumer products"
          }
        ]}
      />

      {/* ROI */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('industries.fmcg.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.fmcg.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: t('industries.fmcg.roi.metrics.cashCycle.value'), sublabel: t('industries.fmcg.roi.metrics.cashCycle.sublabel') },
              { metric: t('industries.fmcg.roi.metrics.collections.value'), sublabel: t('industries.fmcg.roi.metrics.collections.sublabel') },
              { metric: t('industries.fmcg.roi.metrics.forecasting.value'), sublabel: t('industries.fmcg.roi.metrics.forecasting.sublabel') }
            ].map((stat) => (
              <div key={stat.metric} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="text-2xl font-bold text-gradient mb-3">{stat.metric}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">{t('industries.fmcg.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('industries.fmcg.cta.description')}
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
