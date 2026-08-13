import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S2, SCENES} from '../constants';
import {fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Chip} from '../components/ui';

export const S2Scene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={SCENES.s2.dur} dark kicker={S2.kicker}>
      <Split dark lines={S2.left} footnote={S2.footnote}>
        {/* the question fragments */}
        <Card dark style={{marginBottom: 22}}>
          <div style={{fontSize: 20, letterSpacing: 3, color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginBottom: 10}}>COMPONENT CONCEPTS</div>
          {S2.fragments.map((fr, i) => (
            <Chip key={fr} dark on={i < 3} style={{opacity: fadeIn(f, 14 + i * 7), transform: `scale(${0.7 + 0.3 * pop(f, 14 + i * 7)})`}}>{fr}</Chip>
          ))}
        </Card>
        {/* the toolbox */}
        <Card dark style={{marginBottom: 22}}>
          <div style={{fontSize: 20, letterSpacing: 3, color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginBottom: 10}}>THE BRAIN SELECTS FROM EVERY TOOL WE'VE BUILT</div>
          {S2.toolbox.map((t, i) => (
            <Chip key={t.label} dark on={t.on && f > 70 + i * 5} style={{opacity: fadeIn(f, 55 + i * 5)}}>{t.label}</Chip>
          ))}
        </Card>
        {/* the sequence */}
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          {S2.sequence.map((s, i) => (
            <React.Fragment key={s}>
              <Card dark style={{padding: '18px 26px', borderColor: COLORS.accent, opacity: fadeIn(f, 130 + i * 16), transform: `scale(${0.85 + 0.15 * pop(f, 130 + i * 16)})`}}>
                <span style={{color: '#fff', fontSize: 26, fontWeight: 750}}>{s}</span>
              </Card>
              {i < 2 ? <span style={{color: COLORS.accent, fontSize: 34, opacity: fadeIn(f, 138 + i * 16)}}>→</span> : null}
            </React.Fragment>
          ))}
        </div>
        <div style={{marginTop: 14, fontSize: 24, color: COLORS.accent, fontWeight: 650, opacity: fadeIn(f, 180)}}>{S2.seqCaption}</div>
      </Split>
    </Scene>
  );
};
