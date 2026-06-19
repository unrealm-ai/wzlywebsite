import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CUSTOMER_COUNT } from "@/lib/trust";

const HERO_PROOFS = [
  ["10+", "行业方案"],
  [CUSTOMER_COUNT, "标杆客户"],
  ["99.9%", "服务可用性"],
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[70%_center] opacity-95 sm:bg-center"
        style={{ backgroundImage: "url('/visuals/boundary-field.webp')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(248,246,241,0.98) 0%, rgba(248,246,241,0.9) 42%, rgba(248,246,241,0.42) 100%), linear-gradient(180deg, rgba(248,246,241,0.18) 0%, var(--bg) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute left-0 top-24 hidden h-px w-[36vw] bg-gradient-to-r from-[var(--accent)] to-transparent md:block"
        aria-hidden
      />

      <Container>
        <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-10 sm:min-h-[560px] sm:py-12 lg:min-h-[calc(100svh-10rem)] lg:py-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden />
              Enterprise AI Boundary Lab
            </p>
            <h1 className="max-w-3xl text-[3.6rem] font-semibold leading-[0.92] tracking-normal text-[var(--fg)] sm:text-[5.8rem] lg:text-[6.7rem]">
              未知领域
              <span className="block text-[var(--accent)]">AI</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              把不确定的前沿模型能力，变成可治理、可交付、可持续运行的智能生产力。
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products" size="lg">
                了解产品与服务
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outline">
                商务合作
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>

            <dl className="mt-9 grid max-w-2xl grid-cols-3 border-y border-[var(--line)] text-sm sm:mt-10">
              {HERO_PROOFS.map(([value, label], idx) => (
                <div
                  key={label}
                  className="py-4 pr-4 sm:py-5 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[var(--line)] [&:not(:first-child)]:pl-4"
                >
                  <dt className="text-[11px] text-[var(--subtle)]">{label}</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-[var(--fg)]">
                    {value}
                  </dd>
                  {idx === 0 && (
                    <span className="mt-2 block h-0.5 w-8 bg-[var(--accent)]" />
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
