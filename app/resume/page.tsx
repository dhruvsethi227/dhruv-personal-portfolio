'use client';

import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import PanelCard from '../components/PanelCard';
import { resumeData } from '../data/resume';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function ResumePage() {
  return (
    <PageShell>
      <section className="py-20">
        <SectionHeader title="Resume" />

        {/* Download / View buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={resumeData.pdfPath}
            download="Dhruv_Sethi_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-sm bg-accent text-background font-medium text-sm px-5 py-2.5 glow-accent hover:bg-amber-400 transition-colors"
          >
            ↓ Download PDF
          </a>
          <a
            href={resumeData.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border-panel text-text-primary text-sm px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
          >
            ↗ View PDF
          </a>
        </div>

        {/* Education */}
        <motion.div className="mb-10" {...fadeUp}>
          <h3 className="text-2xl font-bold text-text-primary mb-4">Education</h3>
          <div className="space-y-3">
            {resumeData.education.map((edu, i) => (
              <PanelCard key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-medium text-text-primary">{edu.degree}</span>
                  <span className="font-mono text-xs text-text-secondary">{edu.year}</span>
                </div>
                <p className="text-text-secondary text-sm mt-0.5">{edu.institution}</p>
                {edu.notes && (
                  <p className="text-text-secondary text-sm mt-2">{edu.notes}</p>
                )}
              </PanelCard>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div className="mb-10" {...fadeUp}>
          <h3 className="text-2xl font-bold text-text-primary mb-4">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resumeData.skillGroups.map((group) => (
              <PanelCard key={group.label}>
                <h4 className="text-xs text-text-label uppercase tracking-widest mb-3">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-text-secondary border border-border-panel rounded-sm px-1.5 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </PanelCard>
            ))}
          </div>
        </motion.div>

        {/* Certifications (optional) */}
        {resumeData.certifications && resumeData.certifications.length > 0 && (
          <motion.div className="mb-10" {...fadeUp}>
            <h3 className="text-2xl font-bold text-text-primary mb-4">Certifications</h3>
            <div className="space-y-3">
              {resumeData.certifications.map((cert, i) => (
                <PanelCard key={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium text-text-primary">{cert.name}</span>
                    {cert.year && (
                      <span className="font-mono text-xs text-text-secondary">{cert.year}</span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm mt-0.5">{cert.issuer}</p>
                </PanelCard>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
  );
}
