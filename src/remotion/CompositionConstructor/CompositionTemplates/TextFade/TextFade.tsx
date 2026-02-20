import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';

interface TextFadeProps {
    children: React.ReactNode;
}

export function TextFade({ children }: TextFadeProps) {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const progress = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: 80,
    });

    const rightStop = interpolate(progress, [0, 1], [200, 0]);

    const leftStop = Math.max(0, rightStop - 60);

    const maskImage = `linear-gradient(-45deg, transparent ${leftStop}%, black ${rightStop}%)`;

    return (
        <AbsoluteFill>
            <AbsoluteFill
                style={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <div style={{ maskImage, WebkitMaskImage: maskImage }}>
                    {children}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
}
