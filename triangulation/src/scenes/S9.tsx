import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {COLORS, S9, SCENES} from '../constants';
import {clamp, fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';

export const S9Scene: React.FC = () => {
  const f = useCurrentFrame();
  const cx = 470, cy = 400, R = 300;
  const dash = interpolate(f, [20, 130], [600, 0], clamp);
  return (
    <Scene dur={SCENES.s9.dur} dark kicker={S9.kicker}>
      <Split dark lines={S9.left}>
        <svg width={940} height={800}>
          {/* fibers: node↔node cross-links */}
          {S9.nodes.map((_, i) =>
            S9.nodes.map((__, j) => {
              if (j <= i) return null;
              const a1 = -Math.PI / 2 + (i * 2 * Math.PI) / S9.nodes.length;
              const a2 = -Math.PI / 2 + (j * 2 * Math.PI) / S9.nodes.length;
              return (
                <line key={`${i}-${j}`} x1={cx + Math.cos(a1) * R} y1={cy + Math.sin(a1) * R} x2={cx + Math.cos(a2) * R} y2={cy + Math.sin(a2) * R} stroke="rgba(240,78,35,0.25)" strokeWidth={2} strokeDasharray={600} strokeDashoffset={dash} />
              );
            })
          )}
          {/* spokes to the Brain */}
          {S9.nodes.map((n, i) => {
            const a = -Math.PI / 2 + (i * 2 * Math.PI) / S9.nodes.length;
            const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
            const pulse = 1 + 0.06 * Math.sin(f / 6 + i);
            return (
              <g key={n} opacity={fadeIn(f, 10 + i * 8)}>
                <line x1={cx} y1={cy} x2={x} y2={y} stroke={COLORS.accent} strokeWidth={3.5} strokeDasharray={600} strokeDashoffset={dash} />
                <circle cx={x} cy={y} r={54 * pulse} fill={COLORS.darkPanel} stroke={COLORS.accent} strokeWidth={3} />
                <text x={x} y={y + 7} textAnchor="middle" fontSize={n.length > 10 ? 16 : 20} fontWeight={750} fill="#fff" fontFamily="Helvetica Neue, Arial">{n}</text>
              </g>
            );
          })}
          {/* the Brain */}
          <g opacity={fadeIn(f, 6)} transform={`translate(${cx},${cy}) scale(${0.8 + 0.2 * pop(f, 6)})`}>
            <circle r={92 + 5 * Math.sin(f / 5)} fill={COLORS.accent} opacity={0.18} />
            <circle r={78} fill={COLORS.accent} />
            <text y={9} textAnchor="middle" fontSize={24} fontWeight={800} fill="#fff" fontFamily="Helvetica Neue, Arial">{S9.center}</text>
          </g>
        </svg>
      </Split>
    </Scene>
  );
};
