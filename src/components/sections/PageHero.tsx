import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

// 内页通用 Hero（比首页 Hero 更轻量）
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)]">
      <Container>
        <div className="pt-24 pb-16 sm:pt-32 sm:pb-20 max-w-4xl">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--brand)] mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--fg)]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
