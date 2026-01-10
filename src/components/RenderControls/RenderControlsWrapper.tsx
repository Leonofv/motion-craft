import classes from './RenderControlWrapper.module.css';

import { z } from 'zod';
import { useRenderControls } from './useRenderControls';
import { CompositionProps, COMP_NAME } from '../../helpers/constants';
import { Button, Layout } from 'antd';
import { Input } from 'antd';
import { useCallback } from 'react';

export const RenderControlsWrapper = ({
    text,
    setText,
    inputProps,
}: {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    inputProps: z.infer<typeof CompositionProps>;
}) => {
    const { renderMedia, state } = useRenderControls(COMP_NAME, inputProps);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            setText(e.currentTarget.value);
        },
        [setText],
    );

    return (
        <>
            <Layout className={classes.layoutContainer}>
                {state.status === 'init' ||
                state.status === 'invoking' ||
                state.status === 'error' ? (
                    <Layout
                        style={{
                            gap: 'var(--ant-margin-sm)',
                            backgroundColor: 'white',
                        }}
                    >
                        <Input
                            disabled={state.status === 'invoking'}
                            onChange={onChange}
                            value={text}
                            size="large"
                        />
                        <Button
                            disabled={state.status === 'invoking'}
                            loading={state.status === 'invoking'}
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
        </>
    );
};
