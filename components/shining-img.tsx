"use client";
import Image from "next/image";
import Button from "./ui/button";
import { TbPlayerPlayFilled } from "react-icons/tb";

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
      {/* overlay galssy effect */}
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
        <div className="absolute z-10 top-1/2 left-1/2 -transalte-x-1/2 -translate-y-1/2">
          <div className="bg-white/60 inset-0 rounded-full animate-ping absolute"></div>
          <Button
            as="button"
            variant="shining"
            className="p-4! rounded-full!"
          >
            <TbPlayerPlayFilled className="text-white text-4xl" />
          </Button>
        </div>
      )}
    </div>
  );
}
