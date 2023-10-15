import { Hero } from "./_components/hero";
import { FeaturedProjects } from "./_components/projects/featured-projects";
import { WhatIDo } from "./_components/skills/what-i-do";
import { ClientTestimonials } from "./_components/testimonials/client-testimonials";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WhatIDo />
      <div>
        <ClientTestimonials />
      </div>
    </main>
  );
};

export default LandingPage;
