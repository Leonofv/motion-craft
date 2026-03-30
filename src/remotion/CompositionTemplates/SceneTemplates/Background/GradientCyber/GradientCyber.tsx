import { AbsoluteFill } from 'remotion';
import { useGradientCyber } from './useGradientCyber';

export const GradientCyber = () => {
    const { stop1, stop2, stop3 } = useGradientCyber();

    return (
        <AbsoluteFill
            style={{ background: `linear-gradient(135deg, #010101 ${stop1}%, #fe2c55 ${stop2}%, #25f4ee ${stop3}%)` }}
        />
    );
};
