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
      <section className="relative bg-white w-full h-[200vh] overflow-clip ">
        <div className="sticky top-0 translate-y-10 flex justify-center items-center gap-10 h-screen">
          <motion.div className="absolute top-[5%] left-1/2 -translate-x-[50%] h-full">
            <h1 className="text-6xl flex items-center gap-3">
              Why <FlipLink>Eversports</FlipLink>?
            </h1>
          </motion.div>
          <div className="min-h-[500px] max-h-[550px] md:w-[750px] grid absolute top-1/2 -translate-y-[50%]">
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
                className="md:w-70 md:h-80 md:top-0 md:left-0 z-10"
              >
                <div>
                  Simplify and streamline your
                  <span className="inline text-tertiary"> admin</span>. Clear the
                  clutter, find efficiency and embrace success.
                </div>
              </motion.div>
              <motion.div
                variants={float}
                className="md:w-100 md:h-70 md:top-[42%] md:-translate-y-1/2 md:right-0"
              >
                <div className="md:text-right">
                  We are your
                  <span className="inline text-tertiary"> partner</span> for the
                  ups and downs of living your passion, providing award-winning
                  customer support and feeding you with exclusive content.
                </div>
              </motion.div>
              <motion.div
                variants={float}
                className="md:w-100 md:h-40 md:bottom-0 md:left-1/2 md:-translate-x-1/2 z-10"
              >
                <div>
                  We help you to strengthen, grow and win the hearts of your
                  <span className="inline text-tertiary"> community</span>.
                </div>
              </motion.div>
            </motion.div>
          <svg
            width="788"
            height="581"
            viewBox="0 0 788 581"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-1 hidden md:block"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{
                opacity: { duration: 0.2 },
                pathLength: { duration: 2, ease: "easeInOut" },
              }}
              d="M118 16C56.8334 114.5 -43.5 361 61 445.5C185.296 546.007 180.563 406.826 205.5 323.5C226 255 272 186.5 362.5 287C453 387.5 452 496.5 575.5 555C674.3 601.8 750 472.5 772 374.5"
              strokeWidth="31"
              strokeLinecap="round"
              className="stroke-tertiary"
            />
          </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySection;
