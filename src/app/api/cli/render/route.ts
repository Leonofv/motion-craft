import { RenderData } from '#/services/render/remotionCLI/remotionCLI.types';
import { spawn } from 'child_process';
import { NextRequest, NextResponse } from 'next/server';

const CLISceneRenderer = {
    async renderScene(body: RenderData): Promise<RenderData> {
        const args = [
            'render',
            './src/remotion/GlobalSceneComposer.tsx',
            body.compositionId,
            `./output/${body.outputFileName}.mp4`,
            ...(body.codec ? ['--codec', body.codec] : []),
            ...(body.fps ? ['--fps', body.fps.toString()] : []),
            ...(body.width ? ['--width', body.width.toString()] : []),
            ...(body.height ? ['--height', body.height.toString()] : []),
        ];

        const child = spawn('npx', ['remotion', ...args], {
            cwd: process.cwd(),
        });

        await new Promise((resolve) => child.on('close', resolve));

        return body;
    },
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = await CLISceneRenderer.renderScene(body);

        return NextResponse.json({
            success: true,
            message: 'Рендеринг видео успешно завершен',
            data: result,
        });
    } catch (error: unknown) {
        return NextResponse.json(
            {
                success: false,
                message: 'Ошибка при рендеринге видео',
            },
            { status: 500 },
        );
    }
}
