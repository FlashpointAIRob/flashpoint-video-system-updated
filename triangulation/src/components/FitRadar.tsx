import React from 'react';
import {interpolate} from 'remotion';
import {COLORS, S10} from '../constants';
import {clamp} from '../helpers';

// The fit-score radar — matches the reference graphic:
// 3 axes (Demographic / Attribute / Category), gridlines 0–100 in 25s,
// light web, orange stroke + translucent fill. The shaded area animates
// along the axes between value sets A and B.
export const FitRadar: React.FC<{f: number; morphStart: number; size?: number}> = ({f, morphStart, size = 460}) => {
  const cx = size / 2, cy = size / 2 + 14, R = size / 2 - 58;
  const axes = S10.radarAxes;
  const t = interpolate(f, [morphStart, morphStart + 40], [0, 1], clamp);
  const vals = S10.radarA.map((a, i) => a + (S10.radarB[i] - a) * t);
  const pt = (i: number, r: number) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
    return [cx + Math.cos(ang) * r, cy + Math.sin(ang) * r] as const;
  };
  const poly = (rs: number[]) => rs.map((r, i) => pt(i, (r / 100) * R).join(',')).join(' ');
  const grow = interpolate(f, [6, 34], [0, 1], clamp);
  return (
    <svg width={size} height={size}>
      {[100, 75, 50, 25].map((g) => (
        <polygon key={g} points={poly([g, g, g])} fill="none" stroke="#DDD6CC" strokeWidth={2} />
      ))}
      {axes.map((_, i) => {
        const [x, y] = pt(i, R);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#DDD6CC" strokeWidth={2} />;
      })}
      <polygon points={poly(vals.map((v) => v * grow))} fill="rgba(240,78,35,0.22)" stroke={COLORS.accent} strokeWidth={3.5} strokeLinejoin="round" />
      {axes.map((a, i) => {
        const [x, y] = pt(i, R + 34);
        return (
          <text key={a} x={x} y={y + (i === 0 ? -4 : 10)} textAnchor={i === 0 ? 'middle' : i === 1 ? 'start' : 'end'} fontSize={24} fontWeight={700} fill={COLORS.ink} fontFamily="Helvetica Neue, Arial">
            {a}
          </text>
        );
      })}
      {[0, 25, 50, 75, 100].map((v) => (
        <text key={v} x={cx + 10} y={cy - (v / 100) * R + 6} fontSize={17} fill={COLORS.inkSoft} fontFamily="Helvetica Neue, Arial">
          {v}
        </text>
      ))}
    </svg>
  );
};
