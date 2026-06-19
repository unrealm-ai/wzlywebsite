import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CUSTOMERS, CUSTOMER_COUNT } from "@/lib/trust";

export function Customers() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-28"
      aria-labelledby="customers-heading"
    >
      <Container>
        <div className="grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-12 lg:items-end">
          <Reveal>
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Customer Cases
              </p>
              <h2
                id="customers-heading"
                className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-5xl"
              >
                和客户一起，把 AI 放进真实业务
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6 sm:grid-cols-[120px_1fr] lg:col-span-5">
              <div className="border-y border-[var(--line)] py-5">
                <div className="font-mono text-3xl font-semibold text-[var(--fg)]">
                  {CUSTOMER_COUNT}
                </div>
                <div className="mt-2 text-xs text-[var(--subtle)]">
                  标杆客户
                </div>
                <div className="mt-4 h-0.5 w-9 bg-[var(--accent)]" />
              </div>
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
                我们服务制造、云与算力、智能产品、内容与交互等真实业务场景，把模型能力、工程交付和生产运行连接起来。
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 border-y border-[var(--line)] py-5">
            <div className="grid gap-5 lg:grid-cols-[128px_1fr]">
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">
                Clients
              </div>
              <ul className="grid grid-cols-1 gap-px bg-[var(--line)] md:grid-cols-2">
                {CUSTOMERS.map((customer, idx) => (
                  <li
                    key={customer.name}
                    className="grid min-h-56 gap-8 bg-[var(--surface-elevated)] p-6 sm:grid-cols-[84px_1fr] sm:p-7"
                  >
                    <div className="font-mono text-xs text-[var(--accent)]">
                      C0{idx + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="whitespace-nowrap text-3xl font-semibold leading-none text-[var(--fg)]">
                          {customer.name}
                        </h3>
                        <span className="border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">
                          {customer.field}
                        </span>
                      </div>
                      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                        {customer.intro}
                      </p>
                      <div className="mt-8 h-px w-12 bg-[var(--accent)]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
