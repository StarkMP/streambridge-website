"use client";

import { isSSR } from "@utils/is-ssr";
import { type ReactNode, type ReactPortal, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  parent?: HTMLElement;
};

export const Portal = ({ children, parent }: PortalProps): ReactPortal | null => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isSSR()) {
    return null;
  }

  return mounted ? createPortal(children, parent || document.body) : null;
};
