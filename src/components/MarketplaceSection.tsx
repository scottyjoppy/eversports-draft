"use client";

import { motion } from "motion/react";
import { SetStateAction, useEffect, useState } from "react";

/* ╭──────────────────────────────────────────────────────────╮
      │ 1.  Data model & demo content                           │
      ╰──────────────────────────────────────────────────────────╯ */
type Item = {
  id: number;
  url: string;
  title: string;
  subTitle?: string;
  description: string;
  tags?: string[];
};

const items: Item[] = [
  {
    id: 1,
    url: "/images/carousel/phone-gym.jpg",
    title: "More visibility",
    description:
      "Your profile on the Eversports Marketplace isn't just a way for potential new customers to find you – it's also an advantage for your existing customers! They can book and pay for your activities with just a few clicks. The marketplace increases your bookings because customers can book and invite each other to your activities 24/7. Did you know? In total, 446 000 friendships have been made on the Marketplace and the number is growing every day.",
  },
  {
    id: 2,
    url: "/images/carousel/phone-forest.jpg",
    title: "More visibility",
    description:
      "+8k users per month turn into new customers for our partners.\n+40,000 bookings per month after discovering offers on our marketplace.\n+700,000€ per month are spent by new customers at our partner studios.",
  },
  {
    id: 3,
    url: "/images/carousel/meeting.jpg",
    title: "No surprises",
    description:
      "Attract new and loyal members with the Eversports Marketplace! For new customers who discover your studio or sports centre through our marketplace, a transparent fee of 25% per booking with a maximum of €75 per customer will be charged. Once new customers become loyal members, there are no fees to pay. Let's strengthen and grow your community together!",
  },
  {
    id: 4,
    url: "/images/carousel/high-five.jpg",
    title: "Building genuine",
    description:
      "What keeps you going are the real and special moments with your members, right? The Eversports Marketplace brings people together by keeping your members connected - all sharing the same passion. Did you know? 53% of all Marketplace users are loyal members*. *members purchased memberships & block cards.",
  },
];

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

interface GalleryProps {
  items: Item[];
  index: number;
  setIndex: React.Dispatch<SetStateAction<number>>;
}

/*  👉  Change these constants to control card sizing */
const COLLAPSED_WIDTH_MOBILE = "100%"; // Mobile collapsed width (full width)
const COLLAPSED_WIDTH_DESKTOP = 220; // Desktop collapsed width (narrow collapsed cards)
const EXPANDED_WIDTH_MOBILE = "100%"; // Expanded width on mobile
const EXPANDED_WIDTH_DESKTOP = 450; // Expanded width on desktop

// Mobile and desktop specific heights
const COLLAPSED_HEIGHT_MOBILE = 50; // Mobile collapsed height
const COLLAPSED_HEIGHT_DESKTOP = 500; // Desktop collapsed height
const EXPANDED_HEIGHT_MOBILE = 350; // Mobile expanded height
const EXPANDED_HEIGHT_DESKTOP = 500; // Desktop expanded height

function Gallery({ items, index, setIndex }: GalleryProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // check on initial load
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const collapsedWidth = isMobile
    ? COLLAPSED_WIDTH_MOBILE
    : COLLAPSED_WIDTH_DESKTOP;
  const expandedWidth = isMobile
    ? EXPANDED_WIDTH_MOBILE
    : EXPANDED_WIDTH_DESKTOP;

  const collapsedHeight = isMobile
    ? COLLAPSED_HEIGHT_MOBILE
    : COLLAPSED_HEIGHT_DESKTOP;
  const expandedHeight = isMobile
    ? EXPANDED_HEIGHT_MOBILE
    : EXPANDED_HEIGHT_DESKTOP;

  return (
    <div className="mx-auto flex w-full gap-1 py-15 overflow-hidden flex-col md:flex-row">
      {items.slice(0, 5).map((item, i) => (
        <motion.div
          key={item.id}
          whileTap={{ scale: 0.95 }}
          className="relative flex-shrink-0 overflow-hidden rounded-xl w-full"
          initial={{
            width: collapsedWidth,
            height: collapsedHeight,
          }}
          animate={{
            width: index === i ? expandedWidth : collapsedWidth,
            height: index === i ? expandedHeight : collapsedHeight,
          }}
          exit={{
            width: collapsedWidth,
            height: collapsedHeight,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
          onClick={() => setIndex(i)}
          onMouseEnter={() => setIndex(i)}
        >
          <motion.img
            src={item.url}
            alt={item.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: index === i ? 1 : 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          />

          {index !== i && (
            <motion.h1
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-2xl text-xl font-semibold text-white bg-black/20 px-2 `}
            >
              {item.title}
            </motion.h1>
          )}

          {index === i && (
            <motion.article
              key="overlay"
              variants={article}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute inset-0 flex flex-col justify-end space-y-2 rounded-xl bg-gradient-to-t from-gray-900/90 to-transparent p-4"
            >
              <motion.h1
                variants={article}
                className="text-2xl font-semibold text-tertiary"
              >
                {item.title}
              </motion.h1>
              {item.subTitle && (
                <motion.h2
                  variants={article}
                  className="text-lg font-medium text-white"
                >
                  {item.subTitle}
                </motion.h2>
              )}
              <motion.p
                variants={article}
                className="text-sm leading-tight text-white/90"
              >
                {item.description}
              </motion.p>
            </motion.article>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function MarketplaceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // start with first card

  return (
    <section className="relative mx-auto flex w-full md:w-[80vw] flex-col items-center justify-center overflow-hidden px-3">
      <div className="flex justify-center">
        {/* 80vw for desktop */}
        <Gallery items={items} index={activeIndex} setIndex={setActiveIndex} />
      </div>
    </section>
  );
}
