import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { openSupademo } from '../../utils/supademo';
import AnimatedCounter from './hero/AnimatedCounter';

/**
 * Parses headline text with *highlighted* markers and \n line breaks.
 * Returns React nodes with gradient-styled highlights.
 */
function renderHeadline(text: string) {
  const lines = text.split('\n');
  const lineCount = lines.length;
  return lines.map((line, lineIdx) => {
    // First and last lines slightly dimmer for cinematic depth hierarchy
    const isSecondary = lineCount >= 3 && (lineIdx === 0 || lineIdx === lineCount - 1);
    const parts = line.split(/(\*[^*]+\*)/g);
    return (
      <span key={lineIdx} className={isSecondary ? 'text-white/[0.75]' : ''}>
        {lineIdx > 0 && <br />}
        {parts.map((part, partIdx) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            return (
              <span
                key={partIdx}
                className="bg-gradient-to-r from-secondary-cyan to-primary-500 bg-clip-text text-transparent"
              >
                {part.slice(1, -1)}
              </span>
            );
          }
          return <span key={partIdx}>{part}</span>;
        })}
      </span>
    );
  });
}

export default function Hero() {
  const { t, i18n } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  return (
    <div className="relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(170deg, #0f0d1f 0%, #1a1540 35%, #13102a 65%, #0f0d1f 100%)' }} />

      {/* Floating orb — top right blue */}
      <motion.div
        className="absolute top-[5%] right-[15%] w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(94,120,240,0.12), transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orb — bottom left cyan */}
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(48,205,231,0.08), transparent 70%)' }}
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Animated radial glow behind headline */}
      <motion.div
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(80,120,255,0.18) 0%, rgba(10,10,30,0) 65%)' }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative pt-28 md:pt-36 pb-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-white/[0.05] border border-white/[0.07] rounded-full text-white/40 text-xs tracking-widest uppercase">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-5"
        >
          <h1
            className="text-white font-bold mx-auto"
            style={{
              maxWidth: '900px',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
            }}
          >
            {renderHeadline(t('hero.headline'))}
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/90 text-lg md:text-[22px] max-w-[700px] mx-auto mb-8 font-medium"
          style={{ lineHeight: 1.5 }}
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* Glass dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative max-w-5xl mx-auto mb-4"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-4 bg-gradient-to-b from-primary-500/[0.08] via-secondary-cyan/[0.04] to-transparent rounded-2xl blur-xl" />

          {/* Glass card */}
          <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            {/* Browser chrome */}
            <div className="bg-white/[0.04] border-b border-white/[0.06] px-4 py-2.5 flex items-center">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 max-w-xs mx-auto">
                <div className="bg-white/[0.05] rounded-md px-3 py-1 text-[10px] text-white/20 text-center tracking-wide">
                  tijori.synclane.com
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <img
              src="/assets/screenshots/Homepage.png"
              alt={t('hero.imageAlt')}
              className="w-full block"
            />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0d1f] via-[#0f0d1f]/80 to-transparent" />
          </div>
        </motion.div>

        {/* CTAs — below dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className={`flex flex-col sm:flex-row gap-3 justify-center mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-cyan rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            <Button variant="secondary" size="lg" href="/company/contact" className="relative">
              {tCommon('buttons.requestDemo')}
            </Button>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => openSupademo(i18n.language)}
            className="bg-white/[0.03] text-white/60 border-white/[0.08] hover:bg-white/[0.06] hover:text-white/80 hover:border-white/15"
          >
            {tCommon('buttons.explorePlatform')}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-xl mx-auto grid grid-cols-3 gap-8 py-10 border-t border-white/[0.06]"
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
