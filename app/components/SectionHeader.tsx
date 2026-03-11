type SectionHeaderProps = {
  telemetry: string;
  title: string;
};

export default function SectionHeader({ telemetry, title }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <span className="font-mono text-xs text-text-label uppercase tracking-widest">
        {telemetry}
      </span>
      <h2 className="text-xl font-semibold text-text-primary mt-1">{title}</h2>
    </div>
  );
}
