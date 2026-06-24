export default function OrbitAnimation() {
  const cx = 150;
  const cy = 150;
  const accent = 'rgba(232,24,90,';

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
      {/* Radar sweep — rotating conic gradient */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 80%, ${accent}0.18) 90%, ${accent}0.04) 100%)`,
          animation: 'orbit 4s linear infinite',
          maskImage: 'radial-gradient(circle, black 99%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 99%, transparent 100%)',
        }}
      />

      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Static rings */}
        <circle cx={cx} cy={cy} r={120} fill="none" stroke={`${accent}0.12)`} strokeWidth="1" />
        <circle cx={cx} cy={cy} r={80}  fill="none" stroke={`${accent}0.18)`} strokeWidth="1" />
        <circle cx={cx} cy={cy} r={42}  fill="none" stroke={`${accent}0.25)`} strokeWidth="1" />

        {/* Tick marks on outer ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = cx + 116 * Math.cos(rad);
          const y1 = cy + 116 * Math.sin(rad);
          const x2 = cx + 122 * Math.cos(rad);
          const y2 = cy + 122 * Math.sin(rad);
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`${accent}0.3)`} strokeWidth="1.5" />;
        })}

        {/* Orbiting dot — outer ring, slow */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'orbit 16s linear infinite' }}>
          <circle cx={cx + 120} cy={cy} r="4" fill={`${accent}0.9)`} />
          <circle cx={cx + 120} cy={cy} r="4" fill={`${accent}0.4)`} className="animate-ping" />
        </g>

        {/* Orbiting dot — middle ring, faster, reverse */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'orbit 10s linear infinite reverse' }}>
          <circle cx={cx + 80} cy={cy} r="3" fill={`${accent}0.7)`} />
        </g>

        {/* Orbiting dot — inner ring, medium */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'orbit 6s linear infinite' }}>
          <circle cx={cx + 42} cy={cy} r="2" fill={`${accent}0.6)`} />
        </g>

        {/* Center ping pulse */}
        <circle cx={cx} cy={cy} r="6" fill={`${accent}0.15)`} className="animate-ping" />
        {/* Center dot */}
        <circle cx={cx} cy={cy} r="4" fill={`${accent}1)`} className="animate-pulse" />
      </svg>
    </div>
  );
}
