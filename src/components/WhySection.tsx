"use client";

import { motion } from "motion/react";
import FlipLink from "./animation/Flip";

const WhySection = () => {
  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const float = {
    show: {
      y: [-5, 5],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="relative bg-white h-screen overflow-hidden flex justify-center items-center gap-10">
        <motion.div className="absolute top-[5%] left-1/2 -translate-x-[50%] h-full z-10 ">
          <h1 className="text-6xl flex items-center gap-3">
            Why <FlipLink>Eversports</FlipLink>?
          </h1>
        </motion.div>
        <div className="min-h-[500px] max-h-[550px] md:w-[750px] grid">
          <motion.div
            variants={stagger}
            animate="show"
            className="relative grid gap-4 text-2xl mx-10 
      [&>*]:flex 
      [&>*]:justify-center 
      [&>*]:items-center 
      [&>*]:bg-secondary 
      [&>*]:text-white 
      [&>*]:drop-shadow-2xl/30 
      [&>*]:p-10 
      [&>*]:rounded-2xl 
      md:[&>*]:absolute"
          >
            <motion.div
              variants={float}
              className="md:w-70 md:h-80 md:top-0 md:left-0"
            >
              <div>
                Simplify and streamline your{" "}
                <span className="inline text-tertiary">admin</span>. Clear the
                clutter, find efficiency and embrace success.
              </div>
            </motion.div>
            <motion.div
              variants={float}
              className="md:w-100 md:h-70 md:top-[42%] md:-translate-y-1/2 md:right-0"
            >
              <div>
                We are your{" "}
                <span className="inline text-tertiary">partner</span> for the
                ups and downs of living your passion, providing award-winning
                customer support and feeding you with exclusive content.
              </div>
            </motion.div>
            <motion.div
              variants={float}
              className="md:w-100 md:h-40 md:bottom-0 md:left-1/2 md:-translate-x-1/2"
            >
              <div>
                We help you to strengthen, grow and win the hearts of your
                <span className="inline text-tertiary"> community</span>.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhySection;
