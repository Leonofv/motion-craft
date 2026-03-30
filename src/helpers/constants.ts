import { z } from 'zod';
export const COMP_NAME = 'MyComp';

export const CompositionProps = z.object({
    title: z.string(),
});

export const DEFAULT_PROJECT_NAME = 'MotionCraft';

export const defaultCompProps: z.infer<typeof CompositionProps> = {
    title: DEFAULT_PROJECT_NAME,
};

export const BASE_DURATION_IN_FRAMES = 200;
export const BASE_VIDEO_WIDTH = 1280;
export const BASE_VIDEO_HEIGHT = 720;
export const BASE_VIDEO_FPS = 24;
