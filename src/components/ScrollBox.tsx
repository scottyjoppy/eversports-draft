"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

const SECTION_HEIGHT = 1500;
const Hero = () => {
  return (
    <ReactLenis root>
      <div
        className="w-full relative"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      >
        <CenterBox />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-background/0 to-background" />
      </div>
    </ReactLenis>
  );
};

const CenterBox = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["200%", "100%"]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage: "url('/images/homepage(2).png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
