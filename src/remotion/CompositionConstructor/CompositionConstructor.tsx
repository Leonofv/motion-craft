import { AbsoluteFill, Sequence } from 'remotion';
import { Logo } from './CompositionTemplates/MotionCraftLogo/Logo/Logo';
import { Rings } from './CompositionTemplates/MotionCraftLogo/Rings/Rings';
import { TextFade } from './CompositionTemplates/TextFade/TextFade';
import { useCompositionConstructor } from './useCompositionConstructor';
import { DEFAULT_PROJECT_NAME } from '#/helpers/constants';

export const CompositionConstructor = () => {
    const { logoOut, transitionStart, transitionDuration } = useCompositionConstructor();

    return (
        <AbsoluteFill style={{ backgroundColor: 'white' }}>
            <Sequence durationInFrames={transitionStart + transitionDuration}>
                <Rings outProgress={logoOut} />
                <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Logo outProgress={logoOut} />
                </AbsoluteFill>
            </Sequence>
            <Sequence from={transitionStart + transitionDuration / 2}>
                <TextFade>
                    <h1 style={{ fontSize: 70 }}>{DEFAULT_PROJECT_NAME}</h1>
                </TextFade>
            </Sequence>
        </AbsoluteFill>
    );
};
