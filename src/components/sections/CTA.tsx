import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] py-20 text-white sm:py-28">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('/visuals/boundary-field.webp')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/92 to-[var(--ink)]/58"
        aria-hidden
      />
      <Container>
        <Reveal>
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-light)]">
                Start The Next Boundary
              </p>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
                让 AI 进入真实业务，
                <span className="block text-[var(--accent-light)]">
                  从一个明确场景开始。
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-relaxed text-white/62">
                不论你是想从 0 开始探索，还是已经规划好场景需要落地，我们都可以一起把第一步做扎实。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  style={{ backgroundColor: "#f8f6f1", color: "#11100e" }}
                >
                  开启商务合作
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
                <ButtonLink
                  href="/products"
                  size="lg"
                  variant="outline"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "rgba(248,246,241,0.24)",
                    color: "#f8f6f1",
                  }}
                >
                  浏览产品矩阵
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
