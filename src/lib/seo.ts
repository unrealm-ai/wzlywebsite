import type { Metadata } from "next";

interface PageSeoInput {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

const DEFAULT_DESCRIPTION =
  "未知领域（Wzly）是一家专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。";

// 共享 metadata 生成器，统一 OG 与 Twitter 卡片
export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
}: PageSeoInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
