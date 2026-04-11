"use client";
import { useState } from "react";
import EleAniamtion from "./sliding-ele-animation";

type DataType = { title: string; answer: string };

type AccordionType = {
  data: DataType[];
  className?: string;
};

type AccordionItemType = {
  item: DataType;
  ind: number;
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Accordion({
  data,
  className,
}: AccordionType) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {data.map((item, ind) => (
        <AccordionItem
          key={ind}
          {...{ item, active, setActive, ind }}
        />
      ))}
    </div>
  );
}

const AccordionItem = (props: AccordionItemType) => {
  const { item, setActive, active, ind } = props;

  function handleACtiveItem() {
    setActive(active == ind ? null : ind);
  }

  return (
    <EleAniamtion i={ind}>
      <div className="bg-lightGray rounded-3xl overflow-hidden">
        <button
          onClick={handleACtiveItem}
          className={`flex lg:text-xl font-smibold  items-center transition-all duration-500 gap-x-8 justify-between p-6 ${active === ind ? "bg-white/10" : "bg-lightGray"}`}
        >
          <p className="text-start">{item.title}</p>
          <span
            className={`transition-all duration-500 text-2xl ${active == ind ? "rotate-45" : "rotate-0"}`}
          >
            +
          </span>
        </button>
        <div
          className={`text-white/60 transition-all duration-500 ${active == ind ? "max-h-100" : "max-h-0"}`}
        >
          <p className="p-6 border-t max-lg:text-sm">{item.answer}</p>
        </div>
      </div>{" "}
    </EleAniamtion>
  );
};
