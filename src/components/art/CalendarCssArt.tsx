interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CalendarCssArt = ({ className, children }: Props) => {
  return (
    <div
      className={`${className} drop-shadow-2xl 
        w-[200px] sm:w-[220px] md:w-[253px] lg:w-[286px]
        h-[187px] sm:h-[220px] md:h-[253px] lg:h-[286px]
        rounded-2xl m-5 flex flex-col items-center gap-5`}
    >
      <div className="relative w-full h-full rounded-2xl">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
