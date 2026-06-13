// 主导航配置 —— 单一数据源
export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品与服务" },
  { href: "/news", label: "新闻" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "商务联系" },
];

export const SITE = {
  name: "未知领域",
  brandEn: "unrealm-ai",
  tagline: "AI 与智能体的新边界",
  email: "contact@wzly.example.com",
  copyrightYear: new Date().getFullYear(),
} as const;
