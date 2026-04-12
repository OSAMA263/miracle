// @ts-nocheck
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsCheck2Circle, BsExclamationOctagon } from "react-icons/bs";

type typeProps = {
  status: "error" | "success" | "warning";
  message: string;
};

export default function Toast({ status, message }: typeProps) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <AnimatePresence mode="wait">
      {showToast && (
        <motion.div
          initial={{ y: "200%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5 }}
          exit={{ y: "200%", transition: { delay: 2 } }}
          className="fixed w-fit z-50 bg-darkBlue p-2 px-3 rounded bottom-0 right-12 flex items-center gap-2"
        >
          {status == "success" ? (
            <BsCheck2Circle className="text-green-400 text-xl" />
          ) : (
            <BsExclamationOctagon />
          )}
          <span> {message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
