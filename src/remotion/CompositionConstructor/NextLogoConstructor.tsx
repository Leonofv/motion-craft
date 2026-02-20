import { z } from 'zod';
import { CompositionProps } from '#/helpers/constants';
import { AbsoluteFill, Sequence } from 'remotion';
import { Logo } from './CompositionTemplates/NextLogo/Logo/Logo';
import { Rings } from './CompositionTemplates/NextLogo/Rings/Rings';
import { TextFade } from './CompositionTemplates/TextFade/TextFade';
import { useNextLogoContructor } from './useNextLogoContructor';

export const NextLogoConstructor = ({
    title,
}: z.infer<typeof CompositionProps>) => {
    const { logoOut, transitionStart, transitionDuration } =
        useNextLogoContructor();

    return (
        <AbsoluteFill style={{ backgroundColor: 'white' }}>
            <Sequence durationInFrames={transitionStart + transitionDuration}>
                <Rings outProgress={logoOut}></Rings>
                <AbsoluteFill
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Logo outProgress={logoOut}></Logo>
                </AbsoluteFill>
            </Sequence>
            <Sequence from={transitionStart + transitionDuration / 2}>
                <TextFade>
                    <h1 style={{ fontSize: 70 }}>{title}</h1>
                </TextFade>
            </Sequence>
        </AbsoluteFill>
    );
};
