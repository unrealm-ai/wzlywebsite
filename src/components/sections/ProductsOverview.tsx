import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCTS, getStatusLabel, getCategoryLabel } from "@/lib/products";

// 产品矩阵概览（首页用）
export function ProductsOverview() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--surface)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <SectionHeading
              eyebrow="产品矩阵"
              title="一套面向智能化的产品与服务"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--fg)] hover:opacity-70 transition-opacity"
            >
              查看完整产品矩阵
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.slice(0, 4).map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.06}>
              <Link
                href={`/products#${product.id}`}
                className="group block bg-[var(--bg)] border border-[var(--line)] p-8 sm:p-10 transition-colors hover:border-[var(--fg)] h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider text-[var(--subtle)]">
                    {getCategoryLabel(product.category)}
                  </span>
                  <span className="text-xs px-2 py-0.5 border border-[var(--line)] text-[var(--muted)] rounded-full">
                    {getStatusLabel(product.status)}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-2 text-base text-[var(--fg)]">
                  {product.tagline}
                </p>
                <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-8 flex items-center gap-1.5 text-sm text-[var(--fg)] group-hover:gap-3 transition-all">
                  了解详情
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
