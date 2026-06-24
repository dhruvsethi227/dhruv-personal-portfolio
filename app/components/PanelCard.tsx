import { ReactNode } from 'react';

type PanelCardProps = {
  children: ReactNode;
  className?: string;
};

export default function PanelCard({ children, className = '' }: PanelCardProps) {
  return (
    <div
      className={`bg-surface border border-border-panel rounded p-6 ${className}`}
    >
      {children}
    </div>
  );
}
