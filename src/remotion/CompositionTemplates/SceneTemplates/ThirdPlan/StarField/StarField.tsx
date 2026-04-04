import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './StarField.module.css';

const STAR_COUNT = 80;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    x: (i * 9.3 + 2) % 100,
    y: (i * 6.1 + 5) % 100,
    size: 1 + (i % 4) * 0.5,
    delay: (i * 2) % 40,
    twinkleOffset: i * 1.7,
    brightness: 0.1 + (i % 6) * 0.06,
}));

const TWINKLE_CYCLE = 65;

export const StarField = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill className={classes.container}>
            {stars.map(({ x, y, size, delay, twinkleOffset, brightness }, i) => {
                const localFrame = Math.max(0, frame - delay);
                const entrance = spring({ fps, frame: localFrame, config: { damping: 200 }, durationInFrames: 15 });
                const entranceOpacity = interpolate(entrance, [0, 1], [0, 1]);

                const twinkleFrame = (localFrame + twinkleOffset) % TWINKLE_CYCLE;
                const twinkle = interpolate(
                    twinkleFrame,
                    [0, TWINKLE_CYCLE * 0.25, TWINKLE_CYCLE * 0.5, TWINKLE_CYCLE * 0.75, TWINKLE_CYCLE],
                    [brightness, brightness * 3.5, brightness, brightness * 2, brightness],
                );

                return (
                    <div
                        key={i}
                        className={classes.star}
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: size,
                            height: size,
                            opacity: twinkle * entranceOpacity,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};
