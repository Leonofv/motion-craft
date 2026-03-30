import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const useGradientCyber = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const offset = interpolate(frame, [0, 4 * fps], [-60, 60], { extrapolateRight: 'clamp' });

    const stop1 = offset;
    const stop2 = 40 + offset * 0.5;
    const stop3 = 100 + offset;

    return { stop1, stop2, stop3 };
};
