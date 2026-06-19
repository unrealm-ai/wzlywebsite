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
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal>
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Customer Cases
              </p>
              <h2
                id="customers-heading"
                className="max-w-xl text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-5xl"
              >
                和客户一起，把 AI 放进真实业务
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)]">
                我们服务制造、云与算力、智能产品、内容与交互等真实业务场景，把模型能力、工程交付和生产运行连接起来。
              </p>

              <div className="mt-10 max-w-sm border-y border-[var(--line)] py-5">
                <div>
                  <div className="font-mono text-3xl font-semibold text-[var(--fg)]">
                    {CUSTOMER_COUNT}
                  </div>
                  <div className="mt-2 text-xs text-[var(--subtle)]">
                    标杆客户
                  </div>
                  <div className="mt-4 h-0.5 w-9 bg-[var(--accent)]" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="border-y border-[var(--line)]">
                <div className="grid gap-4 py-5 sm:grid-cols-[128px_1fr]">
                  <div className="text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">
                    Clients
                  </div>
                  <ul className="grid grid-cols-2 gap-px bg-[var(--line)] xl:grid-cols-4">
                    {CUSTOMERS.map((customer, idx) => (
                      <li
                        key={customer.name}
                        className="min-h-64 bg-[var(--surface-elevated)] p-5"
                      >
                        <div className="font-mono text-xs text-[var(--accent)]">
                          C0{idx + 1}
                        </div>
                        <div className="mt-8 break-words text-2xl font-semibold leading-tight text-[var(--fg)]">
                          {customer.name}
                        </div>
                        <div className="mt-4 inline-flex border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">
                          {customer.field}
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                          {customer.intro}
                        </p>
                        <div className="mt-6 h-px w-10 bg-[var(--accent)]" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
