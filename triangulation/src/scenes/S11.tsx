import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S11, SCENES} from '../constants';
import {fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Bar, Btn} from '../components/ui';

export const S11Scene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={SCENES.s11.dur} kicker={S11.kicker}>
      <Split lines={S11.left}>
        <div style={{background: '#F4EFE7', borderRadius: 14, padding: '12px 18px', fontSize: 24, color: COLORS.ink, fontWeight: 650, marginBottom: 16, opacity: fadeIn(f, 8)}}>
          “{S11.synthQ}” <span style={{color: COLORS.inkSoft, fontWeight: 500}}>— asked of every synthetic panel</span>
        </div>
        <div style={{display: 'flex', gap: 14, marginBottom: 18}}>
          {S11.synths.map((s, i) => {
            const low = s.fit < 50;
            return (
              <Card key={s.name} style={{flex: 1, borderColor: low && f > 90 ? COLORS.bad : COLORS.line, opacity: fadeIn(f, 20 + i * 12), transform: `translateY(${(1 - pop(f, 20 + i * 12)) * 24}px)`}}>
                <div style={{fontSize: 22, fontWeight: 750, color: COLORS.ink, marginBottom: 10}}>{s.name}</div>
                <div style={{fontSize: 40, fontWeight: 800, color: low ? COLORS.bad : COLORS.good, marginBottom: 8}}>{s.fit}</div>
                <Bar pct={f > 46 + i * 12 ? s.fit : 0} color={low ? COLORS.bad : COLORS.good} />
                <div style={{fontSize: 18, color: COLORS.inkSoft, marginTop: 8}}>{low ? 'Low confidence' : 'Confident answer'}</div>
              </Card>
            );
          })}
        </div>
        {/* the gap → next project */}
        <Card style={{borderColor: COLORS.accent, opacity: fadeIn(f, 120), display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <div style={{fontSize: 25, fontWeight: 800, color: COLORS.ink}}>{S11.gap.title}</div>
            <div style={{fontSize: 22, color: COLORS.inkSoft, marginTop: 4}}>{S11.gap.rec}</div>
          </div>
          <div style={{transform: `scale(${0.85 + 0.15 * pop(f, 150)})`, opacity: fadeIn(f, 146)}}>
            <Btn flash={pop(f, 178)}>{S11.gap.cta}</Btn>
          </div>
        </Card>
        <div style={{marginTop: 14, fontSize: 22, color: COLORS.accent, fontWeight: 700, opacity: fadeIn(f, 205)}}>↳ {S11.feed}</div>
      </Split>
    </Scene>
  );
};
