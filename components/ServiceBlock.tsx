"use client";
import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import MobileTap from "./MobileTap";
import TextGradient from "./TextGradient";

const ServiceBlock = ({
  title,
  desc,
  category,
}: {
  title: string;
  desc: string;
  category: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = title.replace(/\s+/g, "");

  return (
    <div className="flex h-fit w-full flex-col gap-5 rounded-2xl bg-white/5 p-10 lg:max-w-2xl lg:p-8 xl:p-12">
      <p className="text-sm">{category}</p>
      <h2 className="text-2xl font-medium">{title}</h2>
      <p
        id={id}
        style={{
          height: isOpen ? document.querySelector(`#${id}`)?.scrollHeight : 70,
        }}
        className={`grid overflow-hidden break-words font-extralight transition-[height] ${!isOpen && "line-clamp-3"}`}
      >
        {desc}
      </p>
      <MobileTap
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-md group flex w-fit items-center gap-1 font-medium"
      >
        {isOpen ? "Shrink" : "Expand"}{" "}
        <SVG
          src="/svg/arrow.svg"
          className={`${isOpen ? "-rotate-90 group-hover:-translate-y-1" : "rotate-90  group-hover:translate-y-1"} fill-indigo-500 transition-all`}
        />
      </MobileTap>
    </div>
  );
};

export default ServiceBlock;
