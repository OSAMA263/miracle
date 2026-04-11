import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import { FREATURES } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section id="features" className="space-y-16">
      <SectionHeader title="our features">
        <h2>
          Cloud features engineered for{" "}
          <span>maximum efficiency</span>
        </h2>
        <p className="text-white/60 mt-6">
          Experience cloud-native features designed to deliver maximum
          efficiency.
        </p>
      </SectionHeader>

      {/* four cols features */}
      <div className="grid grid-cols-4 gap-8">
        {FREATURES.map(({ Icon, title, des }, i) => (
          <Card
            i={i}
            slide
            key={title}
            className="py-6! filling-animation transition-none!"
          >
            <div className="relative z-10 space-y-3 hover:[&>svg]:rotate-y-180 hover:[&>svg]:text-white">
              <Icon className="text-4xl mb-10 text-darkBlue transition-all duration-500" />
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="text-white/60">{des}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
