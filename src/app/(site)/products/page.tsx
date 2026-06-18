import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCTS, getStatusLabel, getCategoryLabel } from "@/lib/products";
import { buildPageMetadata } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "产品与服务",
  description:
    "未知领域提供 Cloud Managed Agents、小增 App 内容增长助手、企业级大模型平台、行业知识助手与端到端 AI 咨询服务。",
  path: "/products",
});

const PRODUCT_ACCENTS = [
  "var(--accent)",
  "var(--accent-light)",
  "var(--line-strong)",
  "var(--fg)",
  "var(--accent)",
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="产品与服务"
        title="为企业智能化打造的完整工具集"
        description="从云端 Agent 到内容增长助手，从模型平台到行业知识与落地咨询 —— 一套可演进的产品矩阵。"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-6">
            {PRODUCTS.map((product, idx) => {
              const accent = PRODUCT_ACCENTS[idx] ?? "var(--brand)";
              return (
                <Reveal key={product.id}>
                  <article
                    id={product.id}
                    className="hairline-card grid scroll-mt-24 grid-cols-1 gap-8 rounded-lg p-7 md:grid-cols-12 md:gap-16 sm:p-9"
                  >
                    <div className="md:col-span-5">
                      <div
                        className="mb-7 h-1 w-16 rounded-full"
                        style={{ background: accent }}
                        aria-hidden
                      />
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs uppercase text-[var(--subtle)]">
                          0{idx + 1} · {getCategoryLabel(product.category)}
                        </span>
                        <span className="rounded-md border border-[var(--line)] bg-white px-2 py-0.5 text-xs text-[var(--muted)]">
                          {getStatusLabel(product.status)}
                        </span>
                      </div>
                      <h2 className="text-3xl font-semibold sm:text-4xl">
                        {product.name}
                      </h2>
                      <p className="mt-3 text-lg text-[var(--fg)]">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-base text-[var(--muted)] leading-relaxed">
                        {product.description}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-[var(--fg)]"
                          >
                            <Check
                              className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]"
                              strokeWidth={2}
                              aria-hidden
                              style={{ color: accent }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
