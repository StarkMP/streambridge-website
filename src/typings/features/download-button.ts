import type { ReactNode } from 'react';

export type DownloadButtonParams = {
  icon: ReactNode;
  url: string;
  disabled?: boolean;
  children: string;
};
