'use client';

import { useState, useEffect } from 'react';

export default function OrbitAnimation() {
  const cx = 150;
  const cy = 150;
  const accent = 'rgba(232,24,90,';
  const [sweepAngle, setSweepAngle] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      setSweepAngle(progress * 360);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Radar sweep — scroll-driven rotation */}
        <g transform={`translate(${cx}, ${cy})`}>
          <g style={{ transform: `rotate(${sweepAngle}deg)` }}>
            <line x1={0} y1={0} x2={0} y2={-120} stroke={`${accent}0.06)`} strokeWidth="40" strokeLinecap="round" />
            <line x1={0} y1={0} x2={0} y2={-120} stroke={`${accent}0.14)`} strokeWidth="18" strokeLinecap="round" />
            <line x1={0} y1={0} x2={0} y2={-120} stroke={`${accent}0.9)`}  strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>

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
