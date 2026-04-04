import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import classes from './WaveGrid.module.css';

const COLS = 10;
const ROWS = 6;
const WAVE_SPEED = 0.1;

export const WaveGrid = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const globalOpacity = interpolate(
        frame,
        [0, durationInFrames * 0.25, durationInFrames * 0.75, durationInFrames],
        [0, 1, 1, 0],
    );

    const cells = [];
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const wave = Math.sin(frame * WAVE_SPEED + col * 0.6 + row * 0.4);
            const opacity = interpolate(wave, [-1, 0, 1], [0.03, 0.12, 0.22]);
            cells.push({ col, row, opacity, key: row * COLS + col });
        }
    }

    return (
        <AbsoluteFill className={classes.container} style={{ opacity: globalOpacity }}>
            {cells.map(({ col, row, opacity, key }) => (
                <div
                    key={key}
                    className={classes.cell}
                    style={{
                        left: `${(col / COLS) * 100}%`,
                        top: `${(row / ROWS) * 100}%`,
                        width: `${100 / COLS}%`,
                        height: `${100 / ROWS}%`,
                        background: `rgba(255,255,255,${opacity})`,
                    }}
                />
            ))}
        </AbsoluteFill>
    );
};
