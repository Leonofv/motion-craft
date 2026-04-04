import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './EdgeGlow.module.css';

const CYCLE = 80;

export const EdgeGlow = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = interpolate(frame, [0, fps * 0.5], [0, 1], { extrapolateRight: 'clamp' });
    const localFrame = frame % CYCLE;
    const opacity = interpolate(localFrame, [0, CYCLE * 0.4, CYCLE * 0.6, CYCLE], [0.2, 0.5, 0.5, 0.2]);

    return <div className={classes.glow} style={{ opacity: opacity * entrance }} />;
};
