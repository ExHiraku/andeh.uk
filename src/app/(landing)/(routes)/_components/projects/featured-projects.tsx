import { GitFork } from "lucide-react";

import { ProjectTile } from "./project-tile";
import { Heading } from "@/components/heading";

import { FeaturedProjects as ProjectData } from "@/lib/constants";

export const FeaturedProjects = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto space-y-8" id="projects">
      <Heading icon={GitFork} label="Projects" />
      <p className="text-sm px-4 text-center md:text-left sm:text-lg max-w-6xl text-zinc-300">
        Dive into a selection of my favorite projects where code meets
        creativity, showcasing the breadth and depth of my development prowess.{" "}
      </p>
      <div className="grid grid-cols-12 gap-8 sm:px-4 md:px-8">
        {ProjectData.map((data) => (
          <ProjectTile key={data.label} projectData={data} />
        ))}
      </div>
    </div>
  );
};
