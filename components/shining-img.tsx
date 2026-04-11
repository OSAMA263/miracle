"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/button";
import { TbPlayerPlayFilled } from "react-icons/tb";
import Modal from "./ui/modal";

type PropsType = {
  alt?: string;
  src: string;
  playerBtn?: boolean;
  className?: string;
};

export default function ShiningImg(props: PropsType) {
  const {
    alt = "placeholder",
    src,
    playerBtn,
    className = "",
  } = props;

  return (
    <div
      className={`size-full hover:[&>#overlay]:w-[200%] hover:[&>#overlay]:opacity-0 rounded-3xl overflow-hidden relative ${className}`}
    >
      {/* slide out animtion div */}
      <motion.div
        id="sliding-overlay"
        initial={{ width: "100%" }}
        whileInView={{ width: "0%" }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.6, once: true }}
        className="absolute bg-lightGray z-50 size-full"
      />

      {/* overlay galssy effect on hover */}
      <div
        id="overlay"
        className="z-1 absolute left-1/2 -translate-x-1/2 w-0 h-full skew-x-50 transition-all duration-700 opacity-40 bg-white/60"
      />
      <Image
        alt={alt}
        src={src}
        fill
        className="size-full object-cover"
      />
      {playerBtn && (
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* pulsing circl on the button */}
          <div className="bg-white/60 inset-0 rounded-full animate-ping absolute" />

          {/* modal */}
          <Modal
            modalButton={
              <Button
                as="button"
                variant="shining"
                className="p-4! rounded-full!"
              >
                <TbPlayerPlayFilled className="text-white text-4xl" />
              </Button>
            }
          >
            <iframe
              width={"100%"}
              height={"100%"}
              src="https://www.youtube.com/embed/Y-x0efG1seA"
              title="Placeholder Video - Coming Soon For Your Website"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Modal>
        </div>
      )}
    </div>
  );
}
