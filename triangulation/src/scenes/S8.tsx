import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S8, SCENES} from '../constants';
import {fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Badge} from '../components/ui';

const AD_COLORS = [COLORS.adA, COLORS.adB, COLORS.adC, COLORS.adD];

export const S8Scene: React.FC = () => {
  const f = useCurrentFrame();
  const win = pop(f, 120);
  return (
    <Scene dur={SCENES.s8.dur} dark kicker={S8.kicker}>
      <Split dark lines={S8.left}>
        <div style={{display: 'flex', gap: 14, marginBottom: 10, marginLeft: 190}}>
          {S8.gridCols.map((c, i) => (
            <div key={c} style={{width: 168, textAlign: 'center', fontSize: 21, fontWeight: 750, color: AD_COLORS[i], opacity: fadeIn(f, 10 + i * 6)}}>{c}</div>
          ))}
        </div>
        {S8.gridRows.map((r, ri) => (
          <div key={r} style={{display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14}}>
            <div style={{width: 176, fontSize: 21, fontWeight: 700, color: 'rgba(255,255,255,0.75)', textAlign: 'right', opacity: fadeIn(f, 14 + ri * 6)}}>{r}</div>
            {S8.gridCols.map((_, ci) => {
              const isWin = ri === S8.winner.r && ci === S8.winner.c;
              const d = 26 + (ri * 4 + ci) * 5;
              return (
                <div key={ci} style={{width: 168, height: 108, borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: `3px solid ${isWin && f > 118 ? COLORS.accent : 'rgba(255,255,255,0.12)'}`, opacity: fadeIn(f, d), transform: `scale(${0.8 + 0.2 * pop(f, d)})`, position: 'relative', overflow: 'hidden', boxShadow: isWin ? `0 0 ${30 * win}px ${COLORS.accent}` : 'none'}}>
                  {/* color-coded mini ad */}
                  <div style={{height: 34, background: AD_COLORS[ci]}} />
                  <div style={{padding: 8}}>
                    <div style={{height: 8, width: '80%', background: 'rgba(255,255,255,0.35)', borderRadius: 4, marginBottom: 6}} />
                    <div style={{height: 8, width: '55%', background: 'rgba(255,255,255,0.2)', borderRadius: 4}} />
                    <div style={{marginTop: 10, height: 18, width: 66, background: AD_COLORS[ci], borderRadius: 5}} />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        <div style={{display: 'flex', gap: 18, marginTop: 16, alignItems: 'center'}}>
          <div style={{opacity: fadeIn(f, 90), transform: `rotate(-3deg) scale(${0.8 + 0.2 * pop(f, 90)})`}}>
            <Badge style={{background: COLORS.accent, fontSize: 24}}>{S8.patent}</Badge>
          </div>
          <div style={{fontSize: 24, color: 'rgba(255,255,255,0.7)', fontWeight: 650, opacity: fadeIn(f, 130)}}>{S8.fast}</div>
        </div>
      </Split>
    </Scene>
  );
};
