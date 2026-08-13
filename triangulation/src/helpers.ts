import {interpolate, spring} from 'remotion';
import {FPS} from './constants';

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const fadeIn = (f: number, start: number, len = 14) =>
  interpolate(f, [start, start + len], [0, 1], clamp);

export const fadeOut = (f: number, end: number, len = 12) =>
  interpolate(f, [end - len, end], [1, 0], clamp);

export const rise = (f: number, start: number, len = 16, px = 26) =>
  interpolate(f, [start, start + len], [px, 0], clamp);

export const pop = (f: number, start: number) =>
  spring({frame: f - start, fps: FPS, config: {damping: 14, stiffness: 160, mass: 0.7}});

export const typed = (text: string, f: number, start: number, end: number) => {
  const n = Math.round(interpolate(f, [start, end], [0, text.length], clamp));
  return text.slice(0, n);
};

export const count = (f: number, start: number, len: number, to: number) =>
  Math.round(interpolate(f, [start, start + len], [0, to], clamp));
