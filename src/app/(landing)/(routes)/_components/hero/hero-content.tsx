"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Heading } from "@/components/heading";
import { ContactButton } from "./contact-button";

export const Hero = () => {
  return (
    <div className="py-8 md:py-24 px-8 max-w-7xl mx-auto">
      <div
        className="h-full flex flex-col-reverse justify-between items-center gap-8 md:flex-row"
        id="about"
      >
        <div className="w-full space-y-12">
          <div className="space-y-8">
            <Heading icon={ChevronRight} label="Andeh" />
            <p className="text-center text-zinc-300 text-lg md:text-left">
              👋 Hi, I&apos;m Andrew, a 20 year old Software Developer from the
              UK with over 2 years of experience in crafting seamless user
              experiences and robust backend architectures. With a diverse tech
              stack, I blend aesthetics with functionality in every project.
              Explore my portfolio to see the digital landscapes I&apos;ve
              brought to life!
            </p>
          </div>
          <ContactButton />
        </div>
        <div className="flex justify-center md:justify-end items-center w-full lg:justify-center">
          <Image
            src="/assets/avatar.png"
            alt="avatar"
            height={515}
            width={380}
            className="w-[190px] h-[257.5px] md:w-[304px] md:h-[412px] lg:w-[380px] lg:h-[515px]"
          />
        </div>
      </div>
    </div>
  );
};
