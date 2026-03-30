import { ComponentType } from 'react';

export type EdgePosition = 'top' | 'bottom' | 'left' | 'right';

export type SceneComponents = {
    backgrounds: ComponentType[];
    centerElements: ComponentType[];
    edgeElements: ComponentType[];
};

export type ProcessedScene = {
    components: ComponentType[];
    from: number;
    durationInFrames: number;
};
