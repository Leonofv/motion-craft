import { BASE_VIDEO_FPS, BASE_DURATION_IN_FRAMES } from '#/helpers/constants';
import { DSLConfig, VideoConfig } from '#/helpers/types';

export const DEFAULT_VIDEO_CONFIG: VideoConfig = {
    fps: BASE_VIDEO_FPS,
    durationInFrames: BASE_DURATION_IN_FRAMES,
    outName: 'MotionFile',
    videoImageFormat: 'jpeg',
    pixelFormat: 'yuv420p',
    codec: 'h264',
    proResProfile: null,
};

export const DEFAULT_DSL_CONFIG: DSLConfig = {
    text: '',
};
