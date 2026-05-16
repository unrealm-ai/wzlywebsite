import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
}

// 首页"最新动态"区块。当前使用静态示例数据；
// 新闻 MDX 模块就绪后将切换为从 lib/news.ts 读取。
const PLACEHOLDER_NEWS: NewsItem[] = [
  {
    slug: "welcome",
    title: "未知领域正式发布：探索智能体的新边界",
    date: "2026-05-10",
    category: "公司动态",
  },
  {
    slug: "atlas-2-0",
    title: "Wzly Atlas 2.0：企业级大模型平台重大更新",
    date: "2026-04-22",
    category: "产品更新",
  },
  {
    slug: "agent-studio-preview",
    title: "Agent Studio 公测开启，可视化构建智能体",
    date: "2026-04-05",
    category: "产品发布",
  },
];

export function NewsTeaser() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--surface)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <SectionHeading eyebrow="最新动态" title="保持探索的脚步" />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--fg)] hover:opacity-70 transition-opacity"
            >
              查看全部新闻
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {PLACEHOLDER_NEWS.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 0.05}>
              <li>
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 py-6 sm:py-8 hover:opacity-70 transition-opacity"
                >
                  <div className="flex items-baseline gap-6 flex-1 min-w-0">
                    <time
                      dateTime={item.date}
                      className="text-xs uppercase tracking-wider text-[var(--subtle)] tabular-nums shrink-0 w-24"
                    >
                      {item.date.replace(/-/g, ".")}
                    </time>
                    <span className="text-base sm:text-lg font-medium text-[var(--fg)] truncate">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 pl-30 sm:pl-0">
                    <span className="text-xs text-[var(--muted)]">
                      {item.category}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors"
                      aria-hidden
                    />
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
