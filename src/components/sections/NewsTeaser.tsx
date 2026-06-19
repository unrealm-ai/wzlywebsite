import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

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
    title: "Cloud Managed Agents 公测开启，1 秒启动云上工作 Agent",
    date: "2026-04-05",
    category: "产品发布",
  },
];

const NEWS_TITLE_LINES = ["保", "持", "探", "索", "的", "脚", "步"] as const;

export function NewsTeaser() {
  return (
    <section className="bg-[var(--surface)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[160px_minmax(0,1fr)] lg:items-start">
          <div className="py-2">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Updates
            </p>
            <h2
              aria-label="保持探索的脚步"
              className="flex flex-col items-start gap-0 text-3xl font-semibold leading-[0.95] text-[var(--fg)] sm:text-5xl"
            >
              {NEWS_TITLE_LINES.map((line) => (
                <span key={line} aria-hidden="true">
                  {line}
                </span>
              ))}
            </h2>
            <Link
              href="/news"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent-strong)]"
            >
              查看全部新闻
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ul className="divide-y divide-[var(--line)] text-left">
            {PLACEHOLDER_NEWS.map((item) => (
              <li key={item.slug}>
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
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
