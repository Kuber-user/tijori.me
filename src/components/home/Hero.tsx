import type { PointerEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { openSupademo } from '../../utils/supademo';
import AnimatedCounter from './hero/AnimatedCounter';

const SCREENSHOT = '/assets/screenshots/treasury-overview.png';
const SHOT_W = 1920;
const SHOT_H = 896;

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Parses headline text with *highlighted* markers and \n line breaks,
 * revealing it word by word. Highlighted words get the brand gradient.
 */
function AnimatedHeadline({ text, reduce }: { text: string; reduce: boolean }) {
  let wordIndex = 0;
  return (
    <>
      {text.split('\n').map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split(/(\*[^*]+\*)/g).filter(Boolean).flatMap((part, partIdx) => {
            const highlighted = part.startsWith('*') && part.endsWith('*');
            const words = (highlighted ? part.slice(1, -1) : part).split(' ').filter(Boolean);
            return words.map((word, i) => {
              const delay = 0.15 + wordIndex++ * 0.08;
              return (
                <span key={`${partIdx}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                  <motion.span
                    className={`inline-block ${
                      highlighted
                        ? 'bg-gradient-to-r from-secondary-cyan via-primary-500 to-secondary-purple bg-clip-text text-transparent'
                        : ''
                    }`}
                    initial={reduce ? false : { y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay, ease: EASE }}
                  >
                    {word}
                  </motion.span>
                  {' '}
                </span>
              );
            });
          })}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';
  const reduce = useReducedMotion() ?? false;

  // Pointer: soft spotlight on the background
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.3);
  const spotX = useTransform(px, (v) => `${v * 100}%`);
  const spotY = useTransform(py, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX} ${spotY}, rgba(94,120,240,0.16), transparent 60%)`;

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <div className="relative overflow-hidden" onPointerMove={onPointerMove}>
      {/* Layered background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(170deg, #0f0d1f 0%, #1a1540 35%, #13102a 65%, #0f0d1f 100%)' }} />

      {/* Static aurora behind the headline */}
      <div
        className="absolute inset-x-0 top-0 h-[70%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(94,120,240,0.28), transparent 70%), radial-gradient(ellipse 35% 35% at 80% 20%, rgba(48,205,231,0.10), transparent 70%), radial-gradient(ellipse 35% 35% at 18% 30%, rgba(194,184,255,0.10), transparent 70%)',
        }}
      />

      {/* Cursor spotlight */}
      {!reduce && <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />}

      {/* Perspective floor grid that the dashboard sits on */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none [perspective:600px]" aria-hidden>
        <div
          className="absolute inset-x-[-50%] bottom-[-10%] h-[160%] origin-bottom"
          style={{
            transform: 'rotateX(62deg)',
            backgroundImage:
              'linear-gradient(rgba(140,160,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(140,160,255,0.14) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(to top, black 10%, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent 75%)',
          }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <Container className="relative pt-12 md:pt-16 pb-0">
        {/* Badge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="relative inline-flex items-center px-4 py-1.5 rounded-full text-white/70 text-xs tracking-widest uppercase bg-white/[0.04] ring-1 ring-inset ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="text-white font-bold mx-auto text-center text-[2.6rem] sm:text-6xl lg:text-[4.75rem] mb-6"
          style={{ maxWidth: '980px', lineHeight: 1.04, letterSpacing: '-0.035em' }}
        >
          <AnimatedHeadline text={t('hero.headline')} reduce={reduce} />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="text-center text-white/70 text-lg md:text-xl max-w-[640px] mx-auto mb-8"
          style={{ lineHeight: 1.55 }}
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* Dashboard */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="relative max-w-5xl mx-auto mb-4"
          dir="ltr"
        >
          {/* Glow behind the dashboard */}
          <div className="absolute inset-x-[8%] top-[10%] bottom-0 rounded-[40%] bg-primary-500/30 blur-[90px] pointer-events-none" />

          {/* Frame with a light beam travelling around its edge */}
          <div className="relative rounded-xl p-px overflow-hidden shadow-[0_20px_60px_-15px_rgba(8,6,24,0.6)]">
            {!reduce && (
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_7s_linear_infinite]"
                style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(48,205,231,0.9) 40deg, rgba(94,120,240,0.9) 80deg, transparent 130deg, transparent 360deg)' }}
              />
            )}
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15 pointer-events-none" />
            <div className="relative rounded-[11px] overflow-hidden bg-[#0f0d1f]">
              {/* Browser chrome */}
              <div className="bg-[#2a2552] border-b border-white/[0.06] px-4 py-2.5 flex items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                </div>
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="bg-white/[0.06] rounded-md px-3 py-1 text-[10px] text-white/35 text-center tracking-wide">
                    tijori.me
                  </div>
                </div>
                {/* Balances the dots so the address pill stays centred */}
                <div className="w-[42px]" aria-hidden />
              </div>
              <img src={SCREENSHOT} alt={t('hero.imageAlt')} className="w-full block" width={SHOT_W} height={SHOT_H} />
              {/* Bottom fade into the page */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0d1f] via-[#0f0d1f]/80 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* CTAs: below dashboard */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8 mb-12 max-w-sm sm:max-w-none mx-auto"
        >
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-cyan rounded-xl opacity-30 group-hover:opacity-60 blur-lg transition-opacity duration-300" />
            <Button variant="secondary" size="lg" href="/company/contact" className="relative w-full sm:w-auto active:scale-[0.98]">
              {tCommon('buttons.requestDemo')}
            </Button>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => openSupademo(i18n.language)}
            className="w-full sm:w-auto bg-white/[0.04] text-white/80 border-white/15 hover:bg-white/[0.08] hover:text-white hover:border-white/30 active:scale-[0.98]"
          >
            {tCommon('buttons.explorePlatform')}
            <svg className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="relative max-w-3xl mx-auto grid grid-cols-3 gap-6 md:gap-10 py-10 md:py-12"
        >
          <AnimatedCounter
            value={t('hero.stats.facilitiesManaged.value')}
            label={t('hero.stats.facilitiesManaged.label')}
          />
          <AnimatedCounter
            value={t('hero.stats.integrations.value')}
            label={t('hero.stats.integrations.label')}
          />
          <AnimatedCounter
            value={t('hero.stats.timeSaved.value')}
            label={t('hero.stats.timeSaved.label')}
          />
        </motion.div>
      </Container>
    </div>
  );
}
