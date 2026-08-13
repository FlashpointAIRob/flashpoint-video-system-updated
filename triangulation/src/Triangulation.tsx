import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {SCENES} from './constants';
import {S1Scene} from './scenes/S1';
import {S2Scene} from './scenes/S2';
import {S3Scene} from './scenes/S3';
import {S4Scene} from './scenes/S4';
import {S5Scene} from './scenes/S5';
import {S6Scene} from './scenes/S6';
import {S7Scene} from './scenes/S7';
import {S8Scene} from './scenes/S8';
import {S9Scene} from './scenes/S9';
import {S10Scene} from './scenes/S10';
import {S11Scene} from './scenes/S11';
import {S12Scene} from './scenes/S12';

export const Triangulation: React.FC = () => (
  <AbsoluteFill style={{background: '#FAF7F2'}}>
    <Sequence from={SCENES.s1.from} durationInFrames={SCENES.s1.dur}><S1Scene /></Sequence>
    <Sequence from={SCENES.s2.from} durationInFrames={SCENES.s2.dur}><S2Scene /></Sequence>
    <Sequence from={SCENES.s3.from} durationInFrames={SCENES.s3.dur}><S3Scene /></Sequence>
    <Sequence from={SCENES.s4.from} durationInFrames={SCENES.s4.dur}><S4Scene /></Sequence>
    <Sequence from={SCENES.s5.from} durationInFrames={SCENES.s5.dur}><S5Scene /></Sequence>
    <Sequence from={SCENES.s6.from} durationInFrames={SCENES.s6.dur}><S6Scene /></Sequence>
    <Sequence from={SCENES.s7.from} durationInFrames={SCENES.s7.dur}><S7Scene /></Sequence>
    <Sequence from={SCENES.s8.from} durationInFrames={SCENES.s8.dur}><S8Scene /></Sequence>
    <Sequence from={SCENES.s9.from} durationInFrames={SCENES.s9.dur}><S9Scene /></Sequence>
    <Sequence from={SCENES.s10.from} durationInFrames={SCENES.s10.dur}><S10Scene /></Sequence>
    <Sequence from={SCENES.s11.from} durationInFrames={SCENES.s11.dur}><S11Scene /></Sequence>
    <Sequence from={SCENES.s12.from} durationInFrames={SCENES.s12.dur}><S12Scene /></Sequence>
  </AbsoluteFill>
);
