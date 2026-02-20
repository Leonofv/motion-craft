import classes from './VideoPlayer.module.css';

import { Player } from '@remotion/player';
import { NextLogoConstructor } from '#/remotion/CompositionConstructor/NextLogoConstructor';
import {
    DURATION_IN_FRAMES,
    VIDEO_FPS,
    VIDEO_HEIGHT,
    VIDEO_WIDTH,
} from '#/helpers/constants';

interface VideoPlayerProps {
    inputProps: any;
}

export const VideoPlayer = ({ inputProps }: VideoPlayerProps) => {
    return (
        <div className={classes.playerContainer}>
            <Player
                component={NextLogoConstructor}
                inputProps={inputProps}
                durationInFrames={DURATION_IN_FRAMES}
                fps={VIDEO_FPS}
                compositionHeight={VIDEO_HEIGHT}
                compositionWidth={VIDEO_WIDTH}
                style={{ width: '100%' }}
                controls
                autoPlay
                loop
            />
        </div>
    );
};
