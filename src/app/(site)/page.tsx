import { Hero } from "@/components/sections/Hero";
import { ProductsOverview } from "@/components/sections/ProductsOverview";
import { Engineering } from "@/components/sections/Engineering";
import { UseCases } from "@/components/sections/UseCases";
import { NewsTeaser } from "@/components/sections/NewsTeaser";
import { AboutBand } from "@/components/sections/AboutBand";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <Engineering />
      <UseCases />
      <NewsTeaser />
      <AboutBand />
      <ContactSection />
    </>
  );
}
