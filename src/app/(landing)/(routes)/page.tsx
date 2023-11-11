import { Hero } from "./_components/hero";
import { FeaturedProjects } from "./_components/projects/featured-projects";
import { WhatIDo } from "./_components/skills/what-i-do";
import { ClientTestimonials } from "./_components/testimonials/client-testimonials";
import { Footer } from "./_components/footer/footer";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WhatIDo />
      <ClientTestimonials />
      <Footer />
    </main>
  );
};

export default LandingPage;
