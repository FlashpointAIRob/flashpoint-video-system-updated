import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S12, SCENES, W} from '../constants';
import {fadeIn, pop, rise} from '../helpers';
import {Scene} from '../components/Scene';

export const S12Scene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={SCENES.s12.dur} dark>
      <div style={{position: 'absolute', top: 300, width: W, textAlign: 'center'}}>
        <div style={{fontSize: 46, fontWeight: 800, color: '#fff', opacity: fadeIn(f, 6)}}>{S12.word}</div>
        <div style={{fontSize: 130, fontWeight: 800, letterSpacing: -3, color: COLORS.accent, opacity: fadeIn(f, 16), transform: `translateY(${rise(f, 16, 16, 30)}px)`}}>{S12.title}</div>
        <div style={{fontSize: 40, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginTop: 8, opacity: fadeIn(f, 34)}}>{S12.sub}</div>
        <div style={{marginTop: 40, display: 'flex', gap: 26, justifyContent: 'center'}}>
          {S12.taglines.map((t, i) => (
            <span key={t} style={{fontSize: 30, fontWeight: 750, color: '#fff', opacity: fadeIn(f, 50 + i * 10), transform: `scale(${0.8 + 0.2 * pop(f, 50 + i * 10)})`}}>{t}</span>
          ))}
        </div>
        <div style={{marginTop: 60, fontSize: 26, color: 'rgba(255,255,255,0.5)', opacity: fadeIn(f, 84)}}>{S12.footer}</div>
      </div>
    </Scene>
  );
};
