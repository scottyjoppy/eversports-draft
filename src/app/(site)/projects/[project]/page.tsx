import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: Promise<{ project: string }>;
};

export default async function Project({ params }: Props) {
  const { project } = await params
  const slug = project;
  const singleProject = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
          {singleProject.name}
        </h1>
        <a
          href={singleProject.url}
          title="View Sports"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Sports
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5 ">
        <PortableText value={singleProject.content}/>
      </div>
      <Image
      src={singleProject.image}
      alt={singleProject.name}
      width={1920}
      height={1080}
      className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
