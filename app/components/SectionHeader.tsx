type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
    </div>
  );
}
