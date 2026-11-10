import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';

// Logo files in /assets/logos/partners, in the same order as the locale lists (null = no logo yet, show the name)
const BANK_LOGOS: (string | null)[] = [
  'fab', null, 'adcb', null, null, 'alinma', 'qnb', 'nbk',
  'hsbc', 'citi', 'standard-chartered', 'bnp-paribas', 'cib', 'banque-misr', 'akbank', 'hbl',
];
const ERP_LOGOS: (string | null)[] = ['oracle', 'sap', 'microsoft-dynamics'];
// Marks without a wordmark; the name is shown beside them
const MARK_ONLY = new Set(['microsoft-dynamics']);

export default function SocialProofBar() {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.language === 'ar';

  const banks = t('socialProof.banks', { returnObjects: true }) as string[];
  const erps = t('socialProof.erps', { returnObjects: true }) as string[];

  const allPartners = [
    ...banks.map((name, i) => ({ name, logo: BANK_LOGOS[i] ?? null })),
    ...erps.map((name, i) => ({ name, logo: ERP_LOGOS[i] ?? null })),
  ];

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

          {/* Logos show in their own brand colours; hovering pauses the strip */}
          <div className={`flex w-max hover:[animation-play-state:paused] ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
            {[...allPartners, ...allPartners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="group inline-flex items-center justify-center gap-2 px-6 md:px-9 h-16 md:h-20 flex-shrink-0"
                aria-hidden={i >= allPartners.length}
              >
                {partner.logo ? (
                  <>
                    <img
                      src={`/assets/logos/partners/${partner.logo}.svg`}
                      alt={partner.name}
                      title={partner.name}
                      className="h-7 md:h-9 w-auto max-w-[120px] md:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      draggable={false}
                    />
                    {MARK_ONLY.has(partner.logo) && (
                      <span className="text-gray-800 font-semibold text-base md:text-lg whitespace-nowrap">
                        {partner.name}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-gray-700 font-semibold text-base md:text-lg whitespace-nowrap transition-colors group-hover:text-primary-600">
                    {partner.name}
                  </span>
                )}
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
