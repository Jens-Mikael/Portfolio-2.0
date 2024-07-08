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
        <SVG
          src="/svg/menu.svg"
          className="h-6 w-6 fill-white"
          loader={<div className="h-6 w-6" />}
        />
      </MobileTap>

      {/* SIDEBAR */}
      <div
        className={` fixed inset-y-0 right-0 z-30 flex transition duration-500 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* content */}
        <div className="relative flex h-full w-[150px] flex-col gap-5 overflow-y-scroll border-l border-white/20 bg-[#020817] p-6 shadow-xl">
          <NavbarNav setIsSidebarOpen={setSidebarOpen} />
        </div>
      </div>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 left-0 top-0 transition-all md:hidden ${sidebarOpen ? "z-20 backdrop-blur-md lg:-z-20" : "-z-20 backdrop-blur-none"}`}
      />
    </>
  );
};

export default Sidebar;
