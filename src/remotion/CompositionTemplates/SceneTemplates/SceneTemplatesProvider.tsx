import { CompositionConstructor } from '../../CompositionConstructor/CompositionConstructor';

import { GradientViolet } from './Background/GradientViolet/GradientViolet';
import { GradientCrimson } from './Background/GradientCrimson/GradientCrimson';
import { GradientCyber } from './Background/GradientCyber/GradientCyber';

import { CenterText } from './FirstPlan/Center/CenterText/CenterText';
import { LogoReveal } from './FirstPlan/Center/LogoReveal/LogoReveal';
import { SplitText } from './FirstPlan/Center/SplitText/SplitText';
import { CounterDisplay } from './FirstPlan/Center/CounterDisplay/CounterDisplay';
import { TitleCard } from './FirstPlan/Center/TitleCard/TitleCard';

import { TextSlide } from './FirstPlan/Edges/TextSlide/TextSlide';
import { HorizontalLine } from './FirstPlan/Edges/HorizontalLine/HorizontalLine';
import { VerticalLine } from './FirstPlan/Edges/VerticalLine/VerticalLine';
import { EdgeLabel } from './FirstPlan/Edges/EdgeLabel/EdgeLabel';
import { TimerBar } from './FirstPlan/Edges/TimerBar/TimerBar';

import { CornerDot } from './FirstPlan/Angles/CornerDot/CornerDot';
import { CornerBracket } from './FirstPlan/Angles/CornerBracket/CornerBracket';
import { CrossHair } from './FirstPlan/Angles/CrossHair/CrossHair';

import { HaloRing } from './SecondPlan/Center/HaloRing/HaloRing';
import { AmbientParticles } from './SecondPlan/Center/AmbientParticles/AmbientParticles';
import { EchoRings } from './SecondPlan/Center/EchoRings/EchoRings';

import { EdgeGlow } from './SecondPlan/Edges/EdgeGlow/EdgeGlow';
import { LightPulse } from './SecondPlan/Edges/LightPulse/LightPulse';
import { NeonTrace } from './SecondPlan/Edges/NeonTrace/NeonTrace';

import { CornerGlow } from './SecondPlan/Angles/CornerGlow/CornerGlow';
import { AngleFlare } from './SecondPlan/Angles/AngleFlare/AngleFlare';
import { CornerSpark } from './SecondPlan/Angles/CornerSpark/CornerSpark';

import { ShimmerBeam } from './ThirdPlan/ShimmerBeam/ShimmerBeam';
import { DustDrift } from './ThirdPlan/DustDrift/DustDrift';
import { StarField } from './ThirdPlan/StarField/StarField';
import { MeshWave } from './ThirdPlan/MeshWave/MeshWave';
import { WaveGrid } from './ThirdPlan/WaveGrid/WaveGrid';

export const SceneTemplatesProvider = () => (
    <CompositionConstructor
        sceneComponents={{
            backgrounds: [GradientViolet, GradientCrimson, GradientCyber],
            thirdPlan: {
                elements: [ShimmerBeam, DustDrift, StarField, MeshWave, WaveGrid],
            },
            secondPlan: {
                // Атмосферные эффекты, дополняющие FirstPlan (рендерятся под ним)
                centerElements: [HaloRing, AmbientParticles, EchoRings],
                edgeElements: [EdgeGlow, LightPulse, NeonTrace],
                angleElements: [CornerGlow, AngleFlare, CornerSpark],
            },
            firstPlan: {
                centerElements: [CenterText, LogoReveal, SplitText, CounterDisplay, TitleCard],
                edgeElements: [TextSlide, HorizontalLine, VerticalLine, EdgeLabel, TimerBar],
                angleElements: [CornerDot, CornerBracket, CrossHair],
            },
        }}
    />
);
