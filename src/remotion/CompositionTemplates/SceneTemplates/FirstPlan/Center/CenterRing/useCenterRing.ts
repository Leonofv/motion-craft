import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useCenterRing = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 60, stiffness: 30 }, durationInFrames: 50 });
    const scale = interpolate(progress, [0, 1], [0, 4]);
    const opacity = interpolate(progress, [0, 0.15, 0.6, 1], [0, 1, 0.4, 0]);

    return { scale, opacity };
};
