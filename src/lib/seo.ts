import type { Metadata } from "next";

interface PageSeoInput {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

const DEFAULT_DESCRIPTION =
  "未知领域（unrealm-ai）是一家专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function withBasePath(path: string) {
  if (!path.startsWith("/") || !siteBasePath) {
    return path;
  }

  return path === "/" ? siteBasePath : `${siteBasePath}${path}`;
}

// 共享 metadata 生成器，统一 OG 与 Twitter 卡片
export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
}: PageSeoInput): Metadata {
  const pagePath = withBasePath(path);
  const imagePath = image ? withBasePath(image) : undefined;

  return {
    title,
    description,
    alternates: { canonical: pagePath },
    openGraph: {
      title,
      description,
      url: pagePath,
      type: "website",
      ...(imagePath ? { images: [{ url: imagePath }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imagePath ? { images: [imagePath] } : {}),
    },
  };
}
