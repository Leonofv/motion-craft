import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useDefaultCompositionTransition = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Полагаю, что в будущем эти параметры следует отдать на ввод пользователю
    const transitionDelay = 2 * fps;
    const transitionDuration = 1.5 * fps;

    const logoOut = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: transitionDuration,
        delay: transitionDelay,
    });

    return {
        logoOut,
        transitionDelay,
        transitionDuration,
    };
};
