import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, H, RAIL} from '../constants';
import {fadeIn, rise} from '../helpers';

// Split-screen: narrative text left (on the connective thread), artifacts right.
export const Split: React.FC<{
  lines: string[];
  dark?: boolean;
  footnote?: string;
  children: React.ReactNode;
}> = ({lines, dark, footnote, children}) => {
  const f = useCurrentFrame();
  const ink = dark ? '#FFFFFF' : COLORS.ink;
  const soft = dark ? 'rgba(255,255,255,0.55)' : COLORS.inkSoft;
  return (
    <>
      <div style={{position: 'absolute', left: RAIL.x, top: 0, width: 3, height: H, background: dark ? COLORS.darkLine : COLORS.line}} />
      <div style={{position: 'absolute', left: RAIL.x - 9, top: 208, width: 21, height: 21, borderRadius: 12, background: COLORS.accent, boxShadow: `0 0 0 ${6 * fadeIn(f, 6)}px ${COLORS.accentSoft}`}} />
      <div style={{position: 'absolute', left: RAIL.x + 52, top: 176, width: RAIL.width - 52}}>
        {lines.map((t, i) => (
          <div key={i} style={{fontSize: 42, lineHeight: 1.3, fontWeight: i === 0 ? 750 : 500, color: i === 0 ? ink : soft, marginBottom: 18, opacity: fadeIn(f, 10 + i * 12), transform: `translateY(${rise(f, 10 + i * 12)}px)`}}>
            {t}
          </div>
        ))}
        {footnote ? (
          <div style={{marginTop: 26, fontSize: 24, color: COLORS.accent, fontWeight: 650, opacity: fadeIn(f, 10 + lines.length * 12 + 8)}}>
            {footnote}
          </div>
        ) : null}
      </div>
      <div style={{position: 'absolute', left: RAIL.width + 140, right: 90, top: 140, bottom: 90}}>{children}</div>
    </>
  );
};
