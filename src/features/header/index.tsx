import { discordUrl, donateUrl } from "@constants";
import { HeaderNavigation as HeaderNavigationType, HeaderSocial } from "@typings/features/header";
import { Button } from "@ui";
import { DiscordSVG } from "@ui/svg";
import Image from "next/image";
import logo from "public/assets/logo.svg";
import { type JSX } from "react";

import { HeaderNavigation } from "./components/navigation";

const navigation: HeaderNavigationType[] = [
  { label: "Support", url: "/support", isNextLink: true },
  { label: "Privacy", url: "/privacy", isNextLink: true },
  { label: "Donate", url: donateUrl },
];

const social: HeaderSocial[] = [
  {
    icon: <DiscordSVG />,
    url: discordUrl,
  },
];

export const Header = (): JSX.Element => {
  return (
    <header className="text-gray flex justify-between items-center w-full h-24 relative">
      <Button type="link" href="/">
        <Image alt="Stream Bridge" src={logo} width={120} height={39} />
      </Button>
      <HeaderNavigation navigation={navigation} social={social} />
    </header>
  );
};
