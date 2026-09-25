'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Highlight } from '../data/highlights';

interface HighlightModalProps {
  highlight: Highlight | null;
  onClose: () => void;
}

export default function HighlightModal({ highlight, onClose }: HighlightModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Escape to close
  useEffect(() => {
    if (!highlight) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [highlight, onClose]);

  // Scroll lock
  useEffect(() => {
    if (!highlight) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [highlight]);

  // Auto-focus close button
  useEffect(() => {
    if (highlight) closeBtnRef.current?.focus();
  }, [highlight]);

  return (
    <AnimatePresence mode="wait">
      {highlight && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${highlight.id}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl mx-4 rounded border border-border-panel bg-surface overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-panel">
              <p id={`modal-title-${highlight.id}`} className="font-mono text-sm text-text-primary">
                {highlight.title}
                {highlight.date && (
                  <span className="text-text-secondary ml-2">{highlight.date}</span>
                )}
              </p>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close video"
                onClick={onClose}
                className="font-mono text-text-secondary hover:text-text-primary transition-colors text-lg leading-none ml-4"
              >
                ✕
              </button>
            </div>

            {/* Video */}
            <video
              key={highlight.id}
              src={highlight.videoUrl}
              poster={highlight.thumbnailUrl}
              controls
              preload="none"
              playsInline
              className="w-full aspect-video bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
