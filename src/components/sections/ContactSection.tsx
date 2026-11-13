"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/nav";

// 商务联系 —— 联系方式 + 表单（对齐参考 HTML）
export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* 忽略剪贴板失败 */
    }
  };

  return (
    <section className="bg-[var(--paper-2)]">
      <Container>
        <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* 左：联系方式 */}
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                06 / Let&apos;s Work Together
              </p>
              <h2 className="text-4xl font-semibold leading-[1.15] sm:text-5xl">
                一起开启
                <br />
                AI 落地之旅
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
                无论你是想从 0 开始探索，还是已经规划好场景需要落地，我们都可以一起开始。
              </p>

              <div className="mt-10 grid gap-3">
                <div className="rounded-xl border border-[var(--line)] bg-white/70 p-4">
                  <small className="mb-1.5 block text-[13px] text-[var(--muted)]">
                    商务邮箱
                  </small>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm font-semibold text-[var(--fg)]"
                    >
                      {SITE.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="rounded-md border border-[var(--line)] bg-white px-2 py-1 text-xs text-[#333] transition-colors hover:border-[var(--accent)]"
                    >
                      {copied ? "已复制" : "复制邮箱"}
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--line)] bg-white/70 p-4">
                  <small className="mb-1.5 block text-[13px] text-[var(--muted)]">
                    公司地址
                  </small>
                  <strong className="text-sm font-semibold text-[var(--fg)]">
                    中国 · 杭州
                  </strong>
                </div>

                <div className="rounded-xl border border-[var(--line)] bg-white/70 p-4">
                  <small className="mb-1.5 block text-[13px] text-[var(--muted)]">
                    合作方向
                  </small>
                  <strong className="text-sm font-semibold text-[var(--fg)]">
                    产品咨询 · 企业方案 · 技术合作
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 右：表单 */}
          <Reveal delay={0.08}>
            <form
              className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-name" className="text-sm font-semibold">
                    姓名 *
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    placeholder="请输入您的姓名"
                    required
                    className="rounded-md border border-[#dedfd8] bg-[#fbfbf9] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(37,60,255,0.08)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-company" className="text-sm font-semibold">
                    公司
                  </label>
                  <input
                    id="cf-company"
                    name="company"
                    placeholder="请输入公司名称"
                    className="rounded-md border border-[#dedfd8] bg-[#fbfbf9] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(37,60,255,0.08)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="cf-email" className="text-sm font-semibold">
                    工作邮箱 *
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="rounded-md border border-[#dedfd8] bg-[#fbfbf9] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(37,60,255,0.08)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="cf-topic" className="text-sm font-semibold">
                    合作方向
                  </label>
                  <select
                    id="cf-topic"
                    name="topic"
                    className="rounded-md border border-[#dedfd8] bg-[#fbfbf9] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(37,60,255,0.08)]"
                  >
                    <option>企业 AI 解决方案</option>
                    <option>Agent Cloud</option>
                    <option>Identale</option>
                    <option>Atlas 2.0</option>
                    <option>技术合作</option>
                    <option>其他需求</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="cf-message" className="text-sm font-semibold">
                    需求描述 *
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="请简要描述您的业务场景、目标或希望解决的问题..."
                    required
                    className="resize-y rounded-md border border-[#dedfd8] bg-[#fbfbf9] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(37,60,255,0.08)]"
                  />
                </div>
              </div>

              <p className="mt-4 text-[13px] text-[var(--muted)]">
                提交后将打开本地邮件客户端，由您确认并发送邮件。当前静态页面尚未连接在线表单服务。
              </p>

              <button
                type="submit"
                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--ink)] px-5 py-3.5 text-[13px] font-semibold text-white transition hover:bg-[var(--accent)]"
              >
                发送合作需求
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
