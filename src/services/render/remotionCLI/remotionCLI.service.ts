import { RenderMessageResponseSchema, RenderDataResponseSchema } from './remotionCLI.schema';
import { RenderData } from './remotionCLI.types';

export const RemotionCliService = {
    async createMotionRender(params: RenderData) {
        const response = await fetch('/api/cli/render', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            const errorData = RenderMessageResponseSchema.parse(response);
            throw new Error(errorData.message);
        }
        return RenderDataResponseSchema.parse(await response.json());
    },
};
