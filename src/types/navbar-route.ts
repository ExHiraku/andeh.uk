import { type LucideIcon } from "lucide-react";

export interface NavbarRoute {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
}
