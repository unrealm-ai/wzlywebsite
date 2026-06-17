import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  // 上标小字（可选），如 "我们的能力"
  eyebrow?: string;
  // 主标题
  title: string;
  // 描述（可选）
  description?: string;
  // 对齐方式，默认左对齐（极简风偏好）
  align?: "left" | "center";
  className?: string;
}

// 通用区块标题组件，统一各 section 的标题层级
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase text-[var(--brand)] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[2rem] sm:text-[2.5rem] font-semibold leading-tight text-[var(--fg)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
