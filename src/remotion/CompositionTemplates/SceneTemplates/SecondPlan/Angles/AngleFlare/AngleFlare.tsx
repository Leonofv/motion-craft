import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './AngleFlare.module.css';

const CYCLE = 85;

export const AngleFlare = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({ fps, frame, config: { damping: 80, stiffness: 40 }, durationInFrames: 50 });
    const scale = interpolate(entrance, [0, 1], [0, 1]);
    const localFrame = frame % CYCLE;
    const opacity = interpolate(localFrame, [0, CYCLE * 0.2, CYCLE * 0.5, CYCLE * 0.8, CYCLE], [0.1, 0.65, 0.15, 0.6, 0.1]);

    return <div className={classes.flare} style={{ transform: `scale(${scale})`, opacity }} />;
};
