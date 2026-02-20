import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';

export default function SocialProofBar() {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.language === 'ar';

  const banks = t('socialProof.banks', { returnObjects: true }) as string[];
  const erps = t('socialProof.erps', { returnObjects: true }) as string[];

  const allPartners = [...banks, ...erps];

  return (
    <Section background="white" padding="md">
      <Container>
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
          {t('socialProof.title')}
        </p>

        {/* Sliding Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className={`flex ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
            {[...allPartners, ...allPartners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="inline-flex items-center justify-center px-8 h-16 text-gray-400 font-semibold text-lg hover:text-primary-600 transition-colors flex-shrink-0 whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-1 ltr-nums">{t('socialProof.stats.integrations.value')}</div>
              <div className="text-sm text-gray-600">{t('socialProof.stats.integrations.label')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1 ltr-nums">{t('socialProof.stats.facilities.value')}</div>
              <div className="text-sm text-gray-600">{t('socialProof.stats.facilities.label')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1 ltr-nums">{t('socialProof.stats.uptime.value')}</div>
              <div className="text-sm text-gray-600">{t('socialProof.stats.uptime.label')}</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
