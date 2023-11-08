import { Github, Instagram, Twitter } from "lucide-react";

import { NavbarRoute } from "@/types/navbar-route";

export const SocialRoutes: NavbarRoute[] = [
  {
    label: "Follow me on Twitter/X!",
    icon: Twitter,
    href: "/twitter",
    color: "",
  },
  {
    label: "Follow me on Instagram!",
    icon: Instagram,
    href: "/instagram",
    color: "fill-primary/30 hover:brightness-125 hover:fill-primary/30",
  },
  {
    label: "Follow me on GitHub!",
    icon: Github,
    href: "/github",
    color: "",
  },
];
