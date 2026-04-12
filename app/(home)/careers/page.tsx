import HeroPage from "@/components/layout/hero-page";
import ApplicationForm from "./application-form";

export const metadata = {
  title: "Careers",
  description:
    "Join our team of passionate developers, designers, and innovators. Explore career opportunities and grow with us.",
};

export default function Careers() {
  return (
    <>
      <HeroPage title="join our" shiningText="team" />
      <ApplicationForm />
    </>
  );
}
