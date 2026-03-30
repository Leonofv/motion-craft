import { useState } from 'react';
import type { DSLConfig, VideoConfig } from '#/helpers/types';
import { COMP_NAME, BASE_VIDEO_HEIGHT, BASE_VIDEO_WIDTH, defaultCompProps } from '#/helpers/constants';
import { DEFAULT_VIDEO_CONFIG, DEFAULT_DSL_CONFIG } from './videoRenderConstants';
import { RemotionCliService } from '#/services/render/remotionCLI/remotionCLI.service';

export const useVideoRenderControls = () => {
    const [isRendering, setIsRendering] = useState(false);

    const [videoConfig, setVideoConfig] = useState<VideoConfig>(DEFAULT_VIDEO_CONFIG);
    const [DSLPromptConfig, setDSLPromptConfig] = useState<DSLConfig>(DEFAULT_DSL_CONFIG);

    const renderMedia = async () => {
        setIsRendering(true);
        try {
            await RemotionCliService.createMotionRender({
                compositionId: COMP_NAME,
                outputFileName: videoConfig.outName,
                inputProps: defaultCompProps.title,
                codec: videoConfig.codec,
                fps: videoConfig.fps,
                width: BASE_VIDEO_WIDTH,
                height: BASE_VIDEO_HEIGHT,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsRendering(false);
        }
    };

    return {
        renderMedia,
        isRendering,
        videoConfig,
        setVideoConfig,
        DSLPromptConfig,
        setDSLPromptConfig,
    };
};
