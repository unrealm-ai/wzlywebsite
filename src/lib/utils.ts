import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// 类名合并工具：clsx 处理条件，twMerge 解决 Tailwind 冲突
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 日期格式化（中文 YYYY 年 MM 月 DD 日）
export function formatDateCN(value: string | Date): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`;
}

// ISO 日期（用于 <time dateTime>）
export function toISODate(value: string | Date): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return date.toISOString().split("T")[0];
}
