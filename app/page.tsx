import Navbar from './components/Navbar';
import { careerHighlights } from './data/career';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Background: soccer, aerospace, software – subtle, not forefront */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Aerospace: very faint stars */}
        <div className="absolute inset-0 opacity-[0.12]">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${(i * 7 + 3) % 100}%`,
                top: `${(i * 11 + 5) % 100}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
              }}
            />
          ))}
        </div>
        {/* Soccer: faint field stripes (horizontal bands) */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              to bottom,
              transparent 0,
              transparent 60px,
              rgba(34, 197, 94, 0.6) 60px,
              rgba(34, 197, 94, 0.6) 62px
            )`,
          }}
        />
        {/* Software: very subtle grid / code-like lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Hero – barebones */}
        <section id="home" className="py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Dhruv Sethi
          </h1>
          <p className="mt-2 text-slate-400">
            Software Engineer in aerospace. Passionate about building systems that matter.
          </p>
        </section>

        {/* Career Highlights – from data (LinkedIn-style) */}
        <section id="career-highlights" className="py-12 scroll-mt-14">
          <h2 className="text-xl font-semibold text-white mb-6">Career Highlights</h2>
          <ul className="space-y-8">
            {careerHighlights.map((entry, i) => (
              <li key={i} className="border-l-2 border-slate-600 pl-6">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-medium text-white">{entry.title}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">{entry.company}</span>
                  {entry.location && (
                    <>
                      <span className="text-slate-500">·</span>
                      <span className="text-slate-500 text-sm">{entry.location}</span>
                    </>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {entry.startDate} – {entry.endDate}
                </p>
                {entry.description && (
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    {entry.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Resume – barebones */}
        <section id="resume" className="py-12 scroll-mt-14">
          <h2 className="text-xl font-semibold text-white mb-4">Resume</h2>
          <p className="text-slate-400 text-sm mb-4">
            Download or view my resume.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 transition-colors"
            >
              Download PDF
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              View online
            </a>
          </div>
        </section>

        <footer className="pt-16 border-t border-white/10 text-slate-500 text-sm">
          © {new Date().getFullYear()} Dhruv Sethi
        </footer>
      </main>
    </div>
  );
}
