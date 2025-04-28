"use client";

import { AnimatePresence, motion } from "motion/react";
import { SetStateAction, useState } from "react";

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
    title: "No surprises,",
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

/*  👉  Change these three constants to control card sizing */
const EXPANDED_WIDTH = 450; // px (opened card)
const COLLAPSED_WIDTH = 60; // px (closed cards)
const CARD_HEIGHT = 400; // px (card height)

function Gallery({ items, index, setIndex }: GalleryProps) {
  return (
    <div className="mx-auto flex w-fit gap-1 py-15">
      {items.slice(0, 5).map((item, i) => (
        <motion.div
          key={item.id}
          whileTap={{ scale: 0.95 }}
          className="relative flex-shrink-0 overflow-hidden rounded-xl h-[400px]"
          initial={{ width: COLLAPSED_WIDTH }}
          animate={{ width: index === i ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
          exit={{ width: COLLAPSED_WIDTH }}
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

          <AnimatePresence mode="wait">
            {index === i && (
              <motion.article
                key="overlay"
                variants={article}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="absolute inset-0 flex flex-col justify-end space-y-2 rounded-xl bg-gradient-to-t from-gray-900/70 to-transparent p-4"
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
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function MarketplaceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // start with first card

  return (
    <section className="relative mx-auto flex w-full flex-col items-center justify-center">
      <Gallery items={items} index={activeIndex} setIndex={setActiveIndex} />
    </section>
  );
}
