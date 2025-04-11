import Image from "next/image";

interface Props {
  className?: string;
}

export const DesktopCssArt = ({className}: Props) => {
  return (
    <div
      className={`${className} relative border-t-22 bg-gray-100 border-gray-100 w-full h-100 rounded-tl-2xl rounded-tr-2xl`}
    >
      <div className="flex pl-5 gap-2">
        <div className="rounded-full bg-gray-200 w-5 h-5"></div>
        <div className="rounded-full bg-gray-200 w-5 h-5"></div>
        <div className="rounded-full bg-gray-200 w-5 h-5"></div>
      </div>
      <div className="relative border-20 bg-gray-100 border-gray-100 w-full h-full rounded-br-2xl rounded-bl-2xl">
        <Image
          src="/images/homepage(1).png"
          alt="eversports logo"
          fill
          className="object-cover object-[0_5%] rounded-2xl"
        />
      </div>
    </div>
  );
};
