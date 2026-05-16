import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

// 首页底部 CTA —— 大字标题 + 单一行动按钮
export function CTA() {
  return (
    <section className="py-32 sm:py-40 border-t border-[var(--line)]">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1]">
              准备好用 AI
              <br />
              重新定义业务边界？
            </h2>
            <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              不论你是想从 0 开始探索，还是已经规划好场景需要落地，
              我们都可以一起开始。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/contact" size="lg">
                开启商务合作
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/products" size="lg" variant="outline">
                浏览产品矩阵
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
