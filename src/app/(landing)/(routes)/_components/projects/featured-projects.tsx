import { GitFork } from "lucide-react";

import { ProjectTile } from "./project-tile";
import { Heading } from "@/components/heading";

import { FeaturedProjects as ProjectData } from "@/lib/constants";

export const FeaturedProjects = () => {
  return (
    <div className="py-24 px-8 max-w-7xl mx-auto space-y-8" id="projects">
      <Heading icon={GitFork} label="Featured Projects" textClassName="" />
      <p className="text-lg max-w-6xl">
        Dive into a selection of my favorite projects where code meets
        creativity, showcasing the breadth and depth of my development prowess.{" "}
        <span className="text-primary font-semibold">
          Hover over the cards below for more information on each project!
        </span>
      </p>
      <div className="grid grid-cols-12 gap-8">
        {ProjectData.map((data) => (
          <ProjectTile key={data.label} projectData={data} />
        ))}
      </div>
    </div>
  );
};
