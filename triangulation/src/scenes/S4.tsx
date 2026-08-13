import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {COLORS, S4, SCENES} from '../constants';
import {clamp, fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Btn} from '../components/ui';

export const S4Scene: React.FC = () => {
  const f = useCurrentFrame();
  const maxWeek = 9;
  return (
    <Scene dur={SCENES.s4.dur} kicker={S4.kicker}>
      <Split lines={S4.left}>
        <Card style={{padding: 36}}>
          <div style={{fontSize: 19, letterSpacing: 3, color: COLORS.accent, fontWeight: 800, marginBottom: 18}}>STATEMENT OF WORK · CLIENT-READY</div>
          {S4.rows.map((r, i) => {
            const w = interpolate(f, [40 + i * 12, 66 + i * 12], [0, 1], clamp);
            return (
              <div key={r.item} style={{marginBottom: 16, opacity: fadeIn(f, 20 + i * 12)}}>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 25, color: COLORS.ink, fontWeight: 650}}>
                  <span>{r.item}</span><span style={{color: COLORS.accent, fontWeight: 800}}>{r.price}</span>
                </div>
                <div style={{position: 'relative', height: 12, background: '#F1ECE4', borderRadius: 8, marginTop: 8}}>
                  <div style={{position: 'absolute', left: `${(r.weeks[0] / maxWeek) * 100}%`, width: `${((r.weeks[1] - r.weeks[0]) / maxWeek) * 100 * w}%`, top: 0, bottom: 0, borderRadius: 8, background: COLORS.ink}} />
                </div>
              </div>
            );
          })}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 26, borderTop: `3px solid ${COLORS.ink}`, paddingTop: 20}}>
            <div>
              <div style={{fontSize: 34, fontWeight: 800, color: COLORS.ink, opacity: fadeIn(f, 96)}}>{S4.total}</div>
              <div style={{fontSize: 22, color: COLORS.inkSoft}}>{S4.timeline}</div>
            </div>
            <div style={{transform: `scale(${0.8 + 0.2 * pop(f, 116)})`, opacity: fadeIn(f, 112)}}>
              <Btn flash={pop(f, 140)}>{S4.cta}</Btn>
            </div>
          </div>
        </Card>
      </Split>
    </Scene>
  );
};
