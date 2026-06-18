// 产品矩阵 —— 单一数据源，供首页概览与产品页详情共用
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: "available" | "preview" | "coming-soon";
  category: "platform" | "agent" | "service";
}

const STATUS_LABEL: Record<Product["status"], string> = {
  available: "已上线",
  preview: "公测中",
  "coming-soon": "即将发布",
};

const CATEGORY_LABEL: Record<Product["category"], string> = {
  platform: "平台",
  agent: "智能体",
  service: "服务",
};

export function getStatusLabel(status: Product["status"]) {
  return STATUS_LABEL[status];
}

export function getCategoryLabel(category: Product["category"]) {
  return CATEGORY_LABEL[category];
}

export const PRODUCTS: Product[] = [
  {
    id: "agent-studio",
    name: "Cloud Managed Agents",
    tagline: "云上托管的 Agents，1 秒钟启动工作 Agent",
    description:
      "云上托管的 Agents，1 秒钟即可启动你的工作 Agent。不论是与你一起协作，还是自动在后台执行工作，都可即开即用。",
    features: [
      "可选择 Agent 内核：codex / claude-code / openclaw 等",
      "多模型自由切换与选择",
      "即开即用，支持实时协作",
      "可在后台自动执行工作",
    ],
    status: "preview",
    category: "agent",
  },
  {
    id: "xiaozeng-growthwise",
    name: "小增 App",
    tagline: "AI 内容运营与增长智能助手",
    description:
      "面向老板、创作者和运营团队，把素材变成选题，把选题变成多平台内容，再把发布反馈变成下一轮增长判断。",
    features: [
      "灵感库沉淀产品卖点、用户问题、竞品素材和评论反馈",
      "选题台按人群、场景、痛点、平台和转化意图生成主题池",
      "内容稿覆盖小红书笔记、短视频脚本、公众号大纲和私域文案",
      "发布编排与增长复盘形成持续内容增长闭环",
    ],
    status: "coming-soon",
    category: "service",
  },
  {
    id: "atlas",
    name: "unrealm-ai Atlas",
    tagline: "企业级大模型应用平台",
    description:
      "面向企业的一站式大模型应用平台，支持模型微调、知识库、Prompt 管理与可观测部署。",
    features: [
      "多模型统一接入与路由",
      "私有知识库与 RAG 检索",
      "Prompt 工程与版本管理",
      "可观测、可审计、可回滚",
    ],
    status: "available",
    category: "platform",
  },
  {
    id: "compass",
    name: "unrealm-ai Compass",
    tagline: "行业知识智能助手",
    description:
      "针对法律、金融、医疗等专业领域的知识助手，融合领域语料与推理能力，输出可靠结论。",
    features: [
      "深度领域知识库",
      "可解释的推理链",
      "引用与来源追踪",
      "私有化部署",
    ],
    status: "available",
    category: "agent",
  },
  {
    id: "consulting",
    name: "AI 咨询与定制",
    tagline: "从战略到落地的全流程服务",
    description:
      "为企业提供 AI 战略咨询、场景识别、原型验证到生产落地的端到端服务。",
    features: [
      "AI 成熟度评估",
      "高价值场景识别",
      "POC 快速原型",
      "生产化与持续优化",
    ],
    status: "available",
    category: "service",
  },
];
