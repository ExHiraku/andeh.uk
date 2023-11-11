import { TestimonialProfile } from "./profile";
import { MobileProfile } from "./mobile-profile";
import type { TestimonialData } from "@/types/testimonials";

export const Testimonial = ({
  name,
  role,
  profileUrl,
  roleUrl,
  image,
  content,
}: TestimonialData) => {
  return (
    <div className="bg-card w-full shadow-lg rounded-[30px] p-6">
      <div className="flex flex-col md:flex-row gap-x-4">
        <TestimonialProfile
          name={name}
          role={role}
          profileUrl={profileUrl}
          roleUrl={roleUrl}
          image={image}
          content={content}
        />
        <MobileProfile
          name={name}
          role={role}
          profileUrl={profileUrl}
          roleUrl={roleUrl}
          image={image}
          content={content}
        />
        <blockquote className="bg-white/5 p-6 flex w-full rounded-t-3xl rounded-b-xl items-center justify-center">
          &quot;{content}&quot;
        </blockquote>
      </div>
    </div>
  );
};
