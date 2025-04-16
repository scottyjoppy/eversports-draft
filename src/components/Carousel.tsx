"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  speed: number; // Speed prop to control the scroll speed
}

function Carousel({ children, speed }: Props) {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Update width once the content is loaded
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, [children]);

  // Looping animation with smoothing
  useAnimationFrame((_, delta) => {
    const movement = (delta / 1000) * speed; // speed is customizable here
    baseX.set(baseX.get() - movement);

    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth / 2; // Half of the scrollWidth, since we will duplicate items
      const current = baseX.get();
      
      // Smooth reset to the start to avoid breaking the loop when it reaches the end
      if (Math.abs(current) >= scrollWidth) {
        baseX.set(0); // Reset when loop completes
      }
    }
  });

  // Prevent dragging past the container limits and wrap the items
  const handleDragEnd = () => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth / 2;
      const currentX = baseX.get();

      // Reset position when over-scrolled
      if (Math.abs(currentX) >= scrollWidth) {
        baseX.set(0); // Reset position to the start
      }
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        drag="x"
        style={{ x: baseX }}
        dragConstraints={{
          left: -width / 2, // Allow drag up to the left boundary
          right: 0, // Prevent dragging to the right past the end
        }} 
        dragElastic={0.2} // Adjust drag elasticity for smoother interaction
        dragTransition={{
          bounceStiffness: 500, // Adjust the stiffness for a smoother bounce effect
          bounceDamping: 20, // Adjust the damping for a more natural bounce
        }} 
        transition={{
          type: "spring", // Use a spring for smoothness
          stiffness: 300, // Control the stiffness (speed of movement)
          damping: 40, // Control the smoothness (slower but smoother)
          duration: 1, // Control how long it takes for the movement to finish
        }}
        onDragEnd={handleDragEnd} // Ensure the wrap happens when dragging ends
        className="flex gap-4 cursor-grab active:cursor-grabbing"
      >
        {/* Duplicating the children for seamless wrap-around */}
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4">{children}</div>
      </motion.div>
    </div>
  );
}

export default Carousel;
