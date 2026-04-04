import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './CrossHair.module.css';

export const CrossHair = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 200 }, durationInFrames: 30 });
    const size = interpolate(progress, [0, 1], [0, 1]);
    const opacity = interpolate(progress, [0, 0.1, 1], [0, 1, 1]);

    const BLINK_CYCLE = 50;
    const blinkFrame = frame % BLINK_CYCLE;
    const dotOpacity = interpolate(blinkFrame, [0, 5, 10, BLINK_CYCLE], [0.3, 1, 0.3, 0.3]);

    return (
        <div className={classes.container} style={{ opacity }}>
            <div className={classes.horizontal} style={{ transform: `scaleX(${size})` }} />
            <div className={classes.vertical} style={{ transform: `scaleY(${size})` }} />
            <div className={classes.dot} style={{ opacity: dotOpacity, transform: `scale(${size})` }} />
            <div className={classes.cornerTL} style={{ opacity }} />
            <div className={classes.cornerTR} style={{ opacity }} />
            <div className={classes.cornerBL} style={{ opacity }} />
            <div className={classes.cornerBR} style={{ opacity }} />
        </div>
    );
};
