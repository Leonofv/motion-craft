import { ComponentType } from 'react';

export type EdgePosition = 'top' | 'bottom' | 'left' | 'right';

export type AnglePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type ComponentPosition = EdgePosition | AnglePosition;

export type SceneComponents = {
    backgrounds: ComponentType[];
    centerElements: ComponentType[];
    edgeElements: ComponentType[];
    angleElements: ComponentType[];
};

export type ProcessedScene = {
    components: ComponentType[];
    from: number;
    durationInFrames: number;
};
