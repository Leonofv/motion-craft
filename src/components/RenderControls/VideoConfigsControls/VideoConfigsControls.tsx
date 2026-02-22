import { Collapse, Form, InputNumber, Select } from 'antd';
import type { VideoConfig } from '#/helpers/types';
import { BASE_DURATION_IN_FRAMES } from '#/helpers/constants';
import { FPS_OPTIONS, SELECT_PROPS, INPUT_NUMBER_PROPS } from './helper';

interface VideoConfigsControlsProps {
    config: VideoConfig;
    onChange: (config: VideoConfig) => void;
}
export function VideoConfigsControls({
    config,
    onChange,
}: VideoConfigsControlsProps) {
    const durationInSeconds = (config.durationInFrames / config.fps).toFixed(2);

    const collapseItems = [
        {
            label: 'Настройки конфигураций',
            children: (
                <Form layout="vertical">
                    <Form.Item label="Частота кадров">
                        <Select
                            value={config.fps}
                            onChange={(value) => {
                                onChange({ ...config, fps: value });
                            }}
                            options={FPS_OPTIONS}
                            {...SELECT_PROPS}
                        />
                    </Form.Item>
                    <Form.Item
                        label={`Длительность в кадрах (≈ ${durationInSeconds} сек)`}
                    >
                        <InputNumber
                            min={BASE_DURATION_IN_FRAMES}
                            value={config.durationInFrames}
                            onChange={(value) => {
                                onChange({
                                    ...config,
                                    durationInFrames:
                                        value ?? BASE_DURATION_IN_FRAMES,
                                });
                            }}
                            {...INPUT_NUMBER_PROPS}
                        />
                    </Form.Item>
                </Form>
            ),
        },
    ];

    return <Collapse items={collapseItems} />;
}
