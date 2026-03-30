import { useVideoConfig } from 'remotion';
import { ComponentType } from 'react';
import { EdgePosition, SceneComponents, ProcessedScene } from './helper/types';
import { edgeComponentsFactory } from './helper/edgeComponents/edgeComponents';

type EdgeConfig = { component: ComponentType; position: EdgePosition };

type SceneConfig = {
    background: ComponentType;
    center: ComponentType;
    edges: EdgeConfig[];
};

// Принимает компонены сцены и собирает из них готовые композиции с позиционированием.
// Здесь будет реализована логика генерации уникальных видео.
export const useCompositionConstructor = (sceneComponents: SceneComponents) => {
    const { fps } = useVideoConfig();

    // TODO: Позже добавить реализацию, где пользователь сам будет задавать время для сцен, а пока используем затычку.
    const sceneDuration = 2 * fps + 1.5 * fps;

    // TODO: заменить на динамическую генерацию сцен, пока затычка
    const mockCompositions: SceneConfig[] = [
        {
            background: sceneComponents.backgrounds[0],
            center: sceneComponents.centerElements[0],
            edges: [
                { component: sceneComponents.edgeElements[0], position: 'top' },
                { component: sceneComponents.edgeElements[1], position: 'bottom' },
                { component: sceneComponents.edgeElements[2], position: 'left' },
                { component: sceneComponents.edgeElements[0], position: 'right' },
            ],
        },
        {
            background: sceneComponents.backgrounds[1],
            center: sceneComponents.centerElements[1],
            edges: [
                { component: sceneComponents.edgeElements[1], position: 'top' },
                { component: sceneComponents.edgeElements[0], position: 'bottom' },
                { component: sceneComponents.edgeElements[2], position: 'right' },
            ],
        },
        {
            background: sceneComponents.backgrounds[2],
            center: sceneComponents.centerElements[0],
            edges: [
                { component: sceneComponents.edgeElements[2], position: 'left' },
                { component: sceneComponents.edgeElements[2], position: 'right' },
                { component: sceneComponents.edgeElements[1], position: 'top' },
            ],
        },
    ];

    const processedScenes: ProcessedScene[] = mockCompositions.map(({ background, center, edges }, index) => {
        const edgePositioned = edges.map(({ component, position }) => edgeComponentsFactory(component, position));

        return {
            components: [background, center, ...edgePositioned],
            from: index * sceneDuration,
            durationInFrames: sceneDuration,
        };
    });

    return { processedScenes };
};
