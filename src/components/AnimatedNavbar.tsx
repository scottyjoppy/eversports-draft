import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";

export const AnimatedNavbar = ({
  onTabChange,
}: {
  onTabChange: (index: number) => void;
}) => {
  return <SlideTabs onTabChange={onTabChange}/>;
};

const SlideTabs = ({ onTabChange }: { onTabChange: (index: number) => void }) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleTabSelect = (index: number) => {
    onTabChange(index)
};

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-2xl bg-white p-1"
    >
      <Tab setPosition={setPosition} index={0} onSelect={handleTabSelect}>
        Management
      </Tab>
      <Tab setPosition={setPosition} index={1} onSelect={handleTabSelect}>
        Finances
      </Tab>
      <Tab setPosition={setPosition} index={2} onSelect={handleTabSelect}>
        Reporting
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  index,
  onSelect,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  index: number;
  onSelect: (index: number) => void;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => {
        onSelect(index);
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-black mix-blend-hard-light md:px-5 md:py-3 md:text-2xl"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-[80%] rounded-2xl top-1/2 -translate-y-1/2 bg-bright"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
