import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';

const tierKeys = ['starter', 'professional', 'enterprise'] as const;

const includedKeys = ['soc2', 'encryption', 'users', 'api', 'updates'] as const;

const includedIcons: Record<string, React.ReactNode> = {
  soc2: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  encryption: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  api: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  updates: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

const faqKeys = ['pricing', 'contract', 'trial', 'implementation'] as const;

export default function Pricing() {
  const { t, i18n } = useTranslation('company');
  const isRTL = i18n.language === 'ar';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title={t('pricing.seo.title')}
        description={t('pricing.seo.description')}
        keywords={t('pricing.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">
              {t('pricing.hero.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('pricing.hero.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Tiers */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tierKeys.map((tierKey) => {
              const price = t(`pricing.tiers.${tierKey}.price`, { defaultValue: '' });
              const isPopular = tierKey === 'professional';
              const trialText = t(`pricing.tiers.${tierKey}.trialText`, { defaultValue: '' });
              const features = t(`pricing.tiers.${tierKey}.features.items`, { returnObjects: true }) as string[];
              const featuresHeader = t(`pricing.tiers.${tierKey}.features.header`);

              return (
                <div
                  key={tierKey}
                  className={`relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col ${
                    isPopular ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span
                        className="inline-block px-4 py-1 text-white text-sm font-semibold rounded-full"
                        style={{
                          backgroundImage:
                            'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)',
                        }}
                      >
                        {t('pricing.badges.mostPopular')}
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {t(`pricing.tiers.${tierKey}.name`)}
                    </h3>
                    <p className="text-gray-600 mb-6">{t(`pricing.tiers.${tierKey}.audience`)}</p>

                    {price ? (
                      <div className="mb-6">
                        <div className={`flex items-baseline gap-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                          <span className="text-4xl font-bold text-gray-900 ltr-nums">{price}</span>
                          <span className="text-gray-600 text-sm">{t(`pricing.tiers.${tierKey}.currency`)}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{t(`pricing.tiers.${tierKey}.tagline`)}</p>
                      </div>
                    ) : (
                      <div className="mb-8">
                        <span className="text-lg font-semibold text-gradient">
                          {t(`pricing.tiers.${tierKey}.tagline`)}
                        </span>
                      </div>
                    )}

                    <ul className="space-y-3 mb-8 flex-1">
                      {/* Features Header */}
                      <li className="flex items-start gap-3">
                        <span className="text-gray-700 font-medium text-sm">
                          {featuresHeader}
                        </span>
                      </li>
                      {/* Feature Items */}
                      {features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg
                            className={`w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 ${isRTL ? 'order-last' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {trialText && (
                      <p className="text-sm text-primary-600 font-medium mb-4 text-center">
                        {trialText}
                      </p>
                    )}
                    <Button
                      variant={isPopular ? 'primary' : 'secondary'}
                      size="lg"
                      href="/company/contact"
                      className="w-full"
                    >
                      {t(`pricing.tiers.${tierKey}.buttonText`)}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Animated Plus Sign */}
      <div className="flex justify-center py-8 bg-gray-50">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center animate-pulse">
            <svg
              className="w-8 h-8 text-primary-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('pricing.addons.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('pricing.addons.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SWIFT Membership Add-on */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/screenshots/SWIFT.png" alt="SWIFT" className="h-10 w-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('pricing.addons.swift.title')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('pricing.addons.swift.description')}
              </p>
              <Button variant="outline" href="/company/contact">
                {t('pricing.addons.learnMore')}
              </Button>
            </div>

            {/* Power BI Add-on */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/screenshots/Power-BI-Logo-2013.png" alt="Microsoft Power BI" className="h-10 w-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('pricing.addons.powerbi.title')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('pricing.addons.powerbi.description')}
              </p>
              <Button variant="outline" href="/company/contact">
                {t('pricing.addons.learnMore')}
              </Button>
            </div>

            {/* Market Data Feed Add-on */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary-600" style={{ backgroundColor: 'rgba(94, 120, 240, 0.1)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('pricing.addons.marketData.title')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('pricing.addons.marketData.description')}
              </p>
              <Button variant="outline" href="/company/contact">
                {t('pricing.addons.learnMore')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* All Plans Include */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('pricing.included.title')}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('pricing.included.description')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {includedKeys.map((key) => (
              <div
                key={key}
                className="text-center bg-gray-50 rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary-600" style={{ backgroundColor: 'rgba(94, 120, 240, 0.1)' }}>
                  {includedIcons[key]}
                </div>
                <p className="text-gray-900 font-medium text-sm">
                  {t(`pricing.included.items.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="gray" padding="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('pricing.faq.title')}</h2>
            <p className="text-gray-600 text-lg">
              {t('pricing.faq.description')}
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqKeys.map((key, index) => (
              <div
                key={key}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors duration-150 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <span className={`text-gray-900 font-semibold ${isRTL ? 'pl-4' : 'pr-4'}`}>
                    {t(`pricing.faq.items.${key}.question`)}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {t(`pricing.faq.items.${key}.answer`)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-white mb-4">
              {t('pricing.cta.title')}
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              {t('pricing.cta.description')}
            </p>
            <Button variant="secondary" size="lg" href="/company/contact">
              {t('pricing.cta.buttonText')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
