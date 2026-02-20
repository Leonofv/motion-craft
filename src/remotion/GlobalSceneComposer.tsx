import { Composition } from 'remotion';
import {
    COMP_NAME,
    DURATION_IN_FRAMES,
    VIDEO_FPS,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    defaultMyCompProps,
} from '#/helpers/constants';
import { NextLogoConstructor } from './CompositionConstructor/NextLogoConstructor';

// Предполагается, как глобальный композитор сцен из отдельных композиций и/или фабрика для различных форматов сцен Reels, TikTok, YouTube версии
export function GlobalSceneComposer() {
    return (
        <Composition
            id={COMP_NAME}
            component={NextLogoConstructor}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            width={VIDEO_WIDTH}
            height={VIDEO_HEIGHT}
            defaultProps={defaultMyCompProps}
        />
    );
}
