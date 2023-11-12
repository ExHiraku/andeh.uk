"use client";

import { usePathname } from "next/navigation";

import { Logo } from "../../../../../components/logo";
import { MobileSidebar } from "./mobile-sidebar";
import { NavbarItem } from "./navbar-item";
import { SocialsItem } from "./socials-item";
import { NavbarRoutes } from "@/lib/constants/navbar-routes";
import { SocialRoutes } from "@/lib/constants/social-routes";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-6 border-b border-primary shadow-lg">
      <div className="flex items-center justify-between min-[865px]:hidden">
        <Logo />
        <div className="flex items-center">
          <MobileSidebar />
        </div>
      </div>
      <div className="hidden min-[865px]:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-x-20 lg:gap-x-32">
          <Logo />
          <div className="flex items-center gap-x-8">
            {NavbarRoutes.map((route) => (
              <NavbarItem
                key={route.label}
                route={route}
                isActive={route.href === pathname}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4 ring-2 ring-primary/20 bg-gray-800/40 w-fit p-2 rounded-xl shadow-inner">
          {SocialRoutes.map((route) => (
            <SocialsItem key={route.label} route={route} />
          ))}
        </div>
      </div>
    </nav>
  );
};
