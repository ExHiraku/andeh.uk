import { Skill } from "@/types/skill";
import Image from "next/image";

export const SkillTile = ({ skill }: { skill: Skill }) => {
  return (
    <div className="group flex flex-col">
      <div className="p-[1.5px] bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-2xl shadow-skill col-span-6 md:col-span-3 lg:col-span-2 group-hover:from-primary group-hover:to-primary transform transition group-hover:-translate-y-4 group-hover:border-b-[12px] group-hover:border-primary">
        <div className="bg-[#1A1A1A] w-40 h-40 rounded-2xl p-4">
          <Image
            fill
            src={skill.imageUrl || "/assets/exult_red.png"}
            alt="exultRed"
            className="p-6"
          />
        </div>
      </div>
      <h1 className="hidden text-xl group-hover:flex">{skill.label}</h1>
    </div>
  );
};
