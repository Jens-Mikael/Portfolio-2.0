"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SVG from "react-inlinesvg";
import MobileTap from "./MobileTap";
import Image from "next/image";
import NavbarNav from "./NavbarNav";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {/* HAM BUTTON */}
      <MobileTap onClick={() => setSidebarOpen(true)} className="md:hidden">
        <SVG src="/svg/menu.svg" className="h-6 w-6 fill-white" />
      </MobileTap>

      {/* SIDEBAR */}
      <div
        className={` fixed inset-0 right-0 z-20 flex transition duration-500 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div onClick={() => setSidebarOpen(false)} className="flex-1" />
        {/* content */}
        <div className="flex h-full w-[110px] flex-col gap-5 overflow-y-scroll border-l border-white/20 bg-[#16151D] shadow-xl p-6 relative">
          <NavbarNav />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
