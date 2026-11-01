import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/seo/SEOHead';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import ContactForm from '../../components/contact/ContactForm';

const expectationStepKeys = ['response', 'demo', 'plan'] as const;

export default function Contact() {
  const { t, i18n } = useTranslation('company');
  const isRTL = i18n.language === 'ar';

  return (
    <>
      <SEOHead
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        keywords={t('contact.seo.keywords', { returnObjects: true }) as string[]}
      />

      {/* Hero */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">{t('contact.hero.title')}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('contact.hero.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form + Info */}
      <Section background="white" padding="lg">
        <Container>
          <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Left Column: Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {t('contact.form.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contact.form.description')}
              </p>

              <ContactForm />
            </div>

            {/* Right Column: What to Expect */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to Expect */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('contact.expectations.title')}
                </h3>
                <div className="space-y-4">
                  {expectationStepKeys.map((key, index) => (
                    <div key={key} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold ltr-nums" style={{ backgroundImage: 'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)' }}>
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium pt-1">
                        {t(`contact.expectations.steps.${key}`)}
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
