import Link from "next/link";

import { Logo } from "@/components/logo";

export const FooterNav = () => {
  return (
    <footer className="bg-background max-w-7xl w-full mx-auto min-[1280px]:rounded-t-3xl">
      <div className="grid p-8 gap-16 grid-cols-4 sm:p-[4.5rem] sm:grid-cols-5">
        <div className="flex flex-col gap-y-4 col-span-4 sm:col-span-2">
          <Logo />
          <span className="text-xs">
            &copy; 2023 Andrew Mason. All Rights Reserved.
          </span>
        </div>
        <div className="col-span-4 xs:col-span-2 flex flex-col gap-y-8 sm:col-span-1">
          <p className="text-primary font-semibold">Andeh</p>
          <div className="flex gap-7 xs:flex-col">
            <FooterNavItem href="/projects" label="All Projects" />
            <FooterNavItem
              href="/discord"
              label="Discord Server"
              target="_blank"
            />
          </div>
        </div>
        <div className="col-span-4 xs:col-span-2 sm:col-span-1 flex flex-col gap-y-8">
          <p className="text-primary font-semibold">Collaboration</p>
          <div className="flex gap-7 xs:flex-col">
            <FooterNavItem href="/github" label="GitHub" target="_blank" />
            <FooterNavItem
              href="https://bisecthosting.com/Exult"
              label="BisectHosting"
              target="_blank"
            />
          </div>
        </div>
        <div className="col-span-4 xs:col-span-2 sm:col-span-1 flex flex-col gap-y-8">
          <p className="text-primary font-semibold">Business</p>
          <div className="flex gap-7 xs:flex-col">
            <FooterNavItem
              href="https://exultsoftware.com"
              label="Exult Software LTD"
              target="_blank"
            />
            <FooterNavItem
              href="https://kerberus.gg"
              label="Kerberus"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterNavItem = ({
  label,
  href,
  target,
}: {
  label: string;
  href: string;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      target={target || "_self"}
      className="text-zinc-400 hover:text-primary"
    >
      {label}
    </Link>
  );
};
