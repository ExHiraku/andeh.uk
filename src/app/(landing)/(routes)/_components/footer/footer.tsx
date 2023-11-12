"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FooterNav } from "./footer-nav";
import { useModal } from "@/components/hooks/use-modal";
import { ContactButton } from "./contact-button";

export const Footer = () => {
  const { onOpen } = useModal();

  return (
    <div className="bg-[#E5383B]/50">
      <div className="py-24" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-white font-semibold text-5xl block text-left">
              Let&apos;s bring your project to life!
            </h1>
            <ContactButton />
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};
