import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  // 容器宽度策略：默认 page (1280) / content (768) / wide (全宽)
  width?: "page" | "content" | "wide";
}

// 统一页面外边距与最大宽度的容器
export function Container({
  className,
  width = "page",
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        width === "page" && "max-w-[1280px]",
        width === "content" && "max-w-[768px]",
        width === "wide" && "max-w-none",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
