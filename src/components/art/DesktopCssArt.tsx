import Image from "next/image";

interface Props {
  className?: string;
}

export const DesktopCssArt = ({ className }: Props) => {
  return (
    <div className={`${className} flex justify-center`}>
      <div className="bg-gray-100/30 w-[80vw] h-[600px] rounded-2xl p-5 pb-15 overflow-hidden">
        <div className="">
          <div className="rounded-2xl w-full bg-gray-100/30 mb-1 h-10 flex gap-1 py-2 px-3">
            <div className="rounded bg-gray-100/20 hover:bg-gray-100/30 transition-colors w-40"/>
            <div className="rounded bg-gray-100/20 hover:bg-gray-100/30 transition-colors w-40"/>
            <div className="rounded bg-gray-100/20 hover:bg-gray-100/30 transition-colors w-40"/>
          </div>
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/images/homepage(1).png"
            alt="eversports logo"
            fill
            className="object-cover object-[0_0] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
