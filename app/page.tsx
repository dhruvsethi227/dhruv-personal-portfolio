import PageShell from './components/PageShell';
import HeroSection from './components/HeroSection';
import CareerTimeline from './components/CareerTimeline';
import AskDhruv from './components/AskDhruv';

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <CareerTimeline />
      <AskDhruv />
      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
  );
}
