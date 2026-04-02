import { ROUTES } from "@/_constants/routes";
import ShiningImg from "@/components/shining-img";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { OUR_TOOLS } from "@/data/specialties";

export default function SpecialtiesSection() {
  return (
    <section id="our-specialties" className="space-y-18">
      <div className="grid grid-cols-2 gap-20 ">
        <SectionHeader
          title="Our Specialties"
          className="[&>div]:space-y-8 items-start! text-start!"
        >
          <h2>
            Trusted experts committed to building{" "}
            <span>reliable cloud Native platforms</span>
          </h2>
          <p className="text-white/60">
            We design cloud platforms that increase velocity, reduce
            operational overhead, and improve customer experience
            across industries.
          </p>
          <Button as="link" href={ROUTES.CONTACT} variant="shining">
            Contact Now
          </Button>
        </SectionHeader>

        {/* four steps */}
        <div className="grid grid-cols-2 gap-6">
          {OUR_TOOLS.map(({ Icon, title, des }) => (
            <div
              className="space-y-4 hover:[&>svg]:text-white hover:[&>svg]:rotate-y-180"
              key={title}
            >
              <Icon className="transition-all duration-500 text-4xl text-darkBlue" />
              <h2 className="font-bold text-lg">{title}</h2>
              <p className="text-white/60">{des}</p>
            </div>
          ))}
        </div>
      </div>

      {/* shining image effect */}
      <ShiningImg
        src="/images/specialties-bg.jpg"
        playerBtn
        className="w-full h-150"
      />
    </section>
  );
}
