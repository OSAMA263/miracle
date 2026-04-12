import HeroPage from "@/components/layout/hero-page";
import AboutSection from "../_sections/about-section";
import SpecialtiesSection from "../_sections/specialties";
import OurToolsSection from "../_sections/our-tools";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about our team, mission, and expertise in delivering innovative software and digital solutions for businesses worldwide.",
};

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
