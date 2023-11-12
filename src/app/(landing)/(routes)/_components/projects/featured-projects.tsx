import { GitFork, Github } from "lucide-react";

import { ProjectTile } from "./project-tile";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { FeaturedProjects as ProjectData } from "@/lib/constants/featured-projects";
import Link from "next/link";

export const FeaturedProjects = () => {
  return (
    <div
      className="pt-24 lg:pb-24 pb-12 px-8 max-w-7xl mx-auto space-y-8"
      id="projects"
    >
      <Heading icon={GitFork} label="Projects" />
      <p className="text-sm px-4 text-center md:text-left sm:text-lg max-w-6xl text-zinc-300">
        Dive into a selection of my favorite projects where code meets
        creativity, showcasing the breadth and depth of my development prowess.{" "}
      </p>
      <div className="grid px-3 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectData.map((data) => (
          <ProjectTile key={data.label} projectData={data} />
        ))}
      </div>
      <div className="flex mx-auto justify-center gap-4">
        <Button asChild className="w-fit">
          <Link href="/projects">View all Projects</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-primary border-2 px-2 hover:bg-primary/10"
        >
          <Link href="/github">
            <Github />
          </Link>
        </Button>
      </div>
    </div>
  );
};
