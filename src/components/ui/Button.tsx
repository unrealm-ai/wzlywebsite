import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

// 通用按钮基础样式（不含颜色）
const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-[color,background-color,border-color,opacity] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

// 颜色用 inline style 直接钉死，避免任何 Tailwind 任意值类的解析风险
const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#0a0a0a",
  },
  outline: {
    backgroundColor: "#ffffff",
    color: "#0a0a0a",
    border: "1px solid #e5e5e5",
  },
};

// 按钮 -- 原生 button
type ButtonProps = ButtonBaseProps & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  style,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, sizeClasses[size], className)}
      style={{ ...variantStyles[variant], ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}

// 链接按钮 -- Next.js Link
interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
  style?: CSSProperties;
  onClick?: ComponentPropsWithoutRef<"a">["onClick"];
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  style,
  href,
  external,
  onClick,
  children,
}: ButtonLinkProps) {
  const mergedClass = cn(baseClasses, sizeClasses[size], className);
  const mergedStyle: CSSProperties = { ...variantStyles[variant], ...style };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={mergedClass}
        style={mergedStyle}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={mergedClass}
      style={mergedStyle}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
