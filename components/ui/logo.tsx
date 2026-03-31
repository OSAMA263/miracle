"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-bold text-white text-xl flex items-center gap-4 uppercase"
    >
      <Image src="logo.svg" alt="logo site" width={40} height={40} />
      <span>Miracle</span>
    </Link>
  );
}
