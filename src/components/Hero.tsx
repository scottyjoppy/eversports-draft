"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const Hero = () => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const display = useTransform(scrollYProgress, [0, 1], ["flex", "none"]);

  return (
    <>
      <section className="relative" ref={sectionRef}>
        <div className="sticky overflow-hidden top-0">
          <motion.video
            src="https://www.eversportsmanager.com/wp-content/uploads/2024/10/ennlfrvideo.mp4"
            className="absolute top-0 left-0 h-full object-cover w-full bg-no-repeat"
            style={{
              display,
              y: useTransform(scrollYProgress, [0, 1], [0, 100]),
            }}
            loop
            muted
            autoPlay={true}
            playsInline
          />
          <div className="h-screen z-0 relative max-w-7xl w-full flex justify-center">
            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display,
                y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              }}
              className="absolute top-1/3 flex flex-col gap-10 p-10"
            >
              <motion.h1
                variants={itemVariants}
                className="text-6xl text-white"
              >
                Join the movement network
              </motion.h1>
              <motion.p variants={itemVariants} className="text-white">
                More than a management software...
              </motion.p>
              <motion.div variants={itemVariants} className="w-fit">
                <Link href="https://www.eversportsmanager.com/demo/">
                  <Button className="uppercase py-3">
                    Book Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
