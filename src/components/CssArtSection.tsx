"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React from "react";
import { CalendarCssArt } from "./art/CalendarCssArt";
import { DesktopCssArt } from "./art/DesktopCssArt";

const artContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const CssArtSection = () => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <section
        className="bg-tertiary h-[300vh] relative overflow-clip"
        ref={sectionRef}
      >
        <motion.div
          variants={artContainerVariants}
          initial="hidden"
          animate="visible"
          className="sticky w-full h-screen top-0 flex justify-center"
        >
          <div className="relative h-full w-full max-w-5xl">
            <motion.div
              variants={itemVariants}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              }}
              className="absolute top-1/5 left-10 md:left-1/2 md:-translate-x-1/2"
            >
              <DesktopCssArt />
            </motion.div>
            <motion.div
              variants={itemVariants}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 150]),
              }}
              className="absolute top-3/7 right-0"
            >
              <CalendarCssArt>
                <Image
                  src="/images/heroMobile.png"
                  alt="eversports logo"
                  fill
                  className="object-cover object-[0_2%]"
                />
              </CalendarCssArt>
            </motion.div>
            <motion.div
              variants={itemVariants}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 100]),
              }}
              className="absolute top-3/6 left-0"
            >
              <CalendarCssArt>
                <Image
                  src="/images/heroMobile2.png"
                  alt="eversports logo"
                  fill
                  className="object-cover object-[0_5%]"
                />
              </CalendarCssArt>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CssArtSection;
