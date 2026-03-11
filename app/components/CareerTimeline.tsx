import { careerHighlights } from '../data/career';
import SectionHeader from './SectionHeader';

export default function CareerTimeline() {
  return (
    <section className="py-12">
      <SectionHeader telemetry="// CAREER.LOG" title="Career Timeline" />
      <ul className="space-y-8">
        {careerHighlights.map((entry, i) => {
          const isCurrent = entry.endDate === 'Present';
          return (
            <li
              key={i}
              className={`border-l-2 pl-6 ${isCurrent ? 'border-accent' : 'border-border-panel'}`}
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-medium text-text-primary">{entry.title}</span>
                <span className="text-text-secondary">·</span>
                <span className="text-text-secondary">{entry.company}</span>
                {entry.location && (
                  <>
                    <span className="text-text-secondary">·</span>
                    <span className="text-text-secondary text-sm">{entry.location}</span>
                  </>
                )}
                {isCurrent && (
                  <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 rounded-sm px-1.5 py-0.5 ml-1">
                    CURRENT
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs font-mono text-text-secondary">
                {entry.startDate} — {entry.endDate}
              </p>
              {entry.description && (
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {entry.description}
                </p>
              )}
              {entry.tags && entry.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-text-secondary border border-border-panel rounded-sm px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
