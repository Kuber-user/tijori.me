import { useTranslation } from 'react-i18next';
import SEOHead from '../../../components/seo/SEOHead';
import Container from '../../../components/common/Container';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import IndustryShowcase from '../../../components/solutions/IndustryShowcase';

export default function Manufacturing() {
  const { t, i18n } = useTranslation('solutions');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const solutions = [
    {
      title: t('industries.manufacturing.solutions.items.supplyChainFinance.title'),
      description: t('industries.manufacturing.solutions.items.supplyChainFinance.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: t('industries.manufacturing.solutions.items.inventoryForecasting.title'),
      description: t('industries.manufacturing.solutions.items.inventoryForecasting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('industries.manufacturing.solutions.items.intercompanyNetting.title'),
      description: t('industries.manufacturing.solutions.items.intercompanyNetting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: t('industries.manufacturing.solutions.items.paymentOrchestration.title'),
      description: t('industries.manufacturing.solutions.items.paymentOrchestration.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const challenges = [
    {
      title: t('industries.manufacturing.challenges.items.supplyChain.title'),
      description: t('industries.manufacturing.challenges.items.supplyChain.description')
    },
    {
      title: t('industries.manufacturing.challenges.items.inventoryFunding.title'),
      description: t('industries.manufacturing.challenges.items.inventoryFunding.description')
    },
    {
      title: t('industries.manufacturing.challenges.items.intercompany.title'),
      description: t('industries.manufacturing.challenges.items.intercompany.description')
    }
  ];

  return (
    <>
      <SEOHead
        title={t('industries.manufacturing.seo.title')}
        description={t('industries.manufacturing.seo.description')}
        keywords={t('industries.manufacturing.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('industries.manufacturing.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('industries.manufacturing.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('industries.manufacturing.hero.description')}
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
            <h2 className="mb-4">{t('industries.manufacturing.challenges.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.manufacturing.challenges.description')}
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
            <h2 className="mb-4">{t('industries.manufacturing.solutions.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.manufacturing.solutions.description')}
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
        title={t('industries.manufacturing.industryShowcase.title')}
        subtitle={t('industries.manufacturing.industryShowcase.subtitle')}
        layout="split"
        images={[
          {
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
            alt: "Advanced factory automation and robotics"
          },
          {
            src: "https://images.unsplash.com/photo-1565465295423-68c959ca3c30?auto=format&fit=crop&w=1920&q=80",
            alt: "Modern production line operations"
          }
        ]}
      />

      {/* ROI */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('industries.manufacturing.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('industries.manufacturing.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: t('industries.manufacturing.roi.metrics.workingCapital.value'), sublabel: t('industries.manufacturing.roi.metrics.workingCapital.sublabel') },
              { metric: t('industries.manufacturing.roi.metrics.paymentCosts.value'), sublabel: t('industries.manufacturing.roi.metrics.paymentCosts.sublabel') },
              { metric: t('industries.manufacturing.roi.metrics.netting.value'), sublabel: t('industries.manufacturing.roi.metrics.netting.sublabel') }
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
            <h2 className="text-white mb-4">{t('industries.manufacturing.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('industries.manufacturing.cta.description')}
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
