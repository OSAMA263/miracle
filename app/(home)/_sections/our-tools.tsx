import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import EleAniamtion from "@/components/ui/sliding-ele-animation";

const cards = [
  {
    amount: "72%",
    title: "Complexity Overload",
    des: "Of digital transformations fail to meet their objectives due to fragmented toolchains and lack of platform standardization.",
  },
  {
    amount: "3.8x",
    title: "Speed vs. Stability",
    des: "Longer deployment cycles when organizations lack integrated DevOps and platform engineering practices.",
  },
  {
    amount: "$2.4M",
    title: "Rising Costs, Unclear ROI",
    des: "Average annual cloud waste per enterprise from mismanaged resources and lack of FinOps practices.",
  },
];

export default function OurToolsSection() {
  return (
    <section
      id="why choose us"
      className="flex-center flex-col gap-16!"
    >
      <SectionHeader title="the enterprise challenge">
        <h2>
          Why enterprises need a{" "}
          <span>modern technology partner</span>
        </h2>
      </SectionHeader>

      {/* three cards */}
      <div className="grid lg:grid-cols-3 xl:gap-8 gap-4">
        {cards.map(({ title, amount, des }, i) => (
          <Card
            i={i}
            slide
            className="filling-animation transition-none!"
            key={title}
          >
            <div className="relative z-10 md:space-y-5 space-y-2">
              {" "}
              <span className="text-5xl font-bold text-lightAqua/80 md:mb-16 mb-8 block">
                {amount}
              </span>
              <h1 className="font-bold">{title}</h1>
              <p className="text-white/60">{des}</p>
            </div>
          </Card>
        ))}
      </div>
      <EleAniamtion>
        <p className="text-center text-white/60">
          OPSERA bridges this gap — delivering platform engineering,
          cloud-native architecture, and AI-driven automation under
          one roof.
        </p>
      </EleAniamtion>
    </section>
  );
}
