"use client";

import { motion } from "motion/react";

const Test = () => {
  return (
    <>
      <div
        className="
        grid place-items-center gap-10 h-screen w-screen"
      >
        <motion.div
          initial={{ x: 10 }}
          animate={{ x: 0, transition:{duration: 2} }}
          className="bg-primary h-[30vh] w-[30vh]"
        />
      </div>
    </>
  );
};

export default Test;
