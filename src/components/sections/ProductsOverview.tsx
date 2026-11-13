import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProductDeck } from "@/components/sections/ProductDeck";

export function ProductsOverview() {
  return (
    <Container>
      <ProductDeck />

      <Reveal delay={0.12}>
        <div className="mt-8 flex justify-center md:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent-strong)]"
          >
            查看完整产品矩阵
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Reveal>
    </Container>
  );
}
