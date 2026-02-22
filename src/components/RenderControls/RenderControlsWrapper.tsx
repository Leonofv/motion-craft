import classes from './RenderControlWrapper.module.css';

import { Button, Layout } from 'antd';
import { Input } from 'antd';
import { VideoConfigsControls } from './VideoConfigsControls/VideoConfigsControls';
import type { VideoConfig } from '#/helpers/types';

interface RenderControlsWrapperProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    renderMedia: () => Promise<void>;
    isRendering: boolean;
    videoConfig: VideoConfig;
    setVideoConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
}

export function RenderControlsWrapper({
    text,
    setText,
    renderMedia,
    isRendering,
    videoConfig,
    setVideoConfig,
}: RenderControlsWrapperProps) {
    return (
        <Layout className={classes.layoutContainer}>
            {!isRendering ? (
                <Layout
                    style={{
                        gap: 'var(--ant-margin-sm)',
                        backgroundColor: 'white',
                    }}
                >
                    <VideoConfigsControls
                        config={videoConfig}
                        onChange={setVideoConfig}
                    />
                    <Input
                        disabled={isRendering}
                        onChange={(e) => setText(e.currentTarget.value)}
                        value={text}
                        size="large"
                    />
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
                </Layout>
            ) : null}
        </Layout>
    );
}
