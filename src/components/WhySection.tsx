"use client";

import { motion } from "motion/react";

const WhySection = () => {
  return (
    <>
      <section className="relative bg-purple-400 h-screen">
        <motion.div>
          <motion.div>{/*background image*/}</motion.div>
          <motion.h1 className="text-6xl">Why Eversports</motion.h1>
        </motion.div>
      </section>
    </>
  );
};

export default WhySection;
