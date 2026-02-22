import classes from './RenderControlWrapper.module.css';

import { DownloadOutlined } from '@ant-design/icons';
import { Button, Layout, Space, Flex } from 'antd';
import { Input } from 'antd';
import { VideoConfigsControls } from './VideoConfigsControls/VideoConfigsControls';
import { DSLPromptControls } from './DSLPromptControls/DSLPromptControls';
import type { DSLConfig, VideoConfig } from '#/helpers/types';

interface RenderControlsWrapperProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    renderMedia: () => Promise<void>;
    isRendering: boolean;
    videoConfig: VideoConfig;
    setVideoConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
    DSLPromptConfig: DSLConfig;
    setDSLPromptConfig: React.Dispatch<React.SetStateAction<DSLConfig>>;
}

export function RenderControlsWrapper({
    text,
    setText,
    renderMedia,
    isRendering,
    videoConfig,
    setVideoConfig,
    DSLPromptConfig,
    setDSLPromptConfig,
}: RenderControlsWrapperProps) {
    console.log(DSLPromptConfig);
    return (
        <Layout className={classes.layoutContainer}>
            <Space direction="vertical" className={classes.spaceContainer}>
                <VideoConfigsControls
                    config={videoConfig}
                    onChange={setVideoConfig}
                />
                <DSLPromptControls
                    config={DSLPromptConfig}
                    onChange={setDSLPromptConfig}
                />
                <Input
                    disabled={isRendering}
                    onChange={(e) => setText(e.currentTarget.value)}
                    value={text}
                    size="large"
                />
                <Flex gap="var(--ant-margin-sm)" justify="flex-end">
                    {!isRendering ? (
                        <Button
                            icon={<DownloadOutlined />}
                            variant="solid"
                            size="large"
                            style={{ alignSelf: 'flex-end' }}
                        >
                            Скачать
                        </Button>
                    ) : null}
                    <Button
                        disabled={isRendering}
                        loading={isRendering}
                        onClick={renderMedia}
                        variant="solid"
                        size="large"
                        style={{ alignSelf: 'flex-end' }}
                    >
                        Применить
                    </Button>
                </Flex>
            </Space>
        </Layout>
    );
}
