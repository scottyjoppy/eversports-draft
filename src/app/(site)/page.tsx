import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import WhySection from "@/components/WhySection";
import { getProjects } from "../../../sanity/sanity-utils";
import MarketplaceSection from "@/components/MarketplaceSection";
import AdminSimplify from "@/components/AdminSimplify";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Hero />
      <WhySection />
      <MarketplaceSection />
      <AdminSimplify />
      {/* <CssArtSection /> */}
      {/* <GridBoxSection projects={projects} /> */}
      <Reviews />
    </>
  );
}
