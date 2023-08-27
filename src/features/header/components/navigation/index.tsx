"use client";

import { HeaderNavigation as HeaderNavigationType, HeaderSocial } from "@typings/features/header";
import { Button, Overlay } from "@ui";
import { CrossSVG } from "@ui/svg";
import { AnimatePresence, motion } from "framer-motion";
import { type JSX, useState } from "react";

type HeaderNavigationProps = {
  navigation: HeaderNavigationType[];
  social: HeaderSocial[];
};

export const HeaderNavigation = ({ navigation, social }: HeaderNavigationProps): JSX.Element => {
  const [drawerMenu, setDrawerMenu] = useState<boolean>(false);

  return (
    <>
      <Overlay show={drawerMenu} onClick={(): void => setDrawerMenu(false)} />
      <Button className="space-y-1.5 md:hidden" onClick={(): void => setDrawerMenu(true)}>
        <div className="w-6 h-0.5 bg-gray"></div>
        <div className="w-6 h-0.5 bg-gray"></div>
        <div className="w-6 h-0.5 bg-gray"></div>
      </Button>
      <div className="hidden md:block">
        <NavigationContent navigation={navigation} social={social} />
      </div>
      <AnimatePresence>
        {drawerMenu && (
          <motion.div
            initial={{ right: "-192px" }}
            animate={{ right: "0px" }}
            exit={{ right: "-192px" }}
            className={
              "h-screen fixed top-0 w-48 bg-slate-950 z-20 flex flex-col items-end gap-y-8 p-8"
            }
          >
            <Button className="md:hidden w-[20px]" onClick={(): void => setDrawerMenu(false)}>
              <CrossSVG className="w-full h-full text-gray transition-colors ease-in-out hover:text-smooth-white" />
            </Button>
            <NavigationContent navigation={navigation} social={social} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavigationContent = ({ navigation, social }: HeaderNavigationProps): JSX.Element => (
  <>
    <nav className="md:absolute-center">
      <ul className="flex flex-col font-medium text-right gap-y-6 md:flex-row md:text-center md:gap-y-0 md:gap-x-14">
        {navigation.map((item, index) => (
          <li key={index}>
            <Button
              type={item.isNextLink ? "next-link" : "link"}
              className="transition-colors ease-in-out hover:text-smooth-white"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:gap-x-6">
      {social.map((item, index) => (
        <Button
          key={index}
          type="link"
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="w-6 h-6 text-gray transition-colors ease-in-out hover:text-smooth-white [&>svg]:w-full [&>svg]:h-full"
        >
          {item.icon}
        </Button>
      ))}
    </div>
  </>
);
