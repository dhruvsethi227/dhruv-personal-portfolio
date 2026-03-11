import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <p className="font-mono text-xs text-text-label uppercase tracking-widest mb-4">
        // SYSTEM.INIT
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight">
        Dhruv Sethi
      </h1>
      <p className="mt-3 text-lg text-accent font-mono">
        Software Engineer · Aerospace
      </p>
      <p className="mt-4 text-text-secondary max-w-lg leading-relaxed">
        Building software that connects the physical and digital worlds. Aerospace systems, developer tooling, and the occasional soccer deep-dive.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
