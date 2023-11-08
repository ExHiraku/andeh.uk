import { Skills } from "@/lib/constants/skills";
import { SkillTile } from "./skill-tile";

export const WhatIDo = () => {
  return (
    <div className="lg:py-24 py-12 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[#D9D9D9] md:text-right md:ml-auto md:pr-4">
          What I do.
        </h1>
        <div className="flex xs:h-48 items-center justify-center sm:justify-around flex-wrap gap-4 pt-4">
          {Skills.map((skill) => (
            <SkillTile key={skill.label} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
