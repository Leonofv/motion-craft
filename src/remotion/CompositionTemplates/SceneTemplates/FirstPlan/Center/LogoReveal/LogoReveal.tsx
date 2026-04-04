import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './LogoReveal.module.css';
import centerClasses from '../CenterStyles.module.css';

export const LogoReveal = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const scale = spring({ fps, frame, config: { damping: 18, stiffness: 180, mass: 0.8 }, durationInFrames: 45 });
    const glowProgress = spring({ fps, frame, config: { damping: 60, stiffness: 40 }, durationInFrames: 60 });

    const letterScale = interpolate(scale, [0, 1], [3.5, 1]);
    const opacity = interpolate(scale, [0, 0.15, 1], [0, 1, 1]);
    const glowSize = interpolate(glowProgress, [0, 1], [0, 60]);
    const glowOpacity = interpolate(glowProgress, [0, 0.3, 0.7, 1], [0, 0.8, 0.5, 0.2]);

    return (
        <AbsoluteFill className={centerClasses.center}>
            <div className={classes.wrapper} style={{ opacity }}>
                <div
                    className={classes.glow}
                    style={{
                        boxShadow: `0 0 ${glowSize}px ${glowSize * 0.5}px rgba(255,255,255,${glowOpacity})`,
                        opacity: glowOpacity,
                    }}
                />
                <span
                    className={classes.letter}
                    style={{ transform: `scale(${letterScale})` }}
                >
                    N
                </span>
            </div>
        </AbsoluteFill>
    );
};
