import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S3, SCENES} from '../constants';
import {fadeIn, pop, rise} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Badge} from '../components/ui';

export const S3Scene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={SCENES.s3.dur} kicker={S3.kicker}>
      <Split lines={S3.left}>
        <Card style={{padding: 36}}>
          <div style={{fontSize: 19, letterSpacing: 3, color: COLORS.accent, fontWeight: 800, marginBottom: 8}}>RESEARCH PLAN</div>
          <div style={{fontSize: 34, fontWeight: 800, color: COLORS.ink, marginBottom: 22, opacity: fadeIn(f, 12)}}>{S3.doc.title}</div>
          {S3.doc.sections.map((s, i) => (
            <div key={s.h} style={{marginBottom: 18, opacity: fadeIn(f, 30 + i * 22), transform: `translateY(${rise(f, 30 + i * 22, 14, 18)}px)`}}>
              <div style={{fontSize: 25, fontWeight: 800, color: COLORS.ink}}>{s.h}</div>
              <div style={{fontSize: 23, color: COLORS.inkSoft, lineHeight: 1.45}}>{s.b}</div>
              <div style={{height: 2, background: COLORS.line, marginTop: 14}} />
            </div>
          ))}
          <div style={{transform: `rotate(-4deg) scale(${0.6 + 0.4 * pop(f, 140)})`, opacity: fadeIn(f, 140, 8), position: 'absolute', right: 40, bottom: 34}}>
            <Badge style={{background: COLORS.accent, fontSize: 22}}>{S3.stamp}</Badge>
          </div>
        </Card>
      </Split>
    </Scene>
  );
};
