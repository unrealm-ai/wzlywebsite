export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

// 临时占位数据；MDX 模块接入后这里可以替换为内容文件读取。
export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "welcome",
    title: "未知领域正式发布：探索智能体的新边界",
    excerpt:
      "我们相信，下一代生产力源自人与智能体的协作。今天，我们正式向公众介绍未知领域。",
    date: "2026-05-10",
    category: "公司动态",
  },
  {
    slug: "atlas-2-0",
    title: "unrealm-ai Atlas 2.0：企业级大模型平台重大更新",
    excerpt:
      "新版本带来多模型路由、Prompt 版本管理与更完善的可观测能力。",
    date: "2026-04-22",
    category: "产品更新",
  },
  {
    slug: "agent-studio-preview",
    title: "Cloud Managed Agents 公测开启，1 秒启动云上工作 Agent",
    excerpt:
      "云上托管的 Agents 支持多内核与多模型自由切换，可协作执行，也可在后台自动完成任务。",
    date: "2026-04-05",
    category: "产品发布",
  },
];

export function getNewsItem(slug: string) {
  return NEWS_ITEMS.find((item) => item.slug === slug);
}
