import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Button from '../common/Button';
import { openSupademo } from '../../utils/supademo';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      style={{ backgroundImage: 'linear-gradient(135deg, #2C2358 0%, #16122C 100%)' }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/50 to-primary-900/50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-secondary-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-secondary-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text Content */}
          <div className={isRTL ? 'lg:order-2' : ''}>
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-8 opacity-0`}
              style={{ animation: 'fadeIn 0.6s ease-out 0.1s forwards' }}
            >
              <span className={`w-2 h-2 bg-secondary-cyan rounded-full ${isRTL ? 'ml-2' : 'mr-2'} animate-pulse`} />
              {t('hero.badge')}
            </div>

            {/* Greeting */}
            <h2
              className="text-secondary-cyan font-semibold text-xl md:text-2xl mb-4 opacity-0"
              style={{ animation: `${isRTL ? 'slideInRight' : 'slideInLeft'} 0.7s ease-out 0.2s forwards` }}
            >
              {t('hero.greeting')}
            </h2>

            {/* Main Headline */}
            <h1
              className="text-white mb-6 opacity-0"
              style={{ animation: `${isRTL ? 'slideInRight' : 'slideInLeft'} 0.7s ease-out 0.3s forwards` }}
            >
              {t('hero.headline')}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed opacity-0"
              style={{ animation: `${isRTL ? 'slideInRight' : 'slideInLeft'} 0.7s ease-out 0.4s forwards` }}
            >
              {t('hero.subheadline')}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 opacity-0 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
              style={{ animation: `${isRTL ? 'slideInRight' : 'slideInLeft'} 0.7s ease-out 0.5s forwards` }}
            >
              <Button variant="secondary" size="lg" href="/company/contact">
                {tCommon('buttons.requestDemo')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openSupademo(i18n.language)}
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50"
              >
                {tCommon('buttons.explorePlatform')}
              </Button>
            </div>

            {/* Key Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 opacity-0"
              style={{ animation: 'fadeIn 0.6s ease-out 0.7s forwards' }}
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 ltr-nums">{t('hero.stats.integrations.value')}</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.stats.integrations.label')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 ltr-nums">{t('hero.stats.accuracy.value')}</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.stats.accuracy.label')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 ltr-nums">{t('hero.stats.idleCash.value')}</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.stats.idleCash.label')}</div>
              </div>
            </div>
          </div>

          {/* Right Column — Parallax Screenshots */}
          <div className={`relative lg:h-[600px] hidden md:block ${isRTL ? 'lg:order-1' : ''}`}>
            {/* Main screenshot */}
            <div
              className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-[95%] rounded-xl overflow-hidden shadow-2xl border border-white/10 opacity-0`}
              style={{
                animation: `${isRTL ? 'slideInLeft' : 'slideInRight'} 0.8s ease-out 0.4s forwards`,
                transform: `translateY(${scrollY * -0.05}px)`,
              }}
            >
              <img
                src="/assets/screenshots/Homepage.png"
                alt={t('hero.imageAlt')}
                className="w-full"
              />
            </div>

            {/* Overlapping screenshot — bank balances */}
            <div
              className={`absolute top-[45%] ${isRTL ? '-right-[5%]' : '-left-[5%]'} w-[70%] rounded-xl overflow-hidden shadow-2xl border border-white/15 opacity-0`}
              style={{
                animation: `${isRTL ? 'slideInRight' : 'slideInLeft'} 0.8s ease-out 0.6s forwards`,
                transform: `translateY(${scrollY * -0.1}px)`,
              }}
            >
              <img
                src="/assets/screenshots/Bank Balances.png"
                alt="Multi-bank cash positions dashboard"
                className="w-full"
              />
            </div>

            {/* Small floating card — forecast */}
            <div
              className={`absolute top-[25%] ${isRTL ? '-right-[8%]' : '-left-[8%]'} w-[50%] rounded-lg overflow-hidden shadow-xl border border-white/10 opacity-0`}
              style={{
                animation: 'fadeIn 0.6s ease-out 0.9s forwards',
                transform: `translateY(${scrollY * -0.15}px)`,
              }}
            >
              <img
                src="/assets/screenshots/Forecast.png"
                alt="AI cash forecasting predictions"
                className="w-full"
              />
            </div>
          </div>

          {/* Mobile: single screenshot */}
          <div className="md:hidden opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.5s forwards' }}>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/assets/screenshots/Homepage.png"
                alt={t('hero.imageAlt')}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
