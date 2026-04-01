import { ComponentType } from 'react';

export type EdgePosition = 'top' | 'bottom' | 'left' | 'right';

export type AnglePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type ComponentPosition = EdgePosition | AnglePosition;

export type ElementsPositions = {
    centerElements: ComponentType[];
    edgeElements: ComponentType[];
    angleElements: ComponentType[];
};

export type ThirdPlanComponents = {
    elements: ComponentType[];
};

export type SceneComponents = {
    backgrounds: ComponentType[];
    thirdPlan: ThirdPlanComponents;
    secondPlan: ElementsPositions;
    firstPlan: ElementsPositions;
};

export type ProcessedScene = {
    components: ComponentType[];
    from: number;
    durationInFrames: number;
};
