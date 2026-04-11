import ShiningImg from "@/components/shining-img";
import Accordion from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/section-header";
import { FAQ } from "@/data/faq";
import { AiOutlineMail } from "react-icons/ai";

export default function QuestionsAskedSection() {
  return (
    <section
      id="most common quesitons"
      className="grid lg:grid-cols-2 items-center xl:gap-10 gap-4"
    >
      <div>
        <SectionHeader
          title="frequently asked questions"
          className="items-start! text-start"
        >
          <h2>
            Your complete FAQ guide to <span>cloud services</span>
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <AiOutlineMail className="text-darkBlue text-5xl" />
            <div className="space-y-1 max-sm:text-xs">
              <h2 className="text-xl font-bold">Get in Contact</h2>
              <a
                href="mailto:osamaelseify2@gmail.com"
                className="text-white/60"
              >
                osamaelseify2@gmail.com
              </a>
            </div>
          </div>
        </SectionHeader>

        {/* image */}
        <ShiningImg
          className="w-full h-72 mt-6 [&>#sliding-overlay]:bg-darkBlue/50!"
          src={"/images/faq.jpg"}
        />
      </div>

      {/* accordion questions and answers */}
      <Accordion data={FAQ} />
    </section>
  );
}
