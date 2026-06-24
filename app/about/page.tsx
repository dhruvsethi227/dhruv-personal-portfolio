'use client';

import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import PanelCard from '../components/PanelCard';
import CareerTimeline from '../components/CareerTimeline';
import { aboutData } from '../data/about';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-20 pb-4">
        <SectionHeader title="About" />

        <motion.div {...fadeUp}>
          <div className="relative overflow-hidden rounded border border-border-panel bg-surface p-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-accent/70" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-accent/[0.08] to-transparent pointer-events-none" />
            <div className="relative space-y-4">
              {aboutData.bio.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

      </section>

      <CareerTimeline />

      <section className="py-10">
        <h3 className="text-2xl font-bold text-text-primary mb-4">Interests</h3>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" {...fadeUp}>
          {aboutData.interests.map((interest) => (
            <PanelCard key={interest.label}>
              <div className="flex items-start gap-3">
                {interest.icon && (
                  <span className="text-xl leading-none mt-0.5">{interest.icon}</span>
                )}
                <div>
                  <h4 className="font-medium text-text-primary text-sm">{interest.label}</h4>
                  <p className="mt-1 text-text-secondary text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </PanelCard>
          ))}
        </motion.div>
      </section>

      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono text-center">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
  );
}
