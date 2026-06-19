import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCTS, getStatusLabel, getCategoryLabel } from "@/lib/products";

const PRODUCT_VISUAL_META: Record<string, { index: string; signal: string }> = {
  "agent-studio": { index: "P01", signal: "1 秒启动云上工作 Agent" },
  "xiaozeng-growthwise": { index: "P02", signal: "内容增长闭环" },
  atlas: { index: "P03", signal: "统一模型、知识与观测" },
  compass: { index: "P04", signal: "专业知识与来源追踪" },
  consulting: { index: "P05", signal: "从场景到生产化" },
};

const PRODUCT_TITLE_LINES = [
  "一",
  "套",
  "面",
  "向",
  "智",
  "能",
  "化",
  "的",
  "产",
  "品",
  "与",
  "服",
  "务",
] as const;

export function ProductsOverview() {
  const [primaryProduct, ...secondaryProducts] = PRODUCTS;

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[160px_minmax(0,1fr)] lg:items-start">
          <Reveal>
            <div className="py-6 lg:sticky lg:top-24">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Product Map
              </p>
              <h2
                aria-label="一套面向智能化的产品与服务"
                className="flex flex-col items-start gap-0 text-3xl font-semibold leading-[0.95] text-[var(--fg)] sm:text-5xl"
              >
                {PRODUCT_TITLE_LINES.map((line) => (
                  <span key={line} aria-hidden="true">
                    {line}
                  </span>
                ))}
              </h2>
              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent-strong)]"
              >
                查看完整产品矩阵
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden border-y border-[var(--line)]">
              <Link
                href={`/products#${primaryProduct.id}`}
                className="group grid gap-7 p-6 transition-colors hover:bg-[var(--surface)] sm:p-7 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-5">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-sm text-[var(--accent)]">
                      {PRODUCT_VISUAL_META[primaryProduct.id]?.index}
                    </span>
                    <span className="h-px flex-1 bg-[var(--line-strong)]" />
                    <span className="border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">
                      {getStatusLabel(primaryProduct.status)}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">
                    {getCategoryLabel(primaryProduct.category)}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-4xl">
                    {primaryProduct.name}
                  </h3>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-lg font-medium text-[var(--fg)]">
                    {primaryProduct.tagline}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                    {primaryProduct.description}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {primaryProduct.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="border-l border-[var(--accent)] pl-3 text-sm leading-relaxed text-[var(--fg)]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors group-hover:text-[var(--accent-strong)]">
                    了解详情
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>

              <div className="divide-y divide-[var(--line)] border-t border-[var(--line)]">
                {secondaryProducts.map((product) => {
                  const meta = PRODUCT_VISUAL_META[product.id];
                  return (
                    <Link
                      key={product.id}
                      href={`/products#${product.id}`}
                      className="group grid gap-5 p-6 transition-colors hover:bg-[var(--surface)] sm:grid-cols-[88px_1fr_auto] sm:items-center sm:p-6"
                    >
                      <div className="font-mono text-sm text-[var(--accent)]">
                        {meta?.index}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--subtle)]">
                          <span>{getCategoryLabel(product.category)}</span>
                          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                          <span>{getStatusLabel(product.status)}</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-semibold text-[var(--fg)]">
                          {product.name}
                        </h3>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
                          {product.tagline} / {meta?.signal}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors group-hover:text-[var(--accent-strong)]">
                        进入
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
