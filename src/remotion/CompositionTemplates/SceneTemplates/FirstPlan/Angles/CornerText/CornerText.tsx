import { Typography } from 'antd';
import { useFadeSlide } from '../../../_shared/useFadeSlide';
import classes from './CornerText.module.css';

const { Text } = Typography;

export const CornerText = () => {
    const { translate, opacity } = useFadeSlide();

    return (
        <Text className={classes.text} style={{ transform: `translateY(${translate}px)`, opacity }}>
            Label
        </Text>
    );
};
