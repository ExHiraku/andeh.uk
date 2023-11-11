import type { TestimonialData } from "@/types/testimonials";
import Image from "next/image";
import Link from "next/link";

export const MobileProfile = ({
  name,
  role,
  profileUrl,
  roleUrl,
  image,
}: TestimonialData) => {
  return (
    <div className="md:hidden rounded-lg overflow-hidden">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
          height="64"
          src={image || "/assets/blank-project.png"}
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width="64"
        />
        <div>
          <Link
            href={profileUrl}
            className="text-lg font-semibold hover:underline"
          >
            {name}
          </Link>
          <Link
            href={roleUrl}
            className="flex items-center space-x-1 text-zinc-400 hover:underline"
          >
            {role}
          </Link>
        </div>
      </div>
    </div>
  );
};
