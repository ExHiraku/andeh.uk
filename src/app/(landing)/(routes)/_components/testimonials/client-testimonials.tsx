import { Testimonial } from "./testimonial";
import { Testimonials } from "@/lib/constants/testimonials";

export const ClientTestimonials = () => {
  return (
    <div className="bg-gradient-to-b from-background via-background to-primary/50">
      <div className="py-24 max-w-7xl mx-auto space-y-8" id="testimonials">
        <div className="flex px-8 justify-center items-center gap-x-4 mx-auto md:justify-start">
          <h1 className="text-center mx-auto sm:text-left text-4xl xs:text-5xl md:text-7xl font-bold">
            <span className="flex-wrap bg-clip-text text-transparent bg-gradient-to-br from-primary via-white/30 to-white/0">
              Client Testimonials
            </span>
          </h1>
        </div>
        <div className="flex max-w-5xl mx-auto flex-col px-3 w-full gap-6">
          {Testimonials.map((data) => (
            <Testimonial key={data.name} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};
