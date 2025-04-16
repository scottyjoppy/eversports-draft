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
      staggerChildren: 0.2,
    },
  },
};

const artContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Hero = () => {
  return (
    <section className="overflow-x-hidden justify-center flex">
      <div className="w-full flex flex-col items-center gap-10">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-screen max-h-[700px] flex justify-center items-center"
        >
          <video
            src="https://www.eversportsmanager.com/wp-content/uploads/2024/10/ennlfrvideo.mp4"
            className="absolute left-1/2 transform -translate-x-1/2 top-0 max-w-[1400px] h-full object-cover"
            style={{
              clipPath: "inset(0px 0px 5px 5px)",
              minWidth: "1400px",
            }}
            loop
            muted
            autoPlay
            playsInline
          />

          <div className="absolute flex flex-col top-1/3 left-1/6 gap-6">
            <motion.h1 variants={itemVariants} className="text-5xl text-white">
              Join the movement network
            </motion.h1>
            <motion.p variants={itemVariants} className="max-w-2xl text-white">
              More than a management software. A network of more than 4.800
              partner studios that share the passion for movement.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="https://www.eversportsmanager.com/demo/">
                <Button className="w-fit bg-secondary font-bold uppercase text-black rounded-full px-5 py-3">
                  Book Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

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
      </div>
    </section>
  );
};

export default Hero;
