import { useVideoConfig } from 'remotion';

// Предполагается, как обработчик, в который мы будем получать все возможные SceneTemplates и TransitionTemplates
// Здесь же будем обрабатыать их и возвращать только определенные наборы SceneTemplates + TransitionTemplates
export const useCompositionConstructor = () => {
    const { fps } = useVideoConfig();

    // Полагаю, что в будущем эти параметры следует отдать на ввод пользователю
    const defaultTransitionDelay = 2 * fps;
    const defaultTransitionDuration = 1.5 * fps;

    return {
        defaultTransitionDelay,
        defaultTransitionDuration,
    };
};
