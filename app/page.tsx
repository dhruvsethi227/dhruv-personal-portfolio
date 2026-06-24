import PageShell from './components/PageShell';
import HeroSection from './components/HeroSection';
import SideRockets from './components/SideRockets';

export default function Home() {
  return (
    <>
    <SideRockets />
    <PageShell>
      <HeroSection />
      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono text-center">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
    </>
  );
}
