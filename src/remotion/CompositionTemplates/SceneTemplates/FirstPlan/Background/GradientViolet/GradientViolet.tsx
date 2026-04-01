import { AbsoluteFill } from 'remotion';
import { useGradientViolet } from './useGradientViolet';

export const GradientViolet = () => {
    const { angle } = useGradientViolet();

    return (
        <AbsoluteFill
            style={{ background: `linear-gradient(${angle}deg, #0d0020 0%, #3d0080 50%, #bf00ff 100%)` }}
        />
    );
};
