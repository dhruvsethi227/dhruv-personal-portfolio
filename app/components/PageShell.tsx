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
                width: `${(i % 4) + 2}px`,
                height: `${(i % 4) + 2}px`,
                opacity: 0.5 + (i % 4) * 0.1,
                '--twinkle-duration': `${1.5 + (i % 3)}s`,
                '--twinkle-delay': `${(i * 0.25) % 2.5}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        {/* Left rockets — direct children of fixed inset-0 parent */}
        {[0, -4, -8].map((delay, i) => (
          <div
            key={`left-${i}`}
            className="rocket flex flex-col items-center text-accent font-mono text-xs leading-none select-none"
            style={{
              position: 'absolute',
              left: '1rem',
              bottom: 0,
              opacity: 0.55,
              animation: 'rocketfly 12s linear infinite',
              animationDelay: `${delay}s`,
            }}
          >
            <pre>{` /\\\n/  \\\n|  |\n ||\n ||`}</pre>
            <div style={{ width: 1, height: 60, borderLeft: '1px dashed currentColor', opacity: 0.5 }} />
          </div>
        ))}
        {/* Right rockets */}
        {[-2, -6, -10].map((delay, i) => (
          <div
            key={`right-${i}`}
            className="rocket flex flex-col items-center text-accent font-mono text-xs leading-none select-none"
            style={{
              position: 'absolute',
              right: '1rem',
              bottom: 0,
              opacity: 0.55,
              animation: 'rocketfly 12s linear infinite',
              animationDelay: `${delay}s`,
            }}
          >
            <pre>{` /\\\n/  \\\n|  |\n ||\n ||`}</pre>
            <div style={{ width: 1, height: 60, borderLeft: '1px dashed currentColor', opacity: 0.5 }} />
          </div>
        ))}
        {/* Scan line */}
        <div
          style={{
            position: 'absolute',
            insetInline: 0,
            height: '3px',
            background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.35), transparent)',
            boxShadow: '0 0 8px rgba(245,158,11,0.25)',
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
