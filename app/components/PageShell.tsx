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
        {/* Stars */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${(i * 7 + 3) % 100}%`,
                top: `${(i * 11 + 5) % 100}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                opacity: 0.3 + (i % 5) * 0.1,
              }}
            />
          ))}
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {children}
      </main>
    </div>
  );
}
