import { ROUTES } from "@/_constants/routes";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import EleAniamtion from "@/components/ui/sliding-ele-animation";
import { BsBroadcast, BsCardList, BsInbox } from "react-icons/bs";

const THREE_COLS = [
  {
    Icon: BsInbox,
    title: "Tailored Cloud Native Solutions",
    des: "Every business is unique, and so are our solutions. We customize strategies to fit your specific needs.",
  },
  {
    Icon: BsCardList,
    title: "Advanced Technology",
    des: "We use the latest tools and cutting-edge technologies to modernize your cloud infrastructure.",
  },
  {
    Icon: BsBroadcast,
    title: "Real-Time Observability",
    des: "Stay ahead of issues with proactive monitoring and observability platforms that operate 24/7 across your cloud environments.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="choose us,i beg u">
      <Card className="space-y-20 px-20 bg-lightGray/60!">
        <SectionHeader title="Why Choose Us">
          <h2>
            Trusted experts committed to accelerating{" "}
            <span>your cloud transformation</span>
          </h2>
        </SectionHeader>

        {/* 3 reasons columns */}
        <div className="grid grid-cols-3 text-balance divide-x divide-white/10">
          <EleAniamtion>
            {THREE_COLS.map(({ Icon, title, des }) => (
              <div key={title} className="space-y-6 rotate-icon px-8">
                <Icon className="text-4xl text-darkBlue transition-all duration-500" />
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-white/60">{des}</p>
              </div>
            ))}
          </EleAniamtion>
        </div>

        {/* link */}
        <Button
          slide
          as="link"
          href={ROUTES.CONTACT}
          className="rounded-xl! py-1! mx-auto"
          variant="shining"
        >
          Let build something together.
        </Button>
      </Card>
    </section>
  );
}
