import { HomeIcon, User2, GitFork, Mail } from "lucide-react";

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
