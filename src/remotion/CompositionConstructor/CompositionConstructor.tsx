import { ComponentType } from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { useCompositionConstructor } from './useCompositionConstructor';

type CompositionConstructorProps = {
    scenes: ComponentType[][];
};

// Чистый рендерер: получает группы компонентов-сцен, передаёт в useCompositionConstructor для сборки и рендерит результат
export const CompositionConstructor = ({ scenes }: CompositionConstructorProps) => {
    const { processedScenes } = useCompositionConstructor(scenes);

    return (
        <AbsoluteFill>
            {processedScenes.map(({ components, from, durationInFrames }) => (
                <Sequence
                    key={components.map((comp) => comp.name).join('+')}
                    from={from}
                    durationInFrames={durationInFrames}
                >
                    {components.map((Scene) => (
                        <Scene key={Scene.name} />
                    ))}
                </Sequence>
            ))}
        </AbsoluteFill>
    );
};
