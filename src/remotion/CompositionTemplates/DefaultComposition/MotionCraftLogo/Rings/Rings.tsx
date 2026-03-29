import classes from './Rings.module.css';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { useRings } from './useRings';

export const Rings = () => {
    const { height } = useVideoConfig();

    const { ringsOutSpring } = useRings();

    const scaleValue = 1 / (1 - ringsOutSpring);

    return (
        <AbsoluteFill
            style={{
                transform: `scale(${scaleValue})`,
            }}
        >
            {Array(5)
                .fill(null)
                .map((_, i) => {
                    const radius = height * i * 0.6;

                    return (
                        <AbsoluteFill key={i} className={classes.ringsWrapper}>
                            <div
                                className={classes.rings}
                                style={{
                                    height: radius,
                                    width: radius,
                                }}
                            />
                        </AbsoluteFill>
                    );
                })
                .reverse()}
        </AbsoluteFill>
    );
};
