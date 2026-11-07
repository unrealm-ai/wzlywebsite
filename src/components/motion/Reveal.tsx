"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  // 视口出现 30% 即触发
  once?: boolean;
  as?: "div" | "section" | "article" | "header";
}

const variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 滚动揭示包装器：克制的位移+淡入
export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      // 正文默认可见，避免脚本或视口观察器未启动时整块内容消失。
      initial={false}
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
