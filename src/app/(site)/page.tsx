import { DesktopCssArt } from "@/components/art/DesktopCssArt";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import { CalendarCssArt } from "@/components/art/CalendarCssArt";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl text-center mt-5 text-foreground">
        Book Sports.
      </h1>
      <h1 className="text-5xl text-center mt-5 text-foreground">
        Stay Motivated.
      </h1>
      <p className="text-center">
        Stay flexible and book your activities when and how it suits you best.
      </p>
      <div className="flex my-10">
        <DesktopCssArt/>
        <CalendarCssArt/>
        {/* <Image
          src="/images/homepage(1).webp"
          alt="eversports logo"
          fill
          className="object-contain"
        /> */}
      </div>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg  border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
            <PortableText value={project.content} />
          </Link>
        ))}
      </div>
    </div>
  );
}
