'use client';

import classes from './page.module.css';

import { z } from 'zod';
import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { RenderControlsWrapper } from '../components/RenderControls/RenderControlsWrapper';
import { CompositionProps, defaultMyCompProps } from '../helpers/constants';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';

const MainPage: NextPage = () => {
    const [text, setText] = useState<string>(defaultMyCompProps.title);

    const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
        return {
            title: text,
        };
    }, [text]);

    return (
        <div className={classes.pageContainer}>
            <VideoPlayer inputProps={inputProps} />
            <RenderControlsWrapper
                text={text}
                setText={setText}
                inputProps={inputProps}
            />
        </div>
    );
};

export default MainPage;
