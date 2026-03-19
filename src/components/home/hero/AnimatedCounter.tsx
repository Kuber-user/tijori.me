import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*?)(\d+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export default function AnimatedCounter({ value, label, duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayNumber, setDisplayNumber] = useState(0);
  const { prefix, number: target, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView || target === 0) return;

    const startTime = performance.now();
    let rafId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNumber(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white mb-1 ltr-nums">
        {prefix}{isInView ? displayNumber : 0}{suffix}
      </div>
      <div className="text-xs md:text-sm text-white/50">{label}</div>
    </div>
  );
}
