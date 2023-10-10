import { type LucideIcon } from "lucide-react";

export const Heading = ({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-x-4 mx-auto md:justify-start">
      <Icon className="hidden h-[72px] w-[72px] text-primary md:flex" />
      <h1 className="text-7xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-white/30 to-white/0">
          {label}
        </span>
      </h1>
    </div>
  );
};
