import classes from './TextFade.module.css';
import { AbsoluteFill } from 'remotion';
import { useTextFade } from './useTextFade';

interface TextFadeProps {
    children: React.ReactNode;
}

export const TextFade = ({ children }: TextFadeProps) => {
    const { maskImage } = useTextFade();

    return (
        <AbsoluteFill>
            <AbsoluteFill className={classes.textFadeWrapper}>
                <div style={{ maskImage, WebkitMaskImage: maskImage }}>{children}</div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
