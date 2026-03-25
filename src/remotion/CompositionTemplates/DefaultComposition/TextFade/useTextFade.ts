import { useMemo } from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useTextFade = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const fadeProgressSpring = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: 80,
    });

    const maskImage = useMemo(() => {
        const rightFadeAnimationStop = interpolate(fadeProgressSpring, [0, 1], [200, 0]);
        const leftFadeAnimationStop = Math.max(0, rightFadeAnimationStop - 70);

        return `linear-gradient(-45deg, transparent ${leftFadeAnimationStop}%, black ${rightFadeAnimationStop}%)`;
    }, [fadeProgressSpring]);

    return {
        maskImage,
    };
};
