import { useState } from 'react';
import type { DSLConfig, VideoConfig } from '#/helpers/types';
import { COMP_NAME, BASE_VIDEO_HEIGHT, BASE_VIDEO_WIDTH, defaultCompProps } from '#/helpers/constants';
import { DEFAULT_VIDEO_CONFIG, DEFAULT_DSL_CONFIG } from './videoRenderConstants';
import { RemotionCliService } from '#/services/render/remotionCLI/remotionCLI.service';
import { OpenRouterService } from '#/services/openRouter/openRouter.service';

export const useVideoRenderControls = () => {
    const [isPromtLoading, setIsPropmtLoading] = useState(false);
    const [promptConfig, setPromptConfig] = useState<DSLConfig>(DEFAULT_DSL_CONFIG);

    const [isRendering, setIsRendering] = useState(false);
    const [videoConfig, setVideoConfig] = useState<VideoConfig>(DEFAULT_VIDEO_CONFIG);

    const sendPrompt = async () => {
        setIsPropmtLoading(true);
        try {
            const result = await OpenRouterService.sendQwenPrompt({ prompt: promptConfig.requestText ?? '' });
            setPromptConfig((prev) => ({ ...prev, response: result }));
        } catch (error) {
            console.error(error);
        } finally {
            setIsPropmtLoading(false);
        }
    };

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
        promptConfig,
        setPromptConfig,
        sendPrompt,
        isPromtLoading,
    };
};
