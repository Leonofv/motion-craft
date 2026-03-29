import { CompositionConstructor } from '../../CompositionConstructor/CompositionConstructor';
import { Logo } from './MotionCraftLogo/Logo/Logo';
import { Rings } from './MotionCraftLogo/Rings/Rings';
import { TextFade } from './TextFade/TextFade';

export const DefaultComposition = () => <CompositionConstructor scenes={[[Rings, Logo], [TextFade]]} />;
