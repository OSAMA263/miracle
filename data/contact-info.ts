import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IconType } from "react-icons";

type ContactType = {
  Icon: IconType;
  details?: string;
  mail?: string;
  href?: string;
};

export const CONTACT_INFO: ContactType[] = [
  {
    Icon: MdLocationOn,
    details: "Main - Egypt, dakahlia, mit ghamr",
  },
  {
    Icon: MdLocationOn,
    details: "Nakasero Hill - Kampala, Uganda",
  },
  {
    Icon: MdLocationOn,
    details: "Sannenzaka Street - Kyoto, Japan",
  },
  {
    Icon: MdEmail,
    details: "osamaelseify2@gmail.com",
    mail: "osamaelseify2@gmail.com",
  },
  {
    Icon: FaLinkedin,
    details: "linkedin.com/in/osama00/",
    href: "https://www.linkedin.com/in/osama00/",
  },
  {
    Icon: FaGithub,
    details: "github.com/OSAMA263",
    href: "https://github.com/OSAMA263",
  },
];
