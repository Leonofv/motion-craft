import { z } from 'zod';
import { useCallback, useMemo, useState } from 'react';
import {
    defaultMyCompProps,
    CompositionProps,
    COMP_NAME,
    BASE_DURATION_IN_FRAMES,
    BASE_VIDEO_FPS,
} from '#/helpers/constants';
import { renderVideo, getProgress } from '#/services/lambda/lambda.service';
import type { VideoConfig } from '#/helpers/types';

export const useVideoRenderControls = () => {
    const [isRendering, setIsRendering] = useState(false);
    const [text, setText] = useState<string>(defaultMyCompProps.title);
    const [videoConfig, setVideoConfig] = useState<VideoConfig>({
        fps: BASE_VIDEO_FPS,
        durationInFrames: BASE_DURATION_IN_FRAMES,
    });

    const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
        return {
            title: text,
        };
    }, [text]);

    const renderMedia = useCallback(async () => {
        setIsRendering(true);
        try {
            const { renderId, bucketName } = await renderVideo({
                id: COMP_NAME,
                inputProps,
            });

            let pending = true;

            while (pending) {
                const result = await getProgress({
                    id: renderId,
                    bucketName: bucketName,
                });
                switch (result.type) {
                    case 'error': {
                        pending = false;
                        break;
                    }
                    case 'progress': {
                        await new Promise<void>((resolve) => {
                            setTimeout(() => {
                                resolve();
                            }, 1000);
                        });
                    }
                    case 'done': {
                        setIsRendering(true);
                        pending = false;
                        break;
                    }
                }
            }
        } catch (error: unknown) {
            setIsRendering(true);
            console.log(error);
        }
    }, [inputProps]);

    return {
        text,
        setText,
        inputProps,
        renderMedia,
        isRendering,
        videoConfig,
        setVideoConfig,
    };
};
