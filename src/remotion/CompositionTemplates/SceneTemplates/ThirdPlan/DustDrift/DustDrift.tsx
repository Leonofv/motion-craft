import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './DustDrift.module.css';

const DUST = Array.from({ length: 35 }, (_, i) => ({
    x: (i * 11.3 + 3) % 100,
    y: (i * 7.7 + 8) % 100,
    size: 1.5 + (i % 4) * 0.8,
    driftX: ((i % 7) - 3) * 0.12,
    driftY: -0.05 - (i % 5) * 0.04,
    delay: (i * 4) % 30,
    opacity: 0.05 + (i % 4) * 0.04,
}));

export const DustDrift = () => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill className={classes.container}>
            {DUST.map(({ x, y, size, driftX, driftY, delay, opacity }, i) => {
                const localFrame = Math.max(0, frame - delay);
                const entrance = spring({ fps, frame: localFrame, config: { damping: 200 }, durationInFrames: 25 });
                const entranceOpacity = interpolate(entrance, [0, 1], [0, 1]);

                const px = ((x + driftX * localFrame) % 105 + 105) % 105;
                const py = ((y + driftY * localFrame) % 105 + 105) % 105;

                return (
                    <div
                        key={i}
                        className={classes.dust}
                        style={{
                            left: `${px}%`,
                            top: `${py}%`,
                            width: size,
                            height: size,
                            opacity: opacity * entranceOpacity,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};
