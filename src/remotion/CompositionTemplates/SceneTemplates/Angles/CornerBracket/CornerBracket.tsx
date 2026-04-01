import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './CornerBracket.module.css';

export const CornerBracket = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 200 }, durationInFrames: 35 });
    const size = interpolate(progress, [0, 1], [0, 1]);
    const opacity = interpolate(progress, [0, 0.1, 1], [0, 1, 1]);

    return (
        <div className={classes.bracket} style={{ opacity }}>
            <div className={classes.horizontal} style={{ width: size * 40 }} />
            <div className={classes.vertical} style={{ height: size * 40 }} />
        </div>
    );
};
