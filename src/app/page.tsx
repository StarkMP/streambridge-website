'use client';

import { chromeStoreUrl, copyrightYear, firefoxAddonUrl } from '@constants';
import { DownloadButton, Header } from '@features';
import type { DownloadButtonParams } from '@typings/features/download-button';
import { ChromeSVG, EdgeSVG, FirefoxSVG } from '@ui/svg';
import type { JSX } from 'react';

const downloadButtons: DownloadButtonParams[] = [
  {
    icon: <FirefoxSVG />,
    url: firefoxAddonUrl,
    children: 'Download for Firefox',
  },
  {
    icon: <ChromeSVG />,
    url: chromeStoreUrl,
    children: 'Download for Chrome',
  },
  {
    icon: <EdgeSVG />,
    url: chromeStoreUrl,
    children: 'Download for Edge',
  },
];

const Page = (): JSX.Element => {
  return (
    <>
      <div className='container relative h-screen mx-auto px-8 lg:px-0 flex flex-col justify-between'>
        <Header />
        <main className='animate-main-fade-out absolute left-[50%] top-[50%] flex flex-col justify-center items-center text-center w-full lg:px-0 px-8 gap-y-5 md:gap-y-8'>
          <h1 className='2xl:text-6xl lg:text-5xl font-bold md:text-4xl text-2xl'>
            Watch streamers from other platforms on Twitch
          </h1>
          <h2 className='text-gray max-w-[690px] [&>b]:font-medium 2xl:text-2xl lg:text-xl sm:text-base text-sm'>
            Watch your favorite streamers from <b>YouTube</b>, <b>Kick</b>, <b>Trovo</b>,{' '}
            <b>WASD</b> and <b>VK Play Live</b> on <b>twitch.tv</b> without many tabs with our
            browser extension
          </h2>
          <div className='flex lg:flex-row justify-center items-center lg:gap-x-[20px] flex-col gap-y-2.5 sm:gap-y-4'>
            {downloadButtons.map((btn, index) => (
              <DownloadButton key={index} {...btn} />
            ))}
          </div>
        </main>
        <footer className='text-center font-medium w-full py-6 md:py-11 text-smooth-gray text-xs lg:text-base'>
          Copyright © {copyrightYear} Stream Bridge. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};

export default Page;
