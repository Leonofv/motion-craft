import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useFadeSlide = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({ fps, frame, config: { damping: 120, stiffness: 80 }, durationInFrames: 40 });
    const translate = interpolate(progress, [0, 1], [-60, 0]);
    const opacity = interpolate(progress, [0, 0.3, 1], [0, 1, 1]);

    return { translate, opacity };
};
