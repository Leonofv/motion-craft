import { OpenRouterResponseSchema } from './openRouter.schema';
import { OpenRouterRequest } from './openRouter.types';

export const OpenRouterService = {
    async sendQwenPrompt(params: OpenRouterRequest) {
        const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'qwen/qwen3.6-plus:free',
                messages: [{ role: 'user', content: params.prompt }],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message);
        }

        const { choices } = OpenRouterResponseSchema.parse(await response.json());
        return choices[0].message.content;
    },
};
