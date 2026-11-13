import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  // 紧凑模式：仅显示符号；默认模式：符号 + 文字
  compact?: boolean;
}

// 品牌标识：2×2 蓝色网格符号（对齐参考 HTML 设计）
export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="未知领域 AI 首页"
      className={cn(
        "inline-flex items-center gap-3 text-[var(--fg)]",
        className,
      )}
    >
      <span
        className="grid h-[30px] w-[30px] shrink-0 grid-cols-2 grid-rows-2 gap-[3px]"
        style={{ transform: "skewY(-2deg)" }}
        aria-hidden
      >
        <i className="block rounded-[2px] bg-[var(--accent)]" />
        <i className="block rounded-[2px] bg-[var(--accent)] opacity-70" />
        <i className="block rounded-[2px] bg-[var(--accent)] opacity-85" />
        <i className="block rounded-[2px] bg-[var(--ink)]" />
      </span>
      {!compact && (
        <span className="text-[17px] font-bold tracking-tight">
          未知领域
          <span className="ml-1.5 font-medium text-[#777]">AI</span>
        </span>
      )}
    </Link>
  );
}
