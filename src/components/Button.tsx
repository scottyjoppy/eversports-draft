"use client"

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <motion.div
      className={`${className} cursor-pointer bg-button text-white hover:brightness-110 rounded-full px-5 py-1`}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.125, type: "spring" },
      }}
      whileTap={{
        rotate: 5,
        scale: 0.95,
      }}
    >
      {children}
    </motion.div>
  );
};
export default Button;
