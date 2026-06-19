import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ProductsOverview } from "@/components/sections/ProductsOverview";
import { Stats } from "@/components/sections/Stats";
import { Customers } from "@/components/sections/Customers";
import { NewsTeaser } from "@/components/sections/NewsTeaser";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ProductsOverview />
      <Stats />
      <Customers />
      <NewsTeaser />
      <CTA />
    </>
  );
}
