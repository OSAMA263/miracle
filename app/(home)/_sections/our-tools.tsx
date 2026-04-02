import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";

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
      <div className="grid grid-cols-3 gap-8">
        {cards.map(({ title, amount, des }) => (
          <Card className="filling-animation" key={title}>
            <div className="relative z-10 space-y-5">
              {" "}
              <span className="text-5xl font-bold text-lightAqua/80 mb-16 block">
                {amount}
              </span>
              <h1 className="font-bold">{title}</h1>
              <p className="text-white/60">{des}</p>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-white/60">
        OPSERA bridges this gap — delivering platform engineering,
        cloud-native architecture, and AI-driven automation under one
        roof.
      </p>
    </section>
  );
}
