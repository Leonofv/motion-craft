import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useRings = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const transitionDelay = 2 * fps;
    const transitionDuration = 1.5 * fps;

    const ringsOutSpring = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: transitionDuration,
        delay: transitionDelay,
    });

    return { ringsOutSpring };
};
