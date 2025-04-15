"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarCssArt } from "./art/CalendarCssArt";
import { DesktopCssArt } from "./art/DesktopCssArt";

const textContainerVariants = {
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

const artContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1, // Starts after text animations
      staggerChildren: 0.4, // Longer delay between art components
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
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="mx-4">
      <motion.div className="max-w-7xl mx-auto h-full flex flex-col items-center mt-30 gap-30">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl text-center text-ring"
          >
            Book Sports.
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-5xl text-center text-ring"
          >
            Stay Motivated.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-center max-w-2xl text-black"
          >
            Stay flexible and book your activities when and how it suits you
            best.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-full flex items-center justify-center"
          >
            <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 place-items-stretch text-center">
              <div className="flex flex-col justify-center gap-4 bg-secondary/80 px-2 py-1 rounded-2xl overflow-hidden shadow-xl/2 min-h-[80px] h-full">
                <h2 className="font-bold text-xl">
                  Find your perfect activity
                </h2>
                <p className="text-black">
                  Discover new classes, trainers and venues that match your
                  everyday vibe.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 bg-secondary/80 px-2 py-1 rounded-2xl overflow-hidden shadow-xl/2 min-h-[80px] h-full">
                <h2 className="font-bold text-xl">Book instantly</h2>
                <p className="text-black">
                  Reserve your spot in seconds with our seamless booking system.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 bg-secondary/80 px-2 py-1 rounded-2xl overflow-hidden shadow-xl/2 min-h-[80px] h-full">
                <h2 className="font-bold text-xl">Stay connected</h2>
                <p className="text-black">
                  Keep track of your bookings and discover new activities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={artContainerVariants}
          initial="hidden"
          animate="visible"
          className="my-10 w-full max-w-5xl px-4 relative grid"
          style={{
            gridTemplateAreas: '"overlap"',
            gridTemplateColumns: "1fr",
            height: "600px",
          }}
        >
          <motion.div variants={itemVariants} className="absolute inset-0 z-0">
            <DesktopCssArt />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="absolute -right-15 bottom-50 z-10"
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
            className="absolute -left-15 bottomr-40 z-10"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
