"use client";
import { projectsData } from "@/data";
import Laptop from "./Laptop";
import TextGradient from "./TextGradient";
import SVG from "react-inlinesvg";
import MobileTap from "./MobileTap";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

const Carousel = () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  const [ref, { width }] = useMeasure();
  const direction = count > previous! ? 1 : -1;

  return (
    <div className="flex flex-1 flex-col justify-between ">
      {/* PROJECT PRESENTATION */}
      <div
        ref={ref}
        className="relative flex flex-1 items-center justify-center overflow-hidden"
      >
        <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={count}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
            className="absolute flex w-full flex-col items-center justify-center gap-6 px-10 md:flex-row md:items-start md:gap-2 "
          >
            <div className="xs:hidden block">
              <Laptop src={projectsData[count % 4].img} width={300} />
            </div>
            <div className="xs:block hidden sm:hidden">
              <Laptop src={projectsData[count % 4].img} width={400} />
            </div>
            <div className="hidden sm:block lg:hidden">
              <Laptop src={projectsData[count % 4].img} width={500} />
            </div>
            <div className="hidden lg:block xl:hidden">
              <Laptop src={projectsData[count % 4].img} width={600} />
            </div>
            <div className="hidden xl:block 2xl:hidden">
              <Laptop src={projectsData[count % 4].img} width={700} />
            </div>
            <div className="hidden 2xl:block">
              <Laptop src={projectsData[count % 4].img} width={800} />
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                {/* TITLE */}
                <div className="text-2xl font-bold">
                  {projectsData[count % 4].title}
                </div>

                {/* DESC */}
                <div className="w-full max-w-lg font-extralight">
                  <TextGradient color="from-indigo-500 to-purple-500">
                    {"<> "}
                  </TextGradient>
                  {projectsData[count % 4].shortDesc}
                  <TextGradient color="from-indigo-500 to-purple-500">
                    {" </>"}
                  </TextGradient>
                </div>
              </div>
              <div className="flex w-fit cursor-pointer items-center gap-1 self-end text-xs group">
                Read More{" "}
                <SVG
                  src="/svg/arrow.svg"
                  className="h-5 w-5 fill-indigo-500 group-hover:translate-x-1 transition-all"
                  loader={<div className="h-5 w-5" />}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* CAROUSEL NAVIGATION */}
      <div className="flex items-center justify-center gap-5">
        <MobileTap
          onClick={() => setCount((prev) => prev - 1)}
          className="group cursor-pointer rounded-full border border-indigo-500 p-2 transition-colors hover:bg-indigo-500"
        >
          <SVG
            src="/svg/arrow.svg"
            loader={<div className="h-5 w-5" />}
            className="h-5 w-5 rotate-180 fill-indigo-500 transition-colors group-hover:fill-[#1C1F23]"
          />
        </MobileTap>
        <MobileTap
          onClick={() => setCount((prev) => prev + 1)}
          className="group cursor-pointer rounded-full border border-indigo-500 p-2 transition-colors hover:bg-indigo-500"
        >
          <SVG
            src="/svg/arrow.svg"
            loader={<div className="h-5 w-5" />}
            className="h-5 w-5 fill-indigo-500 transition-colors group-hover:fill-[#1C1F23]"
          />
        </MobileTap>
      </div>
    </div>
  );
};
//set the animation direction to whatever the direction is and multiply by the width of conatiner
let variants = {
  enter: ({ direction, width }: { direction: number; width: number }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }: { direction: number; width: number }) => ({
    x: direction * -width,
  }),
};

//track the previous state by checking if state has changed
//and if so, updatin the array
function usePrevious(state: number) {
  let [tuple, setTuple] = useState([null, state]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}

export default Carousel;
