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
      <section className="py-20">
        <SectionHeader title="About" />

        <motion.div className="space-y-4 mb-12" {...fadeUp}>
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <h3 className="text-2xl font-bold text-text-primary mb-6">Interests</h3>

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

      <CareerTimeline />

      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
  );
}
