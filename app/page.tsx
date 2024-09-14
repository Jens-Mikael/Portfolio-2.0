import Image from "next/image";
import SVG from "react-inlinesvg";
import TextGradient from "../components/TextGradient";
import {
  CVData,
  aboutData,
  projectsData_2,
  servicesData,
  skillsData,
  testimonialsData,
} from "@/data";
import ServiceBlock from "@/components/ServiceBlock";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import GradientButton from "@/components/GradientButton";
import Starfield from "@/components/StarBg";
import ContactForm from "@/components/ContactForm";
import TestimonialBlock from "@/components/TestimonialBlock";

const Home = () => (
  <div className="min-h-screen">
    {/* INTRO PAGE */}
    <div
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#16151D] px-7 text-center text-white"
    >
      {/* BG ICONS */}
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
      <div className="absolute bottom-[20%] right-[4%] flex -rotate-45 flex-col gap-1">
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
            src="/images/pfp.jpg"
            height={120}
            width={120}
            className=" mb-5 rounded-full"
          />
        </div>
        <div className="text-3xl font-bold">
          Hi, I&apos;m
          <TextGradient color="from-indigo-500 to-purple-500">
            {" <Jens-Mikael Stjernberg />"}
          </TextGradient>
        </div>
        <div className="w-full max-w-md font-extralight">
          <TextGradient color="from-indigo-500 to-purple-500">
            {"<> "}
          </TextGradient>{" "}
          {aboutData.shortDesc}
          <TextGradient color="from-indigo-500 to-purple-500">
            {" </>"}
          </TextGradient>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {skillsData.map((skill, i) => (
            <div
              key={i}
              className="flex items-center rounded-full bg-white/10 p-2 shadow-2xl "
            >
              <Image
                alt="sk"
                height={20}
                width={20}
                className="min-h-5 min-w-5"
                src={`/skills/${skill.src}`}
              />
            </div>
          ))}
        </div>
        <Link href="#contact">
          <GradientButton>Get In Touch</GradientButton>
        </Link>
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
    <div
      id="portfolio"
      className="flex h-full flex-col gap-10 bg-[#110e1c] p-5 sm:p-10 lg:p-20"
    >
      <div className="flex flex-col gap-3 ">
        <div className="text-xs">Checkout My Portfolio</div>
        <div className="text-3xl font-bold">
          My{" "}
          <TextGradient color="from-indigo-500 to-purple-500">
            Amazing Work
          </TextGradient>
        </div>
      </div>
      <div className="grid w-fit gap-14 self-center lg:grid-cols-2">
        {projectsData_2.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            src={project.src}
            github={project.github}
            link={project.link}
            tools={project.tools}
          />
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center justify-center p-2 text-xs font-light text-indigo-500">
        Testimonials
        <SVG
          src="/svg/arrow.svg"
          className="h-5 w-5 rotate-90 fill-indigo-500"
          loader={<div className="h-5 w-5" />}
        />
      </div>
    </div>

    {/* TESTIMONIALS */}
    <div
      id="testimonials"
      className="flex h-full flex-col gap-10  bg-[#020817]"
    >
      <div className="flex flex-col gap-10 p-5 sm:p-10 md:p-20">
        <div className="flex flex-col gap-3">
          <div className="text-xs">What Others Say</div>
          <div className="text-3xl font-bold">
            <TextGradient color="from-indigo-500 to-purple-500">
              Testimonials
            </TextGradient>
          </div>
        </div>

        <div className="relative grid w-full gap-10  overflow-hidden rounded-2xl bg-[#100d25] p-5 md:grid-cols-2 md:p-10 xl:grid-cols-3">
          {testimonialsData.map((obj, i) => (
            <TestimonialBlock key={i} testimonial={obj} />
          ))}
          <div className="absolute left-0 top-0 z-0 h-[250px] w-full rounded-b-[30px] bg-[#151030]" />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center p-2 text-xs font-light text-indigo-500">
        Who am I
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
    <div id="about" className="flex min-h-screen flex-col bg-[#110e1c]">
      <div className="flex flex-col items-center gap-20 p-5 sm:p-10 md:p-20">
        <div className="flex flex-col-reverse gap-10 lg:flex-row">
          <div className=" block aspect-square w-full max-w-[300px] self-center">
            <Image
              alt="gtr"
              src="/images/guitar.jpg"
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
                Jens-Mikael{" "}
                <TextGradient color="from-indigo-500 to-purple-500">
                  Stjernberg
                </TextGradient>
              </div>
            </div>
            {/* DESC */}
            <div className="max-w-2xl font-extralight">
              <TextGradient color="from-indigo-500 to-purple-500">
                {"<> "}
              </TextGradient>
              {aboutData.longDesc1}
              <br />
              <br />
              {aboutData.longDesc2}
              <TextGradient color="from-indigo-500 to-purple-500">
                {" </>"}
              </TextGradient>
            </div>
          </div>
        </div>
        {/* __________*/}
        {/* CV RESUME */}
        {/* _________ */}
        <div className="flex w-full flex-col gap-10">
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
                {CVData.education.map((obj, i) => (
                  <CVBlock
                    key={i}
                    title={obj.title}
                    date={obj.date}
                    desc={obj.desc}
                    isLast={CVData.education.length - 1 === i}
                  />
                ))}
              </div>
            </div>
            {/* EXPERIENCE */}
            <div className="flex flex-1 flex-col gap-10">
              <div className="text-2xl font-bold">Experience</div>
              <div>
                {CVData.experience.map((obj, i) => (
                  <CVBlock
                    key={i}
                    title={obj.title}
                    date={obj.date}
                    desc={obj.desc}
                    isLast={CVData.experience.length - 1 === i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link download href="/Jens-Mikael_Stjernberg_CV.pdf" className="group flex w-fit items-center gap-2 self-end rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm transition-transform hover:scale-105">
          PDF{" "}
          <Image
            src="/svg/arrow.svg"
            alt="ar"
            height={20}
            width={20}
            className="rotate-90 transition-transform group-hover:translate-y-1"
          />
        </Link>
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
    <div id="services" className="flex flex-col bg-[#050816]">
      <div className="flex flex-1 flex-col gap-10 p-5 sm:p-10 md:p-20 lg:gap-20">
        <div className="flex flex-col gap-3">
          <div className="text-xs">Services I Offer to my Clients</div>
          <div className="text-3xl font-bold">
            My Best{" "}
            <TextGradient color="from-indigo-500 to-purple-500">
              Services
            </TextGradient>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {servicesData.map((service, key) => (
            <ServiceBlock
              title={service.title}
              desc={service.desc}
              category={service.category}
              key={key}
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
    <div id="contact" className="flex flex-col gap-16">
      <Starfield />
      <div className="flex flex-1 flex-col gap-16 p-5 sm:p-10 md:p-20 lg:flex-row">
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
              I am open to any sort of freelance job offers. Since I am still in high school, my free time is limited, so I only accept freelancing opportunities where I can grow and provide quality work.
              <br />
              <br />
              Do you have an exciting project you need help with? Send me an email or contact me via WhatsApp! I&apos;d be happy to hear from you!
              <TextGradient color="from-indigo-500 to-purple-500">
                {" </>"}
              </TextGradient>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center lg:justify-center">
          <div className="w-full lg:max-w-2xl rounded-xl bg-[#100d25] p-5 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    {/* FOOTER */}
    <Footer />
  </div>
);
//flex cursor-pointer items-center gap-1 break-words hover:underline
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
    <div className="hidden min-w-28 text-nowrap pt-2.5 text-end font-bold text-white/80 sm:block">
      {date}
    </div>
    <div className="flex flex-col items-center">
      <div className="h-5 border-l-[1.5px] border-white/40" />
      <div className="min-h-3 min-w-3 rounded-full bg-indigo-500" />
      <div className="h-full border-l-[1.5px] border-white/40" />
    </div>
    <div className={`${!isLast && "mb-14"} flex w-full flex-col gap-7`}>
      <div className="flex flex-col gap-3 rounded-xl border border-white/20 bg-white/5 p-5">
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm font-light">{desc}</div>
        <div className="block font-bold text-white/80 sm:hidden">{date}</div>
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
