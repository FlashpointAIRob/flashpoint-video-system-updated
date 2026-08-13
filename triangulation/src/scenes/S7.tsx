import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {COLORS, S7, SCENES} from '../constants';
import {clamp, fadeIn, pop} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Chip, Badge} from '../components/ui';

const Wave: React.FC<{f: number; seed: number}> = ({f, seed}) => (
  <svg width={170} height={44}>
    {Array.from({length: 17}).map((_, i) => {
      const h = 8 + 26 * Math.abs(Math.sin((f / 6 + i * 1.3 + seed) % Math.PI));
      return <rect key={i} x={i * 10} y={22 - h / 2} width={5} height={h} rx={2.5} fill={COLORS.accent} />;
    })}
  </svg>
);

export const S7Scene: React.FC = () => {
  const f = useCurrentFrame();
  const flow = interpolate(f, [185, 235], [0, 1], clamp);
  return (
    <Scene dur={SCENES.s7.dur} kicker={S7.kicker}>
      <Split lines={S7.left}>
        {/* findings feed the guide */}
        <div style={{display: 'flex', gap: 18, marginBottom: 18}}>
          <Card style={{flex: 1, opacity: fadeIn(f, 12)}}>
            <div style={{fontSize: 18, letterSpacing: 2, color: COLORS.accent, fontWeight: 800, marginBottom: 8}}>PHASE 1 FINDINGS</div>
            {S7.findings.map((x, i) => (
              <div key={x} style={{fontSize: 22, color: COLORS.ink, marginBottom: 8, opacity: fadeIn(f, 20 + i * 10)}}>• {x}</div>
            ))}
          </Card>
          <div style={{alignSelf: 'center', fontSize: 40, color: COLORS.accent, opacity: fadeIn(f, 50)}}>→</div>
          <Card style={{flex: 1, borderColor: COLORS.accent, opacity: fadeIn(f, 56)}}>
            <div style={{fontSize: 24, fontWeight: 800, color: COLORS.ink}}>{S7.guide}</div>
            <div style={{marginTop: 10}}><Chip on style={{fontSize: 20}}>{S7.idis}</Chip></div>
            <div><Chip style={{fontSize: 20}}>{S7.expert}</Chip></div>
          </Card>
        </div>
        {/* person-to-person */}
        <Card style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, opacity: fadeIn(f, 110)}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
            <div style={{width: 64, height: 64, borderRadius: 32, background: COLORS.ink, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 800}}>M</div>
            <Wave f={f} seed={0} />
            <div style={{width: 64, height: 64, borderRadius: 32, background: '#B9AFa2', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 800}}>P</div>
          </div>
          <div style={{fontSize: 22, color: COLORS.inkSoft, fontWeight: 650}}>{S7.offPlatform}</div>
        </Card>
        {/* back into the Brain */}
        <div style={{display: 'flex', alignItems: 'center', gap: 20, opacity: fadeIn(f, 180)}}>
          <div style={{flex: 1, height: 4, background: `linear-gradient(90deg, ${COLORS.accent} ${flow * 100}%, ${COLORS.line} ${flow * 100}%)`, borderRadius: 2}} />
          <Badge style={{background: COLORS.ink, transform: `scale(${1 + 0.12 * Math.sin(f / 5) * flow})`}}>🧠 {S7.back}</Badge>
        </div>
      </Split>
    </Scene>
  );
};
