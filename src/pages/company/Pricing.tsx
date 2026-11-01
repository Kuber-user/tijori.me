import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import ContactForm from '../../components/contact/ContactForm';

const stepKeys = ['scope', 'demo', 'quote'] as const;

export default function Pricing() {
  const { t, i18n } = useTranslation('company');
  const isRTL = i18n.language === 'ar';

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

      {/* Quote Form + How Pricing Works */}
      <Section background="white" padding="lg">
        <Container>
          <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 ${isRTL ? 'direction-rtl' : ''}`}>
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {t('pricing.form.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('pricing.form.description')}
              </p>

              <ContactForm variant="pricing" />
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('pricing.howItWorks.title')}
                </h3>
                <div className="space-y-4">
                  {stepKeys.map((key, index) => (
                    <div key={key} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold ltr-nums" style={{ backgroundImage: 'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)' }}>
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium pt-1">
                        {t(`pricing.howItWorks.steps.${key}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
