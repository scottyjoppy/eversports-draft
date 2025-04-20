import CssArtSection from "@/components/CssArtSection";
import GridBoxSection from "@/components/GridBoxSection";
import Hero from "@/components/Hero";
import { getProjects } from "../../../sanity/sanity-utils";
import Reviews from "@/components/Reviews";
import WhySection from "@/components/WhySection";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Hero />
      <WhySection />
      <CssArtSection />
      <GridBoxSection projects={projects} />
      <Reviews />
    </>
  );
}
