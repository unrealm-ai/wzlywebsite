import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

interface Stat {
  value: string;
  label: string;
  hint?: string;
}

const STATS: Stat[] = [
  { value: "10+", label: "行业方案", hint: "覆盖金融、医疗、法律等" },
  { value: "100+", label: "企业客户", hint: "包括多家头部机构" },
  { value: "99.9%", label: "服务可用性", hint: "经生产规模验证" },
  { value: "<200ms", label: "平均响应", hint: "端到端 P50 延迟" },
];

// 数字成就 —— 极简大字 + 辅助说明
export function Stats() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--line)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.06}>
              <div>
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--fg)]">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium text-[var(--fg)]">
                  {stat.label}
                </div>
                {stat.hint && (
                  <div className="mt-1 text-xs text-[var(--subtle)]">
                    {stat.hint}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
