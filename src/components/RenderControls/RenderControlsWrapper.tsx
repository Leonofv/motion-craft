import classes from './RenderControlWrapper.module.css';

import { DownloadOutlined } from '@ant-design/icons';
import { Button, Layout, Space, Flex } from 'antd';
import { VideoConfigsControls } from './VideoConfigsControls/VideoConfigsControls';
import { PromptControls } from './PromptControls/PromptControls';
import type { DSLConfig, VideoConfig } from '#/helpers/types';

interface RenderControlsWrapperProps {
    renderMedia: () => Promise<void>;
    isRendering: boolean;
    videoConfig: VideoConfig;
    setVideoConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
    promptConfig: DSLConfig;
    setPromptConfig: React.Dispatch<React.SetStateAction<DSLConfig>>;
    sendPrompt: () => Promise<void>;
    isPromtLoading: boolean;
}

export function RenderControlsWrapper({
    renderMedia,
    isRendering,
    videoConfig,
    setVideoConfig,
    promptConfig,
    setPromptConfig,
    sendPrompt,
    isPromtLoading,
}: RenderControlsWrapperProps) {
    return (
        <Layout className={classes.layoutContainer}>
            <Space direction="vertical" className={classes.spaceContainer}>
                <VideoConfigsControls config={videoConfig} onChange={setVideoConfig} />
                <PromptControls
                    promptConfig={promptConfig}
                    setPromptConfig={setPromptConfig}
                    sendPrompt={sendPrompt}
                    isPromtLoading={isPromtLoading}
                />
                <Flex gap="var(--ant-margin-sm)" justify="flex-end">
                    {!isRendering ? (
                        <Button icon={<DownloadOutlined />} variant="solid" size="large">
                            Скачать
                        </Button>
                    ) : null}
                    <Button
                        disabled={isRendering}
                        loading={isRendering}
                        onClick={renderMedia}
                        variant="solid"
                        size="large"
                    >
                        Применить
                    </Button>
                </Flex>
            </Space>
        </Layout>
    );
}
