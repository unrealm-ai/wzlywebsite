"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

// 吸顶 Header：滚动后增加背景与边框，提升内容对比度
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-out",
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--bg)] shadow-[0_10px_30px_-28px_rgba(17,16,14,0.8)] backdrop-blur-md"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* 右侧：导航 + CTA + 移动菜单按钮，整体贴右 */}
          <div className="flex items-center gap-8">
            <nav
              className="hidden md:flex items-center gap-7"
              aria-label="主导航"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200",
                    isActive(item.href)
                      ? "bg-[var(--surface)] text-[var(--fg)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--fg)]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <ButtonLink href="/contact" size="sm" variant="primary">
                联系我们
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface-elevated)] transition-colors hover:bg-[var(--surface)] md:hidden"
              aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* 移动端展开菜单 */}
        {mobileOpen && (
          <div
            className="border-t border-[var(--line)] bg-[var(--bg)] py-4 backdrop-blur md:hidden"
            id="mobile-menu"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="主导航（移动端）"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-2 py-3 text-base rounded-md transition-colors",
                    isActive(item.href)
                      ? "text-[var(--fg)] bg-[var(--surface)]"
                      : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)]",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-[var(--line)]">
                <ButtonLink
                  href="/contact"
                  size="md"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  联系我们
                </ButtonLink>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
