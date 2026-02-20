import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Section from '../common/Section';
import Card from '../common/Card';
import LocalizedLink from '../common/LocalizedLink';
import { platformFeatures } from '../../data/features';

export default function PlatformOverview() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t, i18n } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const { t: tPlatform } = useTranslation('platform');
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index !== null) {
              setVisibleCards((prev) => new Set(prev).add(Number(index)));
            }
            if (entry.target === headerRef.current) {
              setHeaderVisible(true);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const icons: Record<string, React.ReactNode> = {
    Wallet: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    TrendingUp: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Banknote: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 6h20v12H2V6zm10 3a3 3 0 100 6 3 3 0 000-6zM6 9v.01M18 15v.01" />
      </svg>
    ),
    BarChart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Building: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    FileText: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Shield: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Send: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    Network: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  };

  return (
    <Section background="white" padding="lg">
      <Container>
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="mb-4">{t('platformOverview.title')}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('platformOverview.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index % 3) * 120}ms` }}
            >
              <Card hover className="group h-full">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {icons[feature.icon]}
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3">{tPlatform(feature.title)}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tPlatform(feature.description)}
                </p>

                {/* Link */}
                <LocalizedLink
                  to={feature.page}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                >
                  {tCommon('buttons.explore')}
                  <svg className={`w-4 h-4 ${isRTL ? 'mr-1 group-hover:-translate-x-1 rotate-180' : 'ml-1 group-hover:translate-x-1'} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LocalizedLink>
              </Card>
            </div>
          ))}
        </div>

        {/* Screenshot Preview */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 rounded-xl p-4 shadow-xl">
            <img
              src="/assets/screenshots/Homepage.png"
              alt={t('platformOverview.screenshotCaption')}
              className="rounded-lg w-full max-w-4xl"
              loading="lazy"
            />
          </div>
          <p className="text-gray-500 text-sm mt-4">{t('platformOverview.screenshotCaption')}</p>
        </div>
      </Container>
    </Section>
  );
}
