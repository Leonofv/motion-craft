import { interpolate, useCurrentFrame } from 'remotion';
import classes from './CornerSpark.module.css';

const SPARKS = [{ angle: 20 }, { angle: 45 }, { angle: 70 }];

const CYCLE = 60;

export const CornerSpark = () => {
    const frame = useCurrentFrame();
    const localFrame = frame % CYCLE;
    const burst = interpolate(localFrame, [0, CYCLE * 0.12, CYCLE * 0.38, CYCLE], [0, 1, 0, 0]);

    return (
        <div className={classes.container}>
            {SPARKS.map(({ angle }, i) => (
                <div
                    key={i}
                    className={classes.spark}
                    style={{ transform: `rotate(${angle}deg)`, opacity: burst }}
                />
            ))}
        </div>
    );
};
