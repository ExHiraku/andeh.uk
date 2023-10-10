import Link from "next/link";

import { ChevronRight } from "lucide-react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-2 hover:text-primary transition duration-200"
    >
      <ChevronRight />
      <p>Andeh</p>
    </Link>
  );
};
