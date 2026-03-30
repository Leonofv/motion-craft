import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useLineGrow = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 200 }, durationInFrames: 35 });
    const size = interpolate(progress, [0, 1], [0, 1]);
    const opacity = interpolate(progress, [0, 0.1, 1], [0, 1, 1]);

    return { size, opacity };
};
