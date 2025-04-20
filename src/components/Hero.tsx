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
                  <Button className="bg-secondary font-bold uppercase text-black rounded-full px-5 py-3">
                    Book Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <div className="rotate-180 scale-75">
              <svg
                width="534"
                height="534"
                viewBox="0 0 534 534"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M444.696 356.461C442.568 357.848 441.603 359.008 440.411 359.841C435.668 363.156 430.855 366.369 426.067 369.62C424.316 364.067 421.433 358.6 421.015 352.946C419.42 331.32 419.797 331.636 399.296 336.64C386.769 339.698 373.788 338.818 361.068 339.519C341.66 340.59 322.67 339.361 303.805 336.941C279.965 333.881 256.356 329.279 232.177 329.058C228.945 329.028 224.036 327.094 222.813 324.603C216.254 311.256 202.719 304.585 194.024 293.062C185.6 281.9 171.657 275.063 162.355 264.388C151.101 251.471 137.729 240.161 131.424 222.908C126.445 209.285 117.528 197.168 111.442 183.883C102.671 164.739 98.4671 144.496 101.682 123.328C102.543 117.653 107.493 114.701 112.771 114.451C114.276 114.38 116.872 118.85 117.452 121.565C119.119 129.378 119.157 137.612 121.396 145.217C125.257 158.333 129.497 171.457 135.056 183.915C141.209 197.703 147.966 211.462 156.394 223.92C165.688 237.661 176.706 250.339 187.876 262.658C195.439 270.997 205.53 277.091 212.796 285.634C230.561 306.522 254.719 313.299 279.962 316.634C289.65 317.913 298.441 320.127 307.579 323.264C324.052 328.918 342.161 330.795 358.5 326.477C371.303 323.093 383.632 328.424 395.697 323.861C398.367 322.851 401.828 323.909 404.459 322.851C409.604 320.779 416.692 319.086 418.827 315.044C421.816 309.381 421.713 301.694 421.498 294.921C421.411 292.174 417.638 289.477 415.384 286.896C410.398 281.185 410.911 278.44 417.296 275.458C423.79 272.424 429.463 272.509 436.547 275.398C450.042 280.899 464.336 284.458 478.341 288.68C485.754 290.914 488.629 295.021 485.717 301.628C480.77 312.85 475.733 323.869 466.053 332.473C458.368 339.305 452.456 348.14 444.696 356.461ZM456.135 297.516C452.288 296.266 448.308 295.319 444.626 293.695C439.39 291.384 434.751 290.035 432.12 297.026C437.7 298.973 422.367 312.986 438.921 308.862C440.431 308.486 442.56 310.625 444.402 311.597C442.977 313.16 441.683 314.872 440.105 316.261C432.51 322.944 429.722 336 434.575 344.388C436.788 348.214 438.595 347.105 441.274 343.777C449.011 334.167 459.831 327.206 465.189 315.488C470.665 303.513 470.774 303.562 456.135 297.516Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
