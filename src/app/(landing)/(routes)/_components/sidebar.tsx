import { Logo } from "./logo";

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-background shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full"></div>
    </div>
  );
};
