import { aboutData } from "@/data";
import Link from "next/link";
import SVG from "react-inlinesvg";
import { BiBriefcase } from "react-icons/bi";

const Footer = () => (
  <div className="xs:p-10 xs:pb-7 xs:gap-7 flex flex-col items-center justify-center gap-5 border-t border-white/50 bg-gradient-to-r from-violet-600 via-indigo-500 to-indigo-600 p-5">
    <div className="xs:gap-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
      <div className="flex flex-1 flex-col gap-2">
        <div className="text-sm font-bold">ABOUT ME</div>
        <div className="text-xs">{aboutData.shortDesc}</div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="text-sm font-bold">SERVICES</div>
        <div className="flex flex-col gap-1 text-xs">
          <div>Frontend Development</div>
          <div>Backend Development</div>
          <div>Design Replication</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="text-sm font-bold">NAVIGATION</div>
        <div className="flex w-fit flex-col gap-1 text-xs">
          <Link className="hover:underline" href="#home">
            Home
          </Link>
          <Link className="hover:underline" href="#portfolio">
            Portfolio
          </Link>
          <Link className="hover:underline" href="#testimonials">
            Testimonials
          </Link>
          <Link className="hover:underline" href="#about">
            About
          </Link>
          <Link className="hover:underline" href="#services">
            Services
          </Link>
          <Link className="hover:underline" href="#contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="text-sm font-bold">CONTACT</div>
        <div className="flex flex-col gap-1 text-xs">
          <Link
            href="https://www.google.com/maps/place/pori"
            className="flex w-fit cursor-pointer items-center gap-1 hover:underline"
          >
            <SVG
              src="/svg/location.svg"
              className="h-4 w-4 fill-white"
              loader={<div className="h-4 w-4" />}
            />
            Pori, Finland
          </Link>
          <Link
            href="mailto:jensmikael.stjernberg@gmail.com"
            className="flex cursor-pointer items-center gap-1 break-words hover:underline"
          >
            <SVG
              className="h-4 min-h-4 w-4 min-w-4 fill-white"
              src="/svg/mail.svg"
              loader={<div className="h-4 min-h-4 w-4 min-w-4" />}
            />
            <div className="w-full break-words">
              jensmikael.stjernberg@gmail.com
            </div>
          </Link>
          <Link
            href="tel:+358407676993"
            className="flex w-fit cursor-pointer items-center gap-1 hover:underline"
          >
            <SVG
              className="h-4 w-4 fill-white"
              src="/svg/phone.svg"
              loader={<div className="h-4 w-4" />}
            />
            +358 40 7676 993
          </Link>
          <Link
            href="https://www.finder.fi/"
            className="flex w-fit cursor-pointer items-center gap-1 hover:underline"
          >
            <BiBriefcase />
            Stjernberg Web and IT-services
          </Link>
        </div>
      </div>
    </div>
    <div className="w-full border-t border-white/50" />
    <div className="text-center text-xs font-medium text-white/70">
      Built with Passion & Commitment in Next.js © Copyright 2024. All Rights
      Reserved{" "}
    </div>
  </div>
);

export default Footer;
