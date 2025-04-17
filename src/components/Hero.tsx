"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarCssArt } from "./art/CalendarCssArt";
import { DesktopCssArt } from "./art/DesktopCssArt";
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
  return (
    <>
      <section className="h-screen z-0 relative max-w-7xl">
        <video
          src="https://www.eversportsmanager.com/wp-content/uploads/2024/10/ennlfrvideo.mp4"
          className="fixed left-1/2 -translate-x-1/2 top-0 max-w-[1400px] h-full object-cover"
          style={{
            clipPath: "inset(0px 0px 5px 5px)",
            minWidth: "1400px",
          }}
          loop
          muted
          autoPlay={false}
          playsInline
        />
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="fixed top-[25%] left-0 sm:left-[5%] md:left-[10%] lg:left-[20%] text-5xl text-white"
          >
            Join the movement network
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="fixed top-[35%] left-0 sm:left-[5%] md:left-[10%] lg:left-[20%] max-w-2xl text-white"
          >
            More than a management software...
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="fixed top-[45%] left-0 sm:left-[5%] md:left-[10%] lg:left-[20%]"
          >
            <Link href="https://www.eversportsmanager.com/demo/">
              <Button className="bg-secondary font-bold uppercase text-black rounded-full px-5 py-3">
                Book Demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      </>
      )};

      <section className="bg-white/10 border-y-10 border-white h-screen z-10 relative backdrop-blur-2xl"></section>
      {/* Decorative Art Section */}
      <motion.div
        variants={artContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl my-10 grid overflow-visible"
        style={{
          gridTemplateColumns: "1fr",
          height: "clamp(400px, 50vw, 600px)",
        }}
      >
        <motion.div variants={itemVariants} className="absolute inset-0 z-0">
          <DesktopCssArt />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="absolute z-10 right-[-25vw] sm:right-[-20vw] md:right-[-15vw] lg:right-[-10vw] top-[200px] sm:top-[180px] md:top-[300px]"
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
          className="absolute z-10 left-[-25vw] sm:left-[-20vw] md:left-[-15vw] lg:left-[-10vw] top-[200px] sm:top-[180px] md:top-[300px]"
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

export default Hero;
