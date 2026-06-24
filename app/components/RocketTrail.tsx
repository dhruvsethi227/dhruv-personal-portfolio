'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { RefObject } from 'react';

type RocketTrailProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export default function RocketTrail({ sectionRef }: RocketTrailProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // As user scrolls through section: rocket moves from bottom to top
  const y = useTransform(scrollYProgress, [0, 1], ['90%', '0%']);

  return (
    <div className="absolute left-[-2rem] inset-y-0 pointer-events-none hidden md:block">
      {/* Dashed exhaust trail */}
      <div
        className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(245,158,11,0.15) 20%, rgba(245,158,11,0.15) 80%, transparent)',
          maskImage: 'repeating-linear-gradient(to bottom, black 0, black 6px, transparent 6px, transparent 12px)',
          WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 6px, transparent 6px, transparent 12px)',
        }}
      />
      {/* Rocket */}
      <motion.div
        style={{ y, position: 'absolute', left: '50%', x: '-50%' }}
      >
        <span className="text-base select-none" role="img" aria-label="rocket">🚀</span>
      </motion.div>
    </div>
  );
}
