"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

const HeroWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const [isPinned, setIsPinned] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);

  // 🔧 Adjustable scroll offset (in px)
  const scrollOffset = 100;

  useEffect(() => {
    // Using useLayoutEffect to ensure the measurements are calculated before painting
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", () => {
    if (!wrapperRef.current || !heroRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const heroBottom = rect.top + heroRef.current.offsetHeight;

    // Pin when hero bottom is 'scrollOffset' above bottom of viewport
    if (heroBottom <= window.innerHeight - scrollOffset) {
      if (!isPinned) setIsPinned(true);
    } else {
      if (isPinned) setIsPinned(false);
    }
  });

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{
        height: `${heroHeight + scrollOffset}px`,
        paddingBottom: `${scrollOffset}px`,
      }}
    >
      <motion.div
        ref={heroRef}
        className={`w-full transition-all duration-300 ${isPinned ? `fixed left-0 z-10` : "relative"}`}
        style={{
          bottom: isPinned ? `${scrollOffset}px` : "auto",
        }}
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default HeroWrapper;
