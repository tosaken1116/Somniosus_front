import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ホーム / Y',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }): ReactNode => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
