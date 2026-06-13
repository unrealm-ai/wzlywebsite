"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Network,
  Megaphone,
  FileText,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────
// 产品数据
// ─────────────────────────────────────────────────────────

interface ProductCardData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  status: "已上线" | "公测中" | "即将发布";
  // 顶部视觉的色调（柔和的渐变 anchor 色）
  visualTone: { from: string; to: string };
}

const PRODUCTS: ProductCardData[] = [
  {
    id: "agent",
    name: "unrealm-ai Agent",
    category: "智能体平台",
    tagline: "把复杂任务交给可执行的智能体",
    description:
      "通过可视化工作流编排与丰富的工具生态，让智能体真正完成任务，而非停留在演示。",
    features: ["可视化工作流编排", "原生 MCP 工具生态", "多智能体协同与记忆"],
    icon: Bot,
    status: "公测中",
    visualTone: { from: "#2F5BFF", to: "#7B5BFF" },
  },
  {
    id: "aigw",
    name: "企业级 AIGW",
    category: "AI 网关",
    tagline: "一个入口，统一管理所有大模型",
    description:
      "面向企业的统一 AI 网关，提供多模型路由、配额管控、可观测与审计能力，让 AI 安全嵌入生产。",
    features: ["多模型智能路由", "细粒度配额与权限", "全链路可观测与审计"],
    icon: Network,
    status: "已上线",
    visualTone: { from: "#0A0A0A", to: "#3B3B3B" },
  },
  {
    id: "marketing",
    name: "智能营销",
    category: "增长解决方案",
    tagline: "把创意工作流交给 AI，把决策留给人",
    description:
      "覆盖营销内容生成、多渠道分发、人群洞察与 A/B 测试，让营销团队的产能翻倍。",
    features: ["多渠道内容自动生成", "人群与场景智能匹配", "效果归因与持续优化"],
    icon: Megaphone,
    status: "已上线",
    visualTone: { from: "#FF6A3D", to: "#FFB23D" },
  },
  {
    id: "clausewise",
    name: "ClauseWise 律智",
    category: "合同智能",
    tagline: "把合同审查交给 AI，把决策留给法务",
    description:
      "面向法务与业务团队的 AI 合同合约审查工具：自动识别风险条款、生成红线稿、给出合同修订建议，让合同评审更快更稳。",
    features: ["AI 合同风险审查", "红线稿自动生成", "合同修订建议与对比"],
    icon: FileText,
    status: "即将发布",
    visualTone: { from: "#16A34A", to: "#0EA5E9" },
  },
];

const AUTOPLAY_MS = 6500;

// ─────────────────────────────────────────────────────────
// 主组件
// ─────────────────────────────────────────────────────────

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % PRODUCTS.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(t);
  }, [paused]);

  const product = PRODUCTS[active];
  const showPrevious = () =>
    setActive((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);
  const showNext = () => setActive((i) => (i + 1) % PRODUCTS.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 卡片入场动效 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {/* 主卡片 */}
        <div
          className="relative h-[620px] rounded-2xl overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1px solid #e5e5e5",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.04), 0 30px 60px -24px rgba(0,0,0,0.14)",
          }}
        >
          {/* 切换面板 */}
          <AnimatePresence mode="wait">
            <motion.article
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col"
            >
              {/* 顶部视觉 */}
              <ProductVisual product={product} />

              {/* 内容区 */}
              <div className="flex flex-1 flex-col px-7 sm:px-9 pt-7 pb-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#9ca3af]">
                    {product.category}
                  </span>
                  <span className="h-[3px] w-[3px] rounded-full bg-[#d4d4d4]" />
                  <span className="text-[11px] px-2 py-0.5 rounded-full border border-[#ececec] text-[#525252]">
                    {product.status}
                  </span>
                </div>

                <h3 className="text-[28px] sm:text-[34px] font-semibold tracking-tight leading-[1.12] text-[#0a0a0a]">
                  {product.name}
                </h3>
                <p className="mt-2 text-[16px] sm:text-[17px] text-[#0a0a0a] font-medium">
                  {product.tagline}
                </p>
                <p className="mt-4 text-[14.5px] text-[#6b7280] leading-relaxed max-w-xl">
                  {product.description}
                </p>

                {/* 特性列表 */}
                <ul className="mt-6 space-y-2.5">
                  {product.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                      className="flex items-center gap-3 text-[14px] text-[#0a0a0a]"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: product.visualTone.from }}
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* 行动链接 */}
                <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                  <Link
                    href={`/products#${product.id}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0a0a0a] hover:opacity-70 transition-opacity"
                  >
                    了解 {product.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>

                  {/* 自动轮播进度环（hover 暂停时静止） */}
                  <Progress
                    key={product.id + (paused ? "-paused" : "-running")}
                    duration={AUTOPLAY_MS}
                    paused={paused}
                  />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* 卡片下方：紧凑切换按钮 */}
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0a0a0a] shadow-sm transition-colors hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a]"
            aria-label="查看上一个产品"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0a0a0a] shadow-sm transition-colors hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a]"
            aria-label="查看下一个产品"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 顶部产品视觉 —— 每个产品独立 SVG 抽象插图
// ─────────────────────────────────────────────────────────

function ProductVisual({ product }: { product: ProductCardData }) {
  return (
    <div
      className="relative h-[180px] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${product.visualTone.from}, ${product.visualTone.to})`,
      }}
    >
      {/* 噪声/光斑遮罩，让纯色背景更有质感 */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(80% 60% at 30% 30%, rgba(255,255,255,0.25), transparent 60%)",
        }}
      />

      {/* 抽象图形 —— 视产品而定 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {product.id === "agent" && <AgentArt />}
        {product.id === "aigw" && <AigwArt />}
        {product.id === "marketing" && <MarketingArt />}
        {product.id === "clausewise" && <ClauseWiseArt />}
      </div>

      {/* 角标：产品图标 */}
      <div className="absolute top-5 left-7">
        <div
          className="inline-flex items-center justify-center h-10 w-10 rounded-xl backdrop-blur-md"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          <product.icon className="h-5 w-5 text-white" strokeWidth={1.8} aria-hidden />
        </div>
      </div>
    </div>
  );
}

// 智能体：节点连接图，象征 multi-agent 拓扑
function AgentArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="1" fill="none">
        <line x1="200" y1="90" x2="100" y2="40" />
        <line x1="200" y1="90" x2="320" y2="50" />
        <line x1="200" y1="90" x2="120" y2="140" />
        <line x1="200" y1="90" x2="320" y2="135" />
        <line x1="100" y1="40" x2="320" y2="50" strokeDasharray="2 3" />
        <line x1="120" y1="140" x2="320" y2="135" strokeDasharray="2 3" />
      </g>
      {[
        { x: 200, y: 90, r: 18, main: true },
        { x: 100, y: 40, r: 9 },
        { x: 320, y: 50, r: 9 },
        { x: 120, y: 140, r: 9 },
        { x: 320, y: 135, r: 9 },
      ].map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 5}
            fill="rgba(255,255,255,0.12)"
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.main ? "#ffffff" : "rgba(255,255,255,0.9)"}
          />
        </g>
      ))}
    </svg>
  );
}

// AIGW：多端汇聚到一个网关
function AigwArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
        <path d="M50 30 Q 200 30 200 90" />
        <path d="M50 90 Q 200 90 200 90" />
        <path d="M50 150 Q 200 150 200 90" />
        <path d="M350 30 Q 200 30 200 90" />
        <path d="M350 90 Q 200 90 200 90" />
        <path d="M350 150 Q 200 150 200 90" />
      </g>
      <g fill="rgba(255,255,255,0.9)">
        {[30, 90, 150].map((y) => (
          <g key={y}>
            <rect x="40" y={y - 8} width="22" height="16" rx="3" />
            <rect x="338" y={y - 8} width="22" height="16" rx="3" />
          </g>
        ))}
      </g>
      <g>
        <rect
          x="172"
          y="62"
          width="56"
          height="56"
          rx="10"
          fill="rgba(255,255,255,0.16)"
        />
        <rect
          x="180"
          y="70"
          width="40"
          height="40"
          rx="6"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
}

// 智能营销：上升曲线 + 数据点
function MarketingArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="mkt-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <path
        d="M30 140 L 90 120 L 150 130 L 220 80 L 290 95 L 370 35 L 370 180 L 30 180 Z"
        fill="url(#mkt-area)"
      />
      <path
        d="M30 140 L 90 120 L 150 130 L 220 80 L 290 95 L 370 35"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />
      {[
        [30, 140],
        [90, 120],
        [150, 130],
        [220, 80],
        [290, 95],
        [370, 35],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="#ffffff"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1"
        />
      ))}
      {/* 漂浮的多渠道标签 */}
      <g fontFamily="ui-sans-serif" fontSize="10" fill="#ffffff" opacity="0.85">
        <rect x="60" y="50" width="48" height="18" rx="9" fill="rgba(255,255,255,0.18)" />
        <text x="84" y="62" textAnchor="middle">小红书</text>
        <rect x="170" y="35" width="56" height="18" rx="9" fill="rgba(255,255,255,0.18)" />
        <text x="198" y="47" textAnchor="middle">公众号</text>
        <rect x="270" y="55" width="56" height="18" rx="9" fill="rgba(255,255,255,0.18)" />
        <text x="298" y="67" textAnchor="middle">EDM</text>
      </g>
    </svg>
  );
}

// ClauseWise 律智：合同文档审查与红线/勾选
function ClauseWiseArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* 文档堆叠 */}
      <g>
        <rect
          x="80"
          y="50"
          width="120"
          height="100"
          rx="6"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="95"
          y="40"
          width="120"
          height="100"
          rx="6"
          fill="rgba(255,255,255,0.32)"
        />
        <rect
          x="110"
          y="30"
          width="120"
          height="100"
          rx="6"
          fill="#ffffff"
        />
        {[50, 65, 80, 95].map((y, i) => (
          <rect
            key={y}
            x="124"
            y={y}
            width={i === 3 ? 60 : 92}
            height="4"
            rx="2"
            fill="rgba(0,0,0,0.1)"
          />
        ))}
      </g>
      {/* 完成态勾选项 */}
      <g transform="translate(250, 60)">
        <rect
          x="0"
          y="0"
          width="110"
          height="76"
          rx="10"
          fill="rgba(255,255,255,0.22)"
        />
        {[14, 34, 54].map((y, i) => (
          <g key={y}>
            <circle cx="14" cy={y + 6} r="6" fill="#ffffff" />
            <path
              d={`M11 ${y + 6} L13 ${y + 8} L17 ${y + 4}`}
              stroke={i < 2 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)"}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="26"
              y={y + 3}
              width={i === 2 ? 50 : 70}
              height="5"
              rx="2"
              fill="rgba(255,255,255,0.85)"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// 自动轮播进度环
// ─────────────────────────────────────────────────────────

function Progress({
  duration,
  paused,
}: {
  duration: number;
  paused: boolean;
}) {
  return (
    <div className="relative h-6 w-6">
      <svg viewBox="0 0 24 24" className="absolute inset-0 -rotate-90">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#ececec"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="#0a0a0a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="62.83"
          initial={{ strokeDashoffset: 62.83 }}
          animate={{ strokeDashoffset: paused ? 62.83 : 0 }}
          transition={{ duration: paused ? 0 : duration / 1000, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
