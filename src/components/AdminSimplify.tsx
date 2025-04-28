"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AnimatedNavbar } from "./AnimatedNavbar";
import Button from "./Button";

// Animation settings in one place
const animationVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const AdminSimplify = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const renderContent = () => {
    return (
      <AnimatePresence>
        {selectedTab === 0 && (
          <motion.div
            key="management"
            {...animationVariants}
            className="flex justify-between gap-10 items-center overflow-hidden w-full"
          >
            <div className="flex flex-col gap-5 text-white">
              <h2 className="font-bold text-2xl">Management</h2>
              <h1 className="font-bold text-4xl">
                Management Manage your customers and amazing team
              </h1>
              <p>
                Make sure your schedule shines bright on all your platforms.
                Make your activities a breeze to book, so anyone can join in on
                the fun with just a few clicks.
              </p>
              <Button className="w-fit">See More</Button>
            </div>
            <img
              src="/images/happy-yoga.jpg"
              alt="people talking yoga"
              className="rounded-2xl w-1/2"
            />
          </motion.div>
        )}

        {selectedTab === 1 && (
          <motion.div
            key="finances"
            {...animationVariants}
            className="flex justify-between gap-10 items-center overflow-hidden w-full"
          >
            <div className="flex flex-col gap-5 text-white">
              <h2 className="font-bold text-2xl">Finances</h2>
              <h1 className="font-bold text-4xl">
                Keep an overview over your finances
              </h1>
              <p>
                Take control over your finances. We help you keep an overview
                over all revenues and expenses and tackle any challenge that
                comes your way. Automate invoicing and bookkeeping and make
                payment effortless for your customers.
              </p>
              <Button className="w-fit">See More</Button>
            </div>
            <img
              src="/images/on-computer.jpg"
              alt="on computer"
              className="rounded-2xl w-1/2"
            />
          </motion.div>
        )}

        {selectedTab === 2 && (
          <motion.div
            key="reporting"
            {...animationVariants}
            className="flex justify-between gap-10 items-center overflow-hidden w-full"
          >
            <div className="flex flex-col gap-5 text-white">
              <h2 className="font-bold text-2xl">Reporting</h2>
              <h1 className="font-bold text-4xl">
                Create your reports and make winning moves
              </h1>
              <p>
                Reports are not meant to be a burden. That’s why we help you to
                easily create and export your individual reports to see all
                important numbers and to stay up-to-date with what happens in
                your daily business.
              </p>
              <Button className="w-fit">See More</Button>
            </div>
            <img
              src="/images/high-five.jpg"
              alt="people high fiving"
              className="rounded-2xl w-1/2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section className="h-[85vh] bg-tertiary grid place-items-center relative">
      <div className="flex flex-col max-h-2/3 h-full w-full max-w-2/3 items-start justify-between">
        <div>
          <AnimatedNavbar onTabChange={handleTabChange} />
        </div>
        <div className="flex items-end">{renderContent()}</div>
      </div>
    </section>
  );
};

export default AdminSimplify;
