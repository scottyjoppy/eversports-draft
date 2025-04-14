"use client";

import { motion } from "framer-motion";
import { DesktopCssArt } from "./art/DesktopCssArt";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center py-20 -translate-y-60"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.h1
          variants={itemVariants}
          className="text-5xl text-center text-foreground"
        >
          Book Sports.
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-5xl text-center text-foreground"
        >
          Stay Motivated.
        </motion.h1>
        <motion.p variants={itemVariants} className="text-center max-w-2xl">
          Stay flexible and book your activities when and how it suits you best.
        </motion.p>
      </div>
      <motion.div
        variants={itemVariants}
        className="mt-10 w-full max-w-5xl px-4"
      >
        <DesktopCssArt />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
