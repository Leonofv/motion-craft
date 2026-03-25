import { AbsoluteFill, Sequence } from 'remotion';
import { Logo } from '../CompositionTemplates/DefaultComposition/MotionCraftLogo/Logo/Logo';
import { Rings } from '../CompositionTemplates/DefaultComposition/MotionCraftLogo/Rings/Rings';
import { TextFade } from '../CompositionTemplates/DefaultComposition/TextFade/TextFade';
import { useCompositionConstructor } from './useCompositionConstructor';
import { DEFAULT_PROJECT_NAME } from '#/helpers/constants';

// Предполагается как сервис, в который мы будем передавать из useCompositionConstructor обработанные наборы SceneTemplates и TransitionTemplates
// Из которых мы будем формировать композицию и возвращать ее
export const CompositionConstructor = () => {
    const { defaultTransitionDelay, defaultTransitionDuration } = useCompositionConstructor();

    return (
        // При первом запуске приложения возвращается эта композиция, иначе другая - сгенерированная нами
        <AbsoluteFill>
            <Sequence durationInFrames={defaultTransitionDelay + defaultTransitionDuration}>
                <Rings />
                <AbsoluteFill style={{ justifyContent: 'center' }}>
                    <Logo />
                </AbsoluteFill>
            </Sequence>
            <Sequence from={defaultTransitionDelay + defaultTransitionDuration / 2}>
                <TextFade>
                    <h1 style={{ fontSize: 70 }}>{DEFAULT_PROJECT_NAME}</h1>
                </TextFade>
            </Sequence>
        </AbsoluteFill>
    );
};
