import { useLineGrow } from '../../_shared/useLineGrow';
import classes from './VerticalLine.module.css';

export const VerticalLine = () => {
    const { size, opacity } = useLineGrow();

    return <div className={classes.line} style={{ height: size * 200, opacity }} />;
};
