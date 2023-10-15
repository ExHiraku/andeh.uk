import Image from "next/image";
import { Github, Globe } from "lucide-react";

import { FeaturedProject } from "@/types/featured-project";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ProjectTile = ({
  projectData,
}: {
  projectData: FeaturedProject;
}) => {
  return (
    <div className="flex flex-col h-fit w-80 mx-auto col-span-12 sm:col-span-6 rounded-t-[30px] rounded-b-[15px] lg:col-span-4 md:w-full shadow-md">
      <Image
        src={projectData.displayImage || "/assets/blank-project.png"}
        alt={projectData.label}
        className="rounded-t-[30px] h-64 w-80 sm:w-full"
        width={projectData.imageWidth || 379}
        height={projectData.imageHeight || 281}
      />
      <div className="bg-card py-12 px-4 rounded-b-[15px] text-3xl font-semibold w-80 sm:w-full">
        {projectData.label}
        <Accordion type="single" collapsible>
          <AccordionItem value="description" className="border-none">
            <AccordionTrigger className="text-lg text-white/70 flex justify-start gap-x-4">
              Show Description
            </AccordionTrigger>
            <AccordionContent className="font-medium text-zinc-400">
              {projectData.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {(projectData.liveDemo || projectData.sourceUrl) && (
          <div>
            <Separator className="mt-8 bg-zinc-700" />
            <h2 className="text-3xl font-semibold text-center pt-8">Links</h2>
            <div className="flex items-center justify-center gap-x-4 mt-4">
              {projectData.liveDemo && (
                <Link
                  href={projectData.liveDemo}
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Globe className="h-4 w-4" />
                </Link>
              )}
              {projectData.liveDemo && projectData.sourceUrl && (
                <Separator orientation="vertical" className="bg-zinc-400 h-6" />
              )}
              {projectData.sourceUrl && (
                <Link
                  href={projectData.sourceUrl}
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
