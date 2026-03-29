import { AbsoluteFill, Sequence } from 'remotion';
import { Logo } from '../CompositionTemplates/DefaultComposition/MotionCraftLogo/Logo/Logo';
import { Rings } from '../CompositionTemplates/DefaultComposition/MotionCraftLogo/Rings/Rings';
import { TextFade } from '../CompositionTemplates/DefaultComposition/TextFade/TextFade';
import { useCompositionConstructor } from './useCompositionConstructor';

// Предполагается как сервис, в который мы будем передавать из useCompositionConstructor обработанные наборы SceneTemplates и TransitionTemplates
// Из которых мы будем формировать композицию и возвращать ее
export const CompositionConstructor = () => {
    const { defaultTransitionDelay, defaultTransitionDuration } = useCompositionConstructor();

    return (
        // Нужно иметь возможность предавать массив сцен
        // (сцена - Sequence, нужно иметь возможность преедавать массив содержимого сцен (Rings, Logo) и так далее)
        <AbsoluteFill>
            <Sequence durationInFrames={defaultTransitionDelay + defaultTransitionDuration}>
                <Rings />
                <Logo />
            </Sequence>
            <Sequence from={defaultTransitionDelay + defaultTransitionDuration / 2}>
                <TextFade />
            </Sequence>
        </AbsoluteFill>
    );
};
