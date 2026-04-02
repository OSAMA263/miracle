"use client";
import Image from "next/image";
import Link from "next/link";

export default function LogoLink() {
  return (
    <Link
      href="/"
      className="font-bold text-white text-xl flex items-center gap-4 uppercase"
    >
      <Image
        src="logo.svg"
        alt="logo site"
        width={0}
        height={0}
        className="w-10"
      />
      <span>Miracle</span>
    </Link>
  );
}

export const Logo = () => {
  return (
    <Image
      src="logo.svg"
      alt="logo site"
      width={0}
      height={0}
      className="w-7"
    />
  );
};
