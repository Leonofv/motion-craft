import { z } from 'zod';

export const OpenRouterRequestSchema = z.object({
    prompt: z.string(),
});

export const OpenRouterResponseSchema = z.object({
    choices: z.array(
        z.object({
            message: z.object({
                content: z.string(),
            }),
        }),
    ),
});
