import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // 生产部署使用 standalone 输出：构建产物自包含 server.js，
  // 部署时仅需 .next/standalone + .next/static + public 三份目录。
  output: "standalone",
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
