"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// 首页产品矩阵 —— 卡片组（Carousel）交互：中间突出、左右隐约可见、拖动切换
interface DeckCard {
  id: string;
  index: string; // "01 · 智能体执行平台"
  tag: string; // 状态标签
  name: string;
  desc: string;
  features: string[];
  cta: string;
}

const DECK_CARDS: DeckCard[] = [
  {
    id: "agent-studio",
    index: "01 · 智能体执行平台",
    tag: "公测中 · 以实际状态为准",
    name: "Agent Cloud",
    desc: "云上托管的 Agents，快速启动你的工作 Agent，让协作与自动执行不再受本地环境限制。",
    features: [
      "支持多种 Agent 内核选择",
      "多模型自由切换与调用",
      "实时协作与后台任务执行",
    ],
    cta: "了解 Agent Cloud",
  },
  {
    id: "identale",
    index: "02 · 企业 AI 员工平台",
    tag: "企业方案",
    name: "Identale",
    desc: "面向企业岗位与业务场景配置 AI 员工，将企业知识、工作流程与智能执行连接起来。",
    features: [
      "按岗位与业务场景配置 AI 员工",
      "结合企业知识处理任务",
      "融入团队协作与日常业务",
    ],
    cta: "了解 Identale",
  },
  {
    id: "atlas",
    index: "03 · 企业级模型平台",
    tag: "平台能力",
    name: "Atlas 2.0",
    desc: "为企业提供统一的大模型接入与管理能力，让模型应用更易管理、观察和持续迭代。",
    features: [
      "多模型路由与统一接入",
      "Prompt 版本管理",
      "可观测与应用管理能力",
    ],
    cta: "了解 Atlas 2.0",
  },
];

// 相邻卡片的水平间距（桌面 / 移动）
const SIDE_OFFSET_DESKTOP = 360;
const SIDE_OFFSET_MOBILE = 220;

export function ProductDeck() {
  const total = DECK_CARDS.length;
  const [active, setActive] = useState(1); // 默认聚焦中间 Identale
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const startX = useRef(0);
  const lastX = useRef(0);

  const sideOffset = isDesktop ? SIDE_OFFSET_DESKTOP : SIDE_OFFSET_MOBILE;

  // 响应式：桌面 >=900px
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setActive(Math.min(total - 1, Math.max(0, i)));
    },
    [total],
  );

  const next = useCallback(() => {
    setActive((a) => Math.min(total - 1, a + 1));
  }, [total]);

  const prev = useCallback(() => {
    setActive((a) => Math.max(0, a - 1));
  }, []);

  // 键盘左右切换
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // 拖拽切换
  const onPointerDown = (e: React.PointerEvent) => {
    // 忽略卡片内的链接点击
    if ((e.target as HTMLElement).closest("a, button")) return;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    setDragging(true);
    setDragX(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    lastX.current = e.clientX;
    setDragX(dx);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    const dx = lastX.current - startX.current;
    const threshold = sideOffset * 0.5;
    if (dx < -threshold) {
      next();
    } else if (dx > threshold) {
      prev();
    }
    setDragX(0);
  };

  const onPointerCancel = () => {
    setDragging(false);
    setDragX(0);
  };

  return (
    <section id="products" className="relative" aria-label="产品矩阵">
      <div className="w-full">
        {/* 区块标题 */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            01 / Product Matrix
          </p>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[2rem] font-semibold leading-[1.1] text-[var(--fg)] sm:text-[2.5rem]">
              从模型能力
              <br />
              到企业级应用
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[var(--muted)]">
              围绕企业 AI 落地的关键环节，构建从 Agent 执行、企业 AI 员工到模型平台的产品组合。让技术能力真正进入团队的日常工作流。
            </p>
          </div>
        </div>

        {/* 卡片组小标题 + 分隔线 */}
        <div className="mb-6 flex items-center gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Product Collection / 0{total}
          </p>
          <span className="h-px flex-1 bg-[var(--line)]" aria-hidden />
        </div>

        {/* 轮播舞台：中间卡片突出、左右隐约可见 */}
        <div
          className="relative select-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="产品卡片组"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          style={{ touchAction: "pan-y" }}
        >
          {/* 卡片定位层：绝对定位容器，卡片以自身中心对齐容器中心 */}
          <div className="relative h-[440px] sm:h-[460px] md:h-[500px]">
            {DECK_CARDS.map((card, i) => {
              const offset = i - active; // -1 左、0 中、1 右
              const x = offset * sideOffset + (dragging ? dragX : 0);
              const isCenter = offset === 0;
              const scale = isCenter ? 1 : 0.84;
              const opacity = isCenter ? 1 : 0.5;
              const zIndex = isCenter ? 10 : 5 - Math.abs(offset);
              const blur = isCenter ? 0 : 1.5;

              return (
                <div
                  key={card.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex }}
                >
                  <motion.article
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} / ${total}：${card.name}`}
                    aria-hidden={!isCenter}
                    className="flex w-[82vw] max-w-[560px] flex-col overflow-hidden rounded-2xl border border-[var(--line)] p-7 sm:w-[70vw] sm:max-w-[600px] sm:p-8 md:w-[600px] md:min-h-[440px] md:p-10"
                    style={{
                      x,
                      scale,
                      opacity,
                      filter: blur ? `blur(${blur}px)` : "none",
                      cursor: dragging ? "grabbing" : "grab",
                      background: isCenter
                        ? "linear-gradient(180deg,#ffffff 0%,#fbfbfe 100%)"
                        : "#ffffff",
                      boxShadow: isCenter
                        ? "0 30px 60px -28px rgba(17,19,21,0.28), 0 2px 6px rgba(17,19,21,0.05)"
                        : "0 8px 24px -18px rgba(17,19,21,0.18)",
                    }}
                    animate={{
                      x,
                      scale,
                      opacity,
                      filter: blur ? `blur(${blur}px)` : "none",
                    }}
                    transition={
                      dragging
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 300, damping: 30 }
                    }
                  >
                    <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>{card.index}</span>
                      <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="mt-10 text-3xl font-semibold leading-none text-[var(--fg)] sm:mt-12 sm:text-4xl">
                      {card.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                      {card.desc}
                    </p>

                    <ul className="mt-8 space-y-2.5">
                      {card.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 border-b border-[var(--line)] pb-2.5 text-sm text-[var(--fg)]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[var(--accent)]" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/products#${card.id}`}
                      className="mt-auto inline-flex items-center justify-between pt-8 text-sm font-semibold text-[var(--fg)] transition-colors hover:text-[var(--accent-strong)]"
                      tabIndex={isCenter ? 0 : -1}
                    >
                      {card.cta}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </motion.article>
                </div>
              );
            })}
          </div>

          {/* 底部：页码 + 分段进度条 + 提示 + 箭头 */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            {/* 页码 + 分段进度条 */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm tracking-[0.12em] text-[var(--muted)]">
                <b className="font-bold text-[var(--fg)]">
                  {String(active + 1).padStart(2, "0")}
                </b>{" "}
                / {String(total).padStart(2, "0")}
              </span>
              <span className="flex items-center gap-1.5">
                {DECK_CARDS.map((card, i) => {
                  const current = i === active;
                  return (
                    <motion.span
                      key={card.id}
                      className="h-[2px] w-8 rounded-full sm:w-10"
                      animate={{
                        backgroundColor: current
                          ? "var(--accent)"
                          : "var(--line-strong)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  );
                })}
              </span>
            </div>

            {/* 提示文字 */}
            <div className="flex flex-1 flex-col items-start gap-1 sm:items-end">
              <span className="text-xs tracking-[0.12em] text-[var(--muted)]">
                左右切换，逐页探索产品能力
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--subtle)]">
                Drag / Swipe to explore
              </span>
            </div>

            {/* 左右切换箭头 */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                disabled={active === 0}
                aria-label="上一个产品"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-elevated)] text-[var(--fg)] shadow-sm transition hover:bg-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={active === total - 1}
                aria-label="下一个产品"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-elevated)] text-[var(--fg)] shadow-sm transition hover:bg-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
