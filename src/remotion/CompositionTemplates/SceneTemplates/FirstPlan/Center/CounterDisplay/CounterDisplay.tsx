import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './CounterDisplay.module.css';
import centerClasses from '../CenterStyles.module.css';

const TARGET = 100;

export const CounterDisplay = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 80, stiffness: 30 }, durationInFrames: 70 });
    const count = Math.round(interpolate(progress, [0, 1], [0, TARGET]));
    const opacity = interpolate(progress, [0, 0.05, 1], [0, 1, 1]);

    const labelProgress = spring({ fps, frame: Math.max(0, frame - 15), config: { damping: 120, stiffness: 80 }, durationInFrames: 30 });
    const labelY = interpolate(labelProgress, [0, 1], [20, 0]);
    const labelOpacity = interpolate(labelProgress, [0, 0.3, 1], [0, 1, 1]);

    return (
        <AbsoluteFill className={centerClasses.center}>
            <div className={classes.container}>
                <div className={classes.numberRow} style={{ opacity }}>
                    <span className={classes.number}>{count}</span>
                    <span className={classes.percent}>%</span>
                </div>
                <div
                    className={classes.label}
                    style={{ transform: `translateY(${labelY}px)`, opacity: labelOpacity }}
                >
                    COMPLETE
                </div>
                <div className={classes.barTrack}>
                    <div
                        className={classes.barFill}
                        style={{ width: `${interpolate(progress, [0, 1], [0, 100])}%` }}
                    />
                </div>
            </div>
        </AbsoluteFill>
    );
};
