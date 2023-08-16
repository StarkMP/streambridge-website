import type { ReactNode } from 'react';

export type DownloadButtonProps = {
  icon: ReactNode;
  url: string;
  disabled?: boolean;
  children: string;
};
