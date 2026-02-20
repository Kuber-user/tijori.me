import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';
import LocalizedLink from '../common/LocalizedLink';

export default function ThreePillars() {
  const { t, i18n } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const pillars = [
    {
      key: 'connect',
      link: '/platform/connectivity',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-secondary-cyan to-primary-500'
    },
    {
      key: 'forecast',
      link: '/platform/ai-forecasting',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      key: 'control',
      link: '/platform/cash-management',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-primary-600 to-secondary-purple'
    }
  ];

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('threePillars.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('threePillars.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const features = t(`threePillars.pillars.${pillar.key}.features`, { returnObjects: true }) as string[];
            return (
              <div
                key={pillar.key}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${pillar.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4">{t(`threePillars.pillars.${pillar.key}.title`)}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {t(`threePillars.pillars.${pillar.key}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className={`w-5 h-5 text-primary-500 ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <LocalizedLink
                  to={pillar.link}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  {tCommon('buttons.learnMore')}
                  <svg className={`w-5 h-5 ${isRTL ? 'mr-1 group-hover:-translate-x-1 rotate-180' : 'ml-1 group-hover:translate-x-1'} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LocalizedLink>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
