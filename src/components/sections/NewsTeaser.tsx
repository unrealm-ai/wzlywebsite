import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

// 新闻动态 —— 大卡 + 小卡（对齐参考 HTML）
export function NewsTeaser() {
  return (
    <section className="border-b border-[var(--line)]">
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                  04 / News &amp; Insights
                </p>
                <h2 className="text-3xl font-semibold leading-[1.2] sm:text-5xl">
                  保持探索的脚步
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                产品发布、技术洞察与公司动态。持续记录 AI 从技术探索走向企业应用的过程。
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            {/* 大卡 */}
            <Reveal>
              <article className="flex min-h-[310px] flex-col justify-between rounded-2xl border border-[var(--line)] bg-gradient-to-br from-white to-[#f0f1ed] p-7">
                <div className="text-[13px] text-[var(--muted)]">
                  2026.05.10　/　公司动态
                </div>
                <div>
                  <h3 className="max-w-xl text-3xl leading-snug text-[var(--fg)]">
                    未知领域正式发布：探索智能体的新边界
                  </h3>
                  <p className="mt-3 text-[13px] text-[var(--muted)]">
                    我们相信，下一代生产力源自人与智能体的协作。以工程化能力推动 AI 进入真实业务场景。
                  </p>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center justify-between text-sm font-bold text-[var(--fg)] transition-colors hover:text-[var(--accent-strong)]"
                >
                  查看新闻动态
                  <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" aria-hidden />
                </Link>
              </article>
            </Reveal>

            {/* 小卡组 */}
            <div className="grid gap-4">
              <Reveal delay={0.06}>
                <article className="rounded-2xl border border-[var(--line)] bg-white p-7">
                  <div className="text-[13px] text-[var(--muted)]">
                    2026.04.22　/　产品更新
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--fg)]">
                    unrealm-ai Atlas 2.0：企业级大模型平台更新
                  </h3>
                  <p className="mt-2 text-[13px] text-[var(--muted)]">
                    多模型路由、Prompt 版本管理与可观测能力。
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.12}>
                <article className="rounded-2xl border border-[var(--line)] bg-white p-7">
                  <div className="text-[13px] text-[var(--muted)]">
                    2026.04.05　/　产品发布
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--fg)]">
                    Agent Cloud 公测开启
                  </h3>
                  <p className="mt-2 text-[13px] text-[var(--muted)]">
                    云上托管的 Agents，支持多内核与多模型协作。
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
