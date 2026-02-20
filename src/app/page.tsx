'use client';

import classes from './page.module.css';

import type { NextPage } from 'next';
import { RenderControlsWrapper } from '../components/RenderControls/RenderControlsWrapper';
import { VideoPlayer } from '../components/VideoPlayer/ui/VideoPlayer';
import { useVideoRenderControls } from '#/components/useVideoRenderControls';

const MainPage: NextPage = () => {
    const { text, setText, isRendering, inputProps, renderMedia } =
        useVideoRenderControls();

    return (
        <div className={classes.pageContainer}>
            <VideoPlayer inputProps={inputProps} />
            <RenderControlsWrapper
                text={text}
                setText={setText}
                renderMedia={renderMedia}
                isRendering={isRendering}
            />
        </div>
    );
};

export default MainPage;
