import { evolvePath } from '@remotion/paths';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const leftLeg = 'M 61 54 v 72';
const centerChevron = 'M 63 56 L 90 102 L 116 56';
const rightLeg = 'M 118 54 L 118 128';

export const useLogo = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const leftLegSpring = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
    });

    const chevronSpring = spring({
        fps,
        frame: frame - 15,
        config: {
            damping: 200,
        },
    });

    const rightLegSpring = spring({
        fps,
        frame: frame - 30,
        config: {
            damping: 200,
        },
    });

    const logoOutSpring = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: 1.5 * fps,
        delay: 2 * fps,
    });

    const leftLegAnimation = evolvePath(leftLegSpring, leftLeg);
    const chevronAnimation = evolvePath(chevronSpring, centerChevron);
    const rightLegAnimation = evolvePath(interpolate(rightLegSpring, [0, 1], [0, 0.7]), rightLeg);

    return {
        leftLeg,
        leftLegAnimation,
        centerChevron,
        chevronAnimation,
        rightLeg,
        rightLegAnimation,
        logoOutSpring,
    };
};
