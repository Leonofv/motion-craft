import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './TimerBar.module.css';

export const TimerBar = () => {
    const { fps, durationInFrames } = useVideoConfig();
    const frame = useCurrentFrame();

    const entrance = spring({ fps, frame, config: { damping: 120, stiffness: 80 }, durationInFrames: 25 });
    const opacity = interpolate(entrance, [0, 0.2, 1], [0, 1, 1]);
    const containerY = interpolate(entrance, [0, 1], [20, 0]);

    const fillProgress = interpolate(frame, [0, durationInFrames], [0, 100], { extrapolateRight: 'clamp' });
    const labelProgress = Math.round(fillProgress);

    return (
        <div
            className={classes.container}
            style={{ transform: `translateY(${containerY}px)`, opacity }}
        >
            <div className={classes.header}>
                <span className={classes.title}>LOADING</span>
                <span className={classes.counter}>{labelProgress}%</span>
            </div>
            <div className={classes.track}>
                <div className={classes.fill} style={{ width: `${fillProgress}%` }} />
                <div
                    className={classes.glow}
                    style={{ left: `${fillProgress}%` }}
                />
            </div>
        </div>
    );
};
