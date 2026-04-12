// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import Button from "../ui/button";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { PlainLinks } from "./footer";
import { usePathname } from "next/navigation";

export default function NavbarSmallScreens() {
  const [active, setActive] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <>
      <Button
        onClick={() => setActive((prev) => !prev)}
        variant="shining"
        as="button"
        className="ms-auto px-4! lg:hidden!"
      >
        <IoIosMenu className="text-3xl" />
      </Button>
      {/* bar navigation links */}
      <motion.div
        initial={false}
        animate={{ height: active ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute z-10 bg-lightGray/60 w-full top-full overflow-hidden lg:hidden"
      >
        <div className="relative size-full px-6 py-2">
          <PlainLinks />
        </div>
      </motion.div>
    </>
  );
}
