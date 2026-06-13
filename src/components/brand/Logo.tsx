import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  // 紧凑模式：仅显示符号；默认模式：符号 + 文字
  compact?: boolean;
}

// 极简字标 Logo：方形几何符号 + 中文公司名
// 设计语言：「未知」象征着边界（方框），中间的对角线代表探索方向
export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="未知领域 unrealm-ai 首页"
      className={cn(
        "inline-flex items-center gap-2.5 text-[var(--fg)]",
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="2"
          y="2"
          width="24"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 21L21 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="21" cy="7" r="2" fill="currentColor" />
      </svg>
      {!compact && (
        <span className="text-base font-semibold tracking-tight">
          未知领域
          <span className="ml-1 text-[var(--muted)] font-normal">
            unrealm-ai
          </span>
        </span>
      )}
    </Link>
  );
}
