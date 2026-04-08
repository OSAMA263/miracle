import { CiCircleCheck } from "react-icons/ci";

import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="bg-lightGray rounded-3xl p-20 bg-[url('/images/contact-form-bg.png')] bg-no-repeat bg-cover"
    >
      <div className="w-[70%] mx-auto flex-center space-y-4 flex-col!">
        <SectionHeader title="contact us">
          <h2>
            We are Just a <span>click away</span>
          </h2>
          <p className="text-white/60 mt-4">
            Want to learn more about our services or need immediate
            assistance? Connect with us
          </p>
        </SectionHeader>
        {/* benefits */}

        <div className="flex justify-center flex-wrap items-center gap-8">
          <Benefit>Dedicated Support Team</Benefit>
          <Benefit>Fast and Reliable Assistance</Benefit>
          <Benefit>Multiple Ways to Reach Us</Benefit>
        </div>

        {/* form */}
        <form action="" className="w-full flex gap-10">
          <input
            type="email"
            required
            placeholder="**Enter your email address"
          />
          <Button
            variant="filling"
            as="button"
            type="submit"
            className="py-4! px-12!"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  );
}

const Benefit = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="rounded-full text-white/60 flex items-center gap-2 px-4 py-1 border border-white/10 text-sm">
      <CiCircleCheck className="shining text-2xl relative text-black overflow-hidden rounded-full" />{" "}
      {children}
    </p>
  );
};
