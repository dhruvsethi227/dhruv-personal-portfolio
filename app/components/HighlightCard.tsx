'use client';

import { motion } from 'framer-motion';
import type { Highlight } from '../data/highlights';
import { categoryLabels } from '../data/highlights';

interface HighlightCardProps {
  highlight: Highlight;
  onClick: () => void;
}

export default function HighlightCard({ highlight, onClick }: HighlightCardProps) {
  return (
    <motion.button
      type="button"
      aria-label={highlight.title}
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded border border-border-panel bg-surface cursor-pointer"
      whileHover={{
        borderColor: '#e8185a',
        boxShadow: '0 0 12px rgba(232, 24, 90, 0.4), 0 0 24px rgba(232, 24, 90, 0.15)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-video w-full relative">
        <img
          src={highlight.thumbnailUrl}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Play overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="font-mono text-sm text-text-primary tracking-widest">▶ PLAY</span>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-3 py-2 flex items-center justify-between gap-2">
        <p className="font-mono text-xs text-text-primary truncate">{highlight.title}</p>
        <span className="font-mono text-xs text-text-label uppercase tracking-widest shrink-0">
          {categoryLabels[highlight.category]}
        </span>
      </div>
    </motion.button>
  );
}
