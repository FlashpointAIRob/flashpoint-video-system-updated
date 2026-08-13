import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S6, SCENES} from '../constants';
import {count, fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Chip, Btn, Bar, Badge} from '../components/ui';

export const S6Scene: React.FC = () => {
  const f = useCurrentFrame();
  const n = count(f, 130, 90, S6.nTarget);
  const live = f > 118;
  return (
    <Scene dur={SCENES.s6.dur} kicker={S6.kicker}>
      <Split lines={S6.left}>
        <div style={{display: 'flex', gap: 16, marginBottom: 18}}>
          {S6.options.map((o, i) => (
            <Chip key={o} on={i === 1 && f > 40} style={{fontSize: 27, opacity: fadeIn(f, 10 + i * 10)}}>{o}</Chip>
          ))}
        </div>
        <Card style={{marginBottom: 18, opacity: fadeIn(f, 50)}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <div style={{fontSize: 26, fontWeight: 750, color: COLORS.ink}}>{S6.panelPick.name}</div>
              <div style={{fontSize: 22, color: COLORS.inkSoft}}>{S6.panelPick.note}</div>
            </div>
            <div style={{textAlign: 'right', transform: `scale(${0.85 + 0.15 * pop(f, 84)})`, opacity: fadeIn(f, 80)}}>
              <Btn flash={pop(f, 112)}>{S6.buy}</Btn>
              <div style={{fontSize: 19, color: COLORS.inkSoft, marginTop: 6}}>{S6.buyAlt}</div>
            </div>
          </div>
        </Card>
        <Card style={{opacity: fadeIn(f, 122), borderColor: live ? COLORS.accent : COLORS.line}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14}}>
            <Badge style={{background: COLORS.accent}}>{S6.live} · HOSTED NATIVELY</Badge>
            <div style={{fontSize: 44, fontWeight: 800, color: COLORS.ink}}>n = {n}<span style={{color: COLORS.inkSoft, fontSize: 26}}> / {S6.nTarget}</span></div>
          </div>
          {S6.quotas.map((q, i) => (
            <div key={q.label} style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10, opacity: fadeIn(f, 132 + i * 8)}}>
              <div style={{width: 220, fontSize: 22, color: COLORS.inkSoft, fontWeight: 650}}>{q.label}</div>
              <div style={{flex: 1}}><Bar pct={Math.min(q.pct, (n / S6.nTarget) * 100 * (q.pct / 90))} /></div>
            </div>
          ))}
          <div style={{fontSize: 23, color: COLORS.accent, fontWeight: 700, marginTop: 10, opacity: fadeIn(f, 200)}}>{S6.instant}</div>
        </Card>
      </Split>
    </Scene>
  );
};
