"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const transition = {
  delay: 1.5,
  duration: 1,
  ease: easeInOut,
};

export default function Navbar({ children, className }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={transition}
      className={`${className} z-50 sticky top-0 w-full h-15 bg-white flex justify-between items-center px-5 text-black drop-shadow-md/5`}
    >
      <div className="relative w-[200px] aspect-[3/1]">
        <Link href="/">
          <Image
            src="https://cdn-ilaejnf.nitrocdn.com/cUfbcFhAkfCZjXvdsJwGmghGlDQAcfnr/assets/images/optimized/rev-a4ebde9/www.eversportsmanager.com/wp-content/uploads/2020/11/manager_original.png"
            alt="eversports logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>
      {children}
      <Button>
        Login
      </Button>
    </motion.nav>
  );
}
