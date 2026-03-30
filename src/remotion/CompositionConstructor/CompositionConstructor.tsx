import { AbsoluteFill, Sequence } from 'remotion';
import { useCompositionConstructor } from './useCompositionConstructor';
import { SceneComponents } from './helper/types';

type CompositionConstructorProps = {
    sceneComponents: SceneComponents;
};

export const CompositionConstructor = ({ sceneComponents }: CompositionConstructorProps) => {
    const { processedScenes } = useCompositionConstructor(sceneComponents);

    return (
        <AbsoluteFill>
            {processedScenes.map(({ components, from, durationInFrames }) => (
                <Sequence
                    key={components.map((comp) => comp.displayName ?? comp.name).join('+')}
                    from={from}
                    durationInFrames={durationInFrames}
                >
                    {components.map((Scene) => (
                        <Scene key={Scene.displayName ?? Scene.name} />
                    ))}
                </Sequence>
            ))}
        </AbsoluteFill>
    );
};
