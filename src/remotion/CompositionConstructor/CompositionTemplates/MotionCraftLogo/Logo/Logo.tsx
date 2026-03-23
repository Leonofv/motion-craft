import { useLogo } from './useLogo';

interface LogoProps {
    outProgress?: number;
}

const mStroke = 'M54 54V125.97H70V83L90 107L110 83V125.97H126V54H110L90 78L70 54H54Z';

export function Logo({ outProgress = 0 }: LogoProps) {
    const { leftLeg, leftLegAnimation, centerChevron, chevronAnimation, rightLeg, rightLegAnimation } = useLogo();

    return (
        <svg style={{ height: 140, borderRadius: 70, scale: 1 - outProgress }} viewBox="0 0 180 180" fill="none">
            <mask height={180} width={180}>
                <circle cx={90} cy={90} r={90} fill="black" />
            </mask>
            <mask id="chevronMask" style={{ maskType: 'alpha' }}>
                <path d={mStroke} fill="black" />
            </mask>
            <circle cx={90} cy={90} r={90} fill="black" />
            <path
                d={leftLeg}
                strokeDasharray={leftLegAnimation.strokeDasharray}
                strokeDashoffset={leftLegAnimation.strokeDashoffset}
                strokeWidth={12.5}
                stroke="white"
            />
            <path
                d={centerChevron}
                strokeDasharray={chevronAnimation.strokeDasharray}
                strokeDashoffset={chevronAnimation.strokeDashoffset}
                strokeWidth={12.5}
                stroke="white"
                mask="url(#chevronMask)"
            />
            <path
                d={rightLeg}
                strokeDasharray={rightLegAnimation.strokeDasharray}
                strokeDashoffset={rightLegAnimation.strokeDashoffset}
                strokeWidth={12.5}
                stroke="url(#gradientLine)"
            />
            <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="gradientLine" x1={118} x2={118} y1={54} y2={128}>
                    <stop stopColor="white" />
                    <stop offset={1} stopOpacity={0.25} stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );
}
