import { AbsoluteFill } from 'remotion';
import { useGradientCrimson } from './useGradientCrimson';

export const GradientCrimson = () => {
    const { midStop, outerStop } = useGradientCrimson();

    return (
        <AbsoluteFill
            style={{ background: `radial-gradient(circle at 50% 50%, #e50914 0%, #8b0000 ${midStop}%, #141414 ${outerStop}%)` }}
        />
    );
};
