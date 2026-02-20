import { evolvePath } from '@remotion/paths';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useLogo = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const evolve1 = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
    });

    const evolve2 = spring({
        fps,
        frame: frame - 15,
        config: {
            damping: 200,
        },
    });

    const evolve3 = spring({
        fps,
        frame: frame - 30,
        config: {
            damping: 200,
            mass: 3,
        },
        durationInFrames: 30,
    });

    const firstPath = `M 60.0568 54 v 71.97`;
    const secondPath = `M 63.47956 56.17496 L 144.7535 161.1825`;
    const thirdPath = `M 121 54 L 121 126`;

    const evolution1 = evolvePath(evolve1, firstPath);
    const evolution2 = evolvePath(evolve2, secondPath);
    const evolution3 = evolvePath(
        interpolate(evolve3, [0, 1], [0, 0.7]),
        thirdPath,
    );

    return {
        firstPath,
        evolution1,
        secondPath,
        evolution2,
        thirdPath,
        evolution3,
    };
};
