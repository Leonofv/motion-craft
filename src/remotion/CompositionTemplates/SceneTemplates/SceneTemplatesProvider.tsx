import { CompositionConstructor } from '../../CompositionConstructor/CompositionConstructor';
import { GradientViolet } from './Background/GradientViolet/GradientViolet';
import { GradientCrimson } from './Background/GradientCrimson/GradientCrimson';
import { GradientCyber } from './Background/GradientCyber/GradientCyber';
import { CenterText } from './Center/CenterText/CenterText';
import { CenterRing } from './Center/CenterRing/CenterRing';
import { TextSlide } from './Edges/TextSlide/TextSlide';
import { HorizontalLine } from './Edges/HorizontalLine/HorizontalLine';
import { VerticalLine } from './Edges/VerticalLine/VerticalLine';

export const SceneTemplatesProvider = () => (
    <CompositionConstructor
        sceneComponents={{
            backgrounds: [GradientViolet, GradientCrimson, GradientCyber],
            centerElements: [CenterText, CenterRing],
            edgeElements: [TextSlide, HorizontalLine, VerticalLine],
        }}
    />
);
