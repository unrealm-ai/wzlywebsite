import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  // 紧凑模式：仅显示符号；默认模式：符号 + 文字
  compact?: boolean;
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="未知领域 AI 首页"
      className={cn(
        "inline-flex items-center gap-2.5 text-[var(--fg)]",
        className,
      )}
    >
      <Image
        src="/brand/unknownfield-logo.png"
        alt=""
        width={32}
        height={32}
        priority
        className="h-8 w-8 shrink-0 object-contain"
        aria-hidden
      />
      {!compact && (
        <span className="text-base font-semibold">
          未知领域
          <span className="ml-1 text-[var(--muted)] font-normal">AI</span>
        </span>
      )}
    </Link>
  );
}
