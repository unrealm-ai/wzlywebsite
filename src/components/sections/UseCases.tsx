import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const USE_CASES = [
  {
    title: "知识与研究",
    desc: "连接内部知识与外部信息，辅助检索、归纳、分析和内容生产。",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4M8.5 11h5M11 8.5v5" />
      </svg>
    ),
  },
  {
    title: "流程自动化",
    desc: "将重复、规则明确的工作拆解为可执行任务，减少人工切换成本。",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M4 7h6l2 3h8v8H4z" />
        <path d="M12 14h5m-2-2 2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "团队协作",
    desc: "让 AI 员工进入团队工作流，协助处理日常任务与跨角色协作。",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2.5 19c.5-3 2.5-4.5 5.5-4.5s5 1.5 5.5 4.5M14 15c3.5-.8 6.5.7 7 3.5" />
      </svg>
    ),
  },
  {
    title: "模型工程",
    desc: "统一管理模型接入、提示词与运行情况，支持持续迭代。",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M10 7h4M7 10v2l5 2m5-4v2l-5 2" />
      </svg>
    ),
  },
] as const;

// 应用场景 —— 让 AI 进入真实工作现场（对齐参考 HTML）
export function UseCases() {
  return (
    <section className="border-b border-[var(--line)]">
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                  03 / Use Cases
                </p>
                <h2 className="text-3xl font-semibold leading-[1.2] sm:text-5xl">
                  让 AI 进入
                  <br />
                  真实工作现场
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                从知识密集型工作到重复流程自动化，从团队协作到企业内部系统集成，围绕真实任务设计 AI 能力。
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <article className="border-t border-[var(--line)] pt-6">
                  <div className="mb-6 grid h-11 w-11 place-items-center rounded-[10px] border border-[var(--line)] text-[var(--accent)] [&>svg]:h-[21px] [&>svg]:w-[21px] [&>svg]:fill-none [&>svg]:stroke-current [&>svg]:stroke-[1.6] [&>svg]:[stroke-linecap:round] [&>svg]:[stroke-linejoin:round]">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {item.desc}
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
