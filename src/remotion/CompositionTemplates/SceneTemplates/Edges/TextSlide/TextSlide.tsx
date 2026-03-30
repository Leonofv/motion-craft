import { useFadeSlide } from '../../_shared/useFadeSlide';
import { Typography } from 'antd';
import classes from './TextSlide.module.css';

const { Text } = Typography;

export const TextSlide = () => {
    const { translate, opacity } = useFadeSlide();

    return (
        <Text className={classes.text} style={{ transform: `translateY(${translate}px)`, opacity }}>
            Text
        </Text>
    );
};
