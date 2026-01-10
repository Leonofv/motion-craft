import '../styles/global.css';

import { Metadata } from 'next';
import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

export const metadata: Metadata = {
    title: 'MotionCraft',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <ConfigProvider locale={ruRU} theme={{ cssVar: true }}>
                    {children}
                </ConfigProvider>
            </body>
        </html>
    );
}
