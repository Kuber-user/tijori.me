import { useTranslation } from 'react-i18next';
import SEOHead from '../../../components/seo/SEOHead';
import Container from '../../../components/common/Container';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import IndustryShowcase from '../../../components/solutions/IndustryShowcase';

export default function Ecommerce() {
  const { t, i18n } = useTranslation('solutions');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const solutions = [
    {
      title: t('industries.ecommerce.solutions.items.reconciliation.title'),
      description: t('industries.ecommerce.solutions.items.reconciliation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('industries.ecommerce.solutions.items.multiCurrency.title'),
      description: t('industries.ecommerce.solutions.items.multiCurrency.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('industries.ecommerce.solutions.items.fxHedging.title'),
      description: t('industries.ecommerce.solutions.items.fxHedging.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('industries.ecommerce.solutions.items.forecasting.title'),
      description: t('industries.ecommerce.solutions.items.forecasting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const challenges = [
    {
      title: t('industries.ecommerce.challenges.items.reconciliation.title'),
      description: t('industries.ecommerce.challenges.items.reconciliation.description')
    },
    {
      title: t('industries.ecommerce.challenges.items.multiCurrency.title'),
      description: t('industries.ecommerce.challenges.items.multiCurrency.description')
    },
    {
      title: t('industries.ecommerce.challenges.items.rapidGrowth.title'),
      description: t('industries.ecommerce.challenges.items.rapidGrowth.description')
    }
  ];

  return (
    <>
      <SEOHead
        title={t('industries.ecommerce.seo.title')}
        description={t('industries.ecommerce.seo.description')}
        keywords={t('industries.ecommerce.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('industries.ecommerce.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('industries.ecommerce.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('industries.ecommerce.hero.description')}
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
            <h2 className="mb-4">{t('industries.ecommerce.challenges.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.ecommerce.challenges.description')}
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
            <h2 className="mb-4">{t('industries.ecommerce.solutions.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.ecommerce.solutions.description')}
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
        title={t('industries.ecommerce.industryShowcase.title')}
        subtitle={t('industries.ecommerce.industryShowcase.subtitle')}
        layout="split"
        images={[
          {
            src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1920&q=80",
            alt: "Modern fulfillment center with automated systems"
          },
          {
            src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80",
            alt: "Digital commerce and online shopping"
          }
        ]}
      />

      {/* ROI */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('industries.ecommerce.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.ecommerce.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: t('industries.ecommerce.roi.metrics.reconciliation.value'), sublabel: t('industries.ecommerce.roi.metrics.reconciliation.sublabel') },
              { metric: t('industries.ecommerce.roi.metrics.fxImpact.value'), sublabel: t('industries.ecommerce.roi.metrics.fxImpact.sublabel') },
              { metric: t('industries.ecommerce.roi.metrics.scalability.value'), sublabel: t('industries.ecommerce.roi.metrics.scalability.sublabel') }
            ].map((stat) => (
              <div key={stat.metric} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="text-2xl font-bold text-gradient mb-3 ltr-nums">{stat.metric}</div>
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
            <h2 className="text-white mb-4">{t('industries.ecommerce.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('industries.ecommerce.cta.description')}
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
