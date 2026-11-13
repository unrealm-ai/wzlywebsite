import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const ARCH_LAYERS = [
  { label: "业务层", desc: "流程 · 场景 · 应用", variant: "business" },
  { label: "Agent 层", desc: "规划 · 工具调用 · 执行", variant: "agent" },
  { label: "模型 + 数据层", desc: "多模型路由 · 知识 · 上下文", variant: "modeldata" },
] as const;

const PLATFORM_ITEMS = ["治理", "审计", "可观测", "运维"] as const;

const CAPABILITIES = ["✓ 可治理", "✓ 可交付", "✓ 可持续"] as const;

// 工程能力 —— 深色区块 + 系统架构图（对齐参考 HTML）
export function Engineering() {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] text-white">
      <Container>
        <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* 左：文案 */}
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d5a574]">
                02 / Engineering Capability
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-[1.2] sm:text-5xl">
                不止于模型调用
                <br />
                更关注系统如何工作
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#c0c5cd]">
                企业级 AI 的价值不只在于模型回答得多好，更在于它能否接入真实业务、稳定执行任务、被团队理解和管理，并在持续使用中不断优化。
              </p>
            </div>
          </Reveal>

          {/* 右：架构图 */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-[#313948] bg-gradient-to-br from-[#1b2230] to-[#11151c] p-6 sm:p-7">
              <div className="flex justify-between text-[11px] tracking-[0.12em] text-[#9ca4b2]">
                <span>UNREALM AI SYSTEM</span>
                <span>ARCHITECTURE / 01</span>
              </div>

              <div className="mt-6 grid grid-cols-[1fr_112px] gap-3.5">
                {/* 分层 */}
                <div className="grid gap-2.5">
                  {ARCH_LAYERS.map((layer) => (
                    <div
                      key={layer.label}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 text-[13px] ${
                        layer.variant === "business"
                          ? "border-[#8a5a34] bg-[#302a25]"
                          : layer.variant === "agent"
                            ? "border-[#6474ff] bg-[#242c48]"
                            : "border-[#3c4655] bg-[#1e3035]"
                      }`}
                    >
                      <strong className="text-[#e5e9ef]">{layer.label}</strong>
                      <small className="text-[11px] text-[#aeb8c6]">
                        {layer.desc}
                      </small>
                    </div>
                  ))}
                </div>

                {/* 平台侧栏 */}
                <aside className="flex flex-col justify-center gap-3.5 rounded-lg border border-[#8a5a34] bg-[#29251f] px-2.5 py-3">
                  <strong className="text-center text-xs tracking-[0.08em] text-[#e8c49f]">
                    PLATFORM
                  </strong>
                  {PLATFORM_ITEMS.map((item) => (
                    <span
                      key={item}
                      className="border-t border-[#51483d] pt-2.5 text-center text-xs text-[#e0e4e9]"
                    >
                      {item}
                    </span>
                  ))}
                </aside>
              </div>

              {/* 能力标签 */}
              <div className="mt-5 flex flex-wrap gap-2">
                {CAPABILITIES.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[#3d4654] px-2.5 py-1.5 text-[11px] text-[#c8d0dc]"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-center text-xs text-[#7e8796]">
                业务驱动 · Agent 编排 · 模型与数据支撑 · 平台能力贯穿全程
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
