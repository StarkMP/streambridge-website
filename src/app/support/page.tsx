import { supportUrl } from '@constants';
import { NextPage } from 'next';
import { redirect } from 'next/navigation';

const SupportPage: NextPage = () => {
  redirect(supportUrl);
};

export default SupportPage;
