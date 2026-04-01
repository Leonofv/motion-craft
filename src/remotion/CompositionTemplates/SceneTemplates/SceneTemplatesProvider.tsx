import { CompositionConstructor } from '../../CompositionConstructor/CompositionConstructor';
import { GradientViolet } from './FirstPlan/Background/GradientViolet/GradientViolet';
import { GradientCrimson } from './FirstPlan/Background/GradientCrimson/GradientCrimson';
import { GradientCyber } from './FirstPlan/Background/GradientCyber/GradientCyber';
import { CenterText } from './FirstPlan/Center/CenterText/CenterText';
import { CenterRing } from './FirstPlan/Center/CenterRing/CenterRing';
import { TextSlide } from './FirstPlan/Edges/TextSlide/TextSlide';
import { HorizontalLine } from './FirstPlan/Edges/HorizontalLine/HorizontalLine';
import { VerticalLine } from './FirstPlan/Edges/VerticalLine/VerticalLine';
import { CornerDot } from './FirstPlan/Angles/CornerDot/CornerDot';
import { CornerBracket } from './FirstPlan/Angles/CornerBracket/CornerBracket';
import { CornerText } from './FirstPlan/Angles/CornerText/CornerText';
import { PulseRing } from './SecondPlan/PulseRing/PulseRing';
import { ChargeBar } from './SecondPlan/ChargeBar/ChargeBar';
import { GlitchBar } from './SecondPlan/GlitchBar/GlitchBar';
import { EchoRing } from './SecondPlan/EchoRing/EchoRing';
import { SpinCross } from './SecondPlan/SpinCross/SpinCross';
import { ShimmerBeam } from './ThirdPlan/ShimmerBeam/ShimmerBeam';
import { FloatingParticles } from './ThirdPlan/FloatingParticles/FloatingParticles';

export const SceneTemplatesProvider = () => (
    <CompositionConstructor
        sceneComponents={{
            backgrounds: [GradientViolet, GradientCrimson, GradientCyber],
            thirdPlan: {
                elements: [ShimmerBeam, FloatingParticles],
            },
            secondPlan: {
                centerElements: [PulseRing],
                edgeElements: [ChargeBar, GlitchBar],
                angleElements: [EchoRing, SpinCross],
            },
            firstPlan: {
                centerElements: [CenterText, CenterRing],
                edgeElements: [TextSlide, HorizontalLine, VerticalLine],
                angleElements: [CornerDot, CornerBracket, CornerText],
            },
        }}
    />
);
