import { AbsoluteFill } from 'remotion';
import { useCenterRing } from './useCenterRing';
import classes from './CenterRing.module.css';
import centerClasses from '../CenterStyles.module.css';

export const CenterRing = () => {
    const { scale, opacity } = useCenterRing();

    return (
        <AbsoluteFill className={centerClasses.center}>
            <div className={classes.ring} style={{ transform: `scale(${scale})`, opacity }} />
        </AbsoluteFill>
    );
};
