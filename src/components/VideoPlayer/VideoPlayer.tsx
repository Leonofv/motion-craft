import classes from './VideoPlayer.module.css';

import { Player } from '@remotion/player';
import { Main } from '#/remotion/MyComp/Main';
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
                component={Main}
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
