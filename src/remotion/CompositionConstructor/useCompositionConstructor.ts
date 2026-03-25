import { useVideoConfig } from 'remotion';
import { useDefaultCompositionTransition } from '../CompositionTemplates/DefaultComposition/useDefaultCompositionTransition';

// Предполагается, как обработчик, в который мы будем получать все возможные SceneTemplates и TransitionTemplates
// Здесь же будем обрабатыать их и возвращать только определенные наборы SceneTemplates + TransitionTemplates
export const useCompositionConstructor = () => {
    const { fps } = useVideoConfig();

    const { logoOut } = useDefaultCompositionTransition();

    // Полагаю, что в будущем эти параметры следует отдать на ввод пользователю
    const defaultTransitionDelay = 2 * fps;
    const defaultTransitionDuration = 1.5 * fps;

    return {
        logoOut,
        defaultTransitionDelay,
        defaultTransitionDuration,
    };
};
