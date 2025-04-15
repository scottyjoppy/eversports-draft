"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const transition = {
  delay: 2,
};

export default function Navbar({ children, className }: NavbarProps) {
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={transition}
        className={`${className} z-50 fixed top-0 w-full h-15 bg-primary flex justify-between items-center px-5 border-b-1 border-black/10 text-black/50`}
      >
        <div className="relative lg:w-[140px] md:w-[120px] w-[100px] aspect-[3/1]">
          <Link href="/">
            <Image
              src="/images/eversports-logo.svg"
              alt="eversports logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        {children}
        <Button className="bg-gray-200 text-gray-600 hover:bg-gray-300">
          Login
        </Button>
      </motion.nav>
    </>
  );
}
