import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import Container from '../common/Container';

const SLIDES = [
  '/assets/screenshots/bank-balances-1.png',
  '/assets/screenshots/bank-balances-2.png',
  '/assets/screenshots/bank-balances-3.png',
];

// Six faces of a hexagonal ring, turning one face at a time. Faces pick their screen from the turn
// they show, so the three screens always appear in order and neighbours never match
const FACES = 6;
const FACE_ANGLE = 360 / FACES;
// Distance from the centre to each face, as a fraction of face width
const APOTHEM = 0.5 / Math.tan(Math.PI / FACES);

// Each turn: hold a face in front, then rotate one face to the right
const DWELL = 3.5;
const TURN = 2.4;
const PERIOD = DWELL + TURN;

type SlideCopy = { title: string; description: string };

// Opaque across the front face (centred, --face-w wide), fading to transparent at the viewport edges
const EDGE_FADE =
  'linear-gradient(to right, transparent 0%, black calc(50% - var(--face-w) * 0.8), black calc(50% + var(--face-w) * 0.8), transparent 100%)';

const mod = (n: number, m: number) => ((n % m) + m) % m;

/** The turn a face shows: faces to the left show upcoming turns, faces to the right the ones just shown. */
function turnForFace(face: number, turn: number) {
  const ahead = mod(face - turn, FACES);
  return turn + (ahead > FACES / 2 ? ahead - FACES : ahead);
}

const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

/** Ring angle for a point on the clock: whole turns plus the eased part of the current turn. */
function angleAt(clock: number) {
  const turn = Math.floor(clock / PERIOD);
  const inTurn = clock - turn * PERIOD;
  const moving = Math.min(Math.max((inTurn - DWELL) / TURN, 0), 1);
  return (turn + easeInOut(moving)) * FACE_ANGLE;
}

function RingFace({ src, alt, index, angle }: { src: string; alt: string; index: number; angle: MotionValue<number> }) {
  // How far this face is turned away from the viewer: 0 in front, 1 one face or more away
  const away = useTransform(angle, (a) => {
    const world = (((a - index * FACE_ANGLE) % 360) + 540) % 360 - 180;
    return Math.min(Math.abs(world) / FACE_ANGLE, 1);
  });
  // Side faces fade into the page and take a light tint, so the front screen owns the stage
  const opacity = useTransform(away, [0, 1], [1, 0.85]);
  const shade = useTransform(away, [0, 1], [0, 0.12]);

  return (
    <motion.div
      className="absolute inset-0 [backface-visibility:hidden]"
      style={{ transform: `rotateY(${-index * FACE_ANGLE}deg) translateZ(calc(var(--face-w) * ${APOTHEM}))`, opacity }}
    >
      <div className="relative h-full rounded-xl bg-white p-1.5 ring-1 ring-gray-900/10 shadow-[0_30px_60px_-25px_rgba(22,18,44,0.45)]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top rounded-lg block"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <motion.div className="absolute inset-0 rounded-xl bg-primary-900 pointer-events-none" style={{ opacity: shade }} />
      </div>
    </motion.div>
  );
}

function StepItem({
  slide,
  active,
  progress,
  isRTL,
  onSelect,
}: {
  slide: SlideCopy;
  active: boolean;
  progress: MotionValue<number>;
  isRTL: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active}
      className="group text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm"
    >
      <div className="relative h-[2px] bg-gray-200 overflow-hidden">
        {active && (
          <motion.div
            className={`absolute inset-0 bg-primary-600 ${isRTL ? 'origin-right' : 'origin-left'}`}
            style={{ scaleX: progress }}
          />
        )}
      </div>
      <p
        className={`mt-3 md:mt-4 text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${
          active ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
        }`}
      >
        {slide.title}
      </p>
      {/* Descriptions need room; on phones the active one is shown once, below the rail */}
      <p
        className={`hidden md:block mt-1 text-sm leading-relaxed transition-colors duration-300 ${
          active ? 'text-gray-600' : 'text-gray-400'
        }`}
      >
        {slide.description}
      </p>
    </button>
  );
}

function HexCarousel({ slides, isRTL }: { slides: SlideCopy[]; isRTL: boolean }) {
  const { t } = useTranslation('home');
  // The turn whose face is in front; every face's screen and the active step follow from it
  const [turn, setTurn] = useState(0);
  const active = mod(turn, SLIDES.length);
  const paused = useRef(false);
  const jumping = useRef(false);

  // The clock only advances while not paused, so hovering freezes the ring exactly where it is
  const clock = useMotionValue(0);
  const angle = useTransform(clock, angleAt);
  const ringRotate = useTransform(angle, (a) => `translateZ(calc(var(--face-w) * ${-APOTHEM})) rotateY(${a}deg)`);
  // Fills the active step's bar while its face is held in front
  const progress = useTransform(clock, (c) => {
    const inTurn = c - Math.floor(c / PERIOD) * PERIOD;
    return Math.min(inTurn / DWELL, 1);
  });

  // Rotates for every visitor, including those with reduced motion set (a deliberate product choice)
  useAnimationFrame((_, delta) => {
    if (paused.current || jumping.current) return;
    // Clamp so a backgrounded tab does not skip several faces on return
    clock.set(clock.get() + Math.min(delta, 100) / 1000);
  });

  useMotionValueEvent(angle, 'change', (a) => {
    const next = Math.round(a / FACE_ANGLE);
    setTurn((current) => (current === next ? current : next));
  });

  // Turn forward to the next turn showing this slide
  const select = (index: number) => {
    const currentTurn = Math.round(angle.get() / FACE_ANGLE);
    let target = currentTurn;
    while (mod(target, SLIDES.length) !== index) target += 1;
    jumping.current = true;
    animate(clock, target * PERIOD, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        jumping.current = false;
      },
    });
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <Container>
        <div className="text-center mb-6 md:mb-12 lg:mb-14">
          <h2 className="mb-3">{t('productShowcase.title')}</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">{t('productShowcase.description')}</p>
        </div>

        {/* Full-bleed band; the fade starts at the front face's edges at every width, so the front
            screen stays fully visible while the side faces dissolve toward the viewport edge */}
        <div
          className="relative mx-[calc(50%-50vw)] py-4 md:py-6 [--face-w:92vw] md:[--face-w:82vw] lg:[--face-w:min(72vw,72rem)]"
          style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
          // Hovering anywhere on the ring, side screens included, freezes it where it is
          onPointerEnter={() => (paused.current = true)}
          onPointerLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)}
          onBlur={() => (paused.current = false)}
        >
          <div className="relative mx-auto" style={{ width: 'var(--face-w)' }} dir="ltr">
            {/* Soft floor glow that grounds the ring */}
            <div
              aria-hidden
              className="absolute -inset-x-8 md:-inset-x-24 -bottom-8 md:-bottom-14 h-16 md:h-28 rounded-[50%] bg-primary-500/20 blur-2xl md:blur-3xl pointer-events-none"
            />

            {/* Perspective must sit on the ring's direct parent, or the faces render flat */}
            <div
              className="relative aspect-[1920/896]"
              style={{ perspective: 'calc(var(--face-w) * 1.5)', perspectiveOrigin: '50% 50%' }}
            >
              <motion.div className="absolute inset-0" style={{ transform: ringRotate, transformStyle: 'preserve-3d' }}>
                {Array.from({ length: FACES }, (_, index) => {
                  const slide = mod(turnForFace(index, turn), SLIDES.length);
                  return (
                    <RingFace
                      key={index}
                      index={index}
                      angle={angle}
                      src={SLIDES[slide]}
                      alt={`${t('platformOverview.screenshotCaption')}: ${slides[slide]?.title ?? ''}`}
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 md:mt-14 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-10" style={{ width: 'min(100%, 62rem)' }}>
          {slides.map((slide, index) => (
            <StepItem
              key={slide.title}
              slide={slide}
              active={active === index}
              progress={progress}
              isRTL={isRTL}
              onSelect={() => select(index)}
            />
          ))}
        </div>
        <p className="md:hidden mt-4 text-sm text-gray-600 leading-relaxed text-center min-h-[2.75rem]" aria-live="polite">
          {slides[active]?.description}
        </p>
      </Container>
    </section>
  );
}

export default function ProductShowcase() {
  const { t, i18n } = useTranslation('home');
  const slides = t('productShowcase.slides', { returnObjects: true }) as SlideCopy[];
  const isRTL = i18n.language === 'ar';

  return <HexCarousel slides={slides} isRTL={isRTL} />;
}
