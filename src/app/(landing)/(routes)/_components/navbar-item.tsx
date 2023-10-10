import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavbarRoute } from "@/types/navbar-route";

export const NavbarItem = ({
  route,
  isActive = false,
}: {
  route: NavbarRoute;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={route.href}
      className={cn(
        "text-primary-foreground transition duration-200 hover:text-primary",
        isActive ? "text-primary" : "text-zinc-400"
      )}
    >
      <div className="flex items-center flex-1">
        <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
        {route.label}
      </div>
    </Link>
  );
};
