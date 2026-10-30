import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';
import Button from '../common/Button';

export default function CTASection() {
  const { t, i18n } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  return (
    <Section background="gradient" padding="lg">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-white/90 text-xl mb-10 leading-relaxed">
            {t('cta.description')}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button variant="secondary" size="lg" href="/company/contact">
              {tCommon('buttons.requestDemo')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/pricing"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            >
              {tCommon('buttons.viewPricing')}
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center text-white/80 text-sm">
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {tCommon('trustSignals.uptime')}
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {tCommon('trustSignals.support')}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
