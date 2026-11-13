import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "@/components/brand/Logo";
import { NAV_ITEMS, SITE } from "@/lib/nav";

// Footer：深色底，品牌 + 导航 + 版权（对齐参考 HTML）
export function Footer() {
  return (
    <footer className="mt-auto bg-[#11151b] text-white">
      <Container>
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 py-12 md:flex-row md:items-start">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-[#8d96a2]">
              把不确定的前沿模型能力，变成可治理、可交付、可持续运行的智能生产力。
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#c1c6ce]"
            aria-label="页脚导航"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-2 py-6 text-xs text-[#78818e] sm:flex-row sm:items-center">
          <span>© {SITE.copyrightYear} 未知领域 AI · UNREALM AI</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              浙ICP备2023040519号-2
            </a>
            <span aria-hidden>·</span>
            <span>让智能真正进入业务</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
