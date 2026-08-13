import React from 'react';
import {COLORS} from '../constants';

export const Card: React.FC<{style?: React.CSSProperties; dark?: boolean; children: React.ReactNode}> = ({style, dark, children}) => (
  <div style={{background: dark ? COLORS.darkPanel : COLORS.panel, border: `2px solid ${dark ? COLORS.darkLine : COLORS.line}`, borderRadius: 18, padding: 28, boxShadow: '0 14px 40px rgba(27,23,18,0.08)', ...style}}>
    {children}
  </div>
);

export const Chip: React.FC<{on?: boolean; dark?: boolean; style?: React.CSSProperties; children: React.ReactNode}> = ({on, dark, style, children}) => (
  <div style={{display: 'inline-block', padding: '10px 20px', margin: 6, borderRadius: 999, fontSize: 24, fontWeight: 650,
    background: on ? COLORS.accent : dark ? 'rgba(255,255,255,0.06)' : '#F1ECE4',
    color: on ? '#fff' : dark ? 'rgba(255,255,255,0.75)' : COLORS.inkSoft,
    border: `2px solid ${on ? COLORS.accent : dark ? COLORS.darkLine : COLORS.line}`, ...style}}>
    {children}
  </div>
);

export const Badge: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{display: 'inline-block', padding: '8px 18px', borderRadius: 8, fontSize: 20, fontWeight: 800, letterSpacing: 2, background: COLORS.ink, color: '#fff', ...style}}>
    {children}
  </div>
);

export const Bar: React.FC<{pct: number; color?: string; h?: number}> = ({pct, color = COLORS.accent, h = 14}) => (
  <div style={{height: h, borderRadius: h, background: '#EFE9E0', overflow: 'hidden'}}>
    <div style={{width: `${pct}%`, height: '100%', borderRadius: h, background: color}} />
  </div>
);

export const Btn: React.FC<{flash?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({flash = 0, children, style}) => (
  <div style={{display: 'inline-block', padding: '16px 34px', borderRadius: 12, background: COLORS.accent, color: '#fff', fontSize: 26, fontWeight: 750,
    boxShadow: `0 0 0 ${flash * 14}px rgba(240,78,35,${0.35 * (1 - flash)})`, ...style}}>
    {children}
  </div>
);
