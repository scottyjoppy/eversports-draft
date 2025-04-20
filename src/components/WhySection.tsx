"use client";

import { motion } from "motion/react";

const WhySection = () => {
  return (
    <>
      <section className="relative bg-white h-[80vh]">
        <motion.div className="flex flex-col justify-center items-center h-full">
          <motion.div>{/*background image*/}</motion.div>
          <motion.h1 className="text-6xl">Why Eversports</motion.h1>
        </motion.div>
      </section>
    </>
  );
};

export default WhySection;
