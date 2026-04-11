import { ROUTES } from "@/_constants/routes";
import AutoSlider from "@/components/auto-slider";
import GlowingCircle from "@/components/glowing-circle";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import EleAniamtion from "@/components/ui/sliding-ele-animation";
import { countries } from "@/data/countries";
import Image from "next/image";

const sponsors = [
  {
    img: "/images/sponsor3.png",
    name: "redhat",
  },
  {
    img: "/images/sponsor2.jpg",
    name: "kanspersky",
  },
  {
    img: "/images/sponsor1.jpg",
    name: "everpure",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="pt-60">
      <GlowingCircle className="flex-center flex-col gap-14!">
        <SectionHeader
          className="space-y-2 text-center [&_h2]:text-5xl!"
          title="Modernize.Automate.Acceleracte."
        >
          <h2>
            Modernize. Automate.{" "}
            <span className="font-bold">Acceleracte.</span>
          </h2>
          <p className="text-white/60 mt-10">
            Transforming Through Modern Platform Engineering and Cloud
            Native Solutions
          </p>
        </SectionHeader>

        {/* two link btns */}
        <EleAniamtion i={0.4}>
          <div className="flex-center">
            <Button href={ROUTES.CONTACT} variant="filling" as="link">
              Get Started
            </Button>
            <Button
              href={ROUTES.SERVICES}
              variant="shining"
              as="link"
            >
              Learn More
            </Button>
          </div>
        </EleAniamtion>
        {/* sponsors */}
        <div className="flex-center flex-col">
          <p className="text-white/30 uppercase">
            strategic technology partners
          </p>
          <div className="flex-center rounded-xl py-12 px-20 bg-white gap-16!">
            {sponsors.map(({ img, name }) => (
              <Image
                loading="eager"
                alt={name}
                src={img}
                width={130}
                height={0}
                key={name}
              />
            ))}
          </div>
        </div>

        {/* auto slider */}
        <AutoSlider className="mt-20" data={countries} />
      </GlowingCircle>
    </section>
  );
}
