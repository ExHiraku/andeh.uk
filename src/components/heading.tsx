import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const Heading = ({
  icon: Icon,
  label,
  textClassName,
}: {
  icon?: LucideIcon;
  label: string;
  textClassName?: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-x-4 mx-auto md:justify-start">
      {Icon && (
        <Icon className="hidden h-[72px] w-[72px] text-primary md:flex" />
      )}
      <h1 className={cn("text-7xl font-bold", textClassName)}>
        <span
          className={cn(
            "bg-clip-text text-transparent bg-gradient-to-br from-primary via-white/30 to-white/0",
            textClassName
          )}
        >
          {label}
        </span>
      </h1>
    </div>
  );
};
