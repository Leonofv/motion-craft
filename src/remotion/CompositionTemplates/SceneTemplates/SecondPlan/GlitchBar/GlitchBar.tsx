import { interpolate, useCurrentFrame } from 'remotion';
import classes from './GlitchBar.module.css';

const BARS = [
    { offsetY: -14, widthRatio: 0.75, phase: 0 },
    { offsetY: 0, widthRatio: 1, phase: 7 },
    { offsetY: 14, widthRatio: 0.55, phase: 3 },
];

const CYCLE = 38;
const GLITCH_FRAMES = new Set([6, 7, 8, 22, 23]);

export const GlitchBar = () => {
    const frame = useCurrentFrame();

    const entrance = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });
    const localFrame = frame % CYCLE;
    const isGlitch = GLITCH_FRAMES.has(localFrame);

    return (
        <div className={classes.container} style={{ opacity: entrance }}>
            {BARS.map(({ offsetY, widthRatio, phase }, i) => {
                const shiftX = isGlitch ? (i % 2 === 0 ? 10 : -7) : 0;
                const opacity = isGlitch ? 0.75 : 0.18;
                const localPhase = ((frame + phase) % CYCLE);
                const altGlitch = GLITCH_FRAMES.has(localPhase);
                const finalOpacity = altGlitch ? 0.8 : opacity;

                return (
                    <div
                        key={i}
                        className={classes.bar}
                        style={{
                            top: `calc(50% + ${offsetY}px)`,
                            width: `${widthRatio * 100}%`,
                            transform: `translateX(${shiftX}px)`,
                            opacity: finalOpacity,
                        }}
                    />
                );
            })}
        </div>
    );
};
