import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './MeshWave.module.css';

const COLS = 15;
const ROWS = 9;
const WAVE_SPEED = 0.08;
const WAVE_AMPLITUDE = 6;

export const MeshWave = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const globalOpacity = interpolate(
        frame,
        [0, durationInFrames * 0.25, durationInFrames * 0.75, durationInFrames],
        [0, 1, 1, 0],
    );

    const dots = [];
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const x = (col / (COLS - 1)) * 100;
            const y = (row / (ROWS - 1)) * 100;

            const waveOffset = (col + row) * 0.4;
            const waveY = Math.sin(frame * WAVE_SPEED + waveOffset) * WAVE_AMPLITUDE;
            const waveX = Math.cos(frame * WAVE_SPEED * 0.7 + waveOffset) * WAVE_AMPLITUDE * 0.5;

            const dotOpacity = 0.06 + Math.abs(Math.sin(frame * WAVE_SPEED + waveOffset)) * 0.08;

            dots.push({ x, y, waveX, waveY, dotOpacity, key: row * COLS + col });
        }
    }

    return (
        <AbsoluteFill className={classes.container} style={{ opacity: globalOpacity }}>
            {dots.map(({ x, y, waveX, waveY, dotOpacity, key }) => (
                <div
                    key={key}
                    className={classes.dot}
                    style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        opacity: dotOpacity,
                        transform: `translate(calc(-50% + ${waveX}px), calc(-50% + ${waveY}px))`,
                    }}
                />
            ))}
        </AbsoluteFill>
    );
};
