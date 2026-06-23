import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/nav";

export const metadata = buildPageMetadata({
  title: "商务联系",
  description:
    "了解未知领域如何帮助你的团队落地 AI 与智能体技术 —— 商务合作、技术咨询、产品演示均可联系我们。",
  path: "/contact",
});

const CONTACTS = [
  {
    icon: Mail,
    label: "邮箱",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MessageSquare,
    label: "商务咨询",
    value: "提交合作需求",
    href: "#contact-form",
  },
  {
    icon: MapPin,
    label: "地址",
    value: "中国 · 杭州",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="商务联系"
        title="一起开启 AI 落地之旅"
        description="不论你是想从 0 开始探索，还是已经规划好场景需要落地，我们都可以一起开始。"
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {CONTACTS.map((c, idx) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <Icon
                    className="h-6 w-6 text-[var(--fg)]"
                    aria-hidden
                    strokeWidth={1.5}
                  />
                  <div className="mt-5 text-xs uppercase text-[var(--subtle)]">
                    {c.label}
                  </div>
                  <div className="mt-1 text-base font-medium text-[var(--fg)]">
                    {c.value}
                  </div>
                </>
              );
              return (
                <Reveal key={c.label} delay={idx * 0.06} className="h-full">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="hairline-card block h-full rounded-lg p-7 transition-transform duration-300 hover:-translate-y-1"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="hairline-card block h-full rounded-lg p-7">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div id="contact-form" className="grid grid-cols-1 md:grid-cols-12 gap-12 scroll-mt-24">
            <Reveal className="md:col-span-5">
              <div>
                <div className="mb-7 h-1 w-16 rounded-full bg-[var(--brand)]" />
                <h2 className="text-3xl font-semibold">
                  发送合作需求
                </h2>
                <p className="mt-5 text-[var(--muted)] leading-relaxed">
                  填写下方表单，我们会在 1 个工作日内与你取得联系。
                </p>
                <p className="mt-3 text-xs text-[var(--subtle)]">
                  表单提交逻辑将在下一阶段接入；目前可作为视觉演示。
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="md:col-span-7">
              <form className="hairline-card space-y-5 rounded-lg p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      姓名
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="请填写您的姓名"
                      className="h-11 w-full rounded-md border border-[var(--line)] bg-white px-4 text-sm transition-colors focus:border-[var(--fg)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      公司
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="请填写公司名称"
                      className="h-11 w-full rounded-md border border-[var(--line)] bg-white px-4 text-sm transition-colors focus:border-[var(--fg)] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    工作邮箱
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-md border border-[var(--line)] bg-white px-4 text-sm transition-colors focus:border-[var(--fg)] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    合作需求
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="请简要描述你的应用场景与目标..."
                    className="w-full resize-y rounded-md border border-[var(--line)] bg-white px-4 py-3 text-sm transition-colors focus:border-[var(--fg)] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--fg)] px-6 text-sm font-medium text-[var(--bg)] shadow-sm transition-[opacity,transform,box-shadow] hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
                >
                  提交需求
                </button>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
