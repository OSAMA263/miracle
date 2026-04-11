"use client";

import { usePathname } from "next/navigation";
import SectionHeader from "../ui/section-header";
import MovingLinesY from "../moving-lines-y";
import AutoSlider from "../auto-slider";
import { SPONSORS_SLIDER } from "@/data/sponsors-auto-slider";
import EleAniamtion from "../ui/sliding-ele-animation";

type TypeProps = {
  title: string;
  shiningText: string;
};

const linesMoveSpeed = [6, 16, 8, 12, 14, 9];

export default function HeroPage({ title, shiningText }: TypeProps) {
  const pathname = usePathname();

  return (
    <section
      id="hero"
      className="relative h-180 grid grid-cols-6 justify-items-center"
    >
      {/* 5 moving lines from top to bottom */}
      {linesMoveSpeed.map((speed, i) => (
        <MovingLinesY key={i} speed={speed} />
      ))}

      {/* auto moving aslider */}

      <div className="w-screen absolute bottom-0 -translate-x-1/2 left-1/2 opacity- bg-lightGray">
        <AutoSlider data={SPONSORS_SLIDER} />
      </div>

      {/* hero page title */}
      <div className="size-full absolute flex-center flex-col capitalize">
        <SectionHeader>
          <h2 className="text-6xl!">
            {title} <span>{shiningText}</span>
          </h2>
        </SectionHeader>
        <EleAniamtion>
          <h1 className="text-white/60">
            home / {pathname.split("/")}
          </h1>
        </EleAniamtion>
      </div>
    </section>
  );
}
