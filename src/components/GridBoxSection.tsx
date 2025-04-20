"use client";

import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { Project } from "../../types/Project";

interface Props {
  projects: Project[];
}

const 
GridBoxSection = ({ projects }: Props) => {
  const gridItems = [
    { classes: "lg:col-span-4 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-full md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-3 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-3 md:col-span-2 sm:col-span-1 row-span-1" },
    { classes: "lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-1" },
  ];

  return (
    <section className="relative -mt-[100vh] bg-fortiary z-10 rounded-4xl flex justify-center">
      <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-8 auto-rows-[300px] pt-20 p-10 mx-5 w-full max-w-screen-xl">
        {projects.map((project, index) => {
          const item = gridItems[index] || { classes: "" };
          return (
            <motion.div
              key={project._id}
              className={`bg-tertiary ${item.classes} rounded-2xl px-5 py-1 flex flex-col justify-center items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href="/">
                <h1 className="font-bold text-4xl">{project.name}</h1>
                <PortableText value={project.content} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GridBoxSection;
