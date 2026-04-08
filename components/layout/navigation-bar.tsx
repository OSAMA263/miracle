"use client";
import Link from "next/link";
import Button from "../ui/button";
import LogoLink from "../ui/logo";
import { NAV_LINKS } from "@/_constants/nav-links";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/_constants/routes";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="flex absolute w-full items-center justify-between py-10 z-50">
      <LogoLink />
      <nav className="rounded-full p-3 bg-lightGray border border-white/5">
        <ul className="flex items-center font-smibold">
          {NAV_LINKS.map(({ url, label }) => (
            <li key={label}>
              <Link
                href={url}
                className={`px-4 py-2 rounded-full hover:text-white ${pathname === url ? "text-lightAqua hover:text-lightAqua! bg-blueGray/50" : "text-white/40"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button>theme</button>
        <Button variant="shining" as="link" href={ROUTES.CONTACT}>
          Contact Us
        </Button>
      </div>
    </header>
  );
}
