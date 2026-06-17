import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "关于我们",
  description:
    "未知领域（unrealm-ai）由一群对 AI 充满热忱的研究者与工程师组成，致力于让前沿智能技术真正落地。",
  path: "/about",
});

const MILESTONES = [
  { year: "2024", title: "公司创立", desc: "由资深 AI 研究者与工程师共同发起。" },
  { year: "2025", title: "首款产品发布", desc: "unrealm-ai Atlas 1.0 上线，服务首批企业客户。" },
  { year: "2026", title: "智能体平台公测", desc: "Agent Studio 与 Compass 行业助手发布。" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="关于我们"
        title="一群相信智能体未来的人"
        description="未知领域（unrealm-ai）由资深研究者与工程师组成，致力于把前沿 AI 转化为真正能用的生产力。"
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="hairline-card grid grid-cols-1 gap-12 rounded-lg p-7 md:grid-cols-12 sm:p-10">
            <Reveal>
              <div className="md:col-span-5">
                <div className="mb-7 h-1 w-16 rounded-full bg-[var(--mint)]" />
                <h2 className="text-3xl font-semibold">
                  使命
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="md:col-span-7 space-y-5 text-lg text-[var(--muted)] leading-relaxed">
                <p>
                  让每一个组织都能用上可靠的 AI ——
                  无论它是一家百年企业、一个新兴团队，还是个体创造者。
                </p>
                <p>
                  我们相信：技术的价值，最终要在真实业务中被验证。
                  因此我们既深入研究模型与系统的边界，
                  也深入客户的工作流，把抽象的能力做成具体的工具。
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <Reveal>
              <div className="md:col-span-5">
                <h2 className="text-3xl font-semibold">
                  发展历程
                </h2>
              </div>
            </Reveal>
            <div className="md:col-span-7">
              <ol className="relative space-y-8 before:absolute before:left-[4.75rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--line-strong)]">
                {MILESTONES.map((m, idx) => (
                  <Reveal key={m.year} delay={idx * 0.06}>
                    <li className="relative grid grid-cols-[80px_1fr] items-baseline gap-6">
                      <span className="text-2xl font-semibold tabular-nums text-[var(--fg)]">
                        {m.year}
                      </span>
                      <div className="hairline-card rounded-lg p-5">
                        <h3 className="text-lg font-medium">{m.title}</h3>
                        <p className="mt-2 text-[var(--muted)] leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
