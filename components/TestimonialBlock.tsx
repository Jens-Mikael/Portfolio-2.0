import Image, { StaticImageData } from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialBlock({
  testimonial,
}: {
  testimonial: {
    quote: string;
    name: string;
    title: string;
    pfpSrc: StaticImageData;
  };
}) {
  return (
    <div className="z-10 flex flex-col gap-10 rounded-2xl bg-[#090325] p-5 sm:p-10">
      <FaQuoteLeft className="h-[40px] w-[40px]" />
      <div className="text-lg font-medium">{testimonial.quote}</div>
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1 text-lg font-bold">
            <span className="text-sky-500">@</span> {testimonial.name}
          </div>
          <div className="text-xs italic text-white/70">
            {testimonial.title}{" "}
          </div>
        </div>
        <div className="relative aspect-square min-h-16 min-w-16 overflow-hidden rounded-full">
          <Image src={testimonial.pfpSrc} fill alt="pfp" />
        </div>
      </div>
    </div>
  );
}
