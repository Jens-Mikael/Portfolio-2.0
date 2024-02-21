import Image from "next/image";
import SVG from "react-inlinesvg";
import MobileTap from "../components/MobileTap";
import TextGradient from "../components/TextGradient";
import { servicesData, skillsData } from "@/data";
import Carousel from "@/components/Carousel";
import ServiceBlock from "@/components/ServiceBlock";
import Link from "next/link";
const Home = () => (
  <div className="min-h-screen">
    {/* INTRO PAGE */}
    <div
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-7 text-center dark:bg-[#16151D] dark:text-white"
    >
      {/* BG ICONS */}
      {/* <SVG src="/svg/dotted-ball.svg" className="fill-[#00D2BA] h-1/2 w-1/2 absolute top-[-100px] right-[-250px]" /> */}
      <Image
        alt="dotted"
        src="/dotted2.png"
        height={300}
        width={300}
        className="absolute top-20 hidden md:-right-28 md:block lg:-right-12"
      />
      <Image
        alt="dotted"
        src="/dotted2.png"
        height={300}
        width={300}
        className="absolute top-1/2 hidden md:-left-36 md:block lg:-left-28"
      />
      <div className="absolute right-8 top-[15%] h-3 w-3 rotate-12 rounded-[4px] border-[2.5px] border-orange-400 sm:right-20 md:right-36 md:top-[10%] lg:right-1/4" />
      <div className="absolute bottom-24 left-[10%] h-3 w-3 -rotate-12 rounded-[4px] border-[2.5px] border-orange-400 md:left-[20%]" />

      <div className="absolute left-[4%] top-1/3 flex rotate-45 flex-col gap-1 sm:left-[8%]">
        <Green />
      </div>
      <div className="absolute bottom-[15%] right-[4%] flex -rotate-45 flex-col gap-1">
        <Green />
      </div>
      <div className="absolute left-[15%] top-[15%] flex -rotate-12 flex-col gap-1 md:left-[25%]">
        <Purple />
      </div>
      <div className="absolute bottom-[10%] right-[25%] flex rotate-12 flex-col gap-1">
        <Purple />
      </div>
      {/* STARTS HERE */}
      <div className="z-10 flex flex-col items-center gap-6">
        <div className="">
          <Image
            alt="pfp"
            src="/images/pfpp.jpg"
            height={120}
            width={120}
            className=" mb-5 rounded-full"
          />
        </div>
        <div className="text-3xl font-bold">
          Hi, I'm
          <TextGradient color="from-indigo-500 to-purple-500">
            {" wedwedwed< />"}
          </TextGradient>
        </div>
        <div className="w-full max-w-md font-extralight">
          <TextGradient color="from-indigo-500 to-purple-500">
            {"<> "}
          </TextGradient>{" "}
          I'm a software developer who specializes in building the web. I'm
          lookin forward to develop my skills in the field and contributing to
          meaningful projects.
          <TextGradient color="from-indigo-500 to-purple-500">
            {" </>"}
          </TextGradient>
        </div>
        <div className="flex gap-2">
          {skillsData.map((skill) => (
            <div className="flex items-center rounded-full bg-white/10 p-2 shadow-2xl">
              <Image
                alt="sk"
                height={20}
                width={20}
                src={`/skills/${skill.src}`}
                className=""
              />
            </div>
          ))}
        </div>
        <MobileTap className="group flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm transition-transform hover:scale-105">
          Get in Touch{" "}
          <Image
            src="/svg/arrow.svg"
            alt="ar"
            height={20}
            width={20}
            className="transition-transform group-hover:translate-x-2"
          />
        </MobileTap>
      </div>
      {/* BOTTOM NAV */}
      <div className="absolute bottom-3 flex flex-col items-center text-xs font-light text-indigo-500">
        My Projects
        <SVG
          src="/svg/arrow.svg"
          className="h-5 w-5 rotate-90 fill-indigo-500"
          loader={<div className="h-5 w-5" />}
        />
      </div>
    </div>

    {/* PORTFOLIO PAGE */}
    <div id="portfolio" className="flex min-h-screen flex-col bg-[#1C1F23]">
      <div className="flex flex-col gap-3 p-10 md:p-20">
        <div className="text-xs">Checkout My Portfolio</div>
        <div className="text-3xl font-bold">
          My{" "}
          <TextGradient color="from-indigo-500 to-purple-500">
            Amazing Work
          </TextGradient>
        </div>
      </div>
      <Carousel />

      <div className="mt-10 flex flex-col items-center justify-center p-2 text-xs font-light text-indigo-500">
        About Me
        <SVG
          src="/svg/arrow.svg"
          className="h-5 w-5 rotate-90 fill-indigo-500"
          loader={<div className="h-5 w-5" />}
        />
      </div>
    </div>

    {/* ___________ */}
    {/* ABOUT */}
    {/* ___________ */}
    <div id="about" className="flex min-h-screen flex-col bg-[#16151D]">
      <div className="flex flex-col items-center gap-20 p-10 md:p-20">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="hidden h-[300px] w-[300px] md:block">
            <Image
              alt="gtr"
              src="/images/guitarr.png"
              width={0}
              height={0}
              sizes="100vh"
              className="h-auto w-full rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-col gap-10">
            {/* HEADING */}
            <div className="flex flex-col gap-3">
              <div className="text-xs">About me</div>
              <div className="text-3xl font-bold">
                wedwed-wedwed{" "}
                <TextGradient color="from-indigo-500 to-purple-500">
                  wedwed
                </TextGradient>
              </div>
            </div>
            {/* DESC */}
            <div className="max-w-2xl font-extralight">
              <TextGradient color="from-indigo-500 to-purple-500">
                {"<> "}
              </TextGradient>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mauris ligula, porttitor sed ullamcorper ut, varius sed lorem. Nam
              maximus egestas sapien eget scelerisque. Cras id lorem
              pellentesque, malesuada nulla a, consectetur lorem. Sed bibendum
              erat quis dui lacinia accumsan. Fusce sed lectus rhoncus metus
              consectetur tristique. Suspendisse eu leo odio. Donec eget metus
              vitae tortor eleifend accumsan sit amet at elit. Maecenas placerat
              tincidunt nisl vitae gravida. Nulla facilisi.
              <TextGradient color="from-indigo-500 to-purple-500">
                {" </>"}
              </TextGradient>
            </div>
            {/* LEARN MORE */}
            <MobileTap className="group flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm transition-transform hover:scale-105">
              Learn more{" "}
              <Image
                src="/svg/arrow.svg"
                alt="ar"
                height={20}
                width={20}
                className="transition-transform group-hover:translate-x-2"
              />
            </MobileTap>
          </div>
        </div>
        {/* __________*/}
        {/* CV RESUME */}
        {/* _________ */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 self-start">
            <div className="text-xs">My Journey</div>
            <div className="text-3xl font-bold">
              My{" "}
              <TextGradient color="from-indigo-500 to-purple-500">
                CV Resume
              </TextGradient>
            </div>
          </div>
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-10">
            {/* EDUCATION */}
            <div className="flex flex-1 flex-col gap-10">
              <div className="text-2xl font-bold">Education</div>
              <div>
                <CVBlock
                  title="High School - BJSS"
                  date="2023 - Now"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris
          ligula, porttitor sed ullamcorper ut, varius sed lorem"
                />
                <CVBlock
                  isLast
                  title="Primary School - BJSS"
                  date="2023 - Now"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris
          ligula, porttitor sed ullamcorper ut, varius sed lorem"
                />
              </div>
            </div>
            {/* EXPERIENCE */}
            <div className="flex flex-1 flex-col gap-10">
              <div className="text-2xl font-bold">Experience</div>
              <div>
                <CVBlock
                  title="Shop Employee - SOK"
                  date="2023 - Now"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris
          ligula, porttitor sed ullamcorper ut, varius sed lorem"
                />
                <CVBlock
                  isLast
                  title="Shop Employee - SOK"
                  date="2023 - Now"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris
          ligula, porttitor sed ullamcorper ut, varius sed lorem"
                />
              </div>
            </div>
          </div>
        </div>
        <MobileTap className="group flex w-fit items-center gap-2 self-end rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm transition-transform hover:scale-105">
          PDF{" "}
          <Image
            src="/svg/arrow.svg"
            alt="ar"
            height={20}
            width={20}
            className="rotate-90 transition-transform group-hover:translate-y-1"
          />
        </MobileTap>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center p-2 text-xs font-light text-indigo-500">
        My Services
        <SVG
          src="/svg/arrow.svg"
          className="h-5 w-5 rotate-90 fill-indigo-500"
          loader={<div className="h-5 w-5" />}
        />
      </div>
    </div>
    {/* ___________ */}
    {/* SERVICES */}
    {/* ___________ */}
    <div id="services" className="flex min-h-screen flex-col bg-[#1C1F23]">
      <div className="flex flex-1 flex-col gap-10 p-10 md:p-20 lg:gap-20">
        <div className="flex flex-col gap-3">
          <div className="text-xs">Services I Offer to my Clients</div>
          <div className="text-3xl font-bold">
            My Best{" "}
            <TextGradient color="from-indigo-500 to-purple-500">
              Service
            </TextGradient>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {servicesData.map((service) => (
            <ServiceBlock
              title={service.title}
              desc={service.desc}
              category={service.category}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center p-2 text-xs font-light text-indigo-500">
        Contact Me
        <SVG
          src="/svg/arrow.svg"
          className="h-5 w-5 rotate-90 fill-indigo-500"
          loader={<div className="h-5 w-5" />}
        />
      </div>
    </div>

    {/* ___________ */}
    {/* CONTACT */}
    {/* ___________ */}
    <div
      id="contact"
      className="flex min-h-screen flex-col gap-16 bg-[#16151D]"
    >
      <div className="flex flex-1 flex-col gap-16 p-10 md:p-20 lg:flex-row">
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-xs">Get in touch</div>
            <div className="text-3xl font-bold">
              Available for{" "}
              <TextGradient color="from-indigo-500 to-purple-500">
                Freelance Opportunities
              </TextGradient>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="w-full max-w-xl font-extralight">
              <TextGradient color="from-indigo-500 to-purple-500">
                {"<> "}
              </TextGradient>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mauris ligula, porttitor sed ullamcorper ut, varius sed lorem. Nam
              maximus egestas sapien eget scelerisque. Cras id lorem
              pellentesque, malesuada nulla a, consectetur lorem. Sed bibendum
              erat quis dui lacinia accumsan.
              <br />
              <br />
              Have an exiting project you need help with? Send me an email or
              contact me via Whatsapp! I'll be happy to hear from you!
              <TextGradient color="from-indigo-500 to-purple-500">
                {" </>"}
              </TextGradient>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center lg:justify-center">
          <div className="flex flex-col gap-5 text-2xl font-bold">
            <Link
              href="mailto:jensmikael.stjernberg@gmail.com"
              className="flex w-fit cursor-pointer items-center gap-2 transition-all hover:scale-105 hover:underline"
            >
              <SVG
                className="h-10 w-10 fill-indigo-500"
                src="/svg/mail.svg"
                loader={<div className="h-10 w-10" />}
              />
              jensmikael.stjernberg@gmail.com
            </Link>
            <Link
              href="tel:+358407676993"
              className="flex w-fit cursor-pointer items-center gap-2 transition-all hover:scale-105 hover:underline"
            >
              <SVG
                className="h-10 w-10 fill-indigo-500"
                src="/svg/phone.svg"
                loader={<div className="h-10 w-10" />}
              />
              +358 40 7676 993
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="xs:p-10 xs:pb-7 xs:gap-7 flex flex-col items-center justify-center gap-5 border-t border-white/50 bg-gradient-to-r from-violet-600 via-indigo-500 to-indigo-600 p-5">
        <div className="xs:gap-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          <div className="flex flex-1 flex-col gap-2">
            <div className="text-sm font-bold">ABOUT ME</div>
            <div className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mauris ligula, porttitor sed ullamcorper ut, varius sed lorem
            </div>
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
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white/50" />
        <div className="text-xs font-medium text-white/70">
          Built with Passion & Commitment © Copyright 2024. All Rights Reserved{" "}
        </div>
      </div>
    </div>
  </div>
);

const CVBlock = ({
  desc,
  title,
  date,
  isLast,
}: {
  desc: string;
  title: string;
  date: string;
  isLast?: boolean;
}) => (
  <div className="flex gap-5">
    <div>
      <div>
        <div className="whitespace-nowrap  rounded-lg bg-indigo-500 px-6 py-3 text-sm">
          {date}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <div className="h-5 border-l-[1.5px] border-white/40" />
      <div className="min-h-3 min-w-3 rounded-full bg-indigo-500" />
      <div className="h-full border-l-[1.5px] border-white/40" />
    </div>
    <div className={`${!isLast && "mb-14"} flex flex-col gap-7`}>
      <div className="flex flex-col gap-3 rounded-xl border border-white/20 bg-white/5 p-5">
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm font-light">{desc}</div>
      </div>
    </div>
  </div>
);

const Green = () => (
  <>
    <div className="h-1 w-7 rounded-full bg-emerald-400" />
    <div className="ml-3 h-1 w-7 rounded-full bg-emerald-400" />
  </>
);

const Purple = () => (
  <>
    <div className="ml-3 flex gap-1">
      <div className="h-1 w-2 rounded-full bg-purple-600" />
      <div className="h-1 w-8 rounded-full bg-purple-600" />
    </div>
    <div className="flex gap-1">
      <div className="h-1 w-8 rounded-full bg-purple-600" />

      <div className="h-1 w-2 rounded-full bg-purple-600" />
    </div>
  </>
);

export default Home;
