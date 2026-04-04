import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './CornerGlow.module.css';

const CYCLE = 75;

export const CornerGlow = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = interpolate(frame, [0, fps * 0.5], [0, 1], { extrapolateRight: 'clamp' });
    const localFrame = frame % CYCLE;
    const opacity = interpolate(localFrame, [0, CYCLE * 0.45, CYCLE * 0.55, CYCLE], [0.28, 0.58, 0.58, 0.28]);

    return <div className={classes.glow} style={{ opacity: opacity * entrance }} />;
};
