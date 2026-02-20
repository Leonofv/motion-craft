import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useNextLogoContructor = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const transitionStart = 2 * fps;
    const transitionDuration = 1 * fps;

    const logoOut = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: transitionDuration,
        delay: transitionStart,
    });

    return {
        logoOut,
        transitionStart,
        transitionDuration,
    };
};
