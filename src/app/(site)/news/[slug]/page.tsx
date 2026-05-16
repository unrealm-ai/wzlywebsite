import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return buildPageMetadata({
    title: `新闻 · ${slug}`,
    path: `/news/${slug}`,
  });
}

// 详情占位页 —— MDX 加载逻辑将在阶段 6 接入
export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

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

        <p className="text-xs uppercase tracking-[0.16em] text-[var(--brand)] mb-4">
          公司动态
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          新闻详情占位：{slug}
        </h1>
        <time className="block mt-6 text-sm text-[var(--muted)]">
          2026.05.10
        </time>

        <div className="prose mt-12">
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
