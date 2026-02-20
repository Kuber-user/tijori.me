import { useTranslation } from 'react-i18next';
import SEOHead from '../../../components/seo/SEOHead';
import Container from '../../../components/common/Container';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import IndustryShowcase from '../../../components/solutions/IndustryShowcase';

export default function SemiGovernment() {
  const { t, i18n } = useTranslation('solutions');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const solutions = [
    {
      title: t('industries.semiGovernment.solutions.items.megaProject.title'),
      description: t('industries.semiGovernment.solutions.items.megaProject.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('industries.semiGovernment.solutions.items.greConsolidation.title'),
      description: t('industries.semiGovernment.solutions.items.greConsolidation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: t('industries.semiGovernment.solutions.items.samaCompliance.title'),
      description: t('industries.semiGovernment.solutions.items.samaCompliance.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('industries.semiGovernment.solutions.items.sovereignWealth.title'),
      description: t('industries.semiGovernment.solutions.items.sovereignWealth.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const challenges = [
    {
      title: t('industries.semiGovernment.challenges.items.megaProject.title'),
      description: t('industries.semiGovernment.challenges.items.megaProject.description')
    },
    {
      title: t('industries.semiGovernment.challenges.items.greConsolidation.title'),
      description: t('industries.semiGovernment.challenges.items.greConsolidation.description')
    },
    {
      title: t('industries.semiGovernment.challenges.items.samaRegulatory.title'),
      description: t('industries.semiGovernment.challenges.items.samaRegulatory.description')
    }
  ];

  return (
    <>
      <SEOHead
        title={t('industries.semiGovernment.seo.title')}
        description={t('industries.semiGovernment.seo.description')}
        keywords={t('industries.semiGovernment.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('industries.semiGovernment.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('industries.semiGovernment.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('industries.semiGovernment.hero.description')}
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
            <h2 className="mb-4">{t('industries.semiGovernment.challenges.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.semiGovernment.challenges.description')}
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
            <h2 className="mb-4">{t('industries.semiGovernment.solutions.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.semiGovernment.solutions.description')}
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
        title={t('industries.semiGovernment.industryShowcase.title')}
        subtitle={t('industries.semiGovernment.industryShowcase.subtitle')}
        layout="split"
        images={[
          {
            src: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1920&q=80",
            alt: "Riyadh skyline at sunset"
          },
          {
            src: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1920&q=80",
            alt: "Modern Saudi architecture and development"
          }
        ]}
      />

      {/* ROI */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('industries.semiGovernment.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.semiGovernment.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: t('industries.semiGovernment.roi.metrics.projectVisibility.value'), sublabel: t('industries.semiGovernment.roi.metrics.projectVisibility.sublabel') },
              { metric: t('industries.semiGovernment.roi.metrics.samaCompliance.value'), sublabel: t('industries.semiGovernment.roi.metrics.samaCompliance.sublabel') },
              { metric: t('industries.semiGovernment.roi.metrics.governance.value'), sublabel: t('industries.semiGovernment.roi.metrics.governance.sublabel') }
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
            <h2 className="text-white mb-4">{t('industries.semiGovernment.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('industries.semiGovernment.cta.description')}
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
