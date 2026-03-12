import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import PanelCard from '../components/PanelCard';
import CareerTimeline from '../components/CareerTimeline';
import { aboutData } from '../data/about';

export default function AboutPage() {
  return (
    <PageShell>
      <section className="py-12">
        <SectionHeader telemetry="// PROFILE.DAT" title="About" />

        <div className="space-y-4 mb-12">
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-2">
          <span className="font-mono text-xs text-text-label uppercase tracking-widest">
            // INTERESTS.LOG
          </span>
          <h3 className="text-lg font-semibold text-text-primary mt-1 mb-6">Interests</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      </section>

      <CareerTimeline />

      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
  );
}
