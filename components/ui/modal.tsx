"use client";
import { useEffect, useState } from "react";

type propsType = {
  btnClass?: string;
  modalClass?: string;
  modalButton: React.ReactNode;
  children: React.ReactNode;
};

export default function Modal(props: propsType) {
  const { btnClass, modalClass, modalButton, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // modal body (children)
  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={btnClass ?? ""}
      >
        {modalButton}
      </div>
      <div
        className={`absolute z-20 inset-0 bg-black/30 transition-all duration-500 ${!isOpen ? "opacity-0 pointer-events-none" : "opaicty-100"} ${modalClass ?? ""}`}
      >
        <div className="absolute z-50 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          {children}
        </div>
      </div>
    </>
  );
}
