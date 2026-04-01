import { ComponentType, createElement } from 'react';
import { AbsoluteFill } from 'remotion';
import { ComponentPosition } from './types';
import edgeClasses from './edgePositions.module.css';
import angleClasses from './anglePositions.module.css';

const classes = { ...edgeClasses, ...angleClasses };

export const positionedComponentFactory = (Component: ComponentType, position: ComponentPosition): ComponentType => {
    const Positioned = () => createElement(AbsoluteFill, { className: classes[position] }, createElement(Component));

    Positioned.displayName = `${Component.displayName ?? Component.name}:${position}`;
    return Positioned;
};
