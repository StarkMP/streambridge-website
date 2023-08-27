import type { ReactNode } from "react";

export type HeaderNavigation = { label: string; url: string; isNextLink?: boolean };

export type HeaderSocial = { icon: ReactNode; url: string };
