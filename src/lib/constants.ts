import {
  HomeIcon,
  User2,
  GitFork,
  Github,
  Mail,
  Instagram,
  Twitter,
} from "lucide-react";

import { Icons } from "@/components/icons";
import { NavbarRoute } from "@/types/navbar-route";
import { FeaturedProject } from "@/types/featured-project";

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

export const FeaturedProjects: FeaturedProject[] = [
  {
    label: "This Website!",
    description:
      "The single-page website you are currently browsing now! Built using NextJS, React and TailwindCSS!",
    liveDemo: "https://andeh.uk",
    sourceUrl: "https://github.com/AndehUK/andeh.uk",
    displayImage: "",
  },
  {
    label: "ExVision",
    description:
      "A full-stack web application providing AI SaaS built using NextJS, React, TailwindCSS, OpenAI and more!",
    liveDemo: "https://vision.exultsoftware.com",
    sourceUrl: "https://github.com/AndehUK/ExVision",
    displayImage: "",
  },
  {
    label: "Blu Website",
    description:
      "A multi-page website built for the landscaping and car detailing company called Blu Contracting! Built using NextJS, React and TailwindCSS.",
    liveDemo: "https://blu.exultsoftware.com",
    displayImage: "",
  },
];
