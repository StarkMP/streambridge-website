"use client";

import { Portal } from "@ui";
import { AnimatePresence, motion } from "framer-motion";
import type { JSX } from "react";

type OverlayProps = {
  show: boolean;
  onClick?: () => void;
};

export const Overlay = ({ show, onClick }: OverlayProps): JSX.Element => {
  const handleClick = (): void => {
    if (onClick) onClick();
  };

  return (
    <Portal>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-10 w-screen h-screen top-0 left-0 bg-black/50"
            onClick={handleClick}
          ></motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
