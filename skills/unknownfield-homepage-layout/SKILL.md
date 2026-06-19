---
name: unknownfield-homepage-layout
description: Use when editing, redesigning, reviewing, or implementing the UnknownField/未知领域 homepage visual layout in this repository, especially homepage section layout, section titles, product/customer/capability/news/CTA blocks, or requests that mention left-right layout, vertical titles, left-aligned content, removing dividers, black-white-light-orange brand styling, or preserving unchanged homepage content.
---

# UnknownField Homepage Layout

## Core Rule

Apply one consistent homepage section pattern:

- Use a two-column layout for homepage content sections.
- Put the section title in the left column.
- Render the main title vertically, one character or intentional token per line.
- Put section content in the right column.
- Keep right-side content left-aligned.
- Preserve existing content, data sources, links, routes, anchors, metadata, and component boundaries unless the user explicitly asks to change them.

This skill governs homepage sections such as capability path, product matrix, customer cases, production proof, news, and CTA. Do not apply it to global Header/Footer unless the user explicitly asks.

## Layout Pattern

Prefer this structure for homepage sections:

```tsx
<section className="relative overflow-hidden bg-[var(--bg)] py-16 sm:py-20">
  <Container>
    <div className="grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)] lg:items-start">
      <div className="py-2">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Section Label
        </p>
        <h2
          aria-label="完整中文标题"
          className="flex flex-col items-start gap-0 text-3xl font-semibold leading-[0.95] text-[var(--fg)] sm:text-5xl"
        >
          {TITLE_LINES.map((line) => (
            <span key={line} aria-hidden="true">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <div className="text-left">{/* section content */}</div>
    </div>
  </Container>
</section>
```

Use `120px` for compact title columns. Use up to `160px` only when the left column needs a CTA or a short secondary control. Avoid wide left columns that push the content to the right.

## Vertical Title Rules

- Split Chinese titles into an explicit `const TITLE_LINES = [...] as const`.
- Put one Chinese character per line.
- Keep short Latin tokens such as `AI` as one token when that reads better.
- Keep punctuation attached to its preceding phrase when requested, such as `起，`.
- Use `aria-label` on the heading with the full readable title.
- Set each visual token `aria-hidden="true"`.
- Do not use CSS `writing-mode`, rotation, or letter-stacked text hacks.
- Do not shrink desktop title size with `lg:text-4xl` if the section is meant to match customer-case sizing; use `text-3xl sm:text-5xl`.

## Alignment And Spacing

- Right-side content must start at the left edge of its content column.
- Avoid `lg:text-right` in homepage section bodies unless explicitly requested.
- Use `gap-6` between left and right columns by default.
- Avoid empty title bands, large unused whitespace, or content that starts far to the right.
- Keep cards, rows, and stats left-aligned inside the right column.
- For dense information maps, prefer table-like rows, light borders, and compact spacing over decorative cards.
- Keep right-side homepage content transparent by default, including product maps, customer cases, news lists, and similar repeated content.
- Do not use filled surfaces such as `bg-[var(--surface-elevated)]` on right-side containers or repeated items unless the user explicitly asks for a filled card treatment.

## Divider Rules

- Do not add top/bottom horizontal divider lines around the left title column unless explicitly requested.
- Remove standalone title-section divider lines when they create empty bands.
- Keep only structural separators that clarify the right-side content, such as row dividers inside product/customer lists.
- When converting filled cards to transparent content, replace `gap-px` plus parent background separators with explicit borders on the transparent items.
- Use light neutral lines and淡橙 accent only as a small signal, not as a large color block.

## Motion

Homepage content should be stable and visible. If `Reveal` causes blank sections, delayed visibility, hash-navigation issues, or confusing screenshots, remove the `Reveal` wrapper from that section instead of relying on animation.

## Implementation Discipline

- Read the existing section component first.
- Make the smallest scoped change that satisfies the requested layout issue.
- Do not change product/customer/news data, copy, order, links, metadata, or routes unless asked.
- Continue using existing project helpers such as `Container`, `PRODUCTS`, and shared label functions.
- After code edits, run `tsc --noEmit`, `eslint`, and `next build` when feasible.
- Visually check desktop and mobile when the change affects layout.
