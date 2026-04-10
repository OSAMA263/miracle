import HeroPage from "@/components/layout/hero-page";
import ContactInformation from "./components/contact-information";
import ContactForm from "./components/contact-form";

export default function Contact() {
  return (
    <>
      <HeroPage title="Contact" shiningText="us" />
      <div className="grid grid-cols-2 gap-4 divide-white/5 divide-x">
        <ContactForm />
        <ContactInformation />
      </div>
    </>
  );
}
