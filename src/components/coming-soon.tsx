import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const ComingSoon = () => {
  return (
    <main className="flex flex-col p-8 gap-16 w-full h-full justify-center items-center">
      <Image
        src="/assets/avatar.png"
        alt="avatar"
        height={515}
        width={380}
        className="w-[142px] h-[193px] md:w-[228px] md:h-[309px] lg:w-[285px] lg:h-[386px]"
      />
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-semibold">Coming Soon!</h1>
        <p className="text-white/70">
          Sorry! This page is currently under construction. Check back here
          another time!
        </p>
      </div>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
};
