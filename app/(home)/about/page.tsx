import HeroPage from "@/components/layout/hero-page";
import AboutSection from "../_sections/about-section";
import SpecialtiesSection from "../_sections/specialties";
import OurToolsSection from "../_sections/our-tools";

export default function About() {
  return (
    <>
      <HeroPage title="about" shiningText="us" />
      <AboutSection />
      <SpecialtiesSection />
      <OurToolsSection />
    </>
  );
}
