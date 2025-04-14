import { DesktopCssArt } from "@/components/art/DesktopCssArt";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import Hero from "@/components/Hero";

export default async function Home() {
  const projects = await getProjects();
  const gridItems = [
    { classes: "col-span-4 row-span-1" },
    { classes: "col-span-2 row-span-1" },
    { classes: "col-span-full row-span-1" },
    { classes: "col-span-2 row-span-1" },
    { classes: "col-span-2 row-span-1" },
    { classes: "col-span-2 row-span-1" },
    { classes: "col-span-3 row-span-1" },
    { classes: "col-span-3 row-span-1" },
    { classes: "" },
  ];

  return (
    <>
      <Hero/>
      <div className="bg-gray-100 mt-30">
        <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-6 gap-8 auto-rows-[300px] p-10 mx-5 max-w-2/3">
          {projects.map((project, index) => {
            const item = gridItems[index] || { classes: "" };
            return (
              <div
                key={project._id}
                className={`bg-background ${item.classes} rounded-2xl p-5 flex justify-center items-center`}
              >
                <Link
                  // href={`/projects/${project.slug}`}
                  href={`#`}
                  className="rounded-lg p-2"
                >
                  {/* {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={750}
                    height={300}
                    className="object-cover rounded-lg  border border-gray-500"
                  />
                )} */}
                  <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    {project.name}
                  </div>
                  <PortableText value={project.content} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
