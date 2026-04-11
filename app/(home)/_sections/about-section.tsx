import SectionHeader from "@/components/ui/section-header";
import EleAniamtion from "@/components/ui/sliding-ele-animation";
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
      <div className="lg:flex-center gap-12!">
        <EleAniamtion>
          <div className="flex-center mb-10 flex-col gap-0! shining-text flex-1">
            <span className="text-[12rem] leading-tight block">3</span>
            <p className="rounded-tag max-lg:text-sm border-transparent!">
              Years Of Experience
            </p>
          </div>
        </EleAniamtion>

        <div className="grid md:grid-cols-2 md:gap-10 gap-6 flex-2">
          {OUR_MISSION.map(({ title, Icon, des }) => (
            <div
              className="space-y-4 hover:[&>svg]:text-white hover:[&>svg]:rotate-y-180"
              key={title}
            >
              <EleAniamtion>
                <Icon className="text-darkBlue text-5xl" />
                <h2 className="font-bold lg:text-2xl">{title}</h2>
                <p className="max-lg:text-sm text-white/60">{des}</p>
              </EleAniamtion>
            </div>
          ))}
          <EleAniamtion>
            <p className="md:col-span-2 text-white/60 max-lg:text-sm">
              We deliver enterprise projects with Red Hat across
              Europe. We have established operations in the UAE and
              are building a full Center of Excellence in Egypt.
            </p>
          </EleAniamtion>
        </div>
      </div>
    </section>
  );
}
