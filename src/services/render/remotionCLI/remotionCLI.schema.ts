import { z } from 'zod';

export const RenderDataSchema = z.object({
    compositionId: z.string(),
    outputFileName: z.string(),
    inputProps: z.string(),
    codec: z.string(),
    fps: z.number(),
    width: z.number(),
    height: z.number(),
});

export const RenderMessageResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
});

export const RenderDataResponseSchema = RenderMessageResponseSchema.extend({
    data: RenderDataSchema,
});
