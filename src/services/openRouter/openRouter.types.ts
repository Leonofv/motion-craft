import { z } from 'zod';
import { OpenRouterRequestSchema, OpenRouterResponseSchema } from './openRouter.schema';

export type OpenRouterRequest = z.infer<typeof OpenRouterRequestSchema>;
export type OpenRouterResponse = z.infer<typeof OpenRouterResponseSchema>;
