import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';

export default function ROIMetrics() {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.language === 'ar';

  const metrics = [
    {
      key: 'idleCash',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      key: 'timeSaved',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      key: 'accuracy',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      key: 'monthEnd',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('roi.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('roi.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.key}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-full bg-primary-50 text-primary-600 mb-4">
                {metric.icon}
              </div>

              {/* Value */}
              <div className="text-5xl font-bold text-gradient mb-2 ltr-nums">
                {t(`roi.metrics.${metric.key}.value`)}
              </div>

              {/* Label */}
              <div className="text-gray-900 font-semibold mb-2">
                {t(`roi.metrics.${metric.key}.label`)}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-600">
                {t(`roi.metrics.${metric.key}.description`)}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial/Case Study CTA */}
        <div className="mt-16 bg-white p-8 md:p-12 rounded-xl shadow-md max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">"</div>
            <p className="text-xl text-gray-700 mb-6 italic">
              {t('roi.testimonial.quote')}
            </p>
            <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <img
                src="/assets/reference/nishant shah - Dubai Investments.png"
                alt={t('roi.testimonial.author')}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="font-semibold text-gray-900">{t('roi.testimonial.author')}</div>
                <div className="text-sm text-gray-600">{t('roi.testimonial.company')}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
