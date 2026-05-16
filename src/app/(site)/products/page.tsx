import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCTS, getStatusLabel, getCategoryLabel } from "@/lib/products";
import { buildPageMetadata } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "产品与服务",
  description:
    "未知领域提供企业级大模型应用平台、智能体构建工坊、行业知识助手与端到端 AI 咨询服务。",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="产品与服务"
        title="为企业智能化打造的完整工具集"
        description="从模型平台到智能体，从行业助手到落地咨询 —— 一套可演进的产品矩阵。"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-24">
            {PRODUCTS.map((product, idx) => (
              <Reveal key={product.id}>
                <article
                  id={product.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-24"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs uppercase tracking-wider text-[var(--subtle)]">
                        0{idx + 1} · {getCategoryLabel(product.category)}
                      </span>
                      <span className="text-xs px-2 py-0.5 border border-[var(--line)] text-[var(--muted)] rounded-full">
                        {getStatusLabel(product.status)}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
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
                            className="h-5 w-5 text-[var(--brand)] shrink-0 mt-0.5"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
