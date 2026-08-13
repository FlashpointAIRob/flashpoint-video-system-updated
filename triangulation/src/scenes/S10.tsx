import React from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS, S10, SCENES} from '../constants';
import {fadeIn, typed} from '../helpers';
import {Scene} from '../components/Scene';
import {Split} from '../components/Split';
import {Card, Chip, Badge} from '../components/ui';
import {FitRadar} from '../components/FitRadar';

export const S10Scene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={SCENES.s10.dur} kicker={S10.kicker}>
      <Split lines={S10.left}>
        <div style={{display: 'flex', gap: 10, marginBottom: 16}}>
          {S10.artifacts.map((a, i) => (
            <Chip key={a} on={i === 2} style={{fontSize: 22, opacity: fadeIn(f, 8 + i * 8)}}>{a}</Chip>
          ))}
        </div>
        <div style={{display: 'flex', gap: 20, alignItems: 'stretch'}}>
          {/* the conversation */}
          <Card style={{flex: 1.1, opacity: fadeIn(f, 24)}}>
            <div style={{fontSize: 18, letterSpacing: 2, color: COLORS.accent, fontWeight: 800, marginBottom: 12}}>YOUR PRIVATE, CUSTOM-CALIBRATED LLM</div>
            <div style={{background: '#F4EFE7', borderRadius: 14, padding: '14px 18px', fontSize: 25, color: COLORS.ink, fontWeight: 650, marginBottom: 14, opacity: fadeIn(f, 34)}}>
              {typed(S10.chatQ, f, 34, 78)}
            </div>
            <div style={{border: `2px solid ${COLORS.accent}`, borderRadius: 14, padding: '14px 18px', fontSize: 24, color: COLORS.ink, lineHeight: 1.45, opacity: fadeIn(f, 92)}}>
              {S10.chatA}
            </div>
            <div style={{marginTop: 14, opacity: fadeIn(f, 150)}}>
              <Badge style={{background: COLORS.ink, fontSize: 18}}>{S10.fourthCriterion} · {S10.fourthValue}</Badge>
              <span style={{marginLeft: 12, fontSize: 20, color: COLORS.inkSoft}}>every answer, fit-scored</span>
            </div>
          </Card>
          {/* the radar */}
          <Card style={{opacity: fadeIn(f, 100), display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <FitRadar f={f} morphStart={165} />
          </Card>
        </div>
      </Split>
    </Scene>
  );
};
