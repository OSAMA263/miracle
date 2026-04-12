import { NAV_LINKS } from "@/_constants/nav-links";
import LogoLink from "../ui/logo";
import Link from "next/link";
import { ROUTES } from "@/_constants/routes";
import { CONTACT_INFO } from "@/data/contact-info";

export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/10">
      <div className="grid lg:grid-cols-3 gap-10 *:space-y-8 lg:justify-items-center">
        <div>
          <LogoLink />
          <span className="text-white/60">
            Your trusted partner in cloud consulting, delivering
            DevOps, security, and platform engineering for the
            enterprise.
          </span>
        </div>

        {/* navigation links */}
        <div>
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <PlainLinks />
        </div>
        {/* contact informations */}
        <div>
          <h2 className="text-2xl font-bold">Contact Informations</h2>
          <div className="space-y-4">
            {CONTACT_INFO.map(({ details, Icon, href, mail }) => (
              <div
                key={details}
                className={`flex items-center gap-2 hover:[&>svg]:bg-darkBlue ${(href || mail) && "hover:text-darkBlue"}`}
              >
                <Icon className="text-white! transition-all duraiton-500 rounded-full text-4xl p-1 bg-lightGray" />
                {href ? (
                  <Link target="_blank" href={href}>
                    {details}
                  </Link>
                ) : mail ? (
                  <a href={`mailto:${mail}`}>{mail}</a>
                ) : (
                  details
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export const PlainLinks = () => {
  return (
    <div className="flex flex-col space-y-3">
      {NAV_LINKS.map(({ label, url }, i) => (
        <Link href={url} key={i} className="hover:text-white/40">
          {label}
        </Link>
      ))}
      <Link href={ROUTES.CONTACT}>Contact us</Link>
    </div>
  );
};
