import Image from "next/image";

import { Project } from "@/types/project";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

export const ProjectTile = ({ projectData }: { projectData: Project }) => {
  return (
    <div className="relative h-fit shadow-md group overflow-hidden rounded-t-3xl rounded-b-xl bg-card">
      <span className="sr-only">View Project {projectData.label}</span>
      <Image
        alt={`Project Image for ${projectData.label}`}
        className="object-cover w-full h-60"
        height="300"
        src="/assets/blank-project.png"
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width="400"
      />
      <div className="bg-white p-4 dark:bg-card">
        <h3 className="font-semibold text-lg md:text-xl">
          {projectData.label}
        </h3>
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
        <div className="flex flex-wrap mt-2">
          {projectData.tags?.map((tag) => (
            <span
              key={tag.label}
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium mr-2 mb-2",
                tag.color
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto border-t-[0.1px] border-primary flex justify-between">
        {projectData.liveDemo && (
          <Link
            className="flex gap-x-2 py-4 w-full items-center mx-auto justify-center bg-primary/5 text-white hover:bg-primary/10"
            href={projectData.liveDemo}
            target="_blank"
          >
            <Globe />
            Website
          </Link>
        )}
        {projectData.liveDemo && projectData.sourceUrl && (
          <div className="flex mx-auto justify-center">
            <Separator
              orientation="vertical"
              className="bg-primary my-auto w-[1px]"
            />
          </div>
        )}
        {projectData.sourceUrl && (
          <Link
            className="flex gap-x-2 py-4 w-full items-center mx-auto justify-center bg-primary/5 text-white hover:bg-primary/10"
            href={projectData.sourceUrl}
            target="_blank"
          >
            <Github />
            Source
          </Link>
        )}
      </div>
    </div>
  );
};
