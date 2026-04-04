import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './TitleCard.module.css';
import centerClasses from '../CenterStyles.module.css';

export const TitleCard = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const titleProgress = spring({ fps, frame, config: { damping: 80, stiffness: 80 }, durationInFrames: 40 });
    const titleY = interpolate(titleProgress, [0, 1], [40, 0]);
    const titleOpacity = interpolate(titleProgress, [0, 0.2, 1], [0, 1, 1]);

    const subtitleProgress = spring({ fps, frame: Math.max(0, frame - 12), config: { damping: 100, stiffness: 80 }, durationInFrames: 35 });
    const subtitleY = interpolate(subtitleProgress, [0, 1], [30, 0]);
    const subtitleOpacity = interpolate(subtitleProgress, [0, 0.2, 1], [0, 1, 1]);

    const lineProgress = spring({ fps, frame: Math.max(0, frame - 20), config: { damping: 200 }, durationInFrames: 30 });
    const lineWidth = interpolate(lineProgress, [0, 1], [0, 200]);
    const lineOpacity = interpolate(lineProgress, [0, 0.1, 1], [0, 1, 1]);

    return (
        <AbsoluteFill className={centerClasses.center}>
            <div className={classes.container}>
                <div
                    className={classes.title}
                    style={{ transform: `translateY(${titleY}px)`, opacity: titleOpacity }}
                >
                    TITLE CARD
                </div>
                <div
                    className={classes.underline}
                    style={{ width: lineWidth, opacity: lineOpacity }}
                />
                <div
                    className={classes.subtitle}
                    style={{ transform: `translateY(${subtitleY}px)`, opacity: subtitleOpacity }}
                >
                    SUBTITLE · 2025
                </div>
            </div>
        </AbsoluteFill>
    );
};
