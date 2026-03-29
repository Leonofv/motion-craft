import classes from './TextFade.module.css';
import { AbsoluteFill } from 'remotion';
import { useTextFade } from './useTextFade';
import { DEFAULT_PROJECT_NAME } from '#/helpers/constants';

export const TextFade = () => {
    const { maskImage } = useTextFade();

    return (
        <AbsoluteFill className={classes.textFadeWrapper}>
            <div style={{ maskImage, WebkitMaskImage: maskImage }}>
                <h1 style={{ fontSize: 70 }}>{DEFAULT_PROJECT_NAME}</h1>
            </div>
        </AbsoluteFill>
    );
};
