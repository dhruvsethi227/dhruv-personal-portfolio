'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import HighlightCard from '../components/HighlightCard';
import HighlightModal from '../components/HighlightModal';
import { highlights, categoryLabels, type Highlight, type HighlightCategory } from '../data/highlights';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const tabs = [
  { key: 'all' as const, label: 'All' },
  { key: 'bangers' as const, label: categoryLabels.bangers },
  { key: 'skills' as const, label: categoryLabels.skills },
  { key: 'speed_boost' as const, label: categoryLabels.speed_boost },
];

export default function HighlightsPage() {
  const [selected, setSelected] = useState<Highlight | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | HighlightCategory>('all');

  const filtered = activeCategory === 'all'
    ? highlights
    : highlights.filter(h => h.category === activeCategory);

  const gridCols = filtered.length >= 6
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2';

  return (
    <PageShell>
      <SectionHeader title="Highlights" />
      <p className="font-mono text-xs text-text-label uppercase tracking-widest mb-6">
        On the pitch · Soccer highlights
      </p>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveCategory(tab.key)}
            className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded border transition-colors ${
              activeCategory === tab.key
                ? 'border-accent text-accent bg-accent/10'
                : 'border-border-panel text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
            {tab.key !== 'all' && (
              <span className="ml-1.5 opacity-60">
                ({highlights.filter(h => h.category === tab.key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {highlights.length === 0 ? (
        <div className="border border-border-panel border-dashed rounded p-12 text-center text-text-secondary font-mono text-sm">
          Highlights coming soon
        </div>
      ) : filtered.length === 0 ? (
        <div className="border border-border-panel border-dashed rounded p-12 text-center text-text-secondary font-mono text-sm">
          No clips in this category yet
        </div>
      ) : (
        <motion.div className={`grid ${gridCols} gap-6`} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((h) => (
              <motion.div
                key={h.id}
                variants={cardItem}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                layout
              >
                <HighlightCard
                  highlight={h}
                  onClick={() => setSelected(h)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <HighlightModal highlight={selected} onClose={() => setSelected(null)} />
    </PageShell>
  );
}
