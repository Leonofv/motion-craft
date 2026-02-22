import { DSLConfig } from '#/helpers/types';
import { Collapse, Input } from 'antd';

const { TextArea } = Input;

interface DSLPromptControlsProps {
    config: DSLConfig;
    onChange: (config: DSLConfig) => void;
}

export function DSLPromptControls({
    config,
    onChange,
}: DSLPromptControlsProps) {
    const collapseItems = [
        {
            label: 'DSL',
            children: (
                <TextArea
                    placeholder="Введите текст"
                    value={config.text}
                    onChange={(e) => {
                        onChange({
                            ...config,
                            text: e.target.value ?? null,
                        });
                    }}
                    autoSize={{ minRows: 3, maxRows: 10 }}
                />
            ),
        },
    ];

    return <Collapse items={collapseItems} />;
}
