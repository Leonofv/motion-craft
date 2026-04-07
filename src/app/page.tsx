'use client';

import classes from './page.module.css';

import type { NextPage } from 'next';
import { RenderControlsWrapper } from '../components/RenderControls/RenderControlsWrapper';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import { useVideoRenderControls } from '#/components/useVideoRenderControls';
import { defaultCompProps } from '#/helpers/constants';

const MainPage: NextPage = () => {
    const {
        isRendering,
        renderMedia,
        videoConfig,
        setVideoConfig,
        promptConfig,
        setPromptConfig,
        sendPrompt,
        isPromtLoading,
    } = useVideoRenderControls();

    return (
        <div className={classes.pageContainer}>
            <VideoPlayer inputProps={defaultCompProps} videoConfig={videoConfig} />
            <RenderControlsWrapper
                renderMedia={renderMedia}
                isRendering={isRendering}
                videoConfig={videoConfig}
                setVideoConfig={setVideoConfig}
                promptConfig={promptConfig}
                setPromptConfig={setPromptConfig}
                sendPrompt={sendPrompt}
                isPromtLoading={isPromtLoading}
            />
        </div>
    );
};

export default MainPage;
