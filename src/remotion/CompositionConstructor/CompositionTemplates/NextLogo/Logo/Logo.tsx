import { useLogo } from './useLogo';

interface LogoProps {
    outProgress?: number;
}

const nStroke =
    'M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z';

export function Logo({ outProgress = 0 }: LogoProps) {
    const {
        firstPath,
        evolution1,
        secondPath,
        evolution2,
        thirdPath,
        evolution3,
    } = useLogo();

    return (
        <svg
            style={{ height: 140, borderRadius: 70, scale: 1 - outProgress }}
            fill="none"
            viewBox="0 0 180 180"
        >
            <mask
                height="180"
                id="mask"
                style={{ maskType: 'alpha' }}
                width="180"
                x="0"
                y="0"
            >
                <circle cx="90" cy="90" fill="black" r="90"></circle>
            </mask>
            <mask id="n-mask" style={{ maskType: 'alpha' }}>
                <path d={nStroke} fill="black"></path>
            </mask>
            <g mask="url(#mask)">
                <circle cx="90" cy="90" fill="black" r="90"></circle>
                <g stroke="url(#gradient0)" mask="url(#n-mask)">
                    <path
                        strokeWidth="12.1136"
                        d={firstPath}
                        strokeDasharray={evolution1.strokeDasharray}
                        strokeDashoffset={evolution1.strokeDashoffset}
                    ></path>
                    <path
                        strokeWidth={12.1136}
                        d={secondPath}
                        strokeDasharray={evolution2.strokeDasharray}
                        strokeDashoffset={evolution2.strokeDashoffset}
                    ></path>
                </g>
                <path
                    stroke="url(#gradient1)"
                    d={thirdPath}
                    strokeDasharray={evolution3.strokeDasharray}
                    strokeDashoffset={evolution3.strokeDashoffset}
                    strokeWidth="12"
                ></path>
            </g>
            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="gradient0"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                >
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="gradient1"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                >
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}
