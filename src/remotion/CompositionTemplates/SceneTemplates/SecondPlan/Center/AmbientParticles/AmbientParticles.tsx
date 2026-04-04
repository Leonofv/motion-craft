import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import classes from './AmbientParticles.module.css';

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
    x: ((i * 139.7) % 360) - 180,
    y: ((i * 91.3) % 260) - 130,
    size: 1.5 + (i % 3) * 0.5,
    phase: i * 11,
    speed: 0.7 + (i % 5) * 0.12,
}));

const CYCLE = 100;

export const AmbientParticles = () => {
    const frame = useCurrentFrame();
    const entrance = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill className={classes.container}>
            {PARTICLES.map(({ x, y, size, phase, speed }, i) => {
                const localFrame = (frame * speed + phase) % CYCLE;
                const opacity = interpolate(
                    localFrame,
                    [0, CYCLE * 0.25, CYCLE * 0.5, CYCLE * 0.75, CYCLE],
                    [0.05, 0.4, 0.05, 0.35, 0.05],
                );
                return (
                    <div
                        key={i}
                        className={classes.particle}
                        style={{
                            width: size,
                            height: size,
                            transform: `translate(${x}px, ${y}px)`,
                            opacity: opacity * entrance,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};
