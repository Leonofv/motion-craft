import { Composition, registerRoot } from 'remotion';
import {
    COMP_NAME,
    BASE_DURATION_IN_FRAMES,
    BASE_VIDEO_FPS,
    BASE_VIDEO_WIDTH,
    BASE_VIDEO_HEIGHT,
    defaultCompProps,
} from '../helpers/constants';
import { DefaultComposition } from './CompositionTemplates/DefaultComposition/DefaultComposition';

// Предполагается, как глобальный композитор сцен из отдельных композиций и/или фабрика для различных форматов сцен Reels, TikTok, YouTube версии
export const GlobalSceneComposer = () => {
    return (
        <Composition
            id={COMP_NAME}
            component={DefaultComposition}
            durationInFrames={BASE_DURATION_IN_FRAMES}
            fps={BASE_VIDEO_FPS}
            width={BASE_VIDEO_WIDTH}
            height={BASE_VIDEO_HEIGHT}
            defaultProps={defaultCompProps}
        />
    );
};

registerRoot(GlobalSceneComposer);
