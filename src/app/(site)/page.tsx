import GridBoxSection from "@/components/GridBoxSection";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import { getProjects } from "../../../sanity/sanity-utils";
import CssArtSection from "@/components/CssArtSection";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Hero />
      {/* <WhySection /> */}
      <CssArtSection />
      <GridBoxSection projects={projects} />
      {/* <Reviews /> */}
    </>
  );
}
