"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const transition = {
  delay: 2,
};

export default function Navbar({ children, className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position and change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={transition}
      className={`${className} z-50 fixed top-0 w-full h-15 ${
        isScrolled ? "bg-white" : "bg-white"
      } flex justify-between items-center px-5 border-b-1 border-white/10 text-black transition-all duration-300 ease-in-out`}
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
      <Button className="bg-secondary text-black hover:bg-tertiary">
        Login
      </Button>
    </motion.nav>
  );
}
