'use client';

import type { AnalyticsOptions } from '@typings/analytics';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSX,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';

type CommonButtonProps = {
  children: ReactNode;
  analytics?: AnalyticsOptions;
  disabled?: boolean;
};

type StandartButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CommonButtonProps & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

type LinkButtonProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  CommonButtonProps & {
    type: 'link';
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  };

type ButtonProps = StandartButtonProps | LinkButtonProps;

export const Button = ({
  type,
  children,
  analytics,
  disabled,
  className = '',
  onClick,
  ...other
}: ButtonProps): JSX.Element => {
  const handleClick = (e: MouseEvent<HTMLButtonElement & HTMLAnchorElement>): void => {
    if (disabled) {
      return;
    }

    if (analytics) {
      // TODO: analytics
    }

    if (onClick) onClick(e);
  };

  if (type === 'link') {
    return (
      <a
        className={`${disabled ? 'opacity-50 pointer-events-none ' : ''}${className}`}
        {...(other as LinkButtonProps)}
        onClick={handleClick as LinkButtonProps['onClick']}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(other as StandartButtonProps)}
      type={type}
      disabled={disabled}
      className={`${disabled ? 'opacity-50 pointer-events-none ' : ''}${className}`}
      onClick={handleClick as StandartButtonProps['onClick']}
    >
      {children}
    </button>
  );
};
