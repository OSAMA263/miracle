import SectionHeader from "@/components/ui/section-header";
import { MdEmail, MdLocationOn } from "react-icons/md";

const CONTACT_DETAILS = [
  {
    Icon: MdLocationOn,
    details: "Main - Egypt, dakahlia, mit ghamr",
  },
  {
    Icon: MdEmail,
    details: "osamaelseify2@gmail.com",
    mail: "osamaelseify2@gmail.com",
  },
];

export default function ContactInformation() {
  return (
    <div className="space-y-8">
      <SectionHeader title="contact us" className="items-start! text-start!">
        <h2>
          connect with use and lets <span>build something great</span>
        </h2>
      </SectionHeader>

      {CONTACT_DETAILS.map(({ mail, details, Icon }) => (
        <div
          key={details}
          className={`flex items-center gap-2 hover:[&>svg]:bg-darkBlue hover:text-darkBlue`}
        >
          <Icon className="text-white! transition-all duraiton-500 rounded-full text-4xl p-1 bg-lightGray" />
          {mail ? <a href={`mailto:${mail}`}>{mail}</a> : details}
        </div>
      ))}
    </div>
  );
}
