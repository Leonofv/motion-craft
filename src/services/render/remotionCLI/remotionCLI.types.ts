import { z } from 'zod';
import { RenderDataSchema } from './remotionCLI.schema';

export type RenderData = z.infer<typeof RenderDataSchema>;
