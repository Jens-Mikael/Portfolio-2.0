"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const elementIds = ["home", "portfolio", "about", "services", "contact"];

const NavbarNav = () => {
  const pathname = usePathname();
  console.log()
  const [elementInView, setElementInView] = useState("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      elementIds.map((id) => {
        if (isInViewport(id)) return setElementInView(id);
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10 font-light">
      <Link
        href="/#home"
        className={`${elementInView !== "home" && "opacity-60"} transition-opacity `}
      >
        Home
      </Link>
      <Link
        href="/#portfolio"
        className={`${!pathname.includes("portfolio") && elementInView !== "portfolio" && "opacity-60"} transition-opacity`}
      >
        Portfolio
      </Link>
      <Link
        href="/#about"
        className={`${pathname !== "/about" && elementInView !== "about" && "opacity-60"} transition-opacity`}
      >
        About
      </Link>
      <Link
        href="/#services"
        className={`${elementInView !== "services" && "opacity-60"} transition-opacity`}
      >
        Services
      </Link>
      <Link
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
        ${(pathname.includes("portfolio") || elementInView === "portfolio") && "w-14 translate-x-[79px]"} 
        ${(pathname === "/about" || elementInView === "about") && "w-10 translate-x-[173px]"} 
        ${elementInView === "services" && "w-[58px] translate-x-[252px]"} 
        ${elementInView === "contact" && "w-14 translate-x-[347px]"}`}
      />

      {/* SIDEBAR NAV */}
      <div
        className={`absolute left-3 w-1 rounded-full bg-indigo-600 transition-all md:hidden
        ${elementInView === "home" && " h-4 translate-y-1"} 
        ${(pathname === "/portfolio" || elementInView === "portfolio") && "h-4 translate-y-[39px]"} 
        ${(pathname === "/about" || elementInView === "about") && "h-4 translate-y-[76px]"} 
        ${elementInView === "services" && "h-4 translate-y-[112px]"} 
        ${elementInView === "contact" && "h-4 translate-y-[148px]"}`}
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
