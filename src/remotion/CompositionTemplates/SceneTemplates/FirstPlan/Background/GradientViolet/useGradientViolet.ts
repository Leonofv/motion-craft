import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const useGradientViolet = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const angle = interpolate(frame, [0, 4 * fps], [135, 195], { extrapolateRight: 'clamp' });

    return { angle };
};
