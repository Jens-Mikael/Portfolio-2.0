"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProjectCard({
  title,
  description,
  github,
  link,
  src,
  tools,
}: {
  title: string;
  description: string;
  github: string;
  link?: string;
  src: string;
  tools: string[];
}) {
  return (
    <CardContainer className="inter-var h-full">
      <CardBody className="group/card relative flex h-full w-auto max-w-xl flex-col rounded-xl border border-black/[0.1] bg-gray-50 p-6 transition-all dark:border-white/[0.2] dark:bg-[#16151D] dark:hover:shadow-2xl dark:hover:shadow-indigo-700/[0.4] ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {description}{" "}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={src}
            height="1000"
            width="1000"
            className=" w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-7 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <CardItem
              key={tool}
              translateZ={50}
              target="__blank"
              className="rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500"
            >
              {tool}
            </CardItem>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <CardItem
            translateZ={50}
            as={Link}
            href={github || ""}
            target="__blank"
            className="flex items-center gap-1 px-4 py-2 text-xs font-normal dark:text-white"
          >
            Source Code{" "}
            <IoIosArrowRoundForward className="h-6 w-6 fill-indigo-500" />
          </CardItem>
          {link && (
            <CardItem
              translateZ={40}
              as={Link}
              href={link || ""}
              target="__blank"
              className="flex items-center gap-1 px-4 py-2 text-xs font-normal dark:text-white"
            >
              View Site{" "}
              <IoIosArrowRoundForward className="h-6 w-6 fill-indigo-500" />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
