'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Fixed background layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Twinkling stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white star-twinkle"
              style={{
                left: `${(i * 7 + 3) % 100}%`,
                top: `${(i * 11 + 5) % 100}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                opacity: 0.3 + (i % 5) * 0.1,
                '--twinkle-duration': `${2 + (i % 4)}s`,
                '--twinkle-delay': `${(i * 0.3) % 3}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid" />
        {/* Scan line */}
        <div
          style={{
            position: 'absolute',
            insetInline: 0,
            height: '2px',
            background:
              'linear-gradient(to right, transparent, rgba(245,158,11,0.08), transparent)',
            animation: 'scanline 8s linear infinite',
            pointerEvents: 'none',
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {children}
      </main>
    </div>
  );
}
