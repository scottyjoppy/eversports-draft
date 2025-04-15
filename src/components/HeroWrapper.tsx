"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";

const HeroWrapper = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -290]);

  return (
    <>
      <motion.div
        style={{ y: translateY }}
        className="sticky z-0 top-0 h-[200vh] "
      >
        <Hero />
      </motion.div>
    </>
  );
};

export default HeroWrapper;
