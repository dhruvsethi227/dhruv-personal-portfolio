'use client';

import Link from 'next/link';
import { motion, type Variants, type Easing } from 'framer-motion';
import TypewriterText from './TypewriterText';

const ease: Easing = 'easeOut';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function HeroSection() {
  return (
    <motion.section
      className="py-20 md:py-32 flex flex-col items-center text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Profile picture */}
      <motion.div variants={item} className="mb-8">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-accent/40 bg-surface flex items-center justify-center overflow-hidden panel-brackets">
          {/* Replace src with your actual photo */}
          <span className="font-mono text-3xl text-text-secondary select-none">DS</span>
        </div>
      </motion.div>

      <motion.p
        variants={item}
        className="font-mono text-xs text-text-label uppercase tracking-widest mb-4"
      >
        // SYSTEM.INIT
      </motion.p>

      <motion.h1
        variants={item}
        className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight"
      >
        Dhruv Sethi
      </motion.h1>

      <motion.p variants={item} className="mt-4 text-xl text-accent font-mono">
        <TypewriterText text="Software Engineer · Aerospace" delay={600} />
      </motion.p>

      <motion.p
        variants={item}
        className="mt-5 text-text-secondary max-w-md leading-relaxed"
      >
        Building software that connects the physical and digital worlds. Aerospace systems, developer tooling, and the occasional soccer deep-dive.
      </motion.p>

      <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-sm bg-accent text-background font-medium text-sm px-5 py-2.5 glow-accent hover:bg-amber-400 transition-colors"
        >
          About Me →
        </Link>
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-sm border border-border-panel text-text-primary text-sm px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
        >
          Resume ↗
        </Link>
      </motion.div>
    </motion.section>
  );
}
