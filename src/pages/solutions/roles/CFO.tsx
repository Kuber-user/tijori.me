import { useTranslation } from 'react-i18next';
import SEOHead from '../../../components/seo/SEOHead';
import Container from '../../../components/common/Container';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import IndustryShowcase from '../../../components/solutions/IndustryShowcase';

export default function CFO() {
  const { t, i18n } = useTranslation('solutions');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const solutions = [
    {
      title: t('roles.cfo.solutions.items.dashboard.title'),
      description: t('roles.cfo.solutions.items.dashboard.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('roles.cfo.solutions.items.workingCapital.title'),
      description: t('roles.cfo.solutions.items.workingCapital.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('roles.cfo.solutions.items.forecasting.title'),
      description: t('roles.cfo.solutions.items.forecasting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: t('roles.cfo.solutions.items.reporting.title'),
      description: t('roles.cfo.solutions.items.reporting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const challenges = [
    {
      title: t('roles.cfo.challenges.items.visibility.title'),
      description: t('roles.cfo.challenges.items.visibility.description')
    },
    {
      title: t('roles.cfo.challenges.items.capital.title'),
      description: t('roles.cfo.challenges.items.capital.description')
    },
    {
      title: t('roles.cfo.challenges.items.reactive.title'),
      description: t('roles.cfo.challenges.items.reactive.description')
    }
  ];

  return (
    <>
      <SEOHead
        title={t('roles.cfo.seo.title')}
        description={t('roles.cfo.seo.description')}
        keywords={t('roles.cfo.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('roles.cfo.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('roles.cfo.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('roles.cfo.hero.description')}
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
            <h2 className="mb-4">{t('roles.cfo.challenges.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('roles.cfo.challenges.description')}
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
            <h2 className="mb-4">{t('roles.cfo.solutions.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('roles.cfo.solutions.description')}
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
        title={t('roles.cfo.industryShowcase.title')}
        subtitle={t('roles.cfo.industryShowcase.subtitle')}
        layout="split"
        images={[
          {
            src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80",
            alt: "Modern executive office with city view"
          },
          {
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
            alt: "Financial dashboard and analytics"
          }
        ]}
      />

      {/* ROI */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('roles.cfo.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('roles.cfo.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: t('roles.cfo.roi.metrics.visibility.value'), sublabel: t('roles.cfo.roi.metrics.visibility.sublabel') },
              { metric: t('roles.cfo.roi.metrics.idleCash.value'), sublabel: t('roles.cfo.roi.metrics.idleCash.sublabel') },
              { metric: t('roles.cfo.roi.metrics.reports.value'), sublabel: t('roles.cfo.roi.metrics.reports.sublabel') }
            ].map((stat) => (
              <div key={stat.metric} className="text-center bg-white p-8 rounded-xl shadow-sm">
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
            <h2 className="text-white mb-4">{t('roles.cfo.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('roles.cfo.cta.description')}
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
