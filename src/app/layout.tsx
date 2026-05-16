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

export const metadata: Metadata = {
  metadataBase: new URL("https://wzly.example.com"),
  title: {
    default: "未知领域 Wzly — AI 与智能体的新边界",
    template: "%s | 未知领域 Wzly",
  },
  description:
    "未知领域（Wzly）是一家专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。",
  keywords: ["AI", "大模型", "智能体", "Agent", "未知领域", "Wzly", "LLM"],
  authors: [{ name: "未知领域" }],
  creator: "未知领域 Wzly",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://wzly.example.com",
    siteName: "未知领域 Wzly",
    title: "未知领域 Wzly — AI 与智能体的新边界",
    description:
      "专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。",
  },
  twitter: {
    card: "summary_large_image",
    title: "未知领域 Wzly",
    description:
      "专注于大模型与智能体技术的 AI 公司，为企业提供下一代智能产品与服务。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
