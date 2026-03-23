import classes from './Rings.module.css';
import { AbsoluteFill, useVideoConfig } from 'remotion';

interface RingsProps {
    outProgress: number;
}

export const Rings = ({ outProgress }: RingsProps) => {
    const { height } = useVideoConfig();
    const scaleValue = 1 / (1 - outProgress);

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
                        <AbsoluteFill key={i} className={classes.ringWrapper}>
                            <div
                                className={classes.ring}
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
