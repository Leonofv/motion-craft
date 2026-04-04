import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './HaloRing.module.css';

const CYCLE = 90;

export const HaloRing = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = interpolate(frame, [0, fps * 0.6], [0, 1], { extrapolateRight: 'clamp' });
    const localFrame = frame % CYCLE;
    const scale = interpolate(localFrame, [0, CYCLE * 0.5, CYCLE], [0.92, 1.06, 0.92]);
    const opacity = interpolate(localFrame, [0, CYCLE * 0.5, CYCLE], [0.28, 0.48, 0.28]);

    return (
        <AbsoluteFill className={classes.container}>
            <div className={classes.halo} style={{ transform: `scale(${scale})`, opacity: opacity * entrance }} />
        </AbsoluteFill>
    );
};
