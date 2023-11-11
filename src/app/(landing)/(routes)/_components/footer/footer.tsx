import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FooterNav } from "./footer-nav";

export const Footer = () => {
  return (
    <div className="bg-[#E5383B]/50">
      <div className="py-24" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-white font-semibold text-5xl block text-left">
              Let&apos;s bring your project to life!
            </h1>
            <Button
              variant="link"
              className="flex items-center justify-start text-background font-semibold text-5xl text-left p-0"
            >
              <span>Let&apos;s work together</span>
              <ChevronRight className="flex items-center h-10 w-10" />
            </Button>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};
