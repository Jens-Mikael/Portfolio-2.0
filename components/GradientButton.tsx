import { ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function GradientButton({ children }: { children: ReactNode }) {
  return (
    <button className="relative p-[3px]">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="group relative flex gap-2 rounded-md bg-[#16151D] py-2 pl-6 pr-4 text-white transition duration-200 hover:bg-transparent">
        {children}{" "}
        <IoIosArrowRoundForward className="h-6 w-6 transition-transform group-hover:translate-x-2" />
      </div>
    </button>
  );
}
