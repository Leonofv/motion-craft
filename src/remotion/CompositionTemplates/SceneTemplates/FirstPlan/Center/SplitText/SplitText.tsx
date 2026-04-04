import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './SplitText.module.css';
import centerClasses from '../CenterStyles.module.css';

export const SplitText = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 60, stiffness: 120 }, durationInFrames: 40 });
    const opacity = interpolate(progress, [0, 0.2, 1], [0, 1, 1]);

    const leftX = interpolate(progress, [0, 1], [-180, 0]);
    const rightX = interpolate(progress, [0, 1], [180, 0]);

    const dividerScale = spring({ fps, frame: Math.max(0, frame - 20), config: { damping: 200 }, durationInFrames: 20 });
    const dividerWidth = interpolate(dividerScale, [0, 1], [0, 80]);
    const dividerOpacity = interpolate(dividerScale, [0, 0.3, 1], [0, 1, 1]);

    return (
        <AbsoluteFill className={centerClasses.center}>
            <div className={classes.container} style={{ opacity }}>
                <span
                    className={classes.textLeft}
                    style={{ transform: `translateX(${leftX}px)` }}
                >
                    SPLIT
                </span>
                <div
                    className={classes.divider}
                    style={{ width: dividerWidth, opacity: dividerOpacity }}
                />
                <span
                    className={classes.textRight}
                    style={{ transform: `translateX(${rightX}px)` }}
                >
                    TEXT
                </span>
            </div>
        </AbsoluteFill>
    );
};
