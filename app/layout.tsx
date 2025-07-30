'use client';

import '@/styles/reset.css';
import '@/styles/global.css';

import classNames from 'classnames';
import { Outfit } from 'next/font/google';

import { Header } from '@/modules/layout/header/header';
import { MainContainer } from '@/modules/layout/main-container';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(outfit.variable)}>
        <Header />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
