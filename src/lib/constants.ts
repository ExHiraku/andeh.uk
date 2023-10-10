import {
  HomeIcon,
  User2,
  GitFork,
  Github,
  Mail,
  Twitch,
  Twitter,
} from "lucide-react";

import { Icons } from "@/components/icons";
import { NavbarRoute } from "@/types/navbar-route";

export const NavbarRoutes: NavbarRoute[] = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
    color: "",
  },
  {
    label: "About",
    icon: User2,
    href: "#about",
    color: "",
  },
  {
    label: "Projects",
    icon: GitFork,
    href: "#projects",
    color: "",
  },
  {
    label: "Contact",
    icon: Mail,
    href: "#contact",
    color: "",
  },
];

export const SocialRoutes: NavbarRoute[] = [
  {
    label: "Follow me on Twitter/X!",
    icon: Twitter,
    href: "/twitter",
    color: "",
  },
  {
    label: "Follow me on GitHub!",
    icon: Github,
    href: "/github",
    color: "",
  },
];
