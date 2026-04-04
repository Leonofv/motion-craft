import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import classes from './EchoRings.module.css';

const RINGS = 3;
const DELAY = 22;
const CYCLE = 80;

export const EchoRings = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill className={classes.container}>
            {Array.from({ length: RINGS }).map((_, i) => {
                const localFrame = (frame + i * DELAY) % CYCLE;
                const scale = interpolate(localFrame, [0, CYCLE], [0.4, 2.2]);
                const opacity = interpolate(localFrame, [0, CYCLE * 0.1, CYCLE * 0.65, CYCLE], [0, 0.38, 0.18, 0]);
                return (
                    <div key={i} className={classes.ring} style={{ transform: `scale(${scale})`, opacity }} />
                );
            })}
        </AbsoluteFill>
    );
};
