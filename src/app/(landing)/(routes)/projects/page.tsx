"use dynamic";

import { GitFork } from "lucide-react";

import { Heading } from "@/components/heading";
import { AllProjects } from "@/lib/constants/all-projects";
import { ProjectTile } from "../_components/projects/project-tile";
import { FooterNav } from "../_components/footer/footer-nav";

const ProjectsPage = () => {
  return (
    <main>
      <div
        className="pt-24 lg:pb-24 pb-12 px-8 max-w-7xl mx-auto space-y-8"
        id="projects"
      >
        <Heading icon={GitFork} label="All Projects" />
        <div className="grid px-3 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AllProjects.map((data) => (
            <ProjectTile key={data.label} projectData={data} />
          ))}
        </div>
      </div>
      <FooterNav bgClassName="bg-white/5" />
    </main>
  );
};

export default ProjectsPage;
