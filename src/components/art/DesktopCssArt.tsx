import Image from "next/image";

interface Props {
  className?: string;
}

export const DesktopCssArt = ({ className }: Props) => {
  return (
    <div className={`${className} flex justify-center`}>
      <div
        className="bg-black/10 w-[80vw] rounded-2xl p-5 pb-15 overflow-hidden"
        style={{
          height: "clamp(400px, 50vw, 600px)",
        }}
      >
        <div className="rounded-md w-full bg-black/10 mb-1 h-10 flex justify-between items-center py-2 px-3">
          <div className="w-full h-full flex gap-1">
            <div className="rounded bg-black/10 hover:bg-black/20 transition-colors w-40" />
            <div className="hidden md:block rounded bg-black/10 hover:bg-black/20 transition-colors w-40" />
            <div className="hidden sm:block rounded bg-black/10 hover:bg-black/20 transition-colors w-40" />
          </div>
          <div className="bg-black/10 hover:bg-black/20 w-5 h-5 rounded-full transition-colors" />
        </div>
        <div className="relative w-full h-full rounded-b-2xl rounded-t-md overflow-hidden">
          <Image
            src="/images/homepage(1).png"
            alt="eversports logo"
            fill
            className="object-cover object-[0_0]"
          />
        </div>
      </div>
    </div>
  );
};
