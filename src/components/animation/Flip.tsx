import { motion } from "motion/react";

const DURATION = 0.2;
const STAGGER = 0.0125;

const FlipLink = ({ children }: { children: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block whitespace-nowrap font-bold uppercase overflow-hidden h-fit"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        <div>
          {children.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0">
        <div>
          {children.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FlipLink;
