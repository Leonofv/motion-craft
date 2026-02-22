import { z } from 'zod';
export const COMP_NAME = 'MyComp';

export const CompositionProps = z.object({
    title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
    title: 'Hello world',
};

export const BASE_DURATION_IN_FRAMES = 200;
export const BASE_VIDEO_WIDTH = 1280;
export const BASE_VIDEO_HEIGHT = 720;
export const BASE_VIDEO_FPS = 24;
