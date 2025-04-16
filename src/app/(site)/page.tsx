import GridBoxSection from "@/components/GridBoxSection";
import HeroWrapper from "@/components/HeroWrapper";
import Reviews from "@/components/Reviews";
import { getProjects } from "../../../sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <HeroWrapper />
      <GridBoxSection projects={projects} />
      <Reviews />
    </>
  );
}
