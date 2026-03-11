import { z } from 'zod';
import { useMemo, useState } from 'react';
import type { DSLConfig, VideoConfig } from '#/helpers/types';
import {
    defaultMyCompProps,
    CompositionProps,
    COMP_NAME,
    BASE_VIDEO_HEIGHT,
    BASE_VIDEO_WIDTH,
} from '#/helpers/constants';
import { DEFAULT_VIDEO_CONFIG, DEFAULT_DSL_CONFIG } from './videoRenderConstants';
import { RemotionCliService } from '#/services/render/remotionCLI/remotionCLI.service';

export const useVideoRenderControls = () => {
    const [isRendering, setIsRendering] = useState(false);
    const [text, setText] = useState<string>(defaultMyCompProps.title);

    const [videoConfig, setVideoConfig] = useState<VideoConfig>(DEFAULT_VIDEO_CONFIG);

    const [DSLPromptConfig, setDSLPromptConfig] = useState<DSLConfig>(DEFAULT_DSL_CONFIG);

    const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
        return {
            title: text,
        };
    }, [text]);

    const renderMedia = async () => {
        setIsRendering(true);
        try {
            await RemotionCliService.createMotionRender({
                compositionId: COMP_NAME,
                outputFileName: videoConfig.outName,
                inputProps: inputProps,
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
        text,
        setText,
        inputProps,
        renderMedia,
        isRendering,
        videoConfig,
        setVideoConfig,
        DSLPromptConfig,
        setDSLPromptConfig,
    };
};
