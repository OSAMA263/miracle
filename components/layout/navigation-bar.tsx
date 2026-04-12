"use client";
import Link from "next/link";
import Button from "../ui/button";
import LogoLink from "../ui/logo";
import { NAV_LINKS } from "@/_constants/nav-links";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/_constants/routes";
import NavbarSmallScreens from "./navbar-small-screens";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="flex max-lg:relative absolute items-center justify-between lg:py-10 py-4 z-50 max-lg:backdrop-blur-lg max-lg:border-b w-full border-white/20">
      <LogoLink />

      {/* navigation links in desktops */}
      <nav className="rounded-full p-3 bg-lightGray border border-white/5 max-lg:hidden">
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

      {/* navbar on small screens */}
      <NavbarSmallScreens />

      <Button
        className="max-lg:hidden!"
        variant="shining"
        as="link"
        href={ROUTES.CONTACT}
      >
        Contact Us
      </Button>
    </header>
  );
}
