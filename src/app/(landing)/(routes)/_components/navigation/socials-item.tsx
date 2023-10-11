import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { NavbarRoute } from "@/types/navbar-route";
import Link from "next/link";

export const SocialsItem = ({ route }: { route: NavbarRoute }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={route.href} target="_blank">
            <route.icon
              className={cn(
                "text-primary fill-primary/50 hover:fill-primary transition duration-200",
                route.color
              )}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{route.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
