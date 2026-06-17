import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "关于我们",
  description:
    "未知领域（unrealm-ai）由 AI 研究、工程与产品团队组成，致力于把前沿智能技术真正落地。",
  path: "/about",
});

const PRINCIPLES = [
  {
    index: "01",
    title: "研究先行",
    description: "持续追踪模型推理、多智能体协同与工具调用，把前沿能力拆解为可验证模块。",
  },
  {
    index: "02",
    title: "工程收敛",
    description: "以系统架构、可观测和稳定性为约束，让 AI 能力进入真实业务流程。",
  },
  {
    index: "03",
    title: "产品落地",
    description: "从用户场景出发，把复杂技术转化为清晰、可靠、可持续演进的产品体验。",
  },
] as const;

const TEAM_MEMBERS = [
  {
    initials: "YS",
    name: "阎肃",
    title: "AI 工程技术总监",
    focus: "负责 AI 工程体系、平台架构与生产化落地。",
  },
  {
    initials: "HJ",
    name: "胡健",
    title: "首席研究员",
    focus: "负责模型研究、算法路线与前沿技术验证。",
  },
  {
    initials: "WK",
    name: "王凯",
    title: "产品总监",
    focus: "负责产品策略、行业场景与用户体验设计。",
  },
  {
    initials: "LJ",
    name: "练俊文",
    title: "资深工程师",
    focus: "负责核心系统工程、工具链与稳定性建设。",
  },
] as const;

const MILESTONES = [
  { year: "2024", title: "公司创立", desc: "由 AI 研究、工程与产品团队共同发起。" },
  { year: "2025", title: "首款产品发布", desc: "unrealm-ai Atlas 1.0 上线，服务首批企业客户。" },
  { year: "2026", title: "智能体平台公测", desc: "Agent Studio 与 Compass 行业助手发布。" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-[70%_center] opacity-75"
          style={{ backgroundImage: "url('/visuals/boundary-field.webp')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(248,246,241,0.98) 0%, rgba(248,246,241,0.9) 50%, rgba(248,246,241,0.46) 100%)",
          }}
          aria-hidden
        />
        <Container>
          <div className="grid min-h-[520px] gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                <span className="h-px w-8 bg-[var(--accent)]" aria-hidden />
                About Unrealm AI
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-[var(--fg)] sm:text-6xl lg:text-7xl">
                一群把未知
                <span className="block text-[var(--accent)]">变成系统的人</span>
              </h1>
            </div>
            <div className="border-l border-[var(--line)] pl-6 lg:col-span-4">
              <p className="max-w-md text-lg leading-relaxed text-[var(--muted)]">
                未知领域由研究、工程与产品团队共同组成，专注于把大模型与智能体技术转化为企业可落地、可治理、可持续运行的产品。
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg)] py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Mission
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-5xl">
                让可靠的 AI，进入真实业务现场
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] lg:col-span-7">
              <p>
                我们相信，AI 的价值不在于一次惊艳演示，而在于能否被组织稳定地使用、持续地治理，并在真实工作流中产生确定结果。
              </p>
              <p>
                因此，未知领域同时关注模型能力、工程系统和产品体验：既向前探索边界，也向内打磨可靠性。
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 border-y border-[var(--line)] lg:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <article
                key={item.index}
                className="min-h-[260px] border-b border-[var(--line)] py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {item.index}
                  </span>
                  <span className="h-px flex-1 bg-[var(--line-strong)]" />
                </div>
                <h3 className="mt-16 text-2xl font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="team" className="scroll-mt-24 bg-[var(--surface)] py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Team
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-5xl">
                团队介绍
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] lg:col-span-5">
              小而扎实的核心团队，把研究判断、工程能力和产品直觉放在同一张桌上协作。
            </p>
          </div>

          <div className="grid grid-cols-1 border-b border-[var(--line)] lg:grid-cols-2">
            {TEAM_MEMBERS.map((member, idx) => (
              <article
                key={member.name}
                className="group grid min-h-[260px] grid-cols-[88px_1fr] gap-6 border-t border-[var(--line)] py-8 lg:odd:border-r lg:odd:pr-10 lg:even:pl-10"
              >
                <div className="flex h-16 w-16 items-center justify-center border border-[var(--line-strong)] bg-[var(--surface-elevated)] font-mono text-sm text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]">
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm text-[var(--subtle)]">0{idx + 1}</p>
                  <h3 className="mt-5 text-3xl font-semibold text-[var(--fg)]">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-base font-medium text-[var(--accent-strong)]">
                    {member.title}
                  </p>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                    {member.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg)] py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Timeline
              </p>
              <h2 className="text-3xl font-semibold text-[var(--fg)]">
                发展历程
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {MILESTONES.map((item) => (
                  <li
                    key={item.year}
                    className="grid gap-4 py-7 sm:grid-cols-[120px_1fr_auto] sm:items-baseline"
                  >
                    <span className="font-mono text-2xl font-semibold tabular-nums text-[var(--fg)]">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--fg)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-[var(--muted)]">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="hidden h-4 w-4 text-[var(--accent)] sm:block"
                      aria-hidden
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
