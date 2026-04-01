import { useVideoConfig } from 'remotion';
import { ComponentType } from 'react';
import { AnglePosition, EdgePosition, SceneComponents, ProcessedScene } from './helper/types';
import { positionedComponentFactory } from './helper/positionedComponents';

type EdgeConfig = { component: ComponentType; position: EdgePosition };
type AngleConfig = { component: ComponentType; position: AnglePosition };

type SceneConfig = {
    background: ComponentType;
    center: ComponentType[];
    edges: EdgeConfig[];
    angles: AngleConfig[];
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
            center: [sceneComponents.centerElements[0], sceneComponents.centerElements[1]],
            edges: [
                { component: sceneComponents.edgeElements[1], position: 'top' },
                { component: sceneComponents.edgeElements[1], position: 'bottom' },
                { component: sceneComponents.edgeElements[2], position: 'left' },
                { component: sceneComponents.edgeElements[2], position: 'right' },
            ],
            angles: [
                { component: sceneComponents.angleElements[1], position: 'top-left' },
                { component: sceneComponents.angleElements[0], position: 'top-right' },
                { component: sceneComponents.angleElements[0], position: 'bottom-left' },
                { component: sceneComponents.angleElements[1], position: 'bottom-right' },
            ],
        },
        {
            background: sceneComponents.backgrounds[1],
            center: [sceneComponents.centerElements[1]],
            edges: [
                { component: sceneComponents.edgeElements[1], position: 'top' },
                { component: sceneComponents.edgeElements[0], position: 'bottom' },
                { component: sceneComponents.edgeElements[2], position: 'right' },
            ],
            angles: [
                { component: sceneComponents.angleElements[1], position: 'top-left' },
                { component: sceneComponents.angleElements[1], position: 'bottom-right' },
            ],
        },
        {
            background: sceneComponents.backgrounds[2],
            center: [sceneComponents.centerElements[0]],
            edges: [
                { component: sceneComponents.edgeElements[2], position: 'left' },
                { component: sceneComponents.edgeElements[2], position: 'right' },
                { component: sceneComponents.edgeElements[1], position: 'top' },
            ],
            angles: [
                { component: sceneComponents.angleElements[2], position: 'top-right' },
                { component: sceneComponents.angleElements[2], position: 'bottom-left' },
            ],
        },
    ];

    const processedScenes: ProcessedScene[] = mockCompositions.map(({ background, center, edges, angles }, index) => {
        const edgePositioned = edges.map(({ component, position }) => positionedComponentFactory(component, position));
        const anglePositioned = angles.map(({ component, position }) => positionedComponentFactory(component, position));

        return {
            components: [background, ...center, ...edgePositioned, ...anglePositioned],
            from: index * sceneDuration,
            durationInFrames: sceneDuration,
        };
    });

    return { processedScenes };
};
