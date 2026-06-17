import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

// 内页通用 Hero（比首页 Hero 更轻量）
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
      <div
        className="absolute inset-x-0 top-0 h-full"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, var(--surface) 0%, rgba(248,246,241,0) 78%)",
        }}
      />
      <Container>
        <div className="relative max-w-4xl pt-24 pb-16 sm:pt-32 sm:pb-20">
          {eyebrow && (
            <p className="text-xs font-medium uppercase text-[var(--brand)] mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold leading-[1.05] text-[var(--fg)] sm:text-6xl">
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
