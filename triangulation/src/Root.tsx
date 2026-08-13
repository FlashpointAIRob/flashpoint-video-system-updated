import {Composition} from 'remotion';
import {Triangulation} from './Triangulation';
import {FPS, H, TOTAL_FRAMES, W} from './constants';

export const Root: React.FC = () => (
  <Composition
    id="Triangulation"
    component={Triangulation}
    durationInFrames={TOTAL_FRAMES}
    fps={FPS}
    width={W}
    height={H}
  />
);
