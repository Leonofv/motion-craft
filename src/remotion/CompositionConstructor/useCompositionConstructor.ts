import { useVideoConfig } from 'remotion';
import { ComponentType } from 'react';
import { AnglePosition, EdgePosition, SceneComponents, ProcessedScene } from './helper/types';
import { positionedComponentFactory } from './helper/positionedComponents';

type CenterConfig = { first: ComponentType; second?: ComponentType };
type EdgeConfig = { first: ComponentType; second?: ComponentType; position: EdgePosition };
type AngleConfig = { first: ComponentType; second?: ComponentType; position: AnglePosition };

type SceneConfig = {
    background: ComponentType;
    thirdPlan: ComponentType[];
    centers: CenterConfig[];
    edges: EdgeConfig[];
    angles: AngleConfig[];
};

// Принимает компоненты сцены и собирает из них готовые композиции с позиционированием.
// Порядок рендера: background → thirdPlan → [second+first] для center/edge/angle
export const useCompositionConstructor = (sceneComponents: SceneComponents) => {
    const { fps } = useVideoConfig();

    // TODO: Позже добавить реализацию, где пользователь сам будет задавать время для сцен, а пока используем затычку.
    const sceneDuration = 2 * fps + 1.5 * fps;

    const { firstPlan: fp, secondPlan: sp, thirdPlan: tp } = sceneComponents;

    // TODO: заменить на динамическую генерацию сцен, пока затычка
    const mockCompositions: SceneConfig[] = [
        {
            background: sceneComponents.backgrounds[0],
            thirdPlan: [tp.elements[2]],
            centers: [{ first: fp.centerElements[0], second: sp.centerElements[1] }],
            edges: [
                { first: fp.edgeElements[1], second: sp.edgeElements[0], position: 'top' },
                { first: fp.edgeElements[0], second: sp.edgeElements[0], position: 'bottom' },
                { first: fp.edgeElements[2], second: sp.edgeElements[0], position: 'left' },
                { first: fp.edgeElements[2], second: sp.edgeElements[0], position: 'right' },
            ],
            angles: [
                { first: fp.angleElements[0], second: sp.angleElements[1], position: 'top-left' },
                { first: fp.angleElements[0], second: sp.angleElements[1], position: 'top-right' },
                { first: fp.angleElements[0], second: sp.angleElements[1], position: 'bottom-left' },
                { first: fp.angleElements[0], second: sp.angleElements[1], position: 'bottom-right' },
            ],
        },
        {
            background: sceneComponents.backgrounds[1],
            thirdPlan: [tp.elements[0]],
            centers: [{ first: fp.centerElements[1], second: sp.centerElements[0] }],
            edges: [
                { first: fp.edgeElements[0], second: sp.edgeElements[1], position: 'top' },
                { first: fp.edgeElements[0], second: sp.edgeElements[1], position: 'bottom' },
                { first: fp.edgeElements[2], second: sp.edgeElements[0], position: 'right' },
            ],
            angles: [
                { first: fp.angleElements[1], second: sp.angleElements[0], position: 'top-left' },
                { first: fp.angleElements[1], second: sp.angleElements[1], position: 'top-right' },
                { first: fp.angleElements[2], second: sp.angleElements[0], position: 'bottom-right' },
            ],
        },
        {
            background: sceneComponents.backgrounds[2],
            thirdPlan: [tp.elements[1]],
            centers: [{ first: fp.centerElements[0], second: sp.centerElements[0] }],
            edges: [
                { first: fp.edgeElements[2], second: sp.edgeElements[0], position: 'left' },
                { first: fp.edgeElements[2], second: sp.edgeElements[0], position: 'right' },
                { first: fp.edgeElements[1], second: sp.edgeElements[1], position: 'top' },
                { first: fp.edgeElements[0], second: sp.edgeElements[1], position: 'bottom' },
            ],
            angles: [
                { first: fp.angleElements[2], second: sp.angleElements[1], position: 'top-left' },
                { first: fp.angleElements[1], second: sp.angleElements[0], position: 'top-right' },
                { first: fp.angleElements[2], second: sp.angleElements[1], position: 'bottom-left' },
                { first: fp.angleElements[1], second: sp.angleElements[0], position: 'bottom-right' },
            ],
        },
    ];

    const processedScenes: ProcessedScene[] = mockCompositions.map(
        ({ background, thirdPlan, centers, edges, angles }, index) => {
            const centerComponents = centers.flatMap(({ first, second }) => (second ? [second, first] : [first]));

            const edgeComponents = edges.flatMap(({ first, second, position }) => {
                const firstPositioned = positionedComponentFactory(first, position);
                if (second) {
                    return [positionedComponentFactory(second, position), firstPositioned];
                }
                return [firstPositioned];
            });

            const angleComponents = angles.flatMap(({ first, second, position }) => {
                const firstPositioned = positionedComponentFactory(first, position);
                if (second) {
                    return [positionedComponentFactory(second, position), firstPositioned];
                }
                return [firstPositioned];
            });

            return {
                components: [background, ...thirdPlan, ...centerComponents, ...edgeComponents, ...angleComponents],
                from: index * sceneDuration,
                durationInFrames: sceneDuration,
            };
        },
    );

    return { processedScenes };
};
