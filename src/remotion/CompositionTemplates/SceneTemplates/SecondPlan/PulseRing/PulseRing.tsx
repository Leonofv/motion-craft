import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './PulseRing.module.css';

const CYCLE = 52;

export const PulseRing = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = interpolate(frame, [0, fps * 0.4], [0, 1], { extrapolateRight: 'clamp' });
    const localFrame = frame % CYCLE;

    const scale = interpolate(localFrame, [0, CYCLE * 0.5, CYCLE], [0.88, 1.12, 0.88]);
    const opacity = interpolate(localFrame, [0, CYCLE * 0.25, CYCLE * 0.75, CYCLE], [0.2, 0.45, 0.45, 0.2]);

    return (
        <AbsoluteFill className={classes.container}>
            <div
                className={classes.ring}
                style={{ transform: `scale(${scale})`, opacity: opacity * entrance }}
            />
        </AbsoluteFill>
    );
};
