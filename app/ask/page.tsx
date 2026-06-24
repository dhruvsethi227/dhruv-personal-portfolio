import PageShell from '../components/PageShell';
import AskDhruv from '../components/AskDhruv';

export default function AskPage() {
  return (
    <PageShell>
      <AskDhruv />
      <footer className="pt-16 border-t border-border-panel text-text-secondary text-sm font-mono text-center">
        © {new Date().getFullYear()} Dhruv Sethi
      </footer>
    </PageShell>
  );
}
