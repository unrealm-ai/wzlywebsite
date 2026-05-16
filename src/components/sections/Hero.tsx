import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { HeroShowcase } from "./HeroShowcase";

// 首页 Hero —— 左侧标题与 CTA（5 栏），右侧产品 Showcase（7 栏）
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="pt-20 pb-20 sm:pt-28 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* 左侧文字与按钮 */}
            <div className="lg:col-span-5">
              <Reveal>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--fg)]">
                  探索 <span className="text-[var(--muted)]">未知</span>
                  <br />
                  定义智能的{" "}
                  <span className="text-[var(--brand)]">边界</span>
                </h1>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="mt-6 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
                  专注于大模型与智能体技术的 AI 公司，将前沿研究转化为
                  企业可落地的产品。
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <ButtonLink href="/products" size="lg">
                    了解产品与服务
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </ButtonLink>
                  <ButtonLink href="/contact" size="lg" variant="outline">
                    商务合作
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* 右侧 Showcase —— 仅在 lg+ 显示 */}
            <div className="hidden lg:block lg:col-span-7">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
