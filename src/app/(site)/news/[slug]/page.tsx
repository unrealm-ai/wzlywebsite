import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { NEWS_ITEMS, getNewsItem } from "@/lib/news";
import { buildPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getNewsItem(slug);

  return buildPageMetadata({
    title: item ? `新闻 · ${item.title}` : `新闻 · ${slug}`,
    description: item?.excerpt,
    path: `/news/${slug}`,
  });
}

// 详情占位页 —— MDX 加载逻辑将在阶段 6 接入
export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="py-20 sm:py-28">
      <Container width="content">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          返回新闻列表
        </Link>

        <p className="text-xs uppercase text-[var(--brand)] mb-4">
          {item.category}
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          {item.title}
        </h1>
        <time className="block mt-6 text-sm text-[var(--muted)]">
          {item.date.replace(/-/g, ".")}
        </time>

        <div className="prose hairline-card mt-12 rounded-lg p-6 sm:p-8">
          <p>{item.excerpt}</p>
          <p>
            这里将渲染 MDX 内容。当前为占位说明：在阶段 6 中将完成 MDX
            集成、frontmatter 解析、上一篇/下一篇导航与 ISR 重验证。
          </p>
          <p>
            你可以在 <code>src/content/news/</code> 下添加{" "}
            <code>.mdx</code> 文件，新增的文章会自动出现在列表与详情中。
          </p>
          <h2>正文示例</h2>
          <p>
            未知领域专注于大模型与智能体技术，把前沿研究转化为可落地的产品。
            我们相信下一代生产力源自人与智能体的协作。
          </p>
          <blockquote>
            探索未知，定义边界 —— 这是我们正在做的事。
          </blockquote>
        </div>
      </Container>
    </article>
  );
}
