import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './CornerDot.module.css';

export const CornerDot = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 120, stiffness: 100 }, durationInFrames: 30 });
    const scale = interpolate(progress, [0, 1], [0, 1]);
    const opacity = interpolate(progress, [0, 0.4, 1], [0, 1, 1]);

    return <div className={classes.dot} style={{ transform: `scale(${scale})`, opacity }} />;
};
