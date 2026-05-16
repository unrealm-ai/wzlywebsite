import { Brain, Workflow, Shield, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUE_PROPS: ValueProp[] = [
  {
    icon: Brain,
    title: "前沿模型能力",
    description:
      "自研与领先开源模型结合，覆盖语言、视觉、推理等多模态能力，持续追踪并落地最新研究成果。",
  },
  {
    icon: Workflow,
    title: "可落地的智能体",
    description:
      "从工作流编排到工具调用，构建真正能完成任务的智能体系统；面向业务，而非演示。",
  },
  {
    icon: Shield,
    title: "企业级可信",
    description:
      "数据隔离、私有化部署、可观测与可审计 —— 让 AI 能力放心地嵌入生产环境。",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--line)]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="我们的能力"
            title="把不确定的前沿，变成确定的生产力"
            description="技术的价值在于解决真实问题。我们以三个核心能力支撑客户的智能化升级。"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
          {VALUE_PROPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.08}>
                <article className="bg-[var(--bg)] p-8 sm:p-10 h-full">
                  <Icon
                    className="h-7 w-7 text-[var(--fg)]"
                    aria-hidden
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
