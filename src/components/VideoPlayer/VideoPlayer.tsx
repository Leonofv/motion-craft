import classes from './VideoPlayer.module.css';

import { Player } from '@remotion/player';
import { NextLogoConstructor } from '#/remotion/CompositionConstructor/NextLogoConstructor';
import type { VideoConfig } from '#/helpers/types';
import { BASE_VIDEO_HEIGHT, BASE_VIDEO_WIDTH } from '#/helpers/constants';

interface VideoPlayerProps {
    inputProps: any;
    videoConfig: VideoConfig;
}

export const VideoPlayer = ({ inputProps, videoConfig }: VideoPlayerProps) => {
    return (
        <div className={classes.playerContainer}>
            <Player
                component={NextLogoConstructor}
                inputProps={inputProps}
                durationInFrames={videoConfig.durationInFrames}
                fps={videoConfig.fps}
                compositionHeight={BASE_VIDEO_HEIGHT}
                compositionWidth={BASE_VIDEO_WIDTH}
                style={{ width: '100%' }}
                controls
                autoPlay
                loop
            />
        </div>
    );
};
