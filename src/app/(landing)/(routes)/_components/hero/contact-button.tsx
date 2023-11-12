"use client";

import { ChevronRight } from "lucide-react";

import { useModal } from "@/components/hooks/use-modal";
import { Button } from "@/components/ui/button";

export const ContactButton = () => {
  const { onOpen } = useModal();

  return (
    <Button
      className="flex flex-row gap-x-4 capitalize mx-auto text-3xl p-0 text-primary font-semibold hover:underline hover:text-primary hover:bg-transparent md:mx-0 "
      variant="ghost"
      onClick={() => onOpen("contact")}
    >
      <p>
        Get in Touch <span className="md:hidden">!</span>
      </p>
      <ChevronRight className="hidden h-8 w-8 md:flex" />
    </Button>
  );
};
