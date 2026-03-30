import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const useGradientCrimson = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const midStop = interpolate(frame, [0, 2 * fps, 4 * fps], [10, 55, 10], { extrapolateRight: 'clamp' });
    const outerStop = interpolate(frame, [0, 2 * fps, 4 * fps], [40, 90, 40], { extrapolateRight: 'clamp' });

    return { midStop, outerStop };
};
