import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './LightPulse.module.css';

const CYCLE = 65;

export const LightPulse = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({ fps, frame, config: { damping: 120, stiffness: 60 }, durationInFrames: 35 });
    const localFrame = frame % CYCLE;
    const scaleX = interpolate(localFrame, [0, CYCLE * 0.5, CYCLE], [0.7, 1.25, 0.7]);
    const opacity = interpolate(localFrame, [0, CYCLE * 0.35, CYCLE * 0.65, CYCLE], [0.15, 0.5, 0.5, 0.15]);

    return (
        <div
            className={classes.pulse}
            style={{ transform: `scaleX(${scaleX})`, opacity: opacity * entrance }}
        />
    );
};
