"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const elementIds = [
  "home",
  "portfolio",
  "testimonials",
  "about",
  "services",
  "contact",
];

const NavbarNav = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen?: (value: boolean) => void;
}) => {
  const [elementInView, setElementInView] = useState("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      elementIds.map((id) => {
        if (isInViewport(id)) return setElementInView(id);
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-3 font-light md:flex-row md:gap-10">
      <Link
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
        }}
        href="/#home"
        className={`${elementInView !== "home" && "opacity-60"} transition-opacity `}
      >
        Home
      </Link>
      <Link
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
        }}
        href="/#portfolio"
        className={`${elementInView !== "portfolio" && "opacity-60"} transition-opacity`}
      >
        Portfolio
      </Link>
      <Link
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
        }}
        href="/#testimonials"
        className={`${elementInView !== "testimonials" && "opacity-60"} transition-opacity`}
      >
        Testimonials
      </Link>
      <Link
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
        }}
        href="/#about"
        className={`${elementInView !== "about" && "opacity-60"} transition-opacity`}
      >
        About
      </Link>
      <Link
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
        }}
        href="/#services"
        className={`${elementInView !== "services" && "opacity-60"} transition-opacity`}
      >
        Services
      </Link>
      <Link
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
        }}
        href="/#contact"
        className={`${elementInView !== "contact" && "opacity-60"} transition-opacity`}
      >
        Contact
      </Link>
      {/* SLIDER */}
      {/* NORMAL NAV */}
      <div
        className={`absolute -bottom-2 hidden h-1 rounded-full bg-indigo-600 transition-all md:block 
        ${elementInView === "home" && " w-10"} 
        ${elementInView === "portfolio" && "w-14 translate-x-[79px]"} 
        ${elementInView === "testimonials" && "w-20 translate-x-[175px]"} 
        ${elementInView === "about" && "w-10 translate-x-[294px]"} 
        ${elementInView === "services" && "w-[58px] translate-x-[374px]"} 
        ${elementInView === "contact" && "w-14 translate-x-[468px]"}`}
      />

      {/* SIDEBAR NAV */}
      <div
        className={`absolute left-3 w-1 rounded-full bg-indigo-600 transition-all md:hidden
        ${elementInView === "home" && " h-4 translate-y-1"} 
        ${elementInView === "portfolio" && "h-4 translate-y-[39px]"} 
        ${elementInView === "testimonials" && "h-4 translate-y-[75px]"} 

        ${elementInView === "about" && "h-4 translate-y-[110px]"} 
        ${elementInView === "services" && "h-4 translate-y-[148px]"} 
        ${elementInView === "contact" && "h-4 translate-y-[183px]"}`}
      ></div>
    </div>
  );
};

function isInViewport(elemntId: string) {
  const element = document.getElementById(elemntId);
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) / 2 &&
    rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) / 2
  );
}

export default NavbarNav;
