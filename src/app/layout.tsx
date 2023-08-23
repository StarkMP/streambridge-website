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

        <meta property='og:title' content='Stream Bridge - Watch all on Twitch' />
        <meta property='og:site_name' content='Stream Bridge' />
        <meta property='og:url' content='https://www.streambridge.io' />
        <meta
          property='og:description'
          content='Watch streamers from other streaming platforms on Twitch with Stream Bridge browser extension! Watch YouTube, Kick, Trovo, WASD and VK Play Live on Twitch!'
        />
        <meta property='og:type' content='website' />
        <meta name='title' content='Stream Bridge - Watch all on Twitch' />
        <meta
          name='description'
          content='Watch streamers from other streaming platforms on Twitch with Stream Bridge browser extension! Watch YouTube, Kick, Trovo, WASD and VK Play Live on Twitch!'
        />
        <meta
          name='keywords'
          content='stream bridge, twitch, streambridge, youtube on twitch, kick on twitch, trovo on twitch, watch youtube on twitch, twitch chrome extension, twitch browser extension, twitch firefox addon, twitch edge extension, twitch mozilla addon, watch all on twitch'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English'></meta>
        <meta
          name='google-site-verification'
          content='8DwtAGTNUeCiyofsM0LRqof3PCBm6uH4jNlRJ1GdX8E'
        />
      </head>
      <body className='bg-dark-gray overflow-hidden'>{children}</body>
    </html>
  );
};

export default RootLayout;
