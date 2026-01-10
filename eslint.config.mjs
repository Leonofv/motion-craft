import { importX } from 'eslint-plugin-import-x';

export default [
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
        rules: {
            'import-x/no-mutable-exports': 'warn',
            'import-x/no-unused-modules': 'warn',
            'import-x/newline-after-import': 'warn',
            'import-x/order': [
                'warn',
                {
                    'pathGroups': [
                        {
                            pattern: '*.css',
                            patternOptions: { matchBase: true },
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: '**/themes/**',
                            group: 'builtin',
                            position: 'before',
                        },
                    ],
                    'newlines-between': 'always',
                    'alphabetize': {
                        order: 'asc',
                        orderImportKind: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
];
