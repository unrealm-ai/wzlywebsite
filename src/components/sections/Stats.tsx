import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const STATS = [
  { value: "10+", label: "行业方案", hint: "金融、医疗、法律等复杂场景" },
  { value: "100+", label: "企业客户", hint: "覆盖多类组织协作流程" },
  { value: "99.9%", label: "服务可用性", hint: "面向生产环境持续运行" },
  { value: "<200ms", label: "平均响应", hint: "端到端 P50 延迟目标" },
] as const;

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] py-20 text-white sm:py-28">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
        aria-hidden
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal>
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-light)]">
                Production Proof
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                从概念验证到真实业务持续运行
              </h2>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 border-y border-white/12 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.05}>
                  <div className="min-h-[180px] border-b border-white/12 py-6 sm:border-r sm:px-6 lg:border-b-0 lg:last:border-r-0">
                    <div className="text-4xl font-semibold tabular-nums text-white">
                      {stat.value}
                    </div>
                    <div className="mt-5 text-sm font-medium text-white">
                      {stat.label}
                    </div>
                    <div className="mt-2 max-w-[12rem] text-xs leading-relaxed text-white/55">
                      {stat.hint}
                    </div>
                    {idx === 0 && (
                      <div className="mt-6 h-0.5 w-10 bg-[var(--accent)]" />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
