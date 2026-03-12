export default function SideRockets() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {[0, -4, -8].map((delay, i) => (
        <div
          key={`left-${i}`}
          className="rocket flex flex-col items-center text-accent font-mono text-xs leading-none select-none"
          style={{
            position: 'absolute',
            left: '1rem',
            bottom: 0,
            opacity: 0.55,
            animation: 'rocketfly 12s linear infinite',
            animationDelay: `${delay}s`,
          }}
        >
          <pre>{` /\\\n/  \\\n|  |\n ||\n ||`}</pre>
          <div style={{ width: 1, height: 60, borderLeft: '1px dashed currentColor', opacity: 0.5 }} />
        </div>
      ))}
      {[-2, -6, -10].map((delay, i) => (
        <div
          key={`right-${i}`}
          className="rocket flex flex-col items-center text-accent font-mono text-xs leading-none select-none"
          style={{
            position: 'absolute',
            right: '1rem',
            bottom: 0,
            opacity: 0.55,
            animation: 'rocketfly 12s linear infinite',
            animationDelay: `${delay}s`,
          }}
        >
          <pre>{` /\\\n/  \\\n|  |\n ||\n ||`}</pre>
          <div style={{ width: 1, height: 60, borderLeft: '1px dashed currentColor', opacity: 0.5 }} />
        </div>
      ))}
    </div>
  );
}
