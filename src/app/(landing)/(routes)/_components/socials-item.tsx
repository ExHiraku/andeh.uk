import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { NavbarRoute } from "@/types/navbar-route";
import Link from "next/link";

export const SocialsItem = ({ route }: { route: NavbarRoute }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={route.href} target="_blank">
            <route.icon className="text-primary fill-primary/50 hover:fill-primary transition duration-200" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{route.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
