import { ROUTES } from "@/_constants/routes";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="our services"
      className="flex-center flex-col gap-16!"
    >
      {/* header */}
      <div className="grid grid-cols-2 items-center">
        <SectionHeader
          title="services we deliver"
          className="items-start! text-start!"
        >
          <h2>
            Delivering <span>digital transformation</span> through
            expert cloud services
          </h2>
        </SectionHeader>
        <Button
          slide
          className="w-fit ms-auto"
          as="link"
          href={ROUTES.SERVICES}
          variant="shining"
        >
          View All Services
        </Button>
      </div>

      {/* services we deliver */}
      <div className="grid grid-cols-3 gap-10">
          {SERVICES.map(({ Icon, title, des },i) => (
            <Card
            slide
            i={i}
              key={title}
              className="hover:-translate-y-4 hover:transition-all hover:[&>svg]:rotate-y-180 space-y-10"
            >
              <Icon className="text-5xl text-lightAqua transition-all duration-500" />
              <h2 className="font-bold">{title}</h2>
              <p className="text-white/60">{des}</p>
              <Button
                as="link"
                className="border-transparent!"
                href={ROUTES.SERVICES}
                variant="filling"
              >
                Read More
              </Button>
            </Card>
          ))}
      </div>
    </section>
  );
}
