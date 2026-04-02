import SectionHeader from "@/components/ui/section-header";
import { AiOutlineAim, AiFillEye } from "react-icons/ai";

const OUR_MISSION = [
  {
    Icon: AiFillEye,
    title: "Our Mission",
    des: "We architect cloud-native platforms that are fast to build, secure by default, and ready to scale — powered by AI and deep infrastructure expertise.",
  },
  {
    Icon: AiOutlineAim,
    title: "Our Vision",
    des: "We help enterprises build platforms they can trust — secure by design, built to scale, and engineered to keep pace with an AI-driven future.",
  },
];

export default function AboutSection() {
  return (
    <section className="flex-center flex-col gap-18!" id="about-us">
      <SectionHeader title="who we are?">
        <h2>
          We help organizations{" "}
          <span>modernize, automate, and accelerate</span> cloud
          applications
        </h2>
      </SectionHeader>

      {/* our mission */}
      <div className="flex-center gap-12!">
        <div className="flex-center flex-col gap-0! shining-text flex-1">
          <span className="text-[12rem] leading-tight">3</span>
          <p className="rounded-tag border-transparent!">
            Years Of Experience
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 flex-2">
          {OUR_MISSION.map(({ title, Icon, des }) => (
            <div
              className="space-y-4 hover:[&>svg]:text-white hover:[&>svg]:rotate-y-180"
              key={title}
            >
              <Icon className="transition-all duration-500 text-darkBlue text-5xl" />
              <h2 className="font-bold text-2xl">{title}</h2>
              <p className="text-white/60">{des}</p>
            </div>
          ))}
          <p className="col-span-2 text-white/60">
            We deliver enterprise projects with Red Hat across Europe.
            We have established operations in the UAE and are building
            a full Center of Excellence in Egypt.
          </p>
        </div>
      </div>
    </section>
  );
}
