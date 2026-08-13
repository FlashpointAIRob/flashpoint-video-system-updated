import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {COLORS, S1, SCENES, W} from '../constants';
import {clamp, fadeIn, pop, rise, typed} from '../helpers';
import {Scene} from '../components/Scene';
import {Card} from '../components/ui';

export const S1Scene: React.FC = () => {
  const f = useCurrentFrame();
  const cursor = Math.floor(f / 15) % 2 === 0;
  const flash = pop(f, S1.sendFlash);
  return (
    <Scene dur={SCENES.s1.dur}>
      {/* ghost questions drifting */}
      {S1.ghosts.map((g, i) => (
        <div key={i} style={{position: 'absolute', left: 120 + (i % 2) * 860, top: 210 + i * 200, fontSize: 34, color: COLORS.inkSoft, opacity: 0.14 * fadeIn(f, 20 + i * 8), transform: `translateX(${interpolate(f, [0, SCENES.s1.dur], [0, i % 2 ? -60 : 60])}px)`}}>
          {g}
        </div>
      ))}
      <div style={{position: 'absolute', top: 200, width: W, textAlign: 'center'}}>
        <div style={{fontSize: 26, letterSpacing: 6, fontWeight: 700, color: COLORS.inkSoft, opacity: fadeIn(f, 6)}}>{S1.kicker}</div>
        <div style={{fontSize: 148, fontWeight: 800, color: COLORS.ink, letterSpacing: -3, opacity: fadeIn(f, 12), transform: `translateY(${rise(f, 12, 18, 40)}px)`}}>
          <span style={{color: COLORS.accent}}>{S1.title.slice(0, 3)}</span>{S1.title.slice(3)}
        </div>
        <div style={{fontSize: 38, color: COLORS.inkSoft, fontWeight: 500, opacity: fadeIn(f, 26)}}>{S1.sub}</div>
      </div>
      {/* typed client question */}
      <Card style={{position: 'absolute', left: 360, right: 360, top: 660, padding: '34px 44px', borderRadius: 22, boxShadow: `0 0 0 ${flash * 18}px rgba(240,78,35,${0.3 * (1 - flash)})`}}>
        <div style={{fontSize: 22, letterSpacing: 3, fontWeight: 750, color: COLORS.accent, marginBottom: 12}}>YOUR QUESTION</div>
        <div style={{fontSize: 36, lineHeight: 1.4, color: COLORS.ink, minHeight: 100}}>
          {typed(S1.typed, f, S1.typeStart, S1.typeEnd)}
          <span style={{opacity: cursor && f < S1.sendFlash ? 1 : 0, color: COLORS.accent}}>▍</span>
        </div>
        <div style={{textAlign: 'right', marginTop: 8}}>
          <span style={{display: 'inline-block', padding: '10px 26px', borderRadius: 10, background: f >= S1.sendFlash ? COLORS.accent : '#EFE9E0', color: f >= S1.sendFlash ? '#fff' : COLORS.inkSoft, fontSize: 24, fontWeight: 750}}>
            Send →
          </span>
        </div>
      </Card>
    </Scene>
  );
};
