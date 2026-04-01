import { AbsoluteFill } from 'remotion';
import { useFadeSlide } from '../../../_shared/useFadeSlide';
import { Typography } from 'antd';
import classes from './CenterText.module.css';
import centerClasses from '../CenterStyles.module.css';

const { Text } = Typography;

export const CenterText = () => {
    const { translate, opacity } = useFadeSlide();

    return (
        <AbsoluteFill className={centerClasses.center}>
            <Text className={classes.text} style={{ transform: `translateY(${translate}px)`, opacity }}>
                Text
            </Text>
        </AbsoluteFill>
    );
};
