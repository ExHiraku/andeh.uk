import { HomeIcon, GitFork, ClipboardEdit } from "lucide-react";

import { NavbarRoute } from "@/types/navbar-route";

export const NavbarRoutes: NavbarRoute[] = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
    color: "",
  },
  {
    label: "Projects",
    icon: GitFork,
    href: "/projects",
  },
  {
    label: "Blog",
    icon: ClipboardEdit,
    href: "/blog",
  },
];
