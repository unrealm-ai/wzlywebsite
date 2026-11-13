import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

const TOPOLOGY_NODES = [
  { label: "模型", en: "MODEL", className: "left-[38%] top-[5%]" },
  { label: "Agent", en: "ORCHESTRATION", className: "right-0 top-[25%]" },
  { label: "数据", en: "DATA", className: "right-[2%] bottom-[23%]" },
  { label: "治理", en: "GOVERNANCE", className: "left-[38%] bottom-[4%]" },
  { label: "工程", en: "ENGINEERING", className: "left-[1%] bottom-[23%]" },
  { label: "业务", en: "BUSINESS", className: "left-0 top-[25%]" },
] as const;

const HERO_PROOFS = [
  ["AI Agent", "产品方向"],
  ["模型 · 工程 · 场景", "核心能力"],
  ["业务落地", "交付目标"],
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
      {/* 背景网格 */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,42,72,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(28,42,72,0.08) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage: "radial-gradient(ellipse, black, transparent 72%)",
        }}
        aria-hidden
      />

      <Container>
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          {/* 左：文案 */}
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              <span className="h-px w-8 bg-[var(--gold)]" aria-hidden />
              Enterprise AI · Boundary Lab
            </p>
            <h1 className="text-[3.4rem] font-extrabold leading-[1.12] tracking-tight text-[var(--fg)] sm:text-[5.5rem] lg:text-[6.4rem]">
              让智能
              <br />
              真正进入<span className="text-[var(--accent)]">业务</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              把前沿模型能力，转化为可治理、可交付、可持续运行的企业智能生产力。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#products" size="lg" style={{ backgroundColor: "#111315", color: "#fff" }}>
                探索产品矩阵
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                size="lg"
                variant="outline"
                style={{ backgroundColor: "rgba(255,255,255,0.62)", color: "#111315" }}
              >
                预约商务交流
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 border-t border-[var(--line)]">
              {HERO_PROOFS.map(([value, label], idx) => (
                <div
                  key={label}
                  className="py-5 pr-6 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[var(--line)] [&:not(:first-child)]:pl-6"
                >
                  <dt className="text-[13px] text-[var(--muted)]">{label}</dt>
                  <dd className="mt-1.5 text-lg font-semibold tracking-tight text-[var(--fg)] sm:text-[23px]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 右：六层拓扑图 */}
          <div
            className="relative hidden min-h-[470px] place-items-center lg:grid"
            role="img"
            aria-label="六层企业智能系统拓扑：模型、Agent、数据、治理、工程和业务围绕企业智能中枢协同"
          >
            {/* 轨道环 */}
            <div
              className="orbit-ring absolute aspect-square w-[min(40vw,460px)] rounded-full border border-dashed border-[rgba(20,22,26,0.22)]"
              aria-hidden
            />
            {/* 中枢 */}
            <div className="relative z-10 flex h-[166px] w-[166px] flex-col items-center justify-center gap-1 rounded-full bg-[#111820] text-white shadow-[0_18px_55px_rgba(17,24,32,0.18)] ring-1 ring-[rgba(138,90,52,0.65)]">
              <span className="text-[15px] text-[#d9dfe7]">企业智能</span>
              <strong className="text-[30px] font-bold">中枢</strong>
              <small className="mt-2 text-[11px] tracking-[0.12em] text-[#c4cbd4]">
                <i className="mr-1.5 inline-block h-[7px] w-[7px] rounded-full bg-[#31b77a]" />
                SYSTEM ONLINE
              </small>
            </div>

            {/* 六节点 */}
            {TOPOLOGY_NODES.map((node) => (
              <div
                key={node.en}
                className={`absolute z-20 min-w-[112px] rounded-lg border border-[rgba(20,22,26,0.2)] bg-white/95 px-4 py-3 text-center shadow-[0_10px_28px_rgba(20,22,26,0.07)] ${node.className}`}
              >
                <b className="block text-[15px]">{node.label}</b>
                <small className="text-[11px] tracking-[0.1em] text-[var(--muted)]">
                  {node.en}
                </small>
              </div>
            ))}

            {/* 状态 */}
            <div className="absolute bottom-0 right-[10%] rounded-full border border-[var(--line)] bg-white px-3.5 py-2 text-xs text-[var(--muted)]">
              <i className="mr-1.5 inline-block h-[7px] w-[7px] rounded-full bg-[#31b77a]" />
              六层协同 · 持续运行
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
