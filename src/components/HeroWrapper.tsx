"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

const HeroWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const [isPinned, setIsPinned] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // 👈 New state

  const scrollOffset = 100;

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", () => {
    if (!wrapperRef.current || !heroRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const heroBottom = rect.top + heroRef.current.offsetHeight;

    const shouldBePinned = heroBottom <= window.innerHeight - scrollOffset;
    if (shouldBePinned !== isPinned) {
      setIsPinned(shouldBePinned);
    }

    // 👇 Hide when hero is fully above viewport
    const completelyOutOfView = rect.bottom <= 0;
    setIsVisible(!completelyOutOfView);
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
        className={`w-full transition-opacity duration-200 ${
          isPinned ? `fixed left-0 z-10` : "relative"
        }`}
        style={{
          bottom: isPinned ? `${scrollOffset}px` : "auto",
          opacity: isVisible ? 1 : 0, // 👈 Instantly hide when out of view
          pointerEvents: isVisible ? "auto" : "none", // optional: prevent interaction when hidden
        }}
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default HeroWrapper;
