import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "新闻",
  description: "未知领域的最新动态、产品发布与行业洞察。",
  path: "/news",
});

// 临时占位数据；MDX 模块接入后将由 lib/news.ts 提供
const PLACEHOLDER_NEWS = [
  {
    slug: "welcome",
    title: "未知领域正式发布：探索智能体的新边界",
    excerpt:
      "我们相信，下一代生产力源自人与智能体的协作。今天，我们正式向公众介绍未知领域。",
    date: "2026-05-10",
    category: "公司动态",
  },
  {
    slug: "atlas-2-0",
    title: "Wzly Atlas 2.0：企业级大模型平台重大更新",
    excerpt:
      "新版本带来多模型路由、Prompt 版本管理与更完善的可观测能力。",
    date: "2026-04-22",
    category: "产品更新",
  },
  {
    slug: "agent-studio-preview",
    title: "Agent Studio 公测开启，可视化构建智能体",
    excerpt:
      "通过拖拽式工作流，将复杂的多步任务交给智能体自动完成。",
    date: "2026-04-05",
    category: "产品发布",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="新闻"
        title="保持探索的脚步"
        description="产品发布、技术洞察与公司动态。"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ul className="divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
            {PLACEHOLDER_NEWS.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 0.05}>
                <li>
                  <Link
                    href={`/news/${item.slug}`}
                    className="group block py-10 hover:opacity-80 transition-opacity"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                      <div className="md:col-span-3 flex items-center gap-3">
                        <time
                          dateTime={item.date}
                          className="text-sm tabular-nums text-[var(--muted)]"
                        >
                          {item.date.replace(/-/g, ".")}
                        </time>
                        <span className="text-xs text-[var(--subtle)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="md:col-span-8">
                        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--fg)]">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-[var(--muted)] leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>
                      <div className="md:col-span-1 flex md:justify-end">
                        <ArrowUpRight
                          className="h-5 w-5 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-12 text-sm text-[var(--subtle)] text-center">
            MDX 文章流即将接入；当前显示示例数据。
          </p>
        </Container>
      </section>
    </>
  );
}
