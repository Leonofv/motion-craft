import { Collapse, Form, Input, InputNumber, Select } from 'antd';
import type { VideoConfig } from '#/helpers/types';
import { BASE_DURATION_IN_FRAMES } from '#/helpers/constants';
import {
    FPS_OPTIONS,
    INPUT_PROPS,
    INPUT_NUMBER_PROPS,
    SELECT_PROPS,
    CODEC_OPTIONS,
    VIDEO_IMAGE_FORMAT_OPTIONS,
    PIXEL_FORMAT_OPTIONS,
    PRORES_PROFILE_OPTIONS,
} from './videoConfigConstants';

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
                    <Form.Item label="Имя выходного файла">
                        <Input
                            value={config.outName}
                            onChange={(e) => {
                                onChange({
                                    ...config,
                                    outName: e.target.value,
                                });
                            }}
                            {...INPUT_PROPS}
                        />
                    </Form.Item>
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
                    <Form.Item label="Формат изображения">
                        <Select
                            value={config.videoImageFormat}
                            onChange={(value) => {
                                onChange({
                                    ...config,
                                    videoImageFormat: value,
                                });
                            }}
                            options={VIDEO_IMAGE_FORMAT_OPTIONS}
                            {...SELECT_PROPS}
                        />
                    </Form.Item>
                    <Form.Item label="Формат пикселей">
                        <Select
                            value={config.pixelFormat}
                            onChange={(value) => {
                                onChange({
                                    ...config,
                                    pixelFormat: value,
                                });
                            }}
                            options={PIXEL_FORMAT_OPTIONS}
                            {...SELECT_PROPS}
                        />
                    </Form.Item>
                    <Form.Item label="Кодек">
                        <Select
                            value={config.codec}
                            onChange={(value) => {
                                onChange({ ...config, codec: value });
                            }}
                            options={CODEC_OPTIONS}
                            {...SELECT_PROPS}
                        />
                    </Form.Item>
                    {config.codec === 'prores' && (
                        <Form.Item label="Профиль ProRes">
                            <Select
                                value={config.proResProfile}
                                onChange={(value) => {
                                    onChange({
                                        ...config,
                                        proResProfile: value,
                                    });
                                }}
                                options={PRORES_PROFILE_OPTIONS}
                                {...SELECT_PROPS}
                            />
                        </Form.Item>
                    )}
                </Form>
            ),
        },
    ];

    return <Collapse items={collapseItems} />;
}
