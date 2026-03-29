import { ComponentType } from 'react';
import { useVideoConfig } from 'remotion';

type SceneGroup = ComponentType[];

type ProcessedScene = {
    components: ComponentType[];
    from: number;
    durationInFrames: number;
};

// Принимает массив групп компонентов — каждая группа играет одновременно в одном Sequence,
// группы выполняются последовательно. Здесь будет реализована логика переходов.
export const useCompositionConstructor = (scenes: SceneGroup[]) => {
    const { fps } = useVideoConfig();

    const defaultTransitionDelay = 2 * fps;
    const defaultTransitionDuration = 1.5 * fps;

    const defaultSceneDuration = defaultTransitionDelay + defaultTransitionDuration;

    const processedScenes: ProcessedScene[] = scenes.map((components, index) => ({
        components,
        from: index * defaultSceneDuration,
        durationInFrames: defaultSceneDuration,
    }));

    return { processedScenes };
};
