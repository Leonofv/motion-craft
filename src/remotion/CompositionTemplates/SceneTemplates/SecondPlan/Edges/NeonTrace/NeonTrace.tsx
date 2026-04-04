import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './NeonTrace.module.css';

const CYCLE = 55;

export const NeonTrace = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({ fps, frame, config: { damping: 200 }, durationInFrames: 30 });
    const width = interpolate(entrance, [0, 1], [0, 220]);
    const localFrame = frame % CYCLE;
    const opacity = interpolate(localFrame, [0, CYCLE * 0.35, CYCLE * 0.65, CYCLE], [0.3, 0.85, 0.85, 0.3]);

    return (
        <div className={classes.container}>
            <div className={classes.trace} style={{ width, opacity }} />
        </div>
    );
};
