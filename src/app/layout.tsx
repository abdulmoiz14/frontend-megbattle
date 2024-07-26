import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Head from 'next/head';
import { TelegramProvider } from './provider/telegram-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "MEG'BATTLE",
  description:
    "MEG'BATTLE is a platform that allows users to earn MEG coins by completing tasks and earning rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TelegramProvider>
          <Theme>{children}</Theme>
        </TelegramProvider>
      </body>
    </html>
  );
}
