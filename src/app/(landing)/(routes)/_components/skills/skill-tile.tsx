import { Skill } from "@/types/skill";
import Image from "next/image";

export const SkillTile = ({ skill }: { skill: Skill }) => {
  return (
    <div className="relative group">
      <div className="flex flex-col">
        <div className="p-[1.5px] bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-2xl shadow-skill col-span-6 md:col-span-3 lg:col-span-2 group-hover:from-primary group-hover:to-primary transform transition group-hover:border-b-[8px] group-hover:-translate-y-4 border-gray-600 group-hover:border-primary">
          <div className="bg-[#1A1A1A] w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl p-4">
            <Image
              height={512}
              width={512}
              src={skill.imageUrl || "/assets/exult_red.png"}
              alt="exultRed"
              className="xl:p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
