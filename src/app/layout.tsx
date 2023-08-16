import './globals.css';

import { Rubik } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

const font = Rubik({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang='en' className={`text-smooth-white text-base ${font.className}`}>
      <head>
        <title>Stream Bridge - Watch all on Twitch</title>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className='bg-dark-gray overflow-hidden'>{children}</body>
    </html>
  );
};

export default RootLayout;
