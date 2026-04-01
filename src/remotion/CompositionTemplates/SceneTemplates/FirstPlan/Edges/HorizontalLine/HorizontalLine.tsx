import { useLineGrow } from '../../../_shared/useLineGrow';
import classes from './HorizontalLine.module.css';

export const HorizontalLine = () => {
    const { size, opacity } = useLineGrow();

    return <div className={classes.line} style={{ width: size * 300, opacity }} />;
};
