import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const PRINCIPLES = [
  {
    num: "01 / RESEARCH",
    title: "研究先行",
    desc: "持续跟踪模型推理、多智能体协同与工具调用，把前沿能力转化为可验证的技术路径。",
  },
  {
    num: "02 / ENGINEERING",
    title: "工程收敛",
    desc: "以系统架构、可观测和稳定性为约束，让 AI 能力真正进入生产环境。",
  },
  {
    num: "03 / DELIVERY",
    title: "产品落地",
    desc: "从用户场景出发，把复杂技术转化为清晰、可靠、可持续使用的产品体验。",
  },
] as const;

// 关于我们 —— 一群把未知变成系统的人（对齐参考 HTML）
export function AboutBand() {
  return (
    <section className="border-b border-[var(--line)]">
      <Container>
        <div className="py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                  05 / About Unrealm AI
                </p>
                <h2 className="max-w-md text-3xl font-semibold leading-[1.2] sm:text-5xl">
                  一群把未知
                  <br />
                  变成系统的人
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="space-y-5 text-sm leading-8 text-[var(--muted)]">
                <p>
                  未知领域由研究、工程与产品团队共同组成，专注于把大模型与智能体技术转化为企业可落地、可治理、可持续运行的产品。
                </p>
                <p>
                  我们相信，AI 的价值不在于一次惊艳演示，而在于能否被组织稳定地使用、持续地治理，并在真实工作流中产生确定结果。
                </p>
                <p>
                  因此，我们同时关注模型能力、工程系统与产品体验：既向前探索边界，也向内打磨可靠性。
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {PRINCIPLES.map((p, idx) => (
              <Reveal key={p.num} delay={idx * 0.06}>
                <article className="border-t border-[var(--line)] px-0 py-5">
                  <small className="text-xs text-[var(--gold)]">{p.num}</small>
                  <h3 className="mt-6 text-lg font-semibold text-[var(--fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
