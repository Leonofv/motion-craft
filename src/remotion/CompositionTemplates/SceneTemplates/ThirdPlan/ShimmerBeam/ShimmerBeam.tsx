import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './ShimmerBeam.module.css';

export const ShimmerBeam = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const x = interpolate(frame, [0, durationInFrames], [-320, 900]);
    const opacity = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.82, durationInFrames], [0, 0.65, 0.65, 0]);

    return (
        <AbsoluteFill className={classes.container}>
            <div className={classes.beam} style={{ transform: `translateX(${x}px) rotate(22deg)`, opacity }} />
        </AbsoluteFill>
    );
};
