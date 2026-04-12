import HeroPage from "@/components/layout/hero-page";
import ServicesSection from "../_sections/services";

export const metadata={
  title:"Services",
  description:"Explore our full range of services including web development, mobile apps, custom software, and IT consulting tailored to your business needs."
}

export default function Services() {

  return (
    <>
      <HeroPage title="our" shiningText="services" />
      <ServicesSection/>
    </>
  );
}
