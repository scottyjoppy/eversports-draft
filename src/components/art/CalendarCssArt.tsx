import Image from "next/image";

interface Props {
  className?: string;
}

export const CalendarCssArt = ({ className }: Props) => {
  return (
    <div
      className={`${className} absolute left-5/8 top-4/7 border-20 bg-primary-100 border-primary-100 w-[300px] h-[300px] rounded-2xl m-5 flex flex-col items-center gap-5`}
    >
      <div className="relative w-full h-full rounded-2xl">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="/images/homepage(2).png"
            alt="eversports logo"
            fill
            className="object-cover object-[0_5%] scale-141"
          />
        </div>
      </div>
    </div>
  );
};
