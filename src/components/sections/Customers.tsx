import { Container } from "@/components/layout/Container";
import { CUSTOMERS, CUSTOMER_COUNT } from "@/lib/trust";
import { cn } from "@/lib/utils";

const CUSTOMER_TITLE_LINES = [
  "和",
  "客",
  "户",
  "一",
  "起，",
  "把",
  "AI",
  "放",
  "进",
  "真",
  "实",
  "业",
  "务",
] as const;

export function Customers() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg)] py-16 sm:py-20"
      aria-labelledby="customers-heading"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)] lg:items-start">
          <div className="flex h-full flex-col py-2">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Customer Cases
              </p>
              <h2
                id="customers-heading"
                aria-label="和客户一起，把 AI 放进真实业务"
                className="flex flex-col items-start gap-0 text-3xl font-semibold leading-[0.95] text-[var(--fg)] sm:text-5xl"
              >
                {CUSTOMER_TITLE_LINES.map((line) => (
                  <span key={line} aria-hidden="true">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
          </div>

          <div className="h-full py-5">
            <div className="mb-5 flex justify-start">
              <div className="grid w-full max-w-sm grid-cols-2 border-y border-[var(--line)] lg:border-y-0">
                <div className="py-4 pr-6 lg:py-0">
                  <div className="font-mono text-4xl font-semibold text-[var(--fg)]">
                    {CUSTOMER_COUNT}
                  </div>
                  <div className="mt-2 text-xs text-[var(--subtle)]">
                    标杆客户
                  </div>
                  <div className="mt-4 h-0.5 w-9 bg-[var(--accent)]" />
                </div>
                <div className="border-l border-[var(--line)] py-4 pl-6 lg:py-0">
                  <div className="font-mono text-4xl font-semibold text-[var(--fg)]">
                    {CUSTOMER_COUNT}
                  </div>
                  <div className="mt-2 text-xs text-[var(--subtle)]">
                    场景方向
                  </div>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2">
              {CUSTOMERS.map((customer, idx) => (
                <li
                  key={customer.name}
                  className={cn(
                    "flex min-h-52 flex-col justify-between p-6 sm:p-7",
                    idx !== CUSTOMERS.length - 1 &&
                      "border-b border-[var(--line)]",
                    idx < CUSTOMERS.length - 2
                      ? "md:border-b md:border-[var(--line)]"
                      : "md:border-b-0",
                    idx % 2 === 0
                      ? "md:border-r md:border-[var(--line)]"
                      : "md:border-r-0",
                  )}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs text-[var(--accent)]">
                        C0{idx + 1}
                      </span>
                      <span className="border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">
                        {customer.field}
                      </span>
                    </div>
                    <div className="mt-10">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none text-[var(--fg)] sm:text-3xl">
                        {customer.name}
                      </h3>
                      <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                        {customer.intro}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 h-px w-12 bg-[var(--accent)]" />
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              我们服务制造、云与算力、智能产品、内容与交互等真实业务场景，把模型能力、工程交付和生产运行连接起来。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
