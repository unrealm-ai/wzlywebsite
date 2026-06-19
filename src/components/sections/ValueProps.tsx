import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const CAPABILITY_PATH = [
  {
    step: "01",
    title: "研究能力",
    label: "Model Research",
    description:
      "追踪多模态、推理、智能体等前沿方向，把尚不稳定的能力拆解为可验证的技术模块。",
  },
  {
    step: "02",
    title: "工程落地",
    label: "Agent Engineering",
    description:
      "围绕工作流、工具调用、记忆与观测构建系统，让 AI 从演示走向真实任务执行。",
  },
  {
    step: "03",
    title: "企业治理",
    label: "Enterprise Control",
    description:
      "以权限、审计、数据隔离和私有化部署为底座，让智能能力安全进入生产环境。",
  },
] as const;

export function ValueProps() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-8 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Capability Path
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-5xl">
                从未知能力，到稳定生产系统
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] lg:col-span-5">
              我们不把 AI 包装成一次性演示，而是沿着研究、工程和治理三个层面，把前沿能力变成组织可以长期使用的基础设施。
            </p>
          </div>
        </Reveal>

        <ol className="grid grid-cols-1 lg:grid-cols-3">
          {CAPABILITY_PATH.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 0.06}>
              <li className="group relative min-h-[300px] border-b border-[var(--line)] py-9 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {item.step}
                  </span>
                  <span className="mt-2 h-px flex-1 bg-[var(--line-strong)] transition-colors group-hover:bg-[var(--accent)]" />
                </div>
                <div className="mt-16">
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">
                    {item.label}
                  </p>
                  <h3 className="text-2xl font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
