import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FADE} from '../constants';
import {clamp, fadeIn} from '../helpers';

// Crossfade wrapper + ƒ. mark + film grain + step kicker.
export const Scene: React.FC<{
  dur: number;
  dark?: boolean;
  kicker?: string;
  children: React.ReactNode;
}> = ({dur, dark, kicker, children}) => {
  const f = useCurrentFrame();
  const opacity =
    interpolate(f, [0, FADE], [0, 1], clamp) *
    interpolate(f, [dur - FADE, dur], [1, 0], clamp);
  return (
    <AbsoluteFill style={{background: dark ? COLORS.dark : COLORS.paper, opacity, fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>
      {children}
      {kicker ? (
        <div style={{position: 'absolute', top: 54, left: 96, letterSpacing: 5, fontSize: 22, fontWeight: 700, color: COLORS.accent, opacity: fadeIn(f, 4)}}>
          {kicker}
        </div>
      ) : null}
      <div style={{position: 'absolute', top: 44, right: 72, fontSize: 40, fontWeight: 800, color: dark ? '#fff' : COLORS.ink}}>
        ƒ<span style={{color: COLORS.accent}}>.</span>
      </div>
      <svg width="100%" height="100%" style={{position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none'}}>
        <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={7} /></filter>
        <rect width="100%" height="100%" filter="url(#g)" />
      </svg>
    </AbsoluteFill>
  );
};
