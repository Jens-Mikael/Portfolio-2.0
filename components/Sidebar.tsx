"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SVG from "react-inlinesvg";
import MobileTap from "./MobileTap";
import Image from "next/image";
import NavbarNav from "./NavbarNav";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  return (
    <>
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
        className={`fixed inset-0 left-0 top-0 transition-all md:hidden ${sidebarOpen ? "z-20 backdrop-blur-md lg:-z-50" : "-z-10  backdrop-blur-none"}`}
      />
    </>
  );
};

export default Sidebar;
