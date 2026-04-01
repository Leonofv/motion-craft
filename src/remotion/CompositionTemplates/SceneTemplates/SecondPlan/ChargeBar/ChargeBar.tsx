import { interpolate, useCurrentFrame } from 'remotion';
import classes from './ChargeBar.module.css';

const CYCLE = 55;

export const ChargeBar = () => {
    const frame = useCurrentFrame();

    const localFrame = frame % CYCLE;
    const entrance = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });

    const fill = interpolate(localFrame, [0, CYCLE * 0.7, CYCLE * 0.88, CYCLE], [0, 1, 1, 0]);
    const tipOpacity = interpolate(localFrame, [CYCLE * 0.55, CYCLE * 0.72], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    const flashOpacity = interpolate(localFrame, [CYCLE * 0.85, CYCLE * 0.9, CYCLE * 0.95], [0, 0.8, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    return (
        <div className={classes.track} style={{ opacity: entrance }}>
            <div className={classes.fill} style={{ width: `${fill * 100}%` }}>
                <div className={classes.tip} style={{ opacity: tipOpacity }} />
            </div>
            <div className={classes.flash} style={{ opacity: flashOpacity }} />
        </div>
    );
};
