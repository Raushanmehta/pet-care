import AboutSection from "@/sections/home/AboutSection";
import HeroSection from "@/sections/home/HeroSection";
import ServiceSection from "@/sections/home/ServiceSection";
import StatsSection from "@/sections/home/StatsSection";
import TeamSection from "@/sections/home/TeamSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import { site } from "@/data";

export default function Home() {
  return (
    <main>
      <HeroSection data={site.hero} />
      <AboutSection data={site.about} />
      <ServiceSection data={site.services} />
      <TestimonialSection data={site.testimonials} />
      <StatsSection data={site.stats} />
      <TeamSection data={site.team} />
    </main>
  );
}
