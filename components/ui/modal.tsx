// @ts-nocheck
"use client";
import {
  cloneElement,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

type propsType = {
  modalClass?: string;
  modalButton: React.ReactElement;
  children: React.ReactNode;
};

export default function Modal(props: propsType) {
  const { modalClass, modalButton, children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // the modal content
  const modalBody = (
    // overlat
    <div
      className={`fixed flex-center top-0 left-0 h-dvh z-50 w-full bg-black/50 transition-all duration-500 ${!isOpen ? "opacity-0 pointer-events-none" : ""} ${modalClass ?? ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {/* main modalbody */}
      <div
        className="rounded-lg lg:w-1/2 h-1/2 w-[90%] bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return (
    <>
      {/* applying the modal toggler in the btn onclick */}
      {
        cloneElement(modalButton, {
          onClick: () => setIsOpen((prev) => !prev),
        })}

      {/* moving modal in body root */}
      {isMounted && createPortal(modalBody, document.body)}
    </>
  );
}
