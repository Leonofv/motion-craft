import { DSLConfig } from '#/helpers/types';
import { Button, Collapse, Flex, Input } from 'antd';

const { TextArea } = Input;

interface PromptControlsProps {
    promptConfig: DSLConfig;
    setPromptConfig: (config: DSLConfig) => void;
    sendPrompt: () => void;
    isPromtLoading: boolean;
}

export function PromptControls({ promptConfig, setPromptConfig, sendPrompt, isPromtLoading }: PromptControlsProps) {
    const collapseItems = [
        {
            label: 'DSL',
            children: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ant-margin-sm)' }}>
                    <TextArea
                        placeholder="Введите текстовое описание композиции"
                        value={promptConfig.requestText ?? ''}
                        onChange={(e) => {
                            setPromptConfig({
                                ...promptConfig,
                                requestText: e.target.value,
                            });
                        }}
                        autoSize={{ minRows: 3, maxRows: 10 }}
                    />
                    <Flex justify="flex-end">
                        <Button size="large" onClick={sendPrompt} loading={isPromtLoading} disabled={isPromtLoading}>
                            Отправить
                        </Button>
                    </Flex>
                </div>
            ),
        },
    ];

    return <Collapse items={collapseItems} />;
}
