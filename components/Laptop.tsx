import Image from "next/image";

const Laptop = ({ src, width }: { src: string; width: number }) => {
  const proWidth = width * 0.725;
  return (
    <div
      style={{ width: width }}
      className="relative flex items-center justify-center"
    >
      <Image
        alt="laptop"
        src="/images/laptop-placeholder.webp"
        height={0}
        width={width}
        className="class"
      />
      <div
        className={`absolute flex -translate-y-[2%] items-center justify-center overflow-hidden `}
      >
        <Image
          alt="project"
          src={src}
          width={proWidth}
          height="0"
          sizes="100vw"
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default Laptop;
