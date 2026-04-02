import AboutSection from "./_sections/about-section";
import Hero from "./_sections/hero";
import ServicesSection from "./_sections/services";
import OurToolsSection from "./_sections/our-tools";
import SpecialtiesSection from "./_sections/specialties";
import WhyChooseUsSection from "./_sections/choose-us";
import FeaturesSection from "./_sections/features";
import QuestionsAskedSection from "./_sections/questions-asked";
import ContactSection from "./_sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurToolsSection/>
      <ServicesSection/>
      <SpecialtiesSection/>
      <WhyChooseUsSection/>
      <FeaturesSection/>
      <QuestionsAskedSection/>
      <ContactSection/>
    </>
  );
}
