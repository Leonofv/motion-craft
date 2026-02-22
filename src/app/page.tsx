'use client';

import classes from './page.module.css';

import type { NextPage } from 'next';
import { RenderControlsWrapper } from '../components/RenderControls/RenderControlsWrapper';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import { useVideoRenderControls } from '#/components/useVideoRenderControls';

const MainPage: NextPage = () => {
    const {
        text,
        setText,
        isRendering,
        inputProps,
        renderMedia,
        videoConfig,
        setVideoConfig,
        DSLPromptConfig,
        setDSLPromptConfig,
    } = useVideoRenderControls();

    return (
        <div className={classes.pageContainer}>
            <VideoPlayer inputProps={inputProps} videoConfig={videoConfig} />
            <RenderControlsWrapper
                text={text}
                setText={setText}
                renderMedia={renderMedia}
                isRendering={isRendering}
                videoConfig={videoConfig}
                setVideoConfig={setVideoConfig}
                DSLPromptConfig={DSLPromptConfig}
                setDSLPromptConfig={setDSLPromptConfig}
            />
        </div>
    );
};

export default MainPage;
