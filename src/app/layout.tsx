import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL || "https://unrealm-ai.github.io";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = new URL(siteBasePath || "/", siteOrigin).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "未知领域 AI — 探索未知 定义边界",
    template: "%s | 未知领域 AI",
  },
  description:
    "未知领域AI 是一家专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。",
  keywords: ["AI", "大模型", "智能体", "Agent", "未知领域", "unrealm-ai", "LLM"],
  authors: [{ name: "未知领域" }],
  creator: "未知领域 AI",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "未知领域 AI",
    title: "未知领域 AI — 探索未知, 定义边界.",
    description:
      "专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。",
  },
  twitter: {
    card: "summary_large_image",
    title: "未知领域 AI",
    description:
      "专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
