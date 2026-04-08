"use client";
import { motion } from "framer-motion";

export default function MovingLinesY({ speed }: { speed?: number }) {
  return (
    <div className="h-full relative w-0.5 bg-lightGray overflow-hidden">
      {/* progress bar */}
      <motion.div
        initial={{ top: "-20%" }}
        animate={{ top: "110%" }}
        transition={{
          duration: speed ?? 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-full h-20 rounded-full bg-linear-to-b from-transparent via-lightAqua to-transparent"
      />
    </div>
  );
}
