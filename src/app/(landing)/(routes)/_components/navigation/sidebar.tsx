import { Logo } from "../../../../../components/logo";
import { NavbarRoutes } from "@/lib/constants/navbar-routes";
import { SocialRoutes } from "@/lib/constants/social-routes";
import { SidebarItem } from "./sidebar-item";
import { SocialsItem } from "./socials-item";

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-background shadow-sm">
      <div className="py-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-col w-full">
          {NavbarRoutes.map((route) => (
            <SidebarItem key={route.label} route={route} />
          ))}
        </div>
        <div className="py-6">
          <div className="flex items-center gap-x-4 bg-gray-800/40 w-fit p-2 rounded-xl shadow-inner">
            {SocialRoutes.map((route) => (
              <SocialsItem key={route.label} route={route} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
