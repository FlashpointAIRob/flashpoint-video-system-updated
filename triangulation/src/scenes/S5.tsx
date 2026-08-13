import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S5, SCENES} from '../constants';
import {fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Chip, Badge} from '../components/ui';

export const S5Scene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={SCENES.s5.dur} kicker={S5.kicker}>
      <Split lines={S5.left}>
        {/* human in the loop */}
        <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, opacity: fadeIn(f, 12)}}>
          <div style={{width: 60, height: 60, borderRadius: 30, background: COLORS.ink, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800}}>R</div>
          <Chip on style={{fontSize: 26}}>{S5.humanChip}</Chip>
        </div>
        {/* advanced instruments */}
        <Card style={{marginBottom: 20}}>
          <div style={{fontSize: 19, letterSpacing: 3, color: COLORS.accent, fontWeight: 800, marginBottom: 8}}>ADVANCED INSTRUMENTS · BUILT IN</div>
          {S5.qTypes.map((q, i) => (
            <Chip key={q} on={f > 60 + i * 8} style={{opacity: fadeIn(f, 40 + i * 8), transform: `scale(${0.8 + 0.2 * pop(f, 40 + i * 8)})`}}>{q}</Chip>
          ))}
        </Card>
        {/* live survey preview */}
        <Card style={{opacity: fadeIn(f, 130), borderColor: COLORS.accent}}>
          <div style={{fontSize: 18, letterSpacing: 2, color: COLORS.inkSoft, fontWeight: 750, marginBottom: 8}}>{S5.preview.tag}</div>
          <div style={{fontSize: 27, color: COLORS.ink, fontWeight: 650, lineHeight: 1.4}}>{S5.preview.q}</div>
          <div style={{display: 'flex', gap: 12, marginTop: 16}}>
            {[34, 22, 18, 26].map((v, i) => (
              <div key={i} style={{flex: 1}}>
                <div style={{height: 90, background: '#F1ECE4', borderRadius: 10, position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: `${f > 150 ? v : 0}%`, background: COLORS.accent, transition: 'none'}} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div style={{marginTop: 18, opacity: fadeIn(f, 175)}}><Badge>{S5.badge}</Badge></div>
      </Split>
    </Scene>
  );
};
