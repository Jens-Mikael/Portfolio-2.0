import Image from "next/image";
import NavbarNav from "./NavbarNav";
import TextGradient from "./TextGradient";
import Link from "next/link";
import MobileTap from "./MobileTap";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-20 ">
      <div className="realtive flex items-center justify-center bg-black/40">
        <div className="absolute hidden text-sm md:block">
          <NavbarNav />
        </div>
        <div className="flex h-full w-full justify-between px-5 py-4 sm:px-7 md:px-12 lg:px-16 xl:px-24">
          {/* LOGO */}
          <div className="font-bold">
            <span className="inline md:hidden lg:inline">Jens-Mikael</span>
            <span className="hidden md:inline lg:hidden">J-M</span>

            <TextGradient color="from-indigo-500 to-purple-500">
              {" "}
              Stjernberg
            </TextGradient>
          </div>

          {/* MEDIA AND HAM */}
          <div className="flex items-center gap-5">
            <Link
              href={
                "https://github.com/Jens-Mikaelhttps://www.linkedin.com/in/jens-mikael-stjernberg-072938278/"
              }
            >
              <Image alt="li" src="/svg/linkedin.svg" height={20} width={20} />
            </Link>
            <Link href={"https://github.com/Jens-Mikael"}>
              <Image alt="li" src="/svg/github.svg" height={20} width={20} />
            </Link>
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="h-8 bg-gradient-to-b from-black/40 to-black/0 " />
    </div>
  );
};
export default Navbar;
