import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './EdgeLabel.module.css';

export const EdgeLabel = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 60, stiffness: 120 }, durationInFrames: 35 });
    const x = interpolate(progress, [0, 1], [-140, 0]);
    const opacity = interpolate(progress, [0, 0.15, 1], [0, 1, 1]);

    const dotCycle = frame % 60;
    const dotOpacity = interpolate(dotCycle, [0, 20, 40, 60], [1, 0.3, 1, 1]);

    return (
        <div
            className={classes.pill}
            style={{ transform: `translateX(${x}px)`, opacity }}
        >
            <div className={classes.dot} style={{ opacity: dotOpacity }} />
            <span className={classes.label}>LIVE</span>
        </div>
    );
};
