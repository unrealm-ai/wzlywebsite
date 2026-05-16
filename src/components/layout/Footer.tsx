import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "@/components/brand/Logo";
import { NAV_ITEMS, SITE } from "@/lib/nav";

// 极简 Footer：三栏（品牌 / 导航 / 联络），底部版权
export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          {/* 品牌区 */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">
              {SITE.tagline} —— 专注于大模型与智能体技术，
              为企业提供下一代智能产品与服务。
            </p>
          </div>

          {/* 导航 */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--subtle)] mb-4">
              站点导航
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联络 */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--subtle)] mb-4">
              联络
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                >
                  商务合作
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--line)] py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-[var(--subtle)]">
            © {SITE.copyrightYear} {SITE.name} Wzly. All rights reserved.
          </p>
          <p className="text-xs text-[var(--subtle)]">
            Crafted with care · 探索未知，定义边界
          </p>
        </div>
      </Container>
    </footer>
  );
}
