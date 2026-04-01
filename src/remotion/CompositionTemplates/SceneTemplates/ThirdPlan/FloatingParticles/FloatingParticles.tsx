import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './FloatingParticles.module.css';

const PARTICLES = [
    { x: 8,  y: 15, size: 5, delay: 0,  floatOffset: 0  },
    { x: 20, y: 72, size: 8, delay: 6,  floatOffset: 20 },
    { x: 38, y: 25, size: 4, delay: 12, floatOffset: 40 },
    { x: 55, y: 80, size: 7, delay: 4,  floatOffset: 60 },
    { x: 68, y: 40, size: 5, delay: 10, floatOffset: 10 },
    { x: 80, y: 12, size: 9, delay: 2,  floatOffset: 50 },
    { x: 88, y: 65, size: 4, delay: 8,  floatOffset: 30 },
    { x: 14, y: 50, size: 6, delay: 14, floatOffset: 70 },
    { x: 47, y: 58, size: 3, delay: 6,  floatOffset: 15 },
    { x: 73, y: 88, size: 6, delay: 4,  floatOffset: 45 },
];

const FLOAT_CYCLE = 80;

export const FloatingParticles = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill className={classes.container}>
            {PARTICLES.map(({ x, y, size, delay, floatOffset }, i) => {
                const localFrame = Math.max(0, frame - delay);

                const entrance = spring({ fps, frame: localFrame, config: { damping: 200 }, durationInFrames: 25 });
                const opacity = interpolate(entrance, [0, 1], [0, 0.2]);

                const floatPhase = (localFrame + floatOffset) % FLOAT_CYCLE;
                const floatY = interpolate(floatPhase, [0, FLOAT_CYCLE / 2, FLOAT_CYCLE], [0, 8, 0]);

                return (
                    <div
                        key={i}
                        className={classes.particle}
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity,
                            transform: `translateY(${floatY}px)`,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};
