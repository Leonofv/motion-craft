import { ComponentType, createElement } from 'react';
import { AbsoluteFill } from 'remotion';
import { EdgePosition } from '../types';
import classes from './edgeComponents.module.css';

export const edgeComponentsFactory = (Component: ComponentType, position: EdgePosition): ComponentType => {
    const EdgeComponent = () => createElement(AbsoluteFill, { className: classes[position] }, createElement(Component));

    EdgeComponent.displayName = `${Component.displayName ?? Component.name}:${position}`;
    return EdgeComponent;
};
