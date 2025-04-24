import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import WhySection from "@/components/WhySection";
import { getProjects } from "../../../sanity/sanity-utils";
import MarketplaceSection from "@/components/MarketplaceSection";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Hero />
      <WhySection />
      <MarketplaceSection />
      {/* <CssArtSection /> */}
      {/* <GridBoxSection projects={projects} /> */}
      <Reviews />
    </>
  );
}
