import { contactUsUrl, discordUrl, donateUrl } from '@constants';
import { Button } from '@ui';
import { DiscordSVG } from '@ui/svg';
import Image from 'next/image';
import logo from 'public/assets/logo.svg';
import { type JSX } from 'react';

import { HeaderNavigation } from './components/navigation';

const navigation = [
  { label: 'Contact us', url: contactUsUrl },
  { label: 'Privacy', url: '#' },
  { label: 'Donate', url: donateUrl },
];

const social = [
  {
    icon: <DiscordSVG />,
    url: discordUrl,
  },
];

export const Header = (): JSX.Element => {
  return (
    <header className='text-gray flex justify-between items-center w-full h-24 relative'>
      <Button type='link' href='/'>
        <Image alt='Stream Bridge' src={logo} width={120} height={39} />
      </Button>
      <HeaderNavigation navigation={navigation} social={social} />
    </header>
  );
};
