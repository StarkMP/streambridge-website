"use client";

import type { AnalyticsOptions } from "@typings/analytics";
import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSX,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";

type CommonButtonProps = {
  children: ReactNode;
  analytics?: AnalyticsOptions;
  disabled?: boolean;
  className?: string;
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
    type: "link";
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  };

type NextLinkButtonProps = LinkProps &
  CommonButtonProps & {
    type: "next-link";
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  };

type ButtonProps = StandartButtonProps | LinkButtonProps | NextLinkButtonProps;

export const Button = ({
  type,
  children,
  analytics,
  disabled,
  className = "",
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

  const modifiedClassName = `${disabled ? "opacity-50 pointer-events-none " : ""}${className}`;

  if (type === "link") {
    return (
      <a
        className={modifiedClassName}
        {...(other as LinkButtonProps)}
        onClick={handleClick as LinkButtonProps["onClick"]}
      >
        {children}
      </a>
    );
  }

  if (type === "next-link") {
    return (
      <Link
        className={modifiedClassName}
        {...(other as NextLinkButtonProps)}
        onClick={handleClick as NextLinkButtonProps["onClick"]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(other as StandartButtonProps)}
      type={type}
      disabled={disabled}
      className={modifiedClassName}
      onClick={handleClick as StandartButtonProps["onClick"]}
    >
      {children}
    </button>
  );
};
