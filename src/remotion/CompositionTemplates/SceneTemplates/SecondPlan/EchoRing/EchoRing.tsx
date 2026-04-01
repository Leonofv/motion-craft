import { interpolate, useCurrentFrame } from 'remotion';
import classes from './EchoRing.module.css';

const RING_COUNT = 3;
const CYCLE = 65;
const PHASE_OFFSET = CYCLE / RING_COUNT;

export const EchoRing = () => {
    const frame = useCurrentFrame();

    return (
        <div className={classes.container}>
            {Array.from({ length: RING_COUNT }).map((_, i) => {
                const localFrame = (frame + i * PHASE_OFFSET) % CYCLE;

                const scale = interpolate(localFrame, [0, CYCLE], [0.15, 2.2]);
                const opacity = interpolate(
                    localFrame,
                    [0, CYCLE * 0.12, CYCLE * 0.65, CYCLE],
                    [0, 0.55, 0.25, 0],
                );

                return (
                    <div
                        key={i}
                        className={classes.ring}
                        style={{ transform: `scale(${scale})`, opacity }}
                    />
                );
            })}
        </div>
    );
};
