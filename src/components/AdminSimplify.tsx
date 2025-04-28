"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatedNavbar } from "./AnimatedNavbar";
import Button from "./Button";

// Animation settings in one place
const animationVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
  },
};

const AdminSimplify = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const renderContent = () => {
    return (
      <>
        {selectedTab === 0 && (
          <motion.div
            key="management"
            {...animationVariants}
            className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden w-full p-5"
          >
            <div className="flex flex-col gap-5 text-white w-full lg:w-1/2">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">Management</h2>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
                Manage your customers and amazing team
              </h1>
              <p className="text-base sm:text-lg">
                Make sure your schedule shines bright on all your platforms.
                Make your activities a breeze to book, so anyone can join in on
                the fun with just a few clicks.
              </p>
              <Button className="w-fit mt-4">See More</Button>
            </div>
            <Image
              src="/images/happy-yoga.jpg"
              alt="people talking yoga"
              width={600}
              height={400}
              className="rounded-2xl w-full lg:w-1/2 object-cover mt-4 lg:mt-0"
            />
          </motion.div>
        )}
        {selectedTab === 1 && (
          <motion.div
            key="finances"
            {...animationVariants}
            className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden w-full p-5"
          >
            <div className="flex flex-col gap-5 text-white w-full lg:w-1/2">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">Finances</h2>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
                Keep an overview over your finances
              </h1>
              <p className="text-base sm:text-lg">
                Take control over your finances. We help you keep an overview
                over all revenues and expenses and tackle any challenge that
                comes your way. Automate invoicing and bookkeeping and make
                payment effortless for your customers.
              </p>
              <Button className="w-fit mt-4">See More</Button>
            </div>
            <Image
              src="/images/on-computer.jpg"
              alt="on computer"
              width={600}
              height={400}
              className="rounded-2xl w-full lg:w-1/2 object-cover mt-4 lg:mt-0"
            />
          </motion.div>
        )}
        {selectedTab === 2 && (
          <motion.div
            key="reporting"
            {...animationVariants}
            className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden w-full p-5"
          >
            <div className="flex flex-col gap-5 text-white w-full lg:w-1/2">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">Reporting</h2>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
                Create your reports and make winning moves
              </h1>
              <p className="text-base sm:text-lg">
                Reports are not meant to be a burden. That’s why we help you to
                easily create and export your individual reports to see all
                important numbers and to stay up-to-date with what happens in
                your daily business.
              </p>
              <Button className="w-fit mt-4">See More</Button>
            </div>
            <Image
              src="/images/high-five.jpg"
              alt="people high fiving"
              width={600}
              height={400}
              className="rounded-2xl w-full lg:w-1/2 object-cover mt-4 lg:mt-0"
            />
          </motion.div>
        )}
      </>
    );
  };

  return (
    <section className="min-h-[80vh] md:min-h-[85vh] bg-tertiary grid place-items-center relative p-5">
      <div className="flex flex-col md:min-h-2/3 w-full max-w-full lg:max-w-2/3 md:items-start justify-between">
        <div>
          <AnimatedNavbar onTabChange={handleTabChange} />
        </div>
        <div className="flex items-end overflow-hidden w-full">{renderContent()}</div>
      </div>
    </section>
  );
};

export default AdminSimplify;
