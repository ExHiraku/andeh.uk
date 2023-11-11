import Image from "next/image";

import type { TestimonialData } from "@/types/testimonials";
import Link from "next/link";

export const TestimonialProfile = ({
  name,
  role,
  profileUrl,
  roleUrl,
  image,
}: TestimonialData) => {
  return (
    <div className="max-md:hidden w-[250px] relative h-fit shadow-md group overflow-hidden rounded-t-3xl rounded-b-xl bg-card">
      <span className="sr-only">View Testimonial from {name}</span>
      <Image
        alt={`Profile Image for ${name}`}
        className="object-fill w-full aspect-square"
        height="250"
        src={image || "/assets/blank-project.png"}
        width="250"
      />
      <div className="bg-white p-4 dark:bg-card">
        <Link
          href={profileUrl}
          className="block truncate font-semibold text-lg md:text-xl hover:underline"
          target="_blank"
        >
          {name}
        </Link>
        <Link
          href={roleUrl}
          className="block text-sm text-zinc-300 hover:underline"
          target="_blank"
        >
          {role}
        </Link>
      </div>
    </div>
  );
};
