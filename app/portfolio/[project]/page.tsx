"use client";
import Footer from "@/components/Footer";
import Laptop from "@/components/Laptop";
import TextGradient from "@/components/TextGradient";
import { projectsData } from "@/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import SVG from "react-inlinesvg";

const ProjectPage = () => {
  const params = useParams();
  const project = Number(params.project);
  return (
    <>
      <div className="flex min-h-screen flex-col gap-10 px-10 py-20 md:flex-row dark:bg-[#16151D]">
        <div className="flex flex-col gap-10">
          <div className="text-3xl font-bold">
            My{" "}
            <TextGradient color="from-indigo-500 to-purple-500">
              Portfolio
            </TextGradient>
          </div>
          <div className="flex ">
            <div className="xs:hidden block">
              <Laptop src={projectsData[project].img} width={300} />
            </div>
            <div className="xs:block hidden sm:hidden">
              <Laptop src={projectsData[project].img} width={400} />
            </div>
            <div className="hidden sm:block lg:hidden">
              <Laptop src={projectsData[project].img} width={500} />
            </div>
            <div className="hidden lg:block xl:hidden">
              <Laptop src={projectsData[project].img} width={600} />
            </div>
            <div className="hidden xl:block 2xl:hidden">
              <Laptop src={projectsData[project].img} width={700} />
            </div>
            <div className="hidden 2xl:block">
              <Laptop src={projectsData[project].img} width={800} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <div className="text-2xl font-bold">
            {projectsData[project].title}
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div className="font-extralight">
              <TextGradient color="from-indigo-500 to-purple-500">
                {"<> "}
              </TextGradient>
              {projectsData[project].shortDesc}
              <br />
              <br />
              {projectsData[project].longDesc}
              <TextGradient color="from-indigo-500 to-purple-500">
                {" </>"}
              </TextGradient>
            </div>
            <div className="flex gap-2">
              {projectsData[project].tools.map((tool) => (
                <div className="rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 self-end">
            <Link
              href={``}
              className="group flex w-fit cursor-pointer items-center gap-1 self-end text-xs"
            >
              Source Code{" "}
              <SVG
                src="/svg/arrow.svg"
                className="h-5 w-5 fill-indigo-500 transition-all group-hover:translate-x-1"
                loader={<div className="h-5 w-5" />}
              />
            </Link>
            {projectsData[project].site && (
              <Link
                href={projectsData[project].site as string}
                className="group flex w-fit cursor-pointer items-center gap-1 self-end text-xs"
              >
                View Site{" "}
                <SVG
                  src="/svg/arrow.svg"
                  className="h-5 w-5 fill-indigo-500 transition-all group-hover:translate-x-1"
                  loader={<div className="h-5 w-5" />}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
