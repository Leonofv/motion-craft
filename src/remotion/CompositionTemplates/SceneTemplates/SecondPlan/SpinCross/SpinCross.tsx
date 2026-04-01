import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './SpinCross.module.css';

export const SpinCross = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const entrance = spring({ fps, frame, config: { damping: 100, stiffness: 60 }, durationInFrames: 40 });
    const scale = interpolate(entrance, [0, 1], [0, 1]);
    const opacity = interpolate(entrance, [0, 1], [0, 0.38]);
    const rotation = frame * 1.1;

    return (
        <div
            className={classes.cross}
            style={{ transform: `scale(${scale}) rotate(${rotation}deg)`, opacity }}
        >
            <div className={classes.bar} />
            <div className={classes.barVertical} />
        </div>
    );
};
