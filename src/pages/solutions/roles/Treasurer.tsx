import { useTranslation } from 'react-i18next';
import SEOHead from '../../../components/seo/SEOHead';
import Container from '../../../components/common/Container';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import IndustryShowcase from '../../../components/solutions/IndustryShowcase';

export default function Treasurer() {
  const { t, i18n } = useTranslation('solutions');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const painPoints = [
    {
      title: t('roles.treasurer.challenges.items.manualProcesses.title'),
      description: t('roles.treasurer.challenges.items.manualProcesses.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('roles.treasurer.challenges.items.fragmentation.title'),
      description: t('roles.treasurer.challenges.items.fragmentation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: t('roles.treasurer.challenges.items.limitedTime.title'),
      description: t('roles.treasurer.challenges.items.limitedTime.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const features = [
    {
      title: t('roles.treasurer.solutions.items.cashPositioning.title'),
      description: t('roles.treasurer.solutions.items.cashPositioning.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('roles.treasurer.solutions.items.paymentHub.title'),
      description: t('roles.treasurer.solutions.items.paymentHub.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('roles.treasurer.solutions.items.reconciliation.title'),
      description: t('roles.treasurer.solutions.items.reconciliation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t('roles.treasurer.solutions.items.forecasting.title'),
      description: t('roles.treasurer.solutions.items.forecasting.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const workflowSteps = [
    { time: '8:00 AM', title: 'Automated Bank Balance Aggregation', description: 'TiJori retrieves opening balances and prior-day statements from all connected banks. Your consolidated cash position is ready before you arrive.' },
    { time: '9:00 AM', title: 'Review Cash Position & Variances', description: 'Examine the real-time cash dashboard, review variances against forecasts, and identify any unexpected movements or exceptions requiring attention.' },
    { time: '10:00 AM', title: 'Initiate & Approve Payments', description: 'Process scheduled payments, approve pending requests through the dual-approval workflow, and release payment files to banking partners.' },
    { time: '2:00 PM', title: 'Monitor Intraday Positions', description: 'Track intraday balance movements, review incoming receipts against expectations, and adjust short-term investment or borrowing decisions accordingly.' },
    { time: '5:00 PM', title: 'Automated End-of-Day Reporting', description: 'TiJori generates closing position reports, reconciliation summaries, and variance analyses automatically. Reports are distributed to stakeholders on schedule.' }
  ];

  return (
    <>
      <SEOHead
        title={t('roles.treasurer.seo.title')}
        description={t('roles.treasurer.seo.description')}
        keywords={t('roles.treasurer.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              {t('roles.treasurer.hero.breadcrumb')}
            </div>
            <h1 className="text-white mb-6">
              {t('roles.treasurer.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('roles.treasurer.hero.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button variant="secondary" size="lg" href="/company/contact">
                {tCommon('buttons.requestDemo')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#how-tijori-helps"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {tCommon('buttons.seeHowItWorks')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pain Points */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('roles.treasurer.challenges.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('roles.treasurer.challenges.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.title} className="bg-gray-50 rounded-xl p-8">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-5">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How TiJori Helps */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12" id="how-tijori-helps">
            <h2 className="mb-4">{t('roles.treasurer.solutions.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('roles.treasurer.solutions.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Daily Workflow */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Your Daily Workflow with TiJori</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From opening balance aggregation to end-of-day reporting, TiJori structures and automates your entire treasury day.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={step.time} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shrink-0">
                    {step.time}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Screenshots */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">See TiJori in Action</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A unified platform for bank balance visibility and payment execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="/assets/screenshots/Bank Balances.png"
                alt="Consolidated bank balance dashboard showing real-time positions across all accounts"
                loading="lazy"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-semibold mb-2">Consolidated Bank Balances</h3>
                <p className="text-gray-600 text-sm">Real-time aggregation of opening and closing balances across all connected banking partners, with multi-currency support and entity-level breakdowns.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="/assets/screenshots/Payments Transmission.png"
                alt="Payment transmission dashboard showing payment workflows and approval status"
                loading="lazy"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-semibold mb-2">Payment Transmission</h3>
                <p className="text-gray-600 text-sm">End-to-end payment processing with configurable approval workflows, real-time status tracking, and automated file transmission to banking partners.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Showcase */}
      <IndustryShowcase
        title={t('roles.treasurer.industryShowcase.title')}
        subtitle={t('roles.treasurer.industryShowcase.subtitle')}
        layout="split"
        images={[
          {
            src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80",
            alt: "Banking operations and financial technology"
          },
          {
            src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80",
            alt: "Data analysis and financial monitoring"
          }
        ]}
      />

      {/* ROI Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('roles.treasurer.roi.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('roles.treasurer.roi.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: t('roles.treasurer.roi.metrics.timeSaved.value'), sublabel: t('roles.treasurer.roi.metrics.timeSaved.sublabel') },
              { metric: t('roles.treasurer.roi.metrics.reconciliation.value'), sublabel: t('roles.treasurer.roi.metrics.reconciliation.sublabel') },
              { metric: t('roles.treasurer.roi.metrics.singlePlatform.value'), sublabel: t('roles.treasurer.roi.metrics.singlePlatform.sublabel') }
            ].map((stat) => (
              <div key={stat.metric} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl font-bold text-gradient mb-2 ltr-nums">{stat.metric}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">{t('roles.treasurer.cta.title')}</h2>
            <p className="text-white/90 text-xl mb-8">
              {t('roles.treasurer.cta.description')}
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
