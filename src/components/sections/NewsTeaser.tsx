import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
}

const PLACEHOLDER_NEWS: NewsItem[] = [
  {
    slug: "welcome",
    title: "未知领域正式发布：探索智能体的新边界",
    date: "2026-05-10",
    category: "公司动态",
  },
  {
    slug: "atlas-2-0",
    title: "unrealm-ai Atlas 2.0：企业级大模型平台重大更新",
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
    <section className="bg-[var(--surface)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-12 lg:items-end">
          <Reveal>
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Updates
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-5xl">
                保持探索的脚步
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent-strong)]"
              >
                查看全部新闻
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>

        <ul className="divide-y divide-[var(--line)]">
          {PLACEHOLDER_NEWS.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 0.05}>
              <li>
                <Link
                  href={`/news/${item.slug}`}
                  className="group grid gap-4 py-7 transition-colors hover:text-[var(--accent-strong)] sm:grid-cols-[160px_1fr_auto] sm:items-center"
                >
                  <time
                    dateTime={item.date}
                    className="font-mono text-xs text-[var(--subtle)] tabular-nums"
                  >
                    {item.date.replace(/-/g, ".")}
                  </time>
                  <div>
                    <span className="text-xs text-[var(--accent)]">
                      {item.category}
                    </span>
                    <span className="mt-2 block text-xl font-medium leading-snug text-[var(--fg)] transition-colors group-hover:text-[var(--accent-strong)]">
                      {item.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-[var(--muted)] transition-colors group-hover:text-[var(--accent-strong)]"
                    aria-hidden
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
