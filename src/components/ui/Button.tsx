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
  "inline-flex items-center justify-center gap-2 rounded-md font-medium shadow-sm transition-[transform,color,background-color,border-color,opacity,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

// 颜色用 inline style 直接钉死，避免任何 Tailwind 任意值类的解析风险
const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    backgroundColor: "#11100e",
    color: "#ffffff",
    boxShadow: "0 12px 28px -16px rgba(17,16,14,0.65)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#11100e",
  },
  outline: {
    backgroundColor: "#fffdfa",
    color: "#11100e",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ded8cd",
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
