"use client";

import { ChevronRight } from "lucide-react";

import { useModal } from "@/components/hooks/use-modal";
import { Button } from "@/components/ui/button";

export const ContactButton = () => {
  const { onOpen } = useModal();

  return (
    <Button
      variant="link"
      className="flex items-center justify-start text-background font-semibold text-5xl text-left p-0"
      onClick={() => onOpen("contact")}
    >
      <span>Let&apos;s work together</span>
      <ChevronRight className="flex items-center h-10 w-10" />
    </Button>
  );
};
