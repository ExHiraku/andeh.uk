import Image from "next/image";
import { Github, Globe } from "lucide-react";

import { FeaturedProject } from "@/types/featured-project";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const ProjectTile = ({
  projectData,
}: {
  projectData: FeaturedProject;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="flex flex-col w-full h-full col-span-12 md:col-span-6 lg:col-span-4">
        <Image
          src={projectData.displayImage || "/assets/blank-project.png"}
          alt={projectData.label}
          className="rounded-t-[30px] w-64 h-64 lg:w-full lg:h-full"
          width={projectData.imageWidth || 379}
          height={projectData.imageHeight || 281}
        />
        <div className="bg-card py-12 rounded-b-[15px] text-3xl font-semibold text-center w-64 h-fit lg:w-full lg:h-fit">
          {projectData.label}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col gap-y-2 bg-secondary ring-2 ring-primary/30">
        <p className="text-center">{projectData.description}</p>
        <div className="flex justify-center items-center gap-x-3">
          {projectData.liveDemo && (
            <Link href={projectData.liveDemo} target="_blank">
              <Globe className="h-4 w-4 hover:text-primary" />
            </Link>
          )}
          {projectData.liveDemo && projectData.sourceUrl && (
            <Separator orientation="vertical" className="h-6 bg-zinc-400" />
          )}
          {projectData.sourceUrl && (
            <Link href={projectData.sourceUrl} target="_blank">
              <Github className="h-4 w-4 hover:text-primary" />
            </Link>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
