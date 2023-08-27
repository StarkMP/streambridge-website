import type { DownloadButtonParams } from "@typings/features/download-button";
import { Button } from "@ui";
import type { JSX } from "react";

type DownloadButtonProps = DownloadButtonParams;

export const DownloadButton = ({
  children,
  url,
  icon,
  disabled,
}: DownloadButtonProps): JSX.Element => {
  return (
    <Button
      className="h-10 sm:h-12 bg-porcelain rounded-md sm:rounded-lg text-sm sm:text-base text-black text-center flex items-center justify-center font-medium gap-x-2.5 w-[250px] sm:w-[280px] transition-transform ease-in-out hover:-translate-y-0.5 sm:hover:-translate-y-1.5"
      type="link"
      disabled={disabled}
      href={url}
      target="_blank"
    >
      <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </span>{" "}
      {children}
    </Button>
  );
};
