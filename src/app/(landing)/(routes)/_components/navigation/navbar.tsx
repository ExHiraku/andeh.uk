import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";
import { NavbarItem } from "./navbar-item";
import { NavbarRoutes, SocialRoutes } from "@/lib/constants";
import { SocialsItem } from "./socials-item";

export const Navbar = () => {
  return (
    <nav className="p-6 border-b border-primary shadow-lg">
      <div className="flex items-center justify-between md:hidden">
        <Logo />
        <div className="flex items-center">
          <MobileSidebar />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-x-20 lg:gap-x-32">
          <Logo />
          <div className="flex items-center gap-x-8">
            {NavbarRoutes.map((route) => (
              <NavbarItem
                key={route.label}
                route={route}
                isActive={route.href === "/"}
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
